import { processSteps } from "@/lib/site-data";

export default function ProcessSection() {
  return (
    <section className="section-shell py-12 md:py-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div data-gsap="reveal">
          <span className="eyebrow">Simple process</span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            Book → Inspection → Repair → Final Check
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-slate-600" data-gsap="reveal">
          Clear steps reduce downtime and help customers understand exactly what
          is happening during the visit.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <article
            key={step.title}
            className="glass-panel rounded-[30px] p-6"
            data-gsap="stagger-card"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-semibold text-white">
              0{index + 1}
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
