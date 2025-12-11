"use client"

import Link from "next/link"
import { Search, ShoppingCart, Menu, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Leaf className="w-6 h-6 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-serif text-xl lg:text-2xl font-semibold text-foreground">Natural Pet Healing Co</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/remedies"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Remedies
            </Link>
            <Link
              href="/wellness"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Wellness
            </Link>
            <Link href="/blog" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:bg-primary/10"
            >
              <Search className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <ShoppingCart className="w-5 h-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden hover:bg-primary/10">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-in fade-in slide-in-from-top-2">
            <input
              type="search"
              placeholder="Search for natural remedies..."
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              autoFocus
            />
          </div>
        )}
      </div>
    </header>
  )
}
