export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-saree.jpg')" }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 h-32 w-32 rounded-full border border-gold/30 animate-float hidden lg:block" />
      <div
        className="absolute bottom-20 left-10 h-24 w-24 rounded-full border border-gold/30 animate-float hidden lg:block"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 pb-12 text-center lg:items-start lg:text-left lg:px-10">
        <div className="max-w-2xl space-y-6 animate-fade-up">
          <p className="text-sm uppercase tracking-[0.5em] text-gold/90">
            ✦ Since Generations ✦
          </p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Timeless
            <span className="block shimmer-text">Indian Elegance</span>
          </h1>
          <p className="max-w-xl text-base text-white/85 sm:text-lg">
            Discover handpicked sarees, lehengas, kurtis and bridal wear
            crafted with tradition, love and the finest fabrics. Where every
            thread tells a story of heritage.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <a
              href="#collection"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-maroon"
            >
              Explore Collection
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:border-gold hover:bg-gold/10"
            >
              Visit Our Store
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-10 lg:justify-start">
            {[
              { n: "5000+", l: "Happy Customers" },
              { n: "1000+", l: "Designs" },
              { n: "15+", l: "Years of Trust" },
            ].map((s) => (
              <div key={s.l} className="text-white">
                <div className="font-display text-3xl font-bold text-gold">
                  {s.n}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/70">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </section>
  );
}
