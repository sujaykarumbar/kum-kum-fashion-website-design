import { useEffect, useState } from "react";

const slides = [
  {
    img: "/images/hero-saree.jpg",
    eyebrow: "✦ The Bridal Couture Collection 2026 ✦",
    title: "Where Dreams",
    titleAccent: "Become Couture",
    desc: "Discover the finest handcrafted lehengas, sarees and bridal wear, woven with centuries of tradition and a modern sensibility.",
  },
  {
    img: "/images/collection-1.jpg",
    eyebrow: "✦ Heritage Silk Sarees ✦",
    title: "Timeless",
    titleAccent: "Silk Traditions",
    desc: "Pure Kanchipuram, Banarasi and Patola silk sarees curated for the discerning connoisseur of Indian heritage.",
  },
  {
    img: "/images/collection-4.jpg",
    eyebrow: "✦ Festive Glamour ✦",
    title: "Celebrate in",
    titleAccent: "Royal Style",
    desc: "Anarkalis, gowns and Indo-fusion wear designed to make every festival, sangeet and reception unforgettable.",
  },
];

export default function PremiumHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center ${
              i === current ? "ken-burns" : ""
            }`}
            style={{ backgroundImage: `url('${slide.img}')` }}
          />
        </div>
      ))}

      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      {/* Decorative gold frame */}
      <div className="pointer-events-none absolute inset-6 hidden border border-gold/20 sm:block md:inset-12" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-3xl text-white">
          <div
            key={`eyebrow-${current}`}
            className="mb-6 inline-block animate-fade-up border-l-2 border-gold pl-4 text-xs uppercase tracking-[0.4em] text-gold"
            style={{ animationDelay: "0.2s" }}
          >
            {slides[current].eyebrow}
          </div>

          <h1 className="font-display text-6xl font-normal leading-[1.05] tracking-tight sm:text-7xl lg:text-[120px]">
            <span
              key={`t1-${current}`}
              className="block animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {slides[current].title}
            </span>
            <span
              key={`t2-${current}`}
              className="block animate-fade-up italic gold-gradient-text"
              style={{ animationDelay: "0.6s" }}
            >
              {slides[current].titleAccent}
            </span>
          </h1>

          <p
            key={`d-${current}`}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/80 animate-fade-up sm:text-lg"
            style={{ animationDelay: "0.8s" }}
          >
            {slides[current].desc}
          </p>

          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="#collection"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-none border-2 border-gold bg-gold px-10 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition-all hover:text-white"
            >
              <span className="relative z-10">Explore Collection</span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span className="absolute inset-0 -translate-x-full bg-ink transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 border-2 border-white/40 px-10 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-all hover:border-gold hover:bg-gold/10"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Visit Our Boutique
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-6 z-10 flex items-center gap-3 lg:left-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] transition-all duration-500 ${
              i === current ? "w-16 bg-gold" : "w-8 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Right side info */}
      <div className="absolute bottom-10 right-6 z-10 hidden flex-col items-end gap-2 lg:right-10 lg:flex">
        <div className="text-right">
          <div className="font-display text-3xl text-gold">15+</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/60">
            Years of Excellence
          </div>
        </div>
      </div>

      {/* Side stats - left vertical */}
      <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
        <div className="space-y-8 border-l border-gold/30 pl-4">
          {[
            { n: "5000+", l: "Brides" },
            { n: "1000+", l: "Designs" },
            { n: "50+", l: "Cities" },
          ].map((s) => (
            <div key={s.l} className="text-white/80">
              <div className="font-display text-2xl text-gold">{s.n}</div>
              <div className="text-[9px] uppercase tracking-[0.3em]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
