export default function PageHero({ badge, title, highlight, subtitle }) {
  return (
    <section className="pt-32 pb-20 bg-brand-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-dark border border-white/10 mb-8">
          <span className="w-3 h-3 bg-brand-primary rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-brand-primary letter-spacing-wider">{badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-brand-white mb-6 leading-tight">
          {title}
          <span className="text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary block mt-2">
            {highlight}
          </span>
        </h1>
        <p className="text-xl text-brand-grey max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}
