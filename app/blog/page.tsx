import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata: Metadata = {
  title: "Блог — кейтеринг Санкт-Петербург",
  description:
    "Статьи о кейтеринге, тренды выездного питания, советы по организации мероприятий от Nilov Catering.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primary py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Блог
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Тренды, советы и вдохновение для вашего идеального мероприятия
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Блог" }]} />
      </div>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="bg-card border border-border rounded-xl overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-md">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <time
                        dateTime={post.date}
                        className="text-xs text-muted-foreground"
                      >
                        {new Date(post.date).toLocaleDateString("ru-RU", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <h2 className="font-heading text-lg font-semibold mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}