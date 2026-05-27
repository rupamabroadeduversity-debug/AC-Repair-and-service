"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, PhoneCall, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showMessageBar, setShowMessageBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowMessageBar(window.scrollY < 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showMessageBar && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-[60] px-4 pt-3 sm:px-6 lg:px-8"
          >
            <div className="section-shell max-w-7xl px-0">
              <div className="rounded-[20px] border border-[rgba(208,188,173,0.55)] bg-white/78 px-4 py-2 text-[11px] font-medium text-[var(--color-muted)] shadow-[0_12px_28px_rgba(103,72,49,0.08)] backdrop-blur xl:rounded-full xl:px-5 xl:text-xs">
                <div className="message-marquee">
                  <div className="message-marquee-track">
                    <span>Premium AC repair, installation, gas refill, deep cleaning, AMC maintenance, and 24/7 emergency cooling support for homes, offices, and commercial spaces.</span>
                    <span>Premium AC repair, installation, gas refill, deep cleaning, AMC maintenance, and 24/7 emergency cooling support for homes, offices, and commercial spaces.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <header
        className={`sticky z-50 px-4 pb-1 transition-[top,padding] duration-300 sm:px-6 lg:px-8 ${
          showMessageBar
            ? "top-10 pt-10 sm:pt-[1rem]"
            : "top-0 pt-3 sm:pt-4"
        }`}
      >
        <div className="section-shell max-w-7xl px-0">
          <nav className="glass-panel flex items-center justify-between rounded-[26px] px-4 py-3 md:rounded-[30px] md:px-6">
            <Link href="/" className="flex items-center gap-2 text-[20px] font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-[22px]">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[rgba(255,107,44,0.1)] text-sm font-bold text-[var(--color-sky)]">
                PC
              </span>
              <span>
                Polar<span className="text-[var(--color-sky)]">Cool</span>
              </span>
            </Link>
            <div className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === link.href
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition ${
                      active
                        ? "text-[var(--color-sky)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="hidden items-center gap-3 lg:flex">
              <a href={`tel:${siteConfig.phone}`} className="secondary-button gap-2 px-5 py-3">
                <PhoneCall size={16} />
                {siteConfig.phoneDisplay}
              </a>
              <Link href="/contact" className="primary-button px-5 py-3">
                Book Service
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(195,176,161,0.8)] bg-white/80 text-[var(--color-ink)] shadow-[0_12px_24px_rgba(103,72,49,0.08)] lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="section-shell relative z-50 lg:hidden"
          >
            <div className="glass-panel mt-2 rounded-[28px] p-5">
              <div className="mb-4 rounded-[22px] border border-[rgba(210,193,180,0.7)] bg-[rgba(255,248,242,0.88)] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-sky)]">
                  Quick contact
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="mt-2 block text-lg font-semibold tracking-[-0.03em] text-[var(--color-ink)]"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  Same-day booking and emergency cooling support.
                </p>
              </div>
              <div className="grid gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-[var(--color-ink)] transition hover:bg-[rgba(255,107,44,0.08)] hover:text-[var(--color-sky)]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="secondary-button mt-2 justify-center"
                >
                  Call Now
                </a>
                <Link href="/contact" className="primary-button justify-center" onClick={() => setOpen(false)}>
                  Book Service
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
