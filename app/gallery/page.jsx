import GallerySection from "@/components/GallerySection";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Gallery",
  description:
    "See before-and-after AC service transformations, technician workflow, and completed repair quality.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Work gallery"
        title="A look at the clean, careful, and premium standard behind every service visit."
        description="Browse deep cleaning results, on-site repair moments, installation work, and customer-ready finishing details."
      />
      <GallerySection />
    </>
  );
}
