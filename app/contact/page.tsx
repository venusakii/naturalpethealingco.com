import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata = {
  title: "Contact Us | Natural Pet Healing Co",
  description: "Get in touch with our team. We're here to help with all your pet wellness questions.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-secondary/20 to-background py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have questions? We'd love to hear from you
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                          placeholder="Tell us about your pet's needs..."
                        />
                      </div>

                      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      We're here to answer your questions and help you find the perfect natural remedy for your pet.
                    </p>
                  </div>

                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email</h3>
                          <p className="text-muted-foreground">support@naturalpethealingco.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                          <p className="text-muted-foreground">1-800-PET-HEAL</p>
                          <p className="text-sm text-muted-foreground">Mon-Fri, 9am-5pm EST</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Address</h3>
                          <p className="text-muted-foreground">123 Healing Grove Lane</p>
                          <p className="text-muted-foreground">Green Valley, CA 94000</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 3:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
