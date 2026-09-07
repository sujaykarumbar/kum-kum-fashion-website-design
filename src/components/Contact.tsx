import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      {/* Decorative element */}
      <div
        className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-32 bottom-20 h-64 w-64 rounded-full bg-maroon/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.5em] text-gold">
            ✦ Get In Touch ✦
          </p>
          <h2 className="font-display text-5xl text-maroon sm:text-6xl lg:text-7xl">
            <span className="block">Visit Our</span>
            <span className="block italic gold-gradient-text">Boutique</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-ink/70">
            Step into a world of elegance. Walk-ins are always welcome, and
            appointments get priority service.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-4 lg:col-span-2">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                title: "Store Address",
                lines: ["Kum Kum Fashion", "Kasaragod, Kerala", "India - 671121"],
                link: "https://maps.google.com/?q=12.7603175,75.2049739",
              },
              {
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
                title: "Phone & WhatsApp",
                lines: ["+91 98765 43210", "Quick response guaranteed"],
                link: "tel:+919876543210",
              },
              {
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                title: "Store Hours",
                lines: ["Mon – Sat: 9:30 AM – 9:00 PM", "Sunday: 10:00 AM – 8:00 PM"],
                link: null,
              },
              {
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                ),
                title: "Email Us",
                lines: ["hello@kumkumfashion.in", "Replies within 24 hours"],
                link: "mailto:hello@kumkumfashion.in",
              },
            ].map((c) => {
              const Wrapper = c.link ? "a" : "div";
              return (
                <Wrapper
                  key={c.title}
                  href={c.link || undefined}
                  target={c.link?.startsWith("http") ? "_blank" : undefined}
                  rel={c.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor-hover
                  className="group flex gap-4 rounded-2xl border border-gold/20 bg-white p-5 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-maroon/20 text-maroon transition-all group-hover:scale-110 group-hover:from-gold group-hover:to-maroon group-hover:text-white">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-maroon">
                      {c.title}
                    </h4>
                    {c.lines.map((l) => (
                      <p key={l} className="text-sm text-ink/70">
                        {l}
                      </p>
                    ))}
                  </div>
                </Wrapper>
              );
            })}

            {/* Social */}
            <div className="pt-4">
              <p className="mb-3 text-xs uppercase tracking-widest text-ink/60">
                Follow Us
              </p>
              <div className="flex gap-3">
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
                    className="group flex h-11 w-11 items-center justify-center rounded-full border-2 border-maroon text-maroon transition-all hover:rotate-12 hover:bg-maroon hover:text-white"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill={s.name === "Pinterest" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form + Map */}
          <div className="lg:col-span-3 space-y-6">
            <div className="rounded-2xl bg-white p-8 shadow-2xl sm:p-10">
              <h3 className="mb-2 font-display text-3xl text-maroon">
                Send Us a Message
              </h3>
              <p className="mb-8 text-sm text-ink/60">
                Have a question or want to book a private styling session?
                We'd love to hear from you.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-10 w-10 text-green-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <h4 className="font-display text-2xl text-maroon">
                    Opening WhatsApp...
                  </h4>
                  <p className="mt-2 max-w-sm text-sm text-ink/60">
                    Your message is being sent to our WhatsApp. Complete the
                    send on your phone and our team will reply shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-semibold uppercase tracking-widest text-gold hover:text-maroon"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    const name = (data.get("name") as string) || "";
                    const phone = (data.get("phone") as string) || "";
                    const email = (data.get("email") as string) || "";
                    const interest =
                      (data.get("interest") as string) || "Not specified";
                    const message =
                      (data.get("message") as string) ||
                      "I'd like to know more about your collection.";

                    const text =
                      `*New Inquiry from Kum Kum Fashion Website*%0A%0A` +
                      `*Name:* ${name}%0A` +
                      `*Phone:* ${phone}%0A` +
                      `*Email:* ${email}%0A` +
                      `*Looking For:* ${interest}%0A%0A` +
                      `*Message:*%0A${message}`;

                    const whatsappNumber = "919876543210";
                    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
                    window.open(url, "_blank", "noopener,noreferrer");
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-ink/60">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Priya Sharma"
                        className="w-full rounded-lg border border-gold/30 bg-cream/50 px-4 py-3 text-sm text-ink placeholder-ink/30 transition-all focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-ink/60">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-gold/30 bg-cream/50 px-4 py-3 text-sm text-ink placeholder-ink/30 transition-all focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-ink/60">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@email.com"
                      className="w-full rounded-lg border border-gold/30 bg-cream/50 px-4 py-3 text-sm text-ink placeholder-ink/30 transition-all focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-ink/60">
                      Looking For
                    </label>
                    <select
                      name="interest"
                      className="w-full rounded-lg border border-gold/30 bg-cream/50 px-4 py-3 text-sm text-ink/80 transition-all focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
                    >
                      <option>What are you looking for?</option>
                      <option>Bridal Lehenga</option>
                      <option>Silk Saree</option>
                      <option>Kurti Suit Set</option>
                      <option>Anarkali / Gown</option>
                      <option>Men's Sherwani</option>
                      <option>Jewelry</option>
                      <option>Custom Stitching</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-ink/60">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your requirements, occasion, budget..."
                      className="w-full rounded-lg border border-gold/30 bg-cream/50 px-4 py-3 text-sm text-ink placeholder-ink/30 transition-all focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
                    />
                  </div>
                  <button
                    type="submit"
                    data-cursor-hover
                    className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-green-600 to-green-700 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-all hover:shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Send via WhatsApp
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-green-500 to-green-600 transition-transform duration-500 group-hover:translate-x-0" />
                  </button>
                  <p className="text-center text-[10px] uppercase tracking-widest text-ink/50">
                    You'll be redirected to WhatsApp to complete sending
                  </p>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                title="Kum Kum Fashion Location"
                src="https://www.google.com/maps?q=12.7603175,75.2049739&hl=en&z=15&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=12.7603175,75.2049739"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-maroon shadow-lg transition-all hover:bg-gold hover:text-ink"
              >
                Get Directions
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
