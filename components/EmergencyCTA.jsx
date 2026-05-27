import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export default function EmergencyCTA() {
  return (
    <section className="section-shell py-10 md:py-14">
      <div
        className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#082f49_0%,#0f3d6e_46%,#0ea5e9_100%)] px-6 py-10 text-white shadow-[0_28px_90px_rgba(8,47,73,0.34)] md:px-10 md:py-12"
        data-gsap="reveal"
      >
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-100">
              Urgent support
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Need urgent AC repair today?
            </h2>
            <p className="mt-4 text-lg leading-8 text-sky-100">
              Our emergency team handles no-cooling issues, gas leakage
              symptoms, unusual sounds, and sudden AC shutdowns with same-day
              priority support.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-50">
              Book Emergency Visit
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
