import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsGridSection } from "@/components/products-grid-section"

export const metadata = {
  title: "Natural Pet Remedies | Natural Pet Healing Co",
  description:
    "Explore our collection of gentle, herbal remedies for pets. Natural solutions for skin, digestion, anxiety, and mobility.",
}

export default function RemediesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-secondary/20 to-background py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Natural Remedies
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover gentle, herbal solutions crafted with love for your pet's wellbeing
            </p>
          </div>
        </div>
        <ProductsGridSection />
      </main>
      <Footer />
    </div>
  )
}
