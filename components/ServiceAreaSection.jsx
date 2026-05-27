import { serviceAreas } from "@/lib/site-data";

export default function ServiceAreaSection() {
  return (
    <section className="section-shell py-12 md:py-16">
      <div className="glass-panel rounded-[32px] p-8 md:p-10" data-gsap="reveal">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Service areas</span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Coverage designed for fast response across key neighborhoods.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            Replace these placeholder area names with your exact city and zone
            coverage once your final market list is ready.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-sky-100 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
