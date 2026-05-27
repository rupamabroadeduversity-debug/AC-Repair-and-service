import { BadgeCheck, Clock3, Headphones, Shield, WalletCards, Wrench } from "lucide-react";

const reasons = [
  {
    title: "Certified Technicians",
    description: "Trained experts for split, window, cassette, and commercial AC systems.",
    icon: BadgeCheck,
  },
  {
    title: "Same-Day Service",
    description: "Fast dispatch for repair requests, cooling failures, and urgent site visits.",
    icon: Clock3,
  },
  {
    title: "Transparent Pricing",
    description: "Clear estimates, honest recommendations, and no last-minute surprises.",
    icon: WalletCards,
  },
  {
    title: "Genuine Spare Parts",
    description: "Quality replacement components sourced for performance and durability.",
    icon: Wrench,
  },
  {
    title: "24/7 Emergency Support",
    description: "On-call assistance for sudden no-cooling issues and critical breakdowns.",
    icon: Headphones,
  },
  {
    title: "Service Warranty",
    description: "Work backed by support coverage for added peace of mind after the visit.",
    icon: Shield,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-shell py-12 md:py-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div data-gsap="reveal">
          <span className="eyebrow">Why choose us</span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
            Built to feel trustworthy before we even arrive on-site.
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)]" data-gsap="reveal">
          Premium service brands earn trust through consistency, clarity, and
          visible care in every customer touchpoint.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {reasons.map((reason) => (
          <article
            key={reason.title}
            className="glass-panel rounded-[32px] p-6"
            data-gsap="reveal"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(255,107,44,0.12)] text-[var(--color-sky)]">
              <reason.icon size={24} />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-[var(--color-ink)]">{reason.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{reason.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
