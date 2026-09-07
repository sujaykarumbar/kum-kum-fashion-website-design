const features = [
  { icon: "♛", title: "Bridal Specialists", desc: "Dream bridal looks" },
  { icon: "✦", title: "Premium Quality", desc: "Handpicked fabrics" },
  { icon: "♡", title: "Personal Service", desc: "1-on-1 styling" },
  { icon: "↺", title: "Easy Returns", desc: "Hassle-free policy" },
  { icon: "✓", title: "Custom Tailoring", desc: "Perfect fit guarantee" },
  { icon: "★", title: "5000+ Happy Customers", desc: "Trusted since 2010" },
];

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-maroon via-ink to-maroon py-12 text-white">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, #c9a14a 0%, transparent 50%), radial-gradient(circle at 70% 50%, #c9a14a 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group text-center transition-transform hover:-translate-y-1"
            >
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/50 text-2xl text-gold transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                {f.icon}
              </div>
              <h4 className="font-display text-base font-semibold">
                {f.title}
              </h4>
              <p className="mt-1 text-xs text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
