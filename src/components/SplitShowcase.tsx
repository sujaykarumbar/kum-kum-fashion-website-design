const showcases = [
  {
    img: "https://images.pexels.com/photos/12411105/pexels-photo-12411105.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    eyebrow: "The Bridal Edit",
    title: "Crafted for Your",
    titleAccent: "Forever Moments",
    desc: "From intricate zardozi work to delicate thread embroidery, every bridal piece in our collection is handpicked and tailored to make your special day truly unforgettable.",
    cta: "View Bridal Collection",
    reverse: false,
  },
  {
    img: "https://images.pexels.com/photos/12713395/pexels-photo-12713395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    eyebrow: "Men's Royale",
    title: "The Modern",
    titleAccent: "Maharaja",
    desc: "Sherwanis, Jodhpuri suits and Indo-western sets designed for the contemporary groom. Make your wedding entrance truly royal with our premium menswear.",
    cta: "Shop Men's Collection",
    reverse: true,
  },
];

export default function SplitShowcase() {
  return (
    <section className="relative bg-ink py-0">
      {showcases.map((s, idx) => (
        <div
          key={idx}
          className={`relative grid min-h-[600px] items-center gap-0 lg:min-h-[700px] ${
            s.reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Image side */}
          <div
            className={`relative h-[400px] overflow-hidden lg:h-auto ${
              s.reverse ? "lg:col-start-2" : ""
            }`}
          >
            <img
              src={s.img}
              alt={s.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[3000ms] hover:scale-110"
            />
            <div
              className={`absolute inset-0 ${
                s.reverse
                  ? "bg-gradient-to-l from-transparent via-ink/40 to-ink"
                  : "bg-gradient-to-r from-transparent via-ink/40 to-ink"
              }`}
            />
          </div>

          {/* Text side */}
          <div
            className={`relative flex items-center px-8 py-16 lg:px-20 ${
              s.reverse ? "lg:col-start-1 lg:row-start-1" : ""
            }`}
          >
            <div className="max-w-xl text-white">
              <p className="mb-4 inline-block border-l-2 border-gold pl-4 text-xs uppercase tracking-[0.4em] text-gold">
                ✦ {s.eyebrow} ✦
              </p>
              <h2 className="font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
                {s.title}
                <span className="block italic gold-gradient-text">
                  {s.titleAccent}
                </span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                {s.desc}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="#collection"
                  className="group inline-flex items-center gap-3 border-b-2 border-gold pb-1 text-xs font-semibold uppercase tracking-[0.3em] text-gold transition-all hover:gap-5"
                >
                  {s.cta}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
                  <span className="h-px w-8 bg-white/30" />
                  Premium Quality
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
