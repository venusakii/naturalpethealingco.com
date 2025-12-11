"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: "1",
    text: "My rescue cat stopped scratching within two weeks of using their calming balm. Absolutely life-changing!",
    author: "Emma B.",
    location: "UK",
    rating: 5,
    image: "/testimonial-emma-cat-owner-natural-remedy.jpg",
  },
  {
    id: "2",
    text: "The digestive tonic has been a miracle for my senior dog. He's more energetic and happy than ever.",
    author: "James R.",
    location: "USA",
    rating: 5,
    image: "/testimonial-james-dog-owner-holistic-care.jpg",
  },
  {
    id: "3",
    text: "I love that these products are completely natural. My pets are healthier and I have peace of mind.",
    author: "Sophie M.",
    location: "Canada",
    rating: 5,
    image: "/testimonial-sophie-pet-parent-natural-wellness.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real results from pet parents who chose the natural path to wellness
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground leading-relaxed mb-6 italic">{testimonial.text}</p>

                {/* Divider */}
                <div className="h-px bg-border mb-4" />

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
