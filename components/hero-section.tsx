"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/morning-dew-forest-herbs-peaceful-dog-cat-natural-.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <Leaf className="w-8 h-8 text-primary" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Healing Begins in Nature.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed text-pretty">
            Holistic care. Gentle remedies. Pure love for pets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group text-lg px-8 py-6"
            >
              <Link href="/remedies">
                Explore Remedies
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6"
            >
              <Link href="/wellness">
                Learn the Holistic Approach <Leaf className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
