"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/lib/site-data";

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section className="section-shell py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div data-gsap="reveal">
          <span className="eyebrow">FAQs</span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            Quick answers before you book your AC service.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            These cover the questions we hear most around visit timing,
            diagnosis, repair estimates, maintenance plans, and emergency calls.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="glass-panel rounded-[28px] px-5 py-4 md:px-6"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-2 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                >
                  <span className="text-lg font-semibold text-slate-950">
                    {faq.question}
                  </span>
                  <span className="text-2xl font-light text-sky-700">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-2 pt-2 text-base leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
