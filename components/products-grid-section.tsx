"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Flower2, Droplet, Heart, Activity, Leaf, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { products, categories } from "@/lib/products"

const iconMap: Record<string, any> = {
  Leaf,
  Flower2,
  Droplet,
  Heart,
  Activity,
}

export function ProductsGridSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Explore Natural Remedies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Gentle solutions from nature's pharmacy, carefully crafted for your pet's wellbeing
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon]
            return (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.id)}
                className={`${
                  activeCategory === cat.id ? "bg-primary text-primary-foreground" : ""
                } transition-all duration-300`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {cat.name}
              </Button>
            )
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden"
            >
              <Link href={`/remedies/${product.slug}`}>
                <div className="relative h-64 overflow-hidden bg-secondary/20">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
              <CardContent className="p-6">
                <Link href={`/remedies/${product.slug}`}>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.benefits.slice(0, 2).map((benefit, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      <Leaf className="w-3 h-3" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex items-center justify-between">
                
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  View
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
