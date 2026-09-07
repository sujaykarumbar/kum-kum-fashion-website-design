export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-maroon via-ink to-maroon py-24 sm:py-32">
      {/* Animated gold gradient overlay */}
      <div
        className="absolute inset-0 animate-gradient opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #c9a14a 0%, #7a1f3d 25%, #c9a14a 50%, #7a1f3d 75%, #c9a14a 100%)",
        }}
      />
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0, transparent 20px, rgba(201, 161, 74, 0.3) 20px, rgba(201, 161, 74, 0.3) 21px)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.5em] text-gold">
          ✦ Your Dream Outfit Awaits ✦
        </p>
        <h2 className="font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
          Book Your <span className="italic gold-gradient-text">Private</span>
          <br />
          Styling Session
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Skip the crowds. Enjoy an exclusive one-on-one consultation with our
          designers in our premium private suite. Complimentary for all bridal
          bookings.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+919876543210"
            className="group inline-flex items-center gap-3 bg-gold px-10 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition-all hover:bg-white hover:shadow-2xl"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call Now
          </a>
          <a
            href="https://wa.me/919876543210"
            className="group inline-flex items-center gap-3 border-2 border-gold bg-transparent px-10 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-ink"
          >
            WhatsApp Us
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
            </svg>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-gold/30 pt-10 sm:grid-cols-4">
          {[
            { n: "5000+", l: "Brides" },
            { n: "4.9★", l: "Google Rating" },
            { n: "1000+", l: "Designs" },
            { n: "15+", l: "Years" },
          ].map((s) => (
            <div key={s.l} className="text-white">
              <div className="font-display text-3xl text-gold sm:text-4xl">
                {s.n}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/70">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
