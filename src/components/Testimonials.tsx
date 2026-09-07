const reviews = [
  {
    name: "Priya Sharma",
    role: "Bride, Kasaragod",
    avatar: "P",
    text: "Kum Kum Fashion made my wedding shopping absolutely magical. Their bridal lehenga collection is unmatched and the staff helped me find my dream outfit within budget. Truly a 5-star experience!",
    rating: 5,
  },
  {
    name: "Anjali Menon",
    role: "Regular Customer",
    avatar: "A",
    text: "I've been shopping here for years — for festivals, family functions and casual kurtis. The quality, variety and warm service keep me coming back. Best boutique in town!",
    rating: 5,
  },
  {
    name: "Lakshmi Iyer",
    role: "Mother of Bride",
    avatar: "L",
    text: "The personal attention and styling advice we received was exceptional. They helped coordinate outfits for the entire family. The tailoring service is also top-notch.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-b from-cream to-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-gold">
            ✦ Love From Our Customers ✦
          </p>
          <h2 className="font-display text-4xl font-semibold text-maroon sm:text-5xl lg:text-6xl">
            What They Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="absolute -top-4 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-2xl text-white shadow-lg">
                "
              </div>
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <svg
                    key={idx}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-ink/80">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-gold/20 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-maroon to-gold font-display text-lg font-bold text-white">
                  {r.avatar}
                </div>
                <div>
                  <div className="font-semibold text-maroon">{r.name}</div>
                  <div className="text-xs text-ink/60">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
