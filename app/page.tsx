import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/home/hero-section"
import AwardsSection from "@/components/home/awards-section"
import ExpertiseSection from "@/components/home/expertise-section"
import FeaturedProducts from "@/components/home/featured-products"
import CTASection from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AwardsSection />
        <ExpertiseSection />
        <FeaturedProducts />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
