export interface Product {
  id: string
  slug: string
  name: string
  category: string
  description: string
  price: number
  image: string
  benefits: string[]
  amazonLink?: string
}

export const categories = [
  { id: "all", name: "All Remedies", icon: "Leaf" },
  { id: "skin", name: "Skin & Coat", icon: "Flower2" },
  { id: "digestion", name: "Digestion & Detox", icon: "Droplet" },
  { id: "anxiety", name: "Anxiety & Calm", icon: "Heart" },
  { id: "joint", name: "Joint & Mobility", icon: "Activity" },
]

export const products: Product[] = [
  {
    id: "1",
    slug: "calming-lavender-balm",
    name: "Calming Lavender Balm",
    category: "anxiety",
    description: "Soothing herbal balm to ease anxiety and promote relaxation",
    price: 24.99,
    image: "/calming-lavender-balm-natural-pet-remedy.jpg",
    benefits: ["Reduces stress", "Promotes calm", "Natural ingredients"],
  },
  {
    id: "2",
    slug: "digestive-harmony-tonic",
    name: "Digestive Harmony Tonic",
    category: "digestion",
    description: "Gentle herbal blend to support healthy digestion",
    price: 29.99,
    image: "/digestive-harmony-tonic-herbal-pet-supplement.jpg",
    benefits: ["Soothes stomach", "Improves digestion", "Detox support"],
  },
  {
    id: "3",
    slug: "shiny-coat-oil-blend",
    name: "Shiny Coat Oil Blend",
    category: "skin",
    description: "Nourishing oils for lustrous fur and healthy skin",
    price: 19.99,
    image: "/shiny-coat-oil-blend-natural-pet-grooming.jpg",
    benefits: ["Glossy coat", "Skin health", "Anti-itch"],
  },
  {
    id: "4",
    slug: "joint-support-formula",
    name: "Joint Support Formula",
    category: "joint",
    description: "Herbal formula to ease stiffness and improve mobility",
    price: 34.99,
    image: "/joint-support-formula-natural-pet-mobility.jpg",
    benefits: ["Reduces inflammation", "Improves mobility", "Pain relief"],
  },
  {
    id: "5",
    slug: "immune-boost-mushroom-blend",
    name: "Immune Boost Mushroom Blend",
    category: "digestion",
    description: "Medicinal mushroom blend to strengthen immunity",
    price: 39.99,
    image: "/immune-boost-mushroom-blend-natural-pet-wellness.jpg",
    benefits: ["Immune support", "Vitality boost", "Organic"],
  },
  {
    id: "6",
    slug: "peaceful-sleep-spray",
    name: "Peaceful Sleep Spray",
    category: "anxiety",
    description: "Calming mist for restful nights and peaceful sleep",
    price: 22.99,
    image: "/peaceful-sleep-spray-natural-pet-calming.jpg",
    benefits: ["Better sleep", "Reduces restlessness", "Safe for daily use"],
  },
  {
    id: "7",
    slug: "herbal-flea-prevention",
    name: "Herbal Flea Prevention",
    category: "skin",
    description: "Natural flea deterrent with essential oils",
    price: 27.99,
    image: "/herbal-flea-prevention-natural-pet-protection.jpg",
    benefits: ["Repels fleas", "Chemical-free", "Pleasant scent"],
  },
  {
    id: "8",
    slug: "elder-vitality-tonic",
    name: "Elder Vitality Tonic",
    category: "joint",
    description: "Herbal support for senior pets' energy and wellbeing",
    price: 32.99,
    image: "/elder-vitality-tonic-senior-pet-natural-care.jpg",
    benefits: ["Energy boost", "Cognitive support", "Joint health"],
  },
  {
    id: "9",
    slug: "gentle-ear-cleanse",
    name: "Gentle Ear Cleanse",
    category: "skin",
    description: "Soothing herbal solution for clean, healthy ears",
    price: 18.99,
    image: "/gentle-ear-cleanse-natural-pet-hygiene.jpg",
    benefits: ["Prevents infection", "Soothes irritation", "Easy to use"],
  },
]

export const featuredProducts = products.slice(0, 4)
