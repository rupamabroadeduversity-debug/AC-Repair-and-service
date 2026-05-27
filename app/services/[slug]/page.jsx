import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import PricingSection from "@/components/PricingSection";
import { services, siteConfig } from "@/lib/site-data";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = services.find((item) => item.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.name,
    description: service.longDescription,
    openGraph: {
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = services.find((item) => item.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={service.badge}
        title={service.name}
        description={service.longDescription}
        actions={
          <>
            <Link href="/contact" className="primary-button">
              Book This Service
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="secondary-button">
              Call Now
            </a>
          </>
        }
      />
      <section className="section-shell pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-white/60 shadow-[0_30px_100px_rgba(15,23,42,0.14)]"
            data-gsap="parallax"
          >
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </div>
          <div className="glass-panel rounded-[32px] p-8 md:p-10" data-gsap="reveal">
            <span className="eyebrow">What is included</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Designed to fix the issue properly and restore efficient cooling.
            </h2>
            <ul className="mt-8 grid gap-4 text-slate-600">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-sky-100 bg-white/70 px-5 py-4 text-base leading-7"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[32px] p-8" data-gsap="reveal">
            <span className="eyebrow">Best for</span>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
              Ideal use cases
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {service.bestFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-900"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-[32px] p-8" data-gsap="reveal">
            <span className="eyebrow">Need help deciding</span>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
              We&apos;ll recommend the right service after a quick call or WhatsApp.
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Share the issue, AC type, location, and urgency. Our support team
              will suggest the most suitable visit type and give you an upfront
              idea of pricing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="primary-button">
                Book Inspection
              </Link>
              <a href={siteConfig.whatsappLink} className="secondary-button">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <PricingSection compact />
      <FAQ />
    </>
  );
}
