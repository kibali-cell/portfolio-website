import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { StickyCta } from "@/components/sticky-cta";
import { Hero } from "@/components/home/hero";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { CaseStudySection } from "@/components/home/case-study";
import { ServicesSection } from "@/components/home/services-pricing";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/home/contact";
import { FaqSection } from "@/components/home/faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jonas Kiwia — Software Engineer & Founder in Tanzania" },
      { name: "description", content: "I build websites and business systems that work as hard as you do. Web developer in Tanzania, available worldwide." },
      { property: "og:title", content: "Jonas Kiwia — Software Engineer & Founder in Tanzania" },
      { property: "og:description", content: "Portfolio of Jonas Kiwia. Web apps, business systems, and custom platforms — built for real results." },
    ],
  }),
  component: Home,
});

/** Seven sections: hero, projects, case study, services + pricing, testimonials, contact, FAQ. */
function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProjectsPreview />
        <CaseStudySection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <StickyCta />
    </div>
  );
}
