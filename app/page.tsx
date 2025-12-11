import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ProductsGridSection } from "@/components/products-grid-section"
import { FeaturedBlendsSection } from "@/components/featured-blends-section"
import { EducationHubSection } from "@/components/education-hub-section"
import { ScienceOfCalmSection } from "@/components/science-of-calm-section"
import { HealersSection } from "@/components/healers-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WellnessBySeasonSection } from "@/components/wellness-by-season"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ProductsGridSection />
        <FeaturedBlendsSection />
        <EducationHubSection />
        <ScienceOfCalmSection />
        <HealersSection />
        <TestimonialsSection />
        <WellnessBySeasonSection />
      </main>
      <Footer />
    </div>
  )
}
