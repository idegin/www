import Image from "next/image";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post, priority }: { post: PostMeta; priority?: boolean }) {
  return (
    <article className="group h-full">
      <Link
        href={`/resources/${post.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-cobalt-300 hover:shadow-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-500"
      >
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.thumbnailAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={priority}
            className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-mono text-caption font-medium uppercase tracking-wider text-cobalt-700 backdrop-blur">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-subheading font-display font-semibold text-ink transition-colors group-hover:text-cobalt-600">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-small text-muted">{post.excerpt}</p>
          <div className="mt-auto flex items-center gap-3 pt-5 text-caption text-muted">
            <span>{post.formattedDate}</span>
            <span aria-hidden>•</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
