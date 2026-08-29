import Image from "next/image";
import Link from "next/link";
import { formatBlogDate, type BlogPost } from "@/lib/wordpress";

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link href={`/blogs/${post.slug}`} className={`blog-card${featured ? " featured" : ""}`}>
      <div className="blog-card-image">
        {post.imageUrl ? (
          <Image
            src={post.imageUrl}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 860px) 100vw, 380px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="blog-card-image-fallback" aria-hidden="true">
            <span>Trine</span>
          </div>
        )}
      </div>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          {post.categoryName} <span aria-hidden="true">&middot;</span> {formatBlogDate(post.date)}
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="blog-card-readmore">Read the post <span className="arrow">→</span></span>
      </div>
    </Link>
  );
}
