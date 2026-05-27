"use client";

import { stats } from "@/lib/site-data";

export default function StatsSection() {
  return (
    <section className="section-shell py-12 md:py-16">
      <div className="glass-panel rounded-[34px] px-6 py-8 md:px-10 md:py-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[26px] bg-white/65 px-5 py-6" data-gsap="counter">
              <p className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">
                <span data-count={stat.countTo}>{stat.prefix ?? ""}0{stat.suffix ?? ""}</span>
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
