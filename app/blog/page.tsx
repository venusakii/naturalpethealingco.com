import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { blogArticles } from "@/lib/blog-articles"

export const metadata = {
  title: "Holistic Pet Wellness Blog | Natural Pet Healing Co",
  description: "Expert insights, natural remedies, and holistic care guides for your beloved pets.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-secondary/20 to-background py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Wellness Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Learn about natural pet care, herbal remedies, and holistic wellness practices
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogArticles.map((article) => (
                <Card
                  key={article.id}
                  className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden bg-secondary/20">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <Link href={`/blog/${article.slug}`}>
                      <h2 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                        {article.title}
                      </h2>
                    </Link>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>
                    <Button asChild variant="link" className="p-0 h-auto text-primary group/btn">
                      <Link href={`/blog/${article.slug}`}>
                        Read Full Article
                        <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
