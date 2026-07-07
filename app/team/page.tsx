import type { Metadata } from "next";
import Image from "next/image";
import { teamMembers } from "@/lib/data";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata: Metadata = {
  title: "Команда",
  description:
    "Познакомьтесь с командой Nilov Catering — шеф-повара, менеджеры мероприятий, сомелье и координаторы с многолетним опытом.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primary py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Наша команда
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Профессионалы, которые превращают каждое мероприятие в
            незабываемое событие
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Команда" }]} />
      </div>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 0.1}>
                <div className="group relative rounded-xl overflow-hidden">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-xs leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                  <div className="bg-card p-4 border border-border border-t-0 rounded-b-xl">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-accent">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {member.specialization}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}