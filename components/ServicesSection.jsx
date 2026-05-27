import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";

export default function ServicesSection({
  title = "Services built for speed, precision, and better cooling performance.",
  description = "From urgent repairs to annual maintenance plans, every service is scoped to reduce downtime, restore efficiency, and protect your AC investment.",
}) {
  return (
    <section className="section-shell py-8 md:py-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div data-gsap="reveal">
          <span className="eyebrow">Our services</span>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
            {title}
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)]" data-gsap="reveal">
          {description}
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <article
            key={service.slug}
            className="group overflow-hidden rounded-[32px] border border-[rgba(210,193,180,0.65)] bg-[rgba(255,249,244,0.88)] shadow-[0_18px_40px_rgba(102,72,47,0.08)] transition duration-300 hover:-translate-y-1"
            data-gsap="stagger-card"
          >
            <div className="relative min-h-[220px] overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                priority={index < 4}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(31,27,24,0.22)] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-sky)]">
                {service.badge}
              </span>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[rgba(255,107,44,0.08)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition group-hover:bg-[rgba(255,107,44,0.14)] group-hover:text-[var(--color-sky)]"
              >
                View details
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
