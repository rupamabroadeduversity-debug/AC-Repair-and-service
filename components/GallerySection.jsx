import Image from "next/image";
import { galleryItems } from "@/lib/site-data";

export default function GallerySection() {
  return (
    <section className="section-shell py-12 md:py-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div data-gsap="reveal">
          <span className="eyebrow">Before & after</span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            Visual proof of the detail behind every service visit.
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-slate-600" data-gsap="reveal">
          Deep cleaning, precise installation, careful finishing, and restored
          performance are visible in the work itself.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item, index) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-[30px] border border-white/60 bg-white/70 shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
            data-gsap="reveal"
          >
            <div className="relative min-h-[280px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                priority={index < 2}
              />
              <span className="absolute left-4 top-4 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
                {item.label}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
