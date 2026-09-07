const process = [
  {
    step: "01",
    title: "Personal Consultation",
    desc: "Visit our boutique or book a virtual styling session with our expert designers.",
    icon: "♡",
  },
  {
    step: "02",
    title: "Custom Tailoring",
    desc: "Master tailors craft your outfit to perfection with meticulous attention to detail.",
    icon: "✦",
  },
  {
    step: "03",
    title: "Quality Check",
    desc: "Every piece undergoes a rigorous 5-point quality inspection before delivery.",
    icon: "♛",
  },
  {
    step: "04",
    title: "Doorstep Delivery",
    desc: "Free insured shipping across India with white-glove delivery service.",
    icon: "✧",
  },
];

export default function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Video side */}
          <div className="relative">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/about.jpg"
                alt="Kum Kum Fashion Boutique"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

              {/* Play button overlay */}
              <button
                data-cursor-hover
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play video"
              >
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 animate-ping rounded-full bg-gold/30" />
                  <div className="absolute inset-2 rounded-full border-2 border-gold/50" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gold shadow-2xl transition-transform hover:scale-110">
                    <svg
                      className="ml-1 h-8 w-8 text-ink"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  ✦ Behind The Scenes ✦
                </p>
                <h3 className="mt-2 font-display text-3xl">
                  Inside Our Atelier
                </h3>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-maroon p-6 text-white shadow-2xl sm:block">
              <div className="font-display text-4xl text-gold">5000+</div>
              <div className="text-xs uppercase tracking-widest text-white/80">
                Happy Brides Served
              </div>
            </div>
          </div>

          {/* Process side */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">
              ✦ Our Process ✦
            </p>
            <h2 className="font-display text-4xl text-maroon sm:text-5xl lg:text-6xl">
              The <span className="italic gold-gradient-text">Art</span> of
              <br />
              Crafting Perfection
            </h2>
            <p className="text-base text-ink/70">
              From the first consultation to the final stitch, every step of
              your journey with us is designed to be as memorable as the
              outfit itself.
            </p>

            <div className="space-y-4 pt-6">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="group flex gap-5 rounded-2xl border border-gold/20 bg-white p-5 transition-all hover:border-gold hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-maroon to-gold font-display text-xl text-white">
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-xs text-gold">
                        {p.step}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-maroon">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-ink/70">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
