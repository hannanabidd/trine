const WP_BASE_URL = "https://coral-hamster-623628.hostingersite.com";
const WP_API = `${WP_BASE_URL}/wp-json/wp/v2`;

// WordPress ships a default "Hello world!" post on every fresh install.
// It doesn't count as real content, so it's filtered out everywhere.
const WP_DEFAULT_POST_SLUG = "hello-world";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  date: string;
  categoryName: string;
  categorySlug: string;
  imageUrl: string | null;
  imageAlt: string;
  authorName: string;
};

export type BlogCategory = {
  id: number | string;
  name: string;
  slug: string;
};

export type BlogListing = {
  posts: BlogPost[];
  categories: BlogCategory[];
  currentPage: number;
  totalPages: number;
  usingDummy: boolean;
};

const DUMMY_CATEGORY: BlogCategory = {
  id: "dummy-identity-mindset",
  name: "Identity & Mindset",
  slug: "identity-mindset",
};

const DUMMY_POST: BlogPost = {
  id: "dummy-1",
  slug: "midlife-isnt-a-crisis-its-an-invitation",
  title: "Midlife Isn't a Crisis. It's an Invitation.",
  excerpt:
    "You don't need a convertible in midlife. You need a kitchen table, a hard truth, and someone who's actually done it. Here's what nobody tells you about starting over.",
  contentHtml: `
    <p>Somewhere around midlife, a lot of us hit the same wall. The career worked. The family is good. On paper, everything is fine. And underneath it, something feels off, and you can't quite name what.</p>
    <p>Here's what I've learned, both from my own rebuild and from every client who's sat across from me since: that feeling isn't a crisis. It's information.</p>
    <h2>The questions worth asking</h2>
    <p>Not "what's wrong with me," but "what have I been performing for so long that I forgot it was a performance." Not "how do I fix this," but "what would it look like to actually listen to what my body and my life have been trying to tell me."</p>
    <p>You don't need a dramatic reinvention. You need a kitchen table, a hard truth, and someone who's actually done this before, sitting across from you while you do it too.</p>
    <p>That's the whole premise of Trine. More soon.</p>
  `,
  date: new Date().toISOString(),
  categoryName: DUMMY_CATEGORY.name,
  categorySlug: DUMMY_CATEGORY.slug,
  imageUrl: "/images/tine-img.jpg",
  imageAlt: "Katrina Gall sitting on red rock in the outback at sunset",
  authorName: "Katrina Gall",
};

type WPRendered = { rendered: string };

type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: WPRendered;
  excerpt: WPRendered;
  content: WPRendered;
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string; alt_text?: string }[];
    "wp:term"?: { id: number; name: string; slug: string; taxonomy: string }[][];
    author?: { name: string }[];
  };
};

type WPCategory = {
  id: number;
  name: string;
  slug: string;
  count: number;
};

function decodeHtmlEntities(input: string): string {
  return input
    .replace(/&#8217;|&#039;|&#39;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "-")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
}

function stripTags(html: string): string {
  return decodeHtmlEntities(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ")).trim();
}

async function safeFetchJSON<T>(url: string): Promise<{ data: T | null; totalPages: number }> {
  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return { data: null, totalPages: 0 };
    const data = (await res.json()) as T;
    const totalPages = Number(res.headers.get("X-WP-TotalPages") || "1");
    return { data, totalPages };
  } catch {
    return { data: null, totalPages: 0 };
  }
}

function mapWPCategory(c: WPCategory): BlogCategory {
  return { id: c.id, name: decodeHtmlEntities(c.name), slug: c.slug };
}

function mapWPPost(p: WPPost): BlogPost {
  const media = p._embedded?.["wp:featuredmedia"]?.[0];
  const terms = p._embedded?.["wp:term"]?.find((group) => group?.[0]?.taxonomy === "category");
  const category = terms?.[0];
  const author = p._embedded?.author?.[0];
  const title = decodeHtmlEntities(p.title?.rendered || "Untitled");

  return {
    id: String(p.id),
    slug: p.slug,
    title,
    excerpt: stripTags(p.excerpt?.rendered || ""),
    contentHtml: p.content?.rendered || "",
    date: p.date,
    categoryName: category ? decodeHtmlEntities(category.name) : "Blog",
    categorySlug: category?.slug || "blog",
    imageUrl: media?.source_url || null,
    imageAlt: media?.alt_text || title,
    authorName: author?.name || "Katrina Gall",
  };
}

async function fetchRealPostCount(): Promise<number> {
  const { data } = await safeFetchJSON<WPPost[]>(`${WP_API}/posts?per_page=100&_fields=id,slug`);
  if (!data) return 0;
  return data.filter((p) => p.slug !== WP_DEFAULT_POST_SLUG).length;
}

export async function getCategories(): Promise<BlogCategory[]> {
  const { data } = await safeFetchJSON<WPCategory[]>(`${WP_API}/categories?per_page=100`);
  if (!data) return [];
  return data.filter((c) => c.slug !== "uncategorized").map(mapWPCategory);
}

export async function getBlogListing({
  search = "",
  categorySlug = "",
  page = 1,
}: {
  search?: string;
  categorySlug?: string;
  page?: number;
}): Promise<BlogListing> {
  const realPostCount = await fetchRealPostCount();

  if (realPostCount === 0) {
    return {
      posts: [DUMMY_POST],
      categories: [DUMMY_CATEGORY],
      currentPage: 1,
      totalPages: 1,
      usingDummy: true,
    };
  }

  const categories = await getCategories();
  const matchedCategory = categorySlug ? categories.find((c) => c.slug === categorySlug) : undefined;

  const params = new URLSearchParams();
  params.set("_embed", "1");
  params.set("per_page", "9");
  params.set("page", String(Math.max(1, page)));
  if (search) params.set("search", search);
  if (matchedCategory) params.set("categories", String(matchedCategory.id));

  const { data, totalPages } = await safeFetchJSON<WPPost[]>(`${WP_API}/posts?${params.toString()}`);
  const posts = (data || [])
    .filter((p) => p.slug !== WP_DEFAULT_POST_SLUG)
    .map(mapWPPost);

  return {
    posts,
    categories,
    currentPage: Math.max(1, page),
    totalPages: Math.max(1, totalPages),
    usingDummy: false,
  };
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (slug === DUMMY_POST.slug) {
    const realPostCount = await fetchRealPostCount();
    return realPostCount === 0 ? DUMMY_POST : null;
  }

  if (slug === WP_DEFAULT_POST_SLUG) return null;

  const params = new URLSearchParams({ slug, _embed: "1" });
  const { data } = await safeFetchJSON<WPPost[]>(`${WP_API}/posts?${params.toString()}`);
  const post = data?.[0];
  return post ? mapWPPost(post) : null;
}

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
