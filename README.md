# Kum Kum Fashion — Premium Website

A premium, full-featured website for **Kum Kum Fashion** — Kerala's premier destination for bridal lehengas, silk sarees, kurtis, anarkalis, men's sherwanis and bespoke ethnic wear.

Built with **React**, **Vite**, **Tailwind CSS**, and custom Google Fonts (Italiana + Cormorant Garamond + Inter).

---

## ✨ Features

- 🎨 **Premium design** — Royal maroon, gold, cream, and ink palette
- 🎬 **Cinematic hero** with Ken Burns effect and auto-rotating slides
- 🖼️ **Bento-style lookbook** with category filters and full-screen lightbox
- 💬 **WhatsApp integration** — form submissions open WhatsApp with pre-filled message
- 📍 **Embedded Google Map** with the store's exact location
- 📱 **Fully responsive** — works on mobile, tablet, and desktop
- ✨ **Custom animations** — fade-up, shimmer, marquee, scroll progress, custom cursor
- 🏆 **Awards ribbon** with infinite scrolling showcase
- 🎥 **Video section** placeholder for behind-the-scenes content
- 💌 **Newsletter** signup
- 📞 **Click-to-call & WhatsApp** floating buttons

---

## 🚀 Deploy to Vercel

### Option 1: One-Click Deploy

1. Push this code to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel will auto-detect it's a Vite project
5. Click **Deploy** 🎉

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to your Vercel account
vercel login

# Deploy (from the project root)
vercel

# For production deployment
vercel --prod
```

### Option 3: Drag & Drop

1. Run `npm run build` locally
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag the `dist/` folder into Vercel
4. Done! ✨

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ⚙️ Configuration

### Update the WhatsApp Number

In `src/components/Contact.tsx`, change:

```ts
const whatsappNumber = "919876543210"; // Replace with actual number
```

Also update in:
- `src/components/FloatingButtons.tsx`
- `src/components/Navbar.tsx`
- `src/components/CTASection.tsx`
- `src/components/Footer.tsx`

### Update Store Information

- **Address, phone, hours, email** — `src/components/Contact.tsx` and `src/components/Footer.tsx`
- **Map location** — Update the `q=` parameter in the Google Maps iframe in `Contact.tsx`
- **Hero images** — Replace files in `public/images/`
- **Brand name** — Search and replace "Kum Kum Fashion" across the codebase

---

## 🧰 Tech Stack

- ⚛️ **React 18** — UI framework
- ⚡ **Vite** — Build tool & dev server
- 🎨 **Tailwind CSS 4** — Utility-first CSS
- 🔤 **Google Fonts** — Italiana, Cormorant Garamond, Inter
- 🖼️ **Pexels CDN** — Stock imagery (free for commercial use)

---

## 📂 Project Structure

```
src/
├── App.tsx              # Main app component
├── main.tsx             # Entry point
├── index.css            # Global styles & Tailwind config
├── components/
│   ├── Navbar.tsx       # Top navigation
│   ├── PremiumHero.tsx  # Cinematic hero with 3 slides
│   ├── AwardsRibbon.tsx # Scrolling awards marquee
│   ├── Banner.tsx       # Trust indicators
│   ├── Collection.tsx   # Product grid (8 categories)
│   ├── SplitShowcase.tsx# Bridal & Men's split sections
│   ├── PremiumLookbook.tsx  # Bento gallery + lightbox
│   ├── About.tsx        # Story section
│   ├── VideoSection.tsx # Process steps
│   ├── PremiumTestimonials.tsx # Testimonial carousel
│   ├── CTASection.tsx   # Call-to-action banner
│   ├── Contact.tsx      # Form + WhatsApp + Map
│   ├── Footer.tsx       # Footer with newsletter
│   ├── FloatingButtons.tsx  # Call & WhatsApp FAB
│   ├── ScrollProgress.tsx   # Top scroll bar
│   └── Cursor.tsx       # Custom gold cursor
└── hooks/
    └── useReveal.ts     # Scroll reveal hook
public/
└── images/              # Static images
```

---

## 📜 License

© Kum Kum Fashion. All rights reserved.

**Crafted with ♥ in Kerala, India** by [WebMorph Studio](https://webmorph-studio-psi.vercel.app/)
