const items = [
  {
    img: "/images/collection-1.jpg",
    title: "Bridal Lehengas",
    desc: "Exquisite bridal collection with intricate zari & thread work",
    tag: "Bestseller",
  },
  {
    img: "/images/collection-2.jpg",
    title: "Kurti Suit Sets",
    desc: "Elegant everyday & festive kurti sets in premium fabrics",
    tag: "Trending",
  },
  {
    img: "/images/collection-3.jpg",
    title: "Silk Sarees",
    desc: "Handpicked Kanchipuram, Banarasi & designer silk sarees",
    tag: "Premium",
  },
  {
    img: "/images/collection-4.jpg",
    title: "Anarkali Gowns",
    desc: "Flowy floor-length anarkalis for weddings & receptions",
    tag: "New",
  },
  {
    img: "/images/collection-5.jpg",
    title: "Men's Sherwani",
    desc: "Royal sherwanis & indo-western suits for the groom",
    tag: "Wedding",
  },
  {
    img: "/images/collection-6.jpg",
    title: "Traditional Jewelry",
    desc: "Bridal & festive jewelry sets to complete your look",
    tag: "Handpicked",
  },
  {
    img: "/images/collection-7.jpg",
    title: "Banarasi Sarees",
    desc: "Pure Banarasi silk sarees with rich gold zari brocade work",
    tag: "Heritage",
  },
  {
    img: "/images/collection-8.jpg",
    title: "Kanjeevaram Silk",
    desc: "Authentic South Indian Kanjeevaram sarees in vibrant hues",
    tag: "Classic",
  },
];

const stockItems = [
  {
    img: "https://images.pexels.com/photos/4048041/pexels-photo-4048041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    title: "Designer Saree Collection",
    desc: "Contemporary designer sarees for the modern Indian woman",
    tag: "Hot",
  },
  {
    img: "https://images.pexels.com/photos/15906956/pexels-photo-15906956.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    title: "Festive Sarees",
    desc: "Vibrant festive sarees perfect for every celebration",
    tag: "Festive",
  },
  {
    img: "https://images.pexels.com/photos/35108767/pexels-photo-35108767.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    title: "Cocktail Lehengas",
    desc: "Trendy cocktail lehengas for sangeet & reception nights",
    tag: "New",
  },
  {
    img: "https://images.pexels.com/photos/28517477/pexels-photo-28517477.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    title: "Party Wear Sarees",
    desc: "Glamorous party wear sarees with modern drapes",
    tag: "Glam",
  },
  {
    img: "https://images.pexels.com/photos/7486649/pexels-photo-7486649.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    title: "Traditional Half Sarees",
    desc: "Classic half sarees for engagements & pujas",
    tag: "Traditional",
  },
  {
    img: "https://images.pexels.com/photos/12959396/pexels-photo-12959396.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    title: "Heavy Bridal Lehenga",
    desc: "Heavy embroidered bridal lehengas for the big day",
    tag: "Bridal",
  },
  {
    img: "https://images.pexels.com/photos/12411105/pexels-photo-12411105.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    title: "Red Bridal Collection",
    desc: "Timeless red bridal wear with intricate craftsmanship",
    tag: "Royal",
  },
  {
    img: "https://images.pexels.com/photos/12791932/pexels-photo-12791932.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    title: "Wedding Trousseau",
    desc: "Complete bridal trousseau sets for every occasion",
    tag: "Complete",
  },
  {
    img: "https://images.pexels.com/photos/14205210/pexels-photo-14205210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    title: "Saree Drapes",
    desc: "Perfect drapes for elegant traditional occasions",
    tag: "Elegant",
  },
  {
    img: "https://images.pexels.com/photos/28405815/pexels-photo-28405815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    title: "Heritage Collection",
    desc: "Handpicked heritage pieces inspired by Indian royalty",
    tag: "Vintage",
  },
];

export default function Collection() {
  return (
    <section
      id="collection"
      className="relative bg-cream py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-gold">
            ✦ Our Collection ✦
          </p>
          <h2 className="font-display text-4xl font-semibold text-maroon sm:text-5xl lg:text-6xl">
            Curated for Every Occasion
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-ink/70">
            From everyday elegance to bridal grandeur — explore our
            handcrafted ethnic wear collection, designed to make every moment
            memorable.
          </p>
        </div>

        {/* Featured curated collection */}
        <div className="mb-20">
          <h3 className="mb-8 text-center font-display text-2xl font-semibold text-maroon sm:text-left">
            <span className="divider-ornate">Signature Pieces</span>
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90" />
                  <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    {item.tag}
                  </span>
                  <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/0 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:bg-white/95 group-hover:opacity-100">
                    <svg
                      className="h-4 w-4 text-maroon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-maroon">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/70">{item.desc}</p>
                  <button className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:text-maroon">
                    View Details
                    <span className="h-px w-6 bg-current transition-all group-hover:w-10" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extended gallery */}
        <div>
          <h3 className="mb-8 text-center font-display text-2xl font-semibold text-maroon sm:text-left">
            <span className="divider-ornate">Trending Now</span>
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {stockItems.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-gold px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white">
                    {item.tag}
                  </span>
                  <div className="absolute right-3 top-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full bg-white/0 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:bg-white/95 group-hover:opacity-100">
                    <svg
                      className="h-3.5 w-3.5 text-maroon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="font-display text-lg font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-white/80 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-maroon px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-ink hover:shadow-2xl"
          >
            Book a Personal Visit
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
