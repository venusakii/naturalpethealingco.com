"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const healers = [
  {
    id: "1",
    name: "Dr. Olivia Martinez",
    title: "Holistic Veterinarian",
    image: "/healer-dr-sarah-green-holistic-vet.jpg",
    bio: "15 years of experience combining traditional veterinary care with herbal medicine",
  },
  {
    id: "2",
    name: "Luna Rosewood",
    title: "Master Herbalist",
    image: "/healer-emma-thompson-master-herbalist.jpg",
    bio: "Certified herbalist specializing in pet wellness and natural remedy formulation",
  },
  {
    id: "3",
    name: "Dr. James River",
    title: "Veterinary Researcher",
    image: "/healer-dr-michael-chen-vet-researcher.jpg",
    bio: "Research focused on integrating herbal treatments with modern veterinary science",
  },
]

export function HealersSection() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Meet the Healers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're herbalists, animal lovers, and caregivers devoted to natural wellness
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {healers.map((healer) => (
            <Card
              key={healer.id}
              className="group border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-secondary/20">
                <Image
                  src={healer.image || "/placeholder.svg"}
                  alt={healer.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{healer.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{healer.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{healer.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
