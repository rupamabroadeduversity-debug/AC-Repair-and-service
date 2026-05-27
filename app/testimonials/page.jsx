import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "Testimonials",
  description:
    "Read customer testimonials for AC repair, installation, maintenance, and emergency support services.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer reviews"
        title="Trusted by homeowners, office managers, and property teams who need cooling fixed properly."
        description="The recurring themes in our reviews are speed, cleanliness, professionalism, and clear communication."
      />
      <TestimonialsSection standalone />
      <FAQ />
    </>
  );
}
