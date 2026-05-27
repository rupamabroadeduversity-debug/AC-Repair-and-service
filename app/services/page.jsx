import EmergencyCTA from "@/components/EmergencyCTA";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Services",
  description:
    "Explore AC repair, servicing, installation, gas refill, deep cleaning, AMC maintenance, and emergency support services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Every AC service you need, delivered with premium response standards."
        description="From fast home repairs to planned commercial maintenance, our service menu is designed to keep cooling systems efficient, clean, and dependable."
      />
      <ServicesSection
        title="Complete AC solutions for homes, offices, retail, and commercial spaces."
        description="Choose a service below to see what is included, recommended response time, and the kind of systems we support."
      />
      <section className="section-shell pb-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.slug}
              className="glass-panel rounded-[28px] p-6"
              data-gsap="reveal"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                {service.badge}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.longDescription}
              </p>
            </article>
          ))}
        </div>
      </section>
      <EmergencyCTA />
    </>
  );
}
