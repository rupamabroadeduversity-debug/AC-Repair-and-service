import { MessageCircleMore } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappLink}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_rgba(37,211,102,0.4)] transition hover:-translate-y-1"
      aria-label="Book service on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircleMore size={24} />
    </a>
  );
}
