export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top, #c9a14a 0%, transparent 50%), radial-gradient(ellipse at bottom, #7a1f3d 0%, transparent 50%)",
        }}
      />
      {/* Top border accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold">
                <span className="font-display text-3xl font-bold text-gold">
                  K
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-3xl tracking-wider">
                  Kum Kum
                </span>
                <span className="text-xs uppercase tracking-[0.4em] text-gold">
                  Fashion
                </span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              Kerala's most trusted destination for premium Indian ethnic
              wear. Crafting elegance, celebrating tradition, since 2010.
            </p>

            {/* Newsletter */}
            <div className="rounded-2xl border border-gold/30 bg-white/5 p-5 backdrop-blur-sm">
              <h5 className="mb-1 font-display text-lg text-gold">
                ✦ The Insider ✦
              </h5>
              <p className="mb-3 text-xs text-white/60">
                Get first access to new collections & exclusive offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-full border border-gold/30 bg-ink/50 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none"
                />
                <button
                  type="button"
                  data-cursor-hover
                  className="rounded-r-full bg-gold px-5 py-3 text-sm font-bold text-ink transition-all hover:bg-white"
                  aria-label="Subscribe"
                >
                  ✦
                </button>
              </form>
            </div>
          </div>

          {/* Shop */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 font-display text-lg text-gold">Shop</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                "Bridal Lehengas",
                "Silk Sarees",
                "Kurti Sets",
                "Anarkali Suits",
                "Men's Collection",
                "Jewelry",
                "New Arrivals",
              ].map((l) => (
                <li key={l}>
                  <a
                    href="#collection"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-gold"
                  >
                    <span className="h-px w-0 bg-gold transition-all group-hover:w-3" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 font-display text-lg text-gold">Services</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                "Custom Stitching",
                "Bridal Trousseau",
                "Personal Styling",
                "Alterations",
                "Wholesale",
                "Gift Cards",
              ].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-gold"
                  >
                    <span className="h-px w-0 bg-gold transition-all group-hover:w-3" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="mb-5 font-display text-lg text-gold">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Kum Kum Fashion
                  <br />
                  Kasaragod, Kerala, India
                </span>
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+919876543210" className="hover:text-gold">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <a href="mailto:hello@kumkumfashion.in" className="hover:text-gold">
                  hello@kumkumfashion.in
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {[
                {
                  name: "Instagram",
                  path: "M16 4H8C5.79 4 4 5.79 4 8v8c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 14a2 2 0 100-4 2 2 0 000 4z",
                },
                {
                  name: "Facebook",
                  path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                },
                {
                  name: "Pinterest",
                  path: "M12 2C6.48 2 2 6.48 2 12c0 4.25 2.67 7.9 6.44 9.34-.09-.78-.17-1.99.04-2.85.19-.78 1.21-4.97 1.21-4.97s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.46 0 .89-.57 2.22-.86 3.45-.25 1.04.52 1.89 1.54 1.89 1.85 0 3.27-1.95 3.27-4.77 0-2.49-1.79-4.24-4.35-4.24-2.96 0-4.7 2.22-4.7 4.52 0 .89.34 1.85.77 2.37.08.1.1.19.07.29-.08.32-.26 1.04-.29 1.18-.05.19-.15.23-.35.14-1.31-.61-2.13-2.52-2.13-4.06 0-3.31 2.41-6.35 6.94-6.35 3.64 0 6.48 2.6 6.48 6.07 0 3.62-2.28 6.54-5.45 6.54-1.06 0-2.07-.55-2.41-1.21l-.66 2.5c-.24.92-.88 2.07-1.31 2.77.99.31 2.03.47 3.12.47 5.52 0 10-4.48 10-10S17.52 2 12 2z",
                },
                {
                  name: "YouTube",
                  path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z",
                },
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  data-cursor-hover
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-all hover:rotate-12 hover:bg-gold hover:text-ink"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill={s.name === "Pinterest" ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Kum Kum Fashion. All rights reserved.
          </p>
          <p className="hidden sm:block italic">
            Crafted with <span className="text-gold">♥</span> in Kerala, India
          </p>

          {/* Built with WebMorph badge */}
          <a
            href="https://webmorph-studio-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition-all hover:border-gold hover:bg-white/10"
            aria-label="Built with WebMorph Studio"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 group-hover:text-white/80">
              Built with
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-gold to-maroon">
              <svg
                className="h-3 w-3 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </span>
            <span className="font-display text-sm font-semibold tracking-wide text-white group-hover:text-gold">
              WebMorph
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-gold/80">
              Studio
            </span>
            <svg
              className="h-3 w-3 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:text-gold"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
