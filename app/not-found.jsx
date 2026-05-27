import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell flex min-h-[70vh] items-center py-24">
      <div className="glass-panel max-w-2xl rounded-[32px] p-10">
        <span className="eyebrow">404</span>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-6xl">
          This cooling route doesn&apos;t exist.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          The page may have moved, or the service link is no longer active.
          Head back to the homepage and we&apos;ll get you where you need to go.
        </p>
        <Link href="/" className="primary-button mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
