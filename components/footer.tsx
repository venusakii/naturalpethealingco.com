"use client"

import Link from "next/link"
import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Footer() {
  const [showCookieBanner, setShowCookieBanner] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowCookieBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowCookieBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowCookieBanner(false)
  }

  return (
    <footer className="bg-secondary/30 border-t border-border/50 mt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-serif text-2xl lg:text-3xl mb-4 text-foreground">Heal Naturally. Love Fully.</h3>
          <p className="text-muted-foreground mb-6">Get natural tips for your pet's well-being</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/remedies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Remedies
                </Link>
              </li>
              <li>
                <Link
                  href="/remedies?category=skin"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Skin & Coat
                </Link>
              </li>
              <li>
                <Link
                  href="/remedies?category=digestion"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Digestion
                </Link>
              </li>
              <li>
                <Link
                  href="/remedies?category=anxiety"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Anxiety & Calm
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Learn</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/wellness" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Wellness Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Philosophy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 NaturalPetHealingCo.com — All rights reserved.</p>
          
        </div>
      </div>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-card border border-border rounded-lg shadow-lg p-4 z-50">
          <p className="text-sm text-foreground mb-3">
            This site uses cookies to keep tails wagging and experiences gentle.
          </p>
          <div className="flex gap-2">
            <Button
              size="sm"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleAccept}
            >
              Accept
            </Button>
            <Button size="sm" variant="outline" className="flex-1 bg-transparent" onClick={handleDecline}>
              Decline
            </Button>
          </div>
        </div>
      )}
    </footer>
  )
}
