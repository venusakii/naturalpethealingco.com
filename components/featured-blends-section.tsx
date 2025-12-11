"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ShoppingCart, Sparkles } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { featuredProducts, categories } from "@/lib/products"

export function FeaturedBlendsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
  }

  const currentProduct = featuredProducts[currentIndex]

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary/10 via-background to-secondary/10">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-glow" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Featured Collection</span>
            <Sparkles className="w-6 h-6 text-primary animate-glow" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Holistic Healing Blends
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our most beloved remedies, crafted with care and backed by nature's wisdom
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <Card className="border-none shadow-2xl overflow-hidden bg-card">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 md:h-auto">
                <Image
                  src={currentProduct.image || "/placeholder.svg"}
                  alt={currentProduct.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {categories.find((c) => c.id === currentProduct.category)?.name || "Natural Remedy"}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {currentProduct.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{currentProduct.description}</p>

                {/* Benefits */}
                <div className="space-y-2 mb-8">
                  {currentProduct.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center gap-4">
                  
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1">
                    <Link href={`/remedies/${currentProduct.slug}`}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full hover:bg-primary/10 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {featuredProducts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? "bg-primary w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full hover:bg-primary/10 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Shop All Link */}
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/remedies">Shop the Healing Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
