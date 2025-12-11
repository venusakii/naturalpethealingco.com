import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Natural Pet Healing Co",
  description: "Privacy policy for Natural Pet Healing Co.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-secondary/20 to-background py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8 text-foreground">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We collect information you provide directly to us, such as when you create an account, subscribe to
                    our newsletter, make a purchase, or contact us for support.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This may include your name, email address, postal address, phone number, and payment information.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Process and fulfill your orders</li>
                    <li>Send you promotional communications (with your consent)</li>
                    <li>Respond to your comments and questions</li>
                    <li>Improve our website and products</li>
                    <li>Detect and prevent fraud</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Cookies and Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain
                    information. Cookies are files with small amounts of data that are sent to your browser from a
                    website and stored on your device.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share your
                    information with trusted service providers who assist us in operating our website and conducting our
                    business, as long as they agree to keep this information confidential.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized or unlawful processing, accidental loss, destruction, or damage.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to processing of your information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    7. Changes to This Privacy Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                    new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at
                    privacy@naturalpethealingco.com
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
