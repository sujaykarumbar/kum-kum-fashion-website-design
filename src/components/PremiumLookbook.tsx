import { useState } from "react";

const lookbookImages = [
  {
    url: "https://images.pexels.com/photos/4048041/pexels-photo-4048041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Rose Couture",
    category: "Bridal Edit",
    price: "₹24,999",
  },
  {
    url: "https://images.pexels.com/photos/15906956/pexels-photo-15906956.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Saffron Whisper",
    category: "Saree",
    price: "₹18,499",
  },
  {
    url: "https://images.pexels.com/photos/35108767/pexels-photo-35108767.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Ivory Grace",
    category: "Anarkali",
    price: "₹32,999",
  },
  {
    url: "https://images.pexels.com/photos/28517477/pexels-photo-28517477.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Midnight Blue",
    category: "Designer Saree",
    price: "₹21,999",
  },
  {
    url: "https://images.pexels.com/photos/7486649/pexels-photo-7486649.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Vermillion Bloom",
    category: "Traditional",
    price: "₹15,499",
  },
  {
    url: "https://images.pexels.com/photos/12959396/pexels-photo-12959396.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Crimson Royal",
    category: "Bridal Lehenga",
    price: "₹89,999",
  },
  {
    url: "https://images.pexels.com/photos/12411105/pexels-photo-12411105.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Scarlet Bride",
    category: "Bridal Couture",
    price: "₹1,24,999",
  },
  {
    url: "https://images.pexels.com/photos/12791932/pexels-photo-12791932.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Crimson Heritage",
    category: "Wedding",
    price: "₹95,999",
  },
  {
    url: "https://images.pexels.com/photos/14205210/pexels-photo-14205210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Forest Mist",
    category: "Designer Drape",
    price: "₹19,999",
  },
  {
    url: "https://images.pexels.com/photos/28405815/pexels-photo-28405815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Rustic Charm",
    category: "Heritage",
    price: "₹27,499",
  },
  {
    url: "https://images.pexels.com/photos/30809730/pexels-photo-30809730.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Sunshine Bloom",
    category: "Kurti",
    price: "₹4,499",
  },
  {
    url: "https://images.pexels.com/photos/37523793/pexels-photo-37523793.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Garden Rouge",
    category: "Casual Kurti",
    price: "₹3,999",
  },
  {
    url: "https://images.pexels.com/photos/12713395/pexels-photo-12713395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Maharaja",
    category: "Men's Sherwani",
    price: "₹45,999",
  },
  {
    url: "https://images.pexels.com/photos/2060241/pexels-photo-2060241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Jodhpuri Royal",
    category: "Men's Suit",
    price: "₹28,999",
  },
  {
    url: "https://images.pexels.com/photos/3998093/pexels-photo-3998093.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Ivory Achkan",
    category: "Men's Festive",
    price: "₹22,999",
  },
  {
    url: "https://images.pexels.com/photos/7188384/pexels-photo-7188384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=900",
    title: "Regal Groom",
    category: "Wedding",
    price: "₹52,999",
  },
];

const categories = ["All", "Bridal Couture", "Saree", "Anarkali", "Kurti", "Men's Collection"];

export default function PremiumLookbook() {
  const [activeCat, setActiveCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = lookbookImages.filter((img) => {
    if (activeCat === "All") return true;
    if (activeCat === "Bridal Couture")
      return img.category.includes("Bridal") || img.category === "Wedding";
    if (activeCat === "Men's Collection")
      return img.category.includes("Men") || img.category === "Wedding" && img.title.includes("Groom");
    return img.category.toLowerCase().includes(activeCat.toLowerCase());
  });

  return (
    <section
      id="lookbook"
      className="relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-gold">
            ✦ The Lookbook ✦
          </p>
          <h2 className="mb-6 font-display text-5xl text-maroon sm:text-6xl lg:text-7xl">
            <span className="block">A Visual</span>
            <span className="block italic gold-gradient-text">Masterpiece</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-ink/70">
            Step into our curated world of premium ethnic wear. Each piece is a
            work of art, handpicked for the modern connoisseur.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                activeCat === c
                  ? "border-maroon bg-maroon text-white"
                  : "border-maroon/30 text-maroon hover:border-maroon hover:bg-maroon/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Premium grid - Bento style */}
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {filtered.map((img, i) => {
            // Bento pattern
            const colSpan =
              [2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2][i % 16] || 1;
            const rowSpan =
              [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1][i % 16] || 1;
            void colSpan; void rowSpan;

            return (
              <button
                key={`${img.title}-${i}`}
                onClick={() => setLightbox(i)}
                data-cursor-hover
                className={`group relative overflow-hidden rounded-2xl bg-ink shadow-md transition-all duration-700 hover:shadow-2xl ${
                  colSpan === 2 ? "md:col-span-2" : "col-span-1"
                } ${rowSpan === 2 ? "row-span-2" : "row-span-1"}`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />

                {/* Top-right category */}
                <div className="absolute top-3 right-3 rounded-full glass-dark px-3 py-1 text-[9px] font-semibold uppercase tracking-widest text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  {img.category}
                </div>

                {/* Center zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-ink/40 backdrop-blur-md">
                    <svg
                      className="h-6 w-6 text-gold"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-gold/80">
                    {img.category}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-white">
                    {img.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-xs text-white/70">
                    <span className="h-px w-6 bg-gold" />
                    <span>From {img.price}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-md animate-fade-in"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold/50 text-gold transition-all hover:border-gold hover:bg-gold hover:text-ink"
            aria-label="Close"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + filtered.length) % filtered.length);
            }}
            className="absolute left-6 z-10 hidden h-12 w-12 items-center justify-center rounded-full border-2 border-gold/50 text-gold transition-all hover:border-gold hover:bg-gold hover:text-ink md:flex"
            aria-label="Previous"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % filtered.length);
            }}
            className="absolute right-6 z-10 hidden h-12 w-12 items-center justify-center rounded-full border-2 border-gold/50 text-gold transition-all hover:border-gold hover:bg-gold hover:text-ink md:flex"
            aria-label="Next"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-5xl animate-scale-in overflow-hidden rounded-2xl bg-ink shadow-2xl"
          >
            <img
              src={filtered[lightbox].url}
              alt={filtered[lightbox].title}
              className="h-full max-h-[80vh] w-full object-contain"
            />
            <div className="border-t border-gold/20 bg-ink p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                {filtered[lightbox].category}
              </p>
              <h3 className="mt-2 font-display text-3xl">
                {filtered[lightbox].title}
              </h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-display text-xl text-gold">
                  From {filtered[lightbox].price}
                </span>
                <a
                  href="#contact"
                  onClick={() => setLightbox(null)}
                  className="rounded-full bg-gold px-6 py-2 text-xs font-semibold uppercase tracking-widest text-ink transition-all hover:bg-white"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
