import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import FeaturedCollection from "@/components/FeaturedCollection";
import Craftsmanship from "@/components/Craftsmanship";
import WhyGildedPaw from "@/components/WhyGildedPaw";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <FeaturedCollection />
      <Craftsmanship />
      <WhyGildedPaw />
      <Newsletter />
      <Footer />
    </main>
  );
}