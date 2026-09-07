import Navbar from "./components/Navbar";
import PremiumHero from "./components/PremiumHero";
import AwardsRibbon from "./components/AwardsRibbon";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import PremiumLookbook from "./components/PremiumLookbook";
import SplitShowcase from "./components/SplitShowcase";
import About from "./components/About";
import VideoSection from "./components/VideoSection";
import PremiumTestimonials from "./components/PremiumTestimonials";
import Contact from "./components/Contact";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <PremiumHero />
      <AwardsRibbon />
      <Banner />
      <Collection />
      <SplitShowcase />
      <PremiumLookbook />
      <About />
      <VideoSection />
      <PremiumTestimonials />
      <CTASection />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
