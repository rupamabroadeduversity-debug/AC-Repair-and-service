import PageHero from "@/components/PageHero";
import PricingSection from "@/components/PricingSection";
import { pricingPlans } from "@/lib/site-data";

export const metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for AC servicing, deep cleaning, repair visits, and annual maintenance packages.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & packages"
        title="Clear pricing for premium AC care, without hidden surprises."
        description="Choose a one-time visit or a maintenance plan built for regular performance, lower breakdown risk, and cleaner indoor air."
      />
      <PricingSection />
      <section className="section-shell pb-24">
        <div className="glass-panel rounded-[32px] p-8 md:p-10" data-gsap="reveal">
          <span className="eyebrow">What affects final pricing</span>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {pricingPlans[0].pricingNotes.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/60 bg-white/70 p-6"
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
