"use client"

import { Sparkles, Heart, Leaf } from "lucide-react"

export function ScienceOfCalmSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/5 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-[15%] w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-[20%] w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse delay-75" />
        <div className="absolute bottom-1/3 left-[25%] w-2.5 h-2.5 bg-primary/40 rounded-full animate-pulse delay-150" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              The Science of Calm
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We combine herbal wisdom with modern veterinary research
            </p>
          </div>

          {/* Visual Timeline */}
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10 border-4 border-background">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Stress Detected</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Your pet experiences anxiety, discomfort, or imbalance
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10 border-4 border-background">
                    <Leaf className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Herbal Blend</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Natural remedies work gently with your pet's body
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10 border-4 border-background">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Relaxation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Balance restored, wellness achieved naturally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
