import Image from "next/image";
import PageHero from "@/components/PageHero";
import ProcessSection from "@/components/ProcessSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "About",
  description:
    "Learn about our certified AC technicians, premium service standards, and fast-response support team.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About our company"
        title="A service team built for cleaner cooling, faster repairs, and long-term AC reliability."
        description="We combine trained technicians, premium tools, genuine parts, and a process-first mindset so every visit feels efficient and reassuring."
      />
      <section className="section-shell pb-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div
            className="relative min-h-[460px] overflow-hidden rounded-[32px] border border-white/60 bg-slate-950 shadow-[0_30px_100px_rgba(15,23,42,0.18)]"
            data-gsap="reveal"
          >
            <Image
              src={siteConfig.media.teamImage}
              alt="AC service technicians discussing a repair checklist"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="glass-panel rounded-[32px] p-8 md:p-10" data-gsap="reveal">
            <span className="eyebrow">Why clients stay with us</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Premium service standards from first call to final cooling test.
            </h2>
            <div className="mt-6 space-y-5 text-pretty text-lg leading-8 text-slate-600">
              <p>
                {siteConfig.companyName} is designed around speed, clarity, and
                workmanship. We handle split ACs, window ACs, cassette units,
                and light commercial systems with the same disciplined process.
              </p>
              <p>
                Our team documents fault checks, cleaning steps, repair notes,
                and post-service performance so customers know exactly what was
                done and what to expect next.
              </p>
              <p>
                Whether you need one urgent repair or an annual maintenance
                partner for multiple properties, we keep the experience clean,
                respectful, and dependable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <StatsSection />
      <ProcessSection />
      <ServiceAreaSection />
    </>
  );
}
