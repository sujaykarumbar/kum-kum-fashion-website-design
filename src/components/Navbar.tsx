import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#collection", label: "Collection" },
    { href: "#lookbook", label: "Lookbook" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-xl shadow-lg border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#home" className="group flex items-center gap-3" data-cursor-hover>
          <div className="relative">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-500 group-hover:rotate-12 ${
                scrolled ? "border-maroon" : "border-gold"
              }`}
            >
              <span
                className={`font-display text-2xl font-bold ${
                  scrolled ? "text-maroon" : "text-gold"
                }`}
              >
                K
              </span>
            </div>
            <div className="absolute -inset-1 rounded-full border border-gold/30 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`font-display text-2xl tracking-wider transition-colors ${
                scrolled ? "text-maroon" : "text-white"
              }`}
            >
              Kum Kum
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.4em] ${
                scrolled ? "text-gold" : "text-gold/90"
              }`}
            >
              Fashion
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`group relative text-xs font-semibold tracking-[0.25em] uppercase transition-colors hover:text-gold ${
                  scrolled ? "text-ink" : "text-white"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+919876543210"
            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all hover:scale-110 ${
              scrolled
                ? "border-maroon text-maroon hover:bg-maroon hover:text-white"
                : "border-gold/60 text-gold hover:bg-gold hover:text-ink"
            }`}
            aria-label="Call us"
            data-cursor-hover
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </a>
          <a
            href="#contact"
            className={`rounded-full border-2 px-7 py-3 text-xs font-semibold uppercase tracking-[0.25em] transition-all ${
              scrolled
                ? "border-maroon text-maroon hover:bg-maroon hover:text-white"
                : "border-gold text-gold hover:bg-gold hover:text-ink"
            }`}
            data-cursor-hover
          >
            Book Visit
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden"
          data-cursor-hover
        >
          <div className="space-y-2">
            <span
              className={`block h-[2px] w-7 transition-all ${
                scrolled ? "bg-maroon" : "bg-white"
              } ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-[2px] w-7 transition-all ${
                scrolled ? "bg-maroon" : "bg-white"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-7 transition-all ${
                scrolled ? "bg-maroon" : "bg-white"
              } ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream/98 backdrop-blur-xl border-t border-gold/30">
          <ul className="flex flex-col gap-1 px-6 py-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-xs font-semibold tracking-[0.25em] uppercase text-ink hover:text-maroon"
                >
                  ✦ {l.label}
                </a>
              </li>
            ))}
            <li className="mt-4 flex gap-3">
              <a
                href="tel:+919876543210"
                className="flex-1 rounded-full border-2 border-maroon py-3 text-center text-xs font-semibold uppercase tracking-widest text-maroon"
              >
                Call
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-maroon py-3 text-center text-xs font-semibold uppercase tracking-widest text-white"
              >
                Book Visit
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
