import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms & Conditions | Natural Pet Healing Co",
  description: "Terms and conditions for using Natural Pet Healing Co services and products.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-secondary/20 to-background py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8 text-foreground">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using NaturalPetHealingCo.com, you accept and agree to be bound by the terms and
                    provision of this agreement. If you do not agree to these terms, please do not use our website.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Product Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All products sold through our website are natural herbal remedies. While we strive to provide
                    accurate product information, we do not guarantee that product descriptions or other content is
                    accurate, complete, reliable, current, or error-free.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our products are not intended to diagnose, treat, cure, or prevent any disease. Always consult with
                    a veterinarian before using any new product with your pet.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Amazon Affiliate Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Natural Pet Healing Co is a participant in the Amazon Services LLC Associates Program, an affiliate
                    advertising program designed to provide a means for sites to earn advertising fees by advertising
                    and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Use License</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Permission is granted to temporarily access the materials on Natural Pet Healing Co's website for
                    personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                    title.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials on Natural Pet Healing Co's website are provided on an 'as is' basis. Natural Pet
                    Healing Co makes no warranties, expressed or implied, and hereby disclaims and negates all other
                    warranties including, without limitation, implied warranties or conditions of merchantability,
                    fitness for a particular purpose, or non-infringement of intellectual property or other violation of
                    rights.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Limitations</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall Natural Pet Healing Co or its suppliers be liable for any damages (including,
                    without limitation, damages for loss of data or profit, or due to business interruption) arising out
                    of the use or inability to use the materials on Natural Pet Healing Co's website.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms & Conditions, please contact us at
                    support@naturalpethealingco.com
                  </p>
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
