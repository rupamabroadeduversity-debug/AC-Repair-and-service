import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.companyName} | Premium AC Repair & Services`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description:
    "Premium AC repair, servicing, installation, gas refill, and emergency support with certified technicians and same-day response.",
  keywords: [
    "AC repair",
    "AC service",
    "air conditioner installation",
    "gas refill",
    "AMC maintenance",
    "emergency AC repair",
  ],
  openGraph: {
    title: `${siteConfig.companyName} | Premium AC Repair & Services`,
    description:
      "Fast, reliable, and expert AC servicing for homes, offices, and commercial spaces.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.companyName,
    images: [
      {
        url: siteConfig.media.heroImage,
        width: 1600,
        height: 1000,
        alt: "AC technician servicing an indoor unit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.companyName} | Premium AC Repair & Services`,
    description:
      "Book trusted AC repair, installation, maintenance, and emergency support.",
    images: [siteConfig.media.heroImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[var(--color-ice)] font-sans text-slate-900">
        <div className="fixed inset-x-0 top-0 -z-10 h-[580px] bg-[radial-gradient(circle_at_top,#fde4d5_0%,rgba(253,228,213,0.32)_34%,rgba(255,255,255,0)_72%)]" />
        <div className="fixed right-[-8%] top-24 -z-10 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,107,44,0.14)_0%,rgba(255,107,44,0)_72%)] blur-3xl" />
        <div className="fixed left-[-8%] top-[32rem] -z-10 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(255,194,163,0.18)_0%,rgba(255,194,163,0)_72%)] blur-3xl" />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
