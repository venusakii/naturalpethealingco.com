import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "About Us | Natural Pet Healing Co",
  description: "Learn about our mission to bring natural, holistic healing to pets everywhere.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <div className="bg-gradient-to-b from-secondary/20 to-background py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Healing from Nature's Heart
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our story began with a simple belief: every pet deserves gentle, natural care
            </p>
          </div>
        </div>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Story</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Natural Pet Healing Co was founded by a team of herbalists and veterinarians who witnessed firsthand
                    the transformative power of natural remedies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    After seeing countless pets struggle with harsh chemical treatments, we knew there had to be a
                    better way. We combined ancient herbal wisdom with modern veterinary science to create remedies that
                    truly heal.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we're proud to serve thousands of pet parents who choose natural wellness for their beloved
                    companions.
                  </p>
                </div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/about-us-story-natural-pet-healing-founders.jpg"
                    alt="Our Story"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Values */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="border-border/50 text-center">
                  <CardContent className="p-8">
                    <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Pure & Natural</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Only organic, sustainably-sourced ingredients in every formula
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 text-center">
                  <CardContent className="p-8">
                    <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Pet-First</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every decision guided by what's best for your pet's wellbeing
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 text-center">
                  <CardContent className="p-8">
                    <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Science-Backed</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Combining herbal tradition with modern research and testing
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Mission */}
              <div className="bg-primary/5 rounded-2xl p-12 text-center border border-primary/20">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  To make natural, holistic pet care accessible to every pet parent, providing gentle remedies that
                  honor the healing power of nature while delivering real, measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
