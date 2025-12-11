"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flower2, Sun, Leaf, Snowflake } from "lucide-react"

const seasons = [
  {
    id: "spring",
    name: "Spring",
    icon: Flower2,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    description: "Detox tonics for renewal and vitality",
    remedies: ["Dandelion Root Tonic", "Milk Thistle Cleanse", "Spring Greens Blend"],
  },
  {
    id: "summer",
    name: "Summer",
    icon: Sun,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    description: "Cooling sprays to beat the heat",
    remedies: ["Peppermint Cooling Mist", "Aloe Vera Spray", "Hydration Support"],
  },
  {
    id: "autumn",
    name: "Autumn",
    icon: Leaf,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    description: "Immune tonics for changing seasons",
    remedies: ["Elderberry Boost", "Mushroom Immunity", "Vitamin C Complex"],
  },
  {
    id: "winter",
    name: "Winter",
    icon: Snowflake,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    description: "Warming oils for comfort and care",
    remedies: ["Ginger Warming Oil", "Joint Support Blend", "Respiratory Relief"],
  },
]

export function WellnessBySeasonSection() {
  const [activeSeason, setActiveSeason] = useState(seasons[0])

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Wellness by Season
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Nature's rhythms guide our care. Discover seasonal remedies for your pet's changing needs.
          </p>
        </div>

        {/* Season Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {seasons.map((season) => {
            const Icon = season.icon
            return (
              <Button
                key={season.id}
                variant={activeSeason.id === season.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveSeason(season)}
                className={`${
                  activeSeason.id === season.id ? "bg-primary text-primary-foreground" : ""
                } transition-all duration-300`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {season.name}
              </Button>
            )
          })}
        </div>

        {/* Active Season Content */}
        <div className="max-w-4xl mx-auto">
          <Card
            className={`${activeSeason.bgColor} border-none shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500`}
          >
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className={`${activeSeason.color} animate-float`}>
                  {(() => {
                    const Icon = activeSeason.icon
                    return <Icon className="w-16 h-16" />
                  })()}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-3xl font-bold text-foreground mb-4">{activeSeason.name}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{activeSeason.description}</p>
                  <div className="space-y-3">
                    {activeSeason.remedies.map((remedy, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Leaf className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{remedy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
