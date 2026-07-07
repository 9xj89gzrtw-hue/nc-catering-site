import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import Breadcrumbs from "@/components/common/Breadcrumbs";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Статья не найдена" };
  return {
    title: `${post.title} — Nilov Catering`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <div className="bg-primary py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            {post.title}
          </h1>
          <p className="text-primary-foreground/70">
            {post.author} &middot;{" "}
            {new Date(post.date).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Блог", href: "/blog" }, { label: post.title }]} />
      </div>

      {/* Article */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Featured image */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>

            {/* Category badge + meta */}
            <div className="flex items-center gap-3 mb-8 text-sm text-muted-foreground">
              <span className="bg-primary/10 text-primary font-medium px-2.5 py-1 rounded-md text-xs">
                {post.category}
              </span>
              <span>Автор: {post.author}</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>

            {/* Article body */}
            <div
              className="prose prose-lg max-w-none
                [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
                [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
                [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-6
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_ul]:mb-6
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-muted-foreground [&_ol]:mb-6
                [&_li]:mb-2
                [&_strong]:text-foreground [&_strong]:font-semibold
                [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4
                [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link
                href="/blog"
                className="text-primary hover:underline font-medium transition-colors"
              >
                &larr; Вернуться к блогу
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}