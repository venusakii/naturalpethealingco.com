export interface BlogArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  readTime: string
  category: string
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    slug: "natural-flea-remedies-truth",
    title: "The Truth About Natural Flea Remedies",
    excerpt: "Discover which natural flea prevention methods actually work and how to protect your pet safely.",
    image: "/natural-flea-remedy-article-herbal-pet-care.jpg",
    author: "Dr. Sarah Green",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Skin Care",
  },
  {
    id: "2",
    slug: "diy-herbal-tea-pet-anxiety",
    title: "DIY Herbal Tea for Pet Anxiety",
    excerpt: "Learn how to brew calming herbal teas that can help soothe your anxious pet naturally.",
    image: "/diy-herbal-tea-pet-anxiety-natural-calming.jpg",
    author: "Emma Thompson",
    date: "2025-01-10",
    readTime: "7 min read",
    category: "Wellness",
  },
  {
    id: "3",
    slug: "essential-oils-dogs-safety",
    title: "Essential Oils for Dogs — What's Safe?",
    excerpt: "A comprehensive guide to using essential oils safely around your canine companions.",
    image: "/essential-oils-dogs-safety-guide-natural-care.jpg",
    author: "Dr. Michael Chen",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Safety",
  },
]
