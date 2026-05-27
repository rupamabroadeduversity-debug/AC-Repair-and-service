import Link from "next/link";
import { pricingPlans } from "@/lib/site-data";

export default function PricingSection({ compact = false }) {
  return (
    <section className={`section-shell ${compact ? "py-8 md:py-10" : "py-12 md:py-16"}`}>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div data-gsap="reveal">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
            Transparent packages for one-time fixes and long-term AC care.
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)]" data-gsap="reveal">
          Every plan is structured to make the next step obvious, whether you
          need a quick repair, a deep clean, or scheduled maintenance.
        </p>
      </div>
      <div className="mt-10 grid gap-6 xl:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-[32px] p-[1px] ${
              plan.featured
                ? "bg-[linear-gradient(135deg,#ff8b4c,#ff5b1f)] shadow-[0_30px_100px_rgba(255,107,44,0.2)]"
                : "bg-[rgba(213,196,183,0.6)]"
            }`}
            data-gsap="reveal"
          >
            <div
              className={`h-full rounded-[31px] p-7 md:p-8 ${
                plan.featured
                  ? "bg-[linear-gradient(180deg,rgba(38,29,24,0.98),rgba(72,42,29,0.96))] text-white"
                  : "glass-panel text-slate-950"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={`text-sm font-semibold uppercase tracking-[0.24em] ${plan.featured ? "text-orange-100" : "text-[var(--color-sky)]"}`}>
                    {plan.tag}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold">{plan.name}</h3>
                </div>
                {plan.featured ? (
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-100">
                    Most popular
                  </span>
                ) : null}
              </div>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-[-0.05em]">{plan.price}</span>
                <span className={`pb-2 text-sm ${plan.featured ? "text-orange-100" : "text-[var(--color-muted)]"}`}>
                  {plan.priceNote}
                </span>
              </div>
              <p className={`mt-4 text-sm leading-7 ${plan.featured ? "text-orange-50" : "text-[var(--color-muted)]"}`}>
                {plan.description}
              </p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                      plan.featured
                        ? "border border-white/10 bg-white/8 text-white"
                        : "border border-[rgba(214,197,184,0.75)] bg-white/75 text-[var(--color-muted)]"
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-white text-[var(--color-ink)] hover:-translate-y-0.5 hover:bg-orange-50"
                    : "bg-[var(--color-ink)] text-white hover:-translate-y-0.5 hover:bg-[var(--color-sky)]"
                }`}
              >
                Choose Package
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
