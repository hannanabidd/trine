import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BlogCard from "@/components/BlogCard";
import { getBlogListing } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blogs · Trine",
  description: "Notes on identity, habits, and rebuilding a life that actually feels like yours, from Katrina Gall.",
};

function buildQuery(params: { category?: string; q?: string; page?: number }) {
  const usp = new URLSearchParams();
  if (params.category) usp.set("category", params.category);
  if (params.q) usp.set("q", params.q);
  if (params.page && params.page > 1) usp.set("page", String(params.page));
  const qs = usp.toString();
  return qs ? `/blogs?${qs}` : "/blogs";
}

export default async function BlogPage(props: PageProps<"/blogs">) {
  const searchParams = await props.searchParams;
  const q = (Array.isArray(searchParams.q) ? searchParams.q[0] : searchParams.q || "").trim();
  const category = (Array.isArray(searchParams.category) ? searchParams.category[0] : searchParams.category || "").trim();
  const page = Math.max(1, Number(Array.isArray(searchParams.page) ? searchParams.page[0] : searchParams.page) || 1);

  const { posts, categories, currentPage, totalPages, usingDummy } = await getBlogListing({
    search: q,
    categorySlug: category,
    page,
  });

  return (
    <>
      <SiteNav />

      <section className="page-hero">
        <div className="wrap-narrow">
          <div className="eyebrow">The blogs</div>
          <h1>Notes on the work.</h1>
          <p>Honest, unfiltered thoughts on identity, habits, and rebuilding a life that actually feels like yours.</p>
        </div>
      </section>

      <section className="blog-controls">
        <div className="wrap blog-controls-row">
          <div className="blog-categories">
            <Link href={buildQuery({ q })} className={!category ? "active" : undefined}>
              All
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={buildQuery({ category: c.slug, q })}
                className={category === c.slug ? "active" : undefined}
              >
                {c.name}
              </Link>
            ))}
          </div>
          <form action="/blogs" method="GET" className="blog-search">
            {category && <input type="hidden" name="category" value={category} />}
            <input type="search" name="q" placeholder="Search the blogs" defaultValue={q} aria-label="Search the blogs" />
            <button type="submit" className="cta gold">Search</button>
          </form>
        </div>
      </section>

      <section className="blog-layout">
        <div className="wrap blog-layout-grid">
          <div className="blog-grid-col">
            {posts.length === 0 ? (
              <p className="blog-empty">
                No posts found{q ? ` for “${q}”` : ""}. Try a different search or category.
              </p>
            ) : (
              <div className={`blog-grid${posts.length === 1 ? " single" : ""}`}>
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} featured={posts.length === 1} />
                ))}
              </div>
            )}
            {!usingDummy && totalPages > 1 && (
              <div className="blog-pagination">
                {currentPage > 1 ? (
                  <Link href={buildQuery({ category, q, page: currentPage - 1 })}>← Newer</Link>
                ) : (
                  <span className="disabled">← Newer</span>
                )}
                <span className="blog-pagination-count">Page {currentPage} of {totalPages}</span>
                {currentPage < totalPages ? (
                  <Link href={buildQuery({ category, q, page: currentPage + 1 })}>Older →</Link>
                ) : (
                  <span className="disabled">Older →</span>
                )}
              </div>
            )}
          </div>

          <aside className="blog-sidebar">
            <div className="author-card">
              <div className="author-photo">
                <Image
                  src="/images/trine-picture.jpg"
                  alt="Katrina Gall, founder of Trine"
                  fill
                  sizes="280px"
                  style={{ objectFit: "cover", objectPosition: "center 25%" }}
                />
              </div>
              <h3>Katrina Gall</h3>
              <div className="author-role">Chef &middot; Registered Nutritionist &middot; Midlife Identity Coach</div>
              <p>
                Built from lived experience, not theory. Katrina writes about the honest, unglamorous work of
                rebuilding a life that actually feels like yours, one habit at a time.
              </p>
              <Link href="/about" className="cta ghost">More about Katrina <span className="arrow">→</span></Link>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
