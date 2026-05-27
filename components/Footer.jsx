import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[rgba(208,188,173,0.6)] bg-[linear-gradient(180deg,#fff9f4_0%,#f4e9df_100%)] text-[var(--color-ink)]">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
        <div>
          <Link href="/" className="text-2xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
            Polar<span className="text-[var(--color-sky)]">Cool</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
            Premium AC repair, maintenance, installation, and emergency support
            with clean execution, transparent pricing, and certified technicians.
          </p>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-sky)]">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[var(--color-ink)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-sky)]">
            Contact
          </h3>
          <div className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
            <p>{siteConfig.address}</p>
            <a href={`tel:${siteConfig.phone}`} className="block transition hover:text-[var(--color-ink)]">
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="block transition hover:text-[var(--color-ink)]">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[rgba(208,188,173,0.6)]">
        <div className="section-shell flex flex-col gap-2 py-5 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.companyName}. All rights reserved.</p>
          <p>Serving homes, offices, retail, and commercial AC systems.</p>
        </div>
      </div>
    </footer>
  );
}
