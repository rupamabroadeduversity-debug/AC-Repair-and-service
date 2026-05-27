import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import { siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Contact & Book Service",
  description:
    "Book AC repair, installation, gas refill, or emergency service through our contact form, call line, or WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & book service"
        title="Tell us the AC issue, preferred time, and location. We&apos;ll handle the rest."
        description="Reach us by phone, WhatsApp, or the booking form for same-day visits, emergency repairs, and scheduled maintenance."
      />
      <section className="section-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[32px] p-8 md:p-10" data-gsap="reveal">
            <span className="eyebrow">Direct contact</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Fast booking options for urgent and scheduled visits.
            </h2>
            <div className="mt-8 space-y-6 text-slate-600">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Call
                </p>
                <a href={`tel:${siteConfig.phone}`} className="mt-2 block text-2xl font-semibold text-slate-950">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Email
                </p>
                <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-lg font-medium text-slate-950">
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Service hours
                </p>
                <p className="mt-2 text-lg leading-8">
                  Mon-Sun: 7:00 AM to 11:00 PM
                  <br />
                  24/7 emergency support on call.
                </p>
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-[28px] border border-sky-100 bg-white/80">
              <div className="flex items-center justify-between gap-4 border-b border-sky-100 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                    Service map
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Find us and share your nearest landmark with the technician.
                  </p>
                </div>
                <a
                  href={siteConfig.mapDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button px-4 py-2.5 text-xs"
                >
                  Open in Maps
                </a>
              </div>
              <iframe
                title="PolarCool AC Services location map"
                src={siteConfig.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <ServiceAreaSection />
    </>
  );
}
