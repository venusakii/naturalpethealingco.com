import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Sparkles, Sun } from "lucide-react"

export const metadata = {
  title: "Holistic Wellness Guide | Natural Pet Healing Co",
  description: "Learn about our holistic approach to pet wellness and natural healing methods.",
}

export default function WellnessPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-secondary/20 to-background py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              The Holistic Approach
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Understanding natural wellness for your beloved companions
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Philosophy</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  At Natural Pet Healing Co, we believe that true wellness comes from working with nature, not against
                  it. Every remedy we create is rooted in centuries of herbal wisdom, combined with modern veterinary
                  science.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our holistic approach treats the whole animal—body, mind, and spirit—using gentle, natural ingredients
                  that support the body's innate healing abilities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <Leaf className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Natural Ingredients</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We use only organic, sustainably-sourced herbs and botanicals with proven healing properties.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <Heart className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Gentle Care</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our remedies work with your pet's body, providing relief without harsh chemicals or side effects.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <Sparkles className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Holistic Healing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We address root causes, not just symptoms, for lasting wellness and vitality.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <Sun className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Proven Results</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Thousands of pet parents trust our remedies for safe, effective natural healing.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
