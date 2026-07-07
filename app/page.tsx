import { HeroSection } from "@/components/sections/HeroSection";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { MenuPreviewSection } from "@/components/sections/MenuPreviewSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustMarquee />
      <ServicesSection />
      <StatsSection />
      <MenuPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}