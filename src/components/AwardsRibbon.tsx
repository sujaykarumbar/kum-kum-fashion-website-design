const awards = [
  { name: "Best Ethnic Boutique", org: "Kerala Fashion Awards" },
  { name: "Top 50 Boutiques", org: "India Today" },
  { name: "Excellence in Bridal Wear", org: "Vogue India" },
  { name: "Customer Choice Award", org: "Google Reviews" },
  { name: "Heritage Craftsmanship", org: "Silk Mark" },
];

export default function AwardsRibbon() {
  return (
    <section className="relative overflow-hidden bg-ink py-6">
      <div className="marquee-track-left flex w-max gap-12 whitespace-nowrap">
        {[...awards, ...awards, ...awards].map((a, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-6 text-white/80"
          >
            <svg
              className="h-5 w-5 shrink-0 text-gold"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14l-6-4.5h7.5L12 2z" />
            </svg>
            <span className="font-display text-lg font-semibold text-gold">
              {a.name}
            </span>
            <span className="text-sm uppercase tracking-widest text-white/60">
              {a.org}
            </span>
            <span className="mx-4 h-4 w-px bg-gold/40" />
          </div>
        ))}
      </div>
    </section>
  );
}
