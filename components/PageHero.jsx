export default function PageHero({ eyebrow, title, description, actions }) {
  return (
    <section className="section-shell pb-12 pt-28 md:pb-16 md:pt-32">
      <div
        className="relative overflow-hidden rounded-[36px] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.84),rgba(224,242,254,0.84))] px-6 py-14 shadow-[0_30px_100px_rgba(15,23,42,0.12)] md:px-10 md:py-16"
        data-gsap="reveal"
      >
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="relative max-w-4xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-lg leading-8 text-slate-600 md:text-xl">
            {description}
          </p>
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
