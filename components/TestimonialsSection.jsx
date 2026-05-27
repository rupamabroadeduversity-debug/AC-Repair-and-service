"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/site-data";

export default function TestimonialsSection({ standalone = false }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className={`section-shell ${standalone ? "pb-24 pt-8" : "py-12 md:py-16"}`}>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div data-gsap="reveal">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            Reviews that reinforce trust before the booking call.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Customers value quick arrival, neat workspaces, honest recommendations,
            and service that solves the issue without repeat visits.
          </p>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-900 transition hover:border-sky-300 hover:text-sky-700"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((current) => (current + 1) % testimonials.length)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-900 transition hover:border-sky-300 hover:text-sky-700"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="glass-panel overflow-hidden rounded-[34px] p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative min-h-[280px] overflow-hidden rounded-[28px]">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-6 text-xl leading-9 text-slate-700 md:text-2xl">
                    “{active.quote}”
                  </p>
                </div>
                <div className="mt-8">
                  <p className="text-lg font-semibold text-slate-950">{active.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{active.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <button
            type="button"
            key={item.name}
            onClick={() => setActiveIndex(index)}
            className={`rounded-[24px] p-5 text-left transition ${
              activeIndex === index
                ? "bg-slate-950 text-white shadow-[0_18px_40px_rgba(15,23,42,0.24)]"
                : "glass-panel text-slate-900"
            }`}
          >
            <p className="text-base font-semibold">{item.name}</p>
            <p className={`mt-1 text-sm ${activeIndex === index ? "text-sky-100" : "text-slate-500"}`}>
              {item.role}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
