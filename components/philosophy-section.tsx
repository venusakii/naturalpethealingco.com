"use client"

import { Leaf } from "lucide-react"

export function PhilosophySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url('/botanical-herb-pattern-illustration.jpg')`,
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8 animate-breathe">
            <Leaf className="w-8 h-8 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance">
            Our Philosophy
          </h2>

          {/* Description */}
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              At Natural Pet Healing Co, we believe every ailment has a gentle, natural answer.
            </p>
            <p className="text-pretty font-semibold text-foreground">
              Our mission: healing through harmony, not chemicals.
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="h-px w-24 bg-border" />
            <Leaf className="w-6 h-6 text-primary" />
            <div className="h-px w-24 bg-border" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-[10%] w-32 h-32 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-[10%] w-40 h-40 rounded-full bg-secondary/30 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
    </section>
  )
}
