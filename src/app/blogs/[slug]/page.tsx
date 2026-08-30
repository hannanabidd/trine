import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { formatBlogDate, getPostBySlug } from "@/lib/wordpress";

export async function generateMetadata(props: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Blogs · Trine" };
  return {
    title: `${post.title} · Trine`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: PageProps<"/blogs/[slug]">) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <SiteNav />

      <article className="blog-detail">
        <div className="wrap-narrow">
          <Link href="/blogs" className="backlink">← Back to the blogs</Link>
          <div className="eyebrow">{post.categoryName}</div>
          <h1>{post.title}</h1>
          <div className="blog-detail-meta">
            {post.authorName} <span aria-hidden="true">&middot;</span> {formatBlogDate(post.date)}
          </div>
        </div>

        {post.imageUrl && (
          <div className="blog-detail-image">
            <Image src={post.imageUrl} alt={post.imageAlt} fill sizes="100vw" priority style={{ objectFit: "cover" }} />
          </div>
        )}

        <div className="wrap-narrow">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          <div className="blog-detail-footer">
            <Link href="/blogs" className="cta ghost">← Back to all posts</Link>
            <p style={{ marginTop: "26px", fontSize: "15px", color: "var(--text-soft)" }}>
              Curious what working with Katrina actually looks like?{" "}
              <Link href="/about" style={{ color: "var(--sage-700)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Read her story
              </Link>{" "}
              or{" "}
              <Link href="/contact" style={{ color: "var(--sage-700)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      <SiteFooter />
    </>
  );
}
