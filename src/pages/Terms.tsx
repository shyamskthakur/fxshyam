import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Terms and <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Fintrex Forex Solutions ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") govern your use of our website, services, and trading signals provided through our platform. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
              </p>
            </div>

            {/* Definitions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Definitions</h2>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li><strong className="text-foreground">"Services"</strong> refers to all trading signals, market analysis, research reports, and related content provided by Fintrex Forex Solutions.</li>
                <li><strong className="text-foreground">"User"</strong> refers to any individual or entity accessing our platform or subscribing to our services.</li>
                <li><strong className="text-foreground">"Signals"</strong> refers to trading recommendations, entry/exit points, and market analysis provided by our team of experts.</li>
                <li><strong className="text-foreground">"Subscription"</strong> refers to the paid membership plans that grant access to our premium services.</li>
              </ul>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fintrex Forex Solutions is a professional signal provider offering trading signals and market analysis for Forex, Cryptocurrency, Comex, and Indices markets. Our services include:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>Daily trading signals with entry, stop-loss, and take-profit levels</li>
                <li>Real-time market analysis and insights</li>
                <li>Technical and fundamental research reports</li>
                <li>Customer support via email and phone</li>
                <li>Educational resources and market updates</li>
              </ul>
            </div>

            {/* Risk Disclaimer */}
            <div className="mb-12 p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Risk Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-destructive">IMPORTANT:</strong> Trading in financial markets involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results. You should carefully consider your investment objectives, level of experience, and risk appetite before making any trading decisions.
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>Trading signals are provided for informational purposes only and do not constitute financial advice.</li>
                <li>We do not guarantee any profits or specific results from using our signals.</li>
                <li>You are solely responsible for your trading decisions and any resulting gains or losses.</li>
                <li>Never invest money you cannot afford to lose.</li>
                <li>We recommend consulting with a licensed financial advisor before making investment decisions.</li>
              </ul>
            </div>

            {/* User Obligations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. User Obligations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">By using our services, you agree to:</p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not share, resell, or redistribute our signals to third parties</li>
                <li>Use our services only for lawful purposes</li>
                <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                <li>Not attempt to reverse-engineer, copy, or replicate our trading strategies</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </div>

            {/* Subscription and Payment */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Subscription and Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our services are offered through various subscription plans. By subscribing:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>You agree to pay the applicable subscription fees as displayed on our website</li>
                <li>Payments are processed securely through authorized payment providers</li>
                <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
                <li>All fees are non-refundable unless otherwise stated in our refund policy</li>
                <li>We reserve the right to modify pricing with prior notice to subscribers</li>
                <li>Access to services begins upon successful payment confirmation</li>
              </ul>
            </div>

            {/* Refund Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Due to the digital nature of our services and immediate delivery of trading signals:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>Refund requests must be submitted within 7 days of purchase</li>
                <li>Refunds are evaluated on a case-by-case basis</li>
                <li>No refunds will be issued for partial subscription periods</li>
                <li>Chargebacks or payment disputes may result in immediate account termination</li>
                <li>Contact our support team for refund inquiries</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, including but not limited to trading signals, analysis reports, website design, logos, graphics, and text, is the exclusive property of Fintrex Forex Solutions. Unauthorized reproduction, distribution, or modification of our content is strictly prohibited and may result in legal action. Users are granted a limited, non-exclusive, non-transferable license to access and use our services for personal, non-commercial purposes only.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>Fintrex Forex Solutions shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services</li>
                <li>We are not responsible for trading losses, missed opportunities, or any financial damages</li>
                <li>Our total liability shall not exceed the amount paid by you for our services in the preceding 12 months</li>
                <li>We do not guarantee uninterrupted or error-free service delivery</li>
                <li>We are not liable for delays or failures caused by circumstances beyond our control</li>
              </ul>
            </div>

            {/* Privacy and Data Protection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are committed to protecting your personal information. By using our services:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>You consent to the collection and processing of your personal data as described in our Privacy Policy</li>
                <li>We implement industry-standard security measures to protect your information</li>
                <li>We do not sell or share your personal data with third parties for marketing purposes</li>
                <li>You have the right to access, correct, or delete your personal information</li>
                <li>We may use cookies and similar technologies to enhance your experience</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your access to our services at any time, with or without cause, including but not limited to violation of these Terms, fraudulent activity, or non-payment. Upon termination, your right to use our services ceases immediately. You may also terminate your subscription at any time by contacting our support team.
              </p>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any modifications constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically for any changes.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE. You agree to submit to the personal jurisdiction of such courts.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12 p-6 bg-primary/10 border border-primary/20 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Company:</strong> Fintrex Forex Solutions</li>
                <li><strong className="text-foreground">Address:</strong> Ras Al Khaimah, Dubai, UAE</li>
                <li><strong className="text-foreground">Phone:</strong> +447476699112</li>
                <li><strong className="text-foreground">Email:</strong> support@fintrexforexsolution.com</li>
              </ul>
            </div>

            {/* Acknowledgment */}
            <div className="p-6 bg-muted/30 border border-border rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Acknowledgment</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these Terms, please do not use our services.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
