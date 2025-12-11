import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, ShoppingCart, Heart, Share2, Star, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/products"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} | Natural Pet Healing Co`,
    description: product.description,
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Product Hero */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-background shadow-lg">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Natural Remedy</span>
                </div>

                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(127 reviews)</span>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{product.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="font-serif text-4xl font-bold text-foreground">${product.price}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mb-8">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                {/* Benefits */}
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Key Benefits:</h3>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Product Information Tabs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-border/50">
                <CardContent className="p-8 text-center">
                  <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Herbal Composition</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    100% organic herbs sourced from sustainable farms. No artificial additives or preservatives.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-8 text-center">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Recommended Use</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Apply or administer as directed. Safe for daily use. Consult your vet for specific needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-8 text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Energy Properties</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Promotes balance and harmony. Supports natural healing processes with gentle, calming energy.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* User Testimonials */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">What Pet Parents Say</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 italic">
                      "This product has been a game-changer for my anxious rescue dog. Highly recommend!"
                    </p>
                    <p className="text-sm text-muted-foreground">- Lisa M.</p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 italic">
                      "Natural, effective, and my cat actually doesn't mind it. Perfect solution!"
                    </p>
                    <p className="text-sm text-muted-foreground">- David R.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Amazon Affiliate Link */}
            <div className="bg-secondary/20 rounded-2xl p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Ready to Begin Healing?</h3>
              <p className="text-muted-foreground mb-6">Available now on Amazon with fast, free shipping</p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy on Amazon
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                As an Amazon Associate, we earn from qualifying purchases
              </p>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-secondary/10">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">You May Also Like</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {relatedProducts.map((relatedProduct) => (
                  <Card key={relatedProduct.id} className="border-border/50 hover:shadow-lg transition-all">
                    <Link href={`/remedies/${relatedProduct.slug}`}>
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                    <CardContent className="p-6">
                      <Link href={`/remedies/${relatedProduct.slug}`}>
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                          {relatedProduct.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-4">{relatedProduct.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-xl font-bold text-foreground">${relatedProduct.price}</span>
                        <Button size="sm" asChild>
                          <Link href={`/remedies/${relatedProduct.slug}`}>View</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
