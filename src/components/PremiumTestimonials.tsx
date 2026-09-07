import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride, Kasaragod",
    avatar: "P",
    text: "Kum Kum Fashion made my wedding shopping absolutely magical. Their bridal lehenga collection is unmatched and the staff helped me find my dream outfit within budget. Truly a 5-star experience!",
    rating: 5,
    image: "https://images.pexels.com/photos/12411105/pexels-photo-12411105.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Anjali Menon",
    role: "Fashion Blogger",
    avatar: "A",
    text: "I've been shopping here for years — for festivals, family functions and casual kurtis. The quality, variety and warm service keep me coming back. Best boutique in town!",
    rating: 5,
    image: "https://images.pexels.com/photos/4048041/pexels-photo-4048041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Lakshmi Iyer",
    role: "Mother of Bride",
    avatar: "L",
    text: "The personal attention and styling advice we received was exceptional. They helped coordinate outfits for the entire family. The tailoring service is also top-notch.",
    rating: 5,
    image: "https://images.pexels.com/photos/12959396/pexels-photo-12959396.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Meera Krishnan",
    role: "Software Engineer",
    avatar: "M",
    text: "I ordered a custom kurti set and it arrived beautifully packaged. The fit was absolutely perfect! The team kept me updated throughout. Highly recommend!",
    rating: 5,
    image: "https://images.pexels.com/photos/30809730/pexels-photo-30809730.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Riya Pillai",
    role: "Wedding Planner",
    avatar: "R",
    text: "As a wedding planner, I recommend Kum Kum Fashion to all my clients. Their collection is curated beautifully and the staff understands every client's unique needs.",
    rating: 5,
    image: "https://images.pexels.com/photos/35108767/pexels-photo-35108767.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
];

export default function PremiumTestimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-ink via-[#2a1620] to-ink py-24 text-white sm:py-32"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #c9a14a 0%, transparent 40%), radial-gradient(circle at 80% 70%, #7a1f3d 0%, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.5em] text-gold">
            ✦ Testimonials ✦
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl">
            <span className="block">Loved by</span>
            <span className="block italic gold-gradient-text">Thousands</span>
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Image side */}
          <div className="relative lg:col-span-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              {testimonials.map((tm, i) => (
                <img
                  key={i}
                  src={tm.image}
                  alt={tm.name}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    i === active ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-display text-3xl">{t.name}</div>
                <div className="text-sm text-gold">{t.role}</div>
              </div>
            </div>
            {/* Decorative gold frame */}
            <div className="absolute -inset-4 -z-10 rounded-2xl border border-gold/30" />
          </div>

          {/* Quote side */}
          <div className="lg:col-span-3">
            <svg
              className="mb-6 h-16 w-16 text-gold/40"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>

            <div className="mb-6 flex gap-1 text-gold">
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg
                  key={i}
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <p
              key={t.name}
              className="font-display text-2xl leading-relaxed text-white/90 sm:text-3xl lg:text-4xl animate-fade-in"
            >
              "{t.text}"
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-maroon font-display text-2xl text-white">
                {t.avatar}
              </div>
              <div>
                <div className="font-display text-xl text-white">{t.name}</div>
                <div className="text-sm text-gold">{t.role}</div>
              </div>
            </div>

            {/* Indicators */}
            <div className="mt-10 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 transition-all ${
                    i === active ? "w-12 bg-gold" : "w-6 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
