import ContactForm from "@/components/ContactForm";
import EmergencyCTA from "@/components/EmergencyCTA";
import FAQ from "@/components/FAQ";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { faqs, siteConfig } from "@/lib/site-data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata = {
  title: "Premium AC Repair & Service at Your Doorstep",
  description:
    "Book premium AC repair, installation, gas refill, deep cleaning, AMC maintenance, and emergency AC support for homes and businesses.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <EmergencyCTA />
      <ProcessSection />
      <PricingSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQ />
      <ServiceAreaSection />
      <section className="section-shell pb-24 pt-6 md:pb-32">
        <div className="grid gap-8 overflow-hidden rounded-[32px] border border-white/60 bg-white/75 p-6 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="space-y-5" data-gsap="reveal">
            <span className="eyebrow">Book a premium visit</span>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Tell us what your AC needs and our team will confirm a slot within
              15 minutes.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              {siteConfig.companyName} handles homes, offices, retail spaces,
              and commercial sites with transparent pricing, clean workmanship,
              and warranty-backed service.
            </p>
          </div>
          <ContactForm compact />
        </div>
      </section>
    </>
  );
}
