"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck, Sparkles, Star } from "lucide-react";
import { buttonMotion, fadeInUp } from "@/lib/animations";
import { siteConfig, stats } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="section-shell relative overflow-hidden pb-14 pt-12 md:pb-18 md:pt-20">
      <div className="absolute inset-0 -z-10 rounded-[42px] bg-[linear-gradient(135deg,rgba(255,252,248,0.92),rgba(253,237,226,0.84))]" />
      <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <div className="relative z-10 max-w-3xl">
          <motion.span
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="eyebrow"
          >
            Premium temperature control, every time
          </motion.span>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.06, duration: 0.7 }}
            className="mt-5 rounded-[24px] border border-[rgba(210,193,180,0.65)] bg-[rgba(255,248,242,0.84)] p-3 text-sm text-[var(--color-muted)] sm:mt-6 sm:flex sm:items-center sm:gap-3 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[rgba(255,248,242,0.95)] bg-[rgba(255,107,44,0.12)] text-[var(--color-sky)] sm:h-10 sm:w-10"
                >
                  <Star size={14} fill="currentColor" />
                </div>
              ))}
            </div>
            <p className="mt-3 leading-6 sm:mt-0">
              4.9 from verified clients with fast-response repair and maintenance teams.
            </p>
          </motion.div>
          <h1
            className="mt-6 max-w-[11ch] text-balance text-[3.25rem] font-semibold tracking-[-0.08em] leading-[0.92] text-[var(--color-ink)] sm:max-w-none sm:text-6xl lg:text-[5rem] lg:leading-[0.94]"
            data-gsap="hero-title"
          >
            Effortless cooling care for homes, offices, and <span className="headline-gradient">high-demand spaces.</span>
          </h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 max-w-2xl text-pretty text-base leading-7 text-[var(--color-muted)] sm:mt-6 sm:text-xl sm:leading-8"
          >
            Premium AC repair and servicing with cleaner execution, faster
            dispatch, transparent pricing, and technicians who explain the work
            clearly before they begin.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap"
          >
            <motion.div variants={buttonMotion} initial="rest" whileHover="hover" whileTap="tap">
              <Link href="/contact" className="primary-button w-full gap-2 sm:w-auto">
                Book Service
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div variants={buttonMotion} initial="rest" whileHover="hover" whileTap="tap">
              <a href={`tel:${siteConfig.phone}`} className="secondary-button w-full gap-2 sm:w-auto">
                <PhoneCall size={18} />
                Call Now
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4"
          >
            {[
              { icon: ShieldCheck, text: "Certified technicians" },
              { icon: Sparkles, text: "Detail-first service flow" },
              { icon: CheckCircle2, text: "Warranty-backed results" },
            ].map((item) => (
              <div
                key={item.text}
                className="glass-panel flex items-center gap-3 rounded-[22px] px-4 py-3.5 sm:rounded-[24px] sm:py-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(255,107,44,0.1)] text-[var(--color-sky)]">
                  <item.icon size={18} />
                </div>
                <span className="text-sm font-medium leading-5 text-[var(--color-ink)]">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="relative">
          <div className="hero-video-mask glass-panel relative overflow-hidden rounded-[30px] p-2.5 sm:rounded-[34px] sm:p-3" data-gsap="parallax">
            <div className="relative overflow-hidden rounded-[28px] bg-slate-950">
              <div className="relative h-[360px] w-full sm:h-[440px] lg:h-[460px]">
                <Image
                  src={siteConfig.media.heroImage}
                  alt="Technician cleaning an air conditioning system"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 44vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-3 sm:p-5">
                <div className="max-w-[220px] rounded-[22px] border border-white/20 bg-slate-950/60 p-3.5 backdrop-blur sm:max-w-[280px] sm:rounded-[24px] sm:p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
                    Emergency AC Support
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/90 sm:text-sm sm:leading-6">
                    Same-day help for no-cooling, leakage, compressor, and weak
                    airflow problems.
                  </p>
                </div>
                <div className="hidden rounded-[24px] border border-white/20 bg-white/12 p-4 backdrop-blur md:block">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-100">
                    Since 2014
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">12K+ visits</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:absolute sm:-bottom-14 sm:left-5 sm:right-5 sm:mt-0 sm:grid-cols-3">
            {stats.slice(0, 3).map((stat) => (
              <div
                key={stat.label}
                className={`rounded-[22px] border border-[rgba(211,194,182,0.7)] bg-[rgba(255,249,244,0.96)] px-4 py-3.5 shadow-[0_14px_24px_rgba(103,72,49,0.08)] sm:rounded-[26px] sm:px-5 sm:py-4 sm:shadow-[0_18px_32px_rgba(103,72,49,0.08)] ${
                  stat.label === "First-visit resolution rate" ? "col-span-2 sm:col-span-1" : ""
                }`}
                data-gsap="reveal"
              >
                <p className="text-xl font-semibold text-[var(--color-ink)] sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-[var(--color-muted)] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
