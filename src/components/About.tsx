export default function About() {
  return (
    <section id="about" className="relative bg-ink py-24 text-white sm:py-32">
      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c9a14a 0%, transparent 50%), radial-gradient(circle at 80% 80%, #c9a14a 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="/images/about.jpg"
                alt="Kum Kum Fashion Boutique Interior"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 hidden h-40 w-40 rounded-full bg-gold p-6 text-center text-white shadow-2xl sm:flex sm:items-center sm:justify-center">
              <div>
                <div className="font-display text-4xl font-bold">15+</div>
                <div className="text-xs uppercase tracking-widest">
                  Years of Trust
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 hidden h-32 w-32 rounded-full border-2 border-gold/40 lg:block" />
          </div>

          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-gold">
              ✦ Our Story ✦
            </p>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Weaving Tradition
              <span className="block text-gold">Into Modern Style</span>
            </h2>
            <p className="text-base leading-relaxed text-white/80">
              For over 15 years, <strong>Kum Kum Fashion</strong> has been the
              trusted destination for premium ethnic wear in Kerala. What
              started as a small boutique has blossomed into a beloved fashion
              house — known for its quality fabrics, intricate craftsmanship
              and warm, personal service.
            </p>
            <p className="text-base leading-relaxed text-white/80">
              Every piece in our collection is handpicked — from heritage
              silk sarees to contemporary Indo-Western wear — ensuring you find
              something truly special for every celebration.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { icon: "✦", title: "Premium Fabrics", desc: "Only the finest silks, cottons & georgettes" },
                { icon: "❀", title: "Custom Tailoring", desc: "In-house alterations to perfect fit" },
                { icon: "♕", title: "Bridal Specialists", desc: "Complete trousseau & wedding styling" },
                { icon: "♡", title: "Personal Service", desc: "One-on-one styling consultations" },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-gold/30 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-gold hover:bg-white/10"
                >
                  <div className="mb-2 text-2xl text-gold">{f.icon}</div>
                  <h4 className="font-display text-lg font-semibold text-white">
                    {f.title}
                  </h4>
                  <p className="mt-1 text-xs text-white/70">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
