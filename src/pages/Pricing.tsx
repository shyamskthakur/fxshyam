import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      period: "/month",
      description: "Perfect for beginners getting started with trading signals",
      features: [
        "5-10 Forex signals per week",
        "Basic market analysis",
        "Email signal delivery",
        "Trading education resources",
        "Community forum access",
        "24/7 customer support"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Most popular plan for serious traders",
      features: [
        "15-20 signals daily (Forex + Crypto)",
        "Advanced technical analysis",
        "Telegram + Email delivery",
        "Live market updates",
        "Risk management guidance",
        "Comex & Indices signals included",
        "Priority customer support",
        "Weekly market webinars"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "VIP",
      price: "$399",
      period: "/month",
      description: "Premium service for professional traders",
      features: [
        "30+ signals daily (All markets)",
        "Real-time signal notifications",
        "One-on-one analyst sessions",
        "Personalized trading strategies",
        "VIP Telegram group access",
        "Copy trading access",
        "Advanced risk calculator",
        "Market sentiment analysis",
        "Performance tracking dashboard",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes, we offer a 14-day money-back guarantee on all plans. If you're not satisfied, we'll refund your payment."
    },
    {
      question: "What markets do your signals cover?",
      answer: "We provide signals for Forex, Cryptocurrencies, Commodities (Comex), and major Indices across all our plans."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
              Choose the perfect plan for your trading journey. All plans include access to our expert signals and analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative gradient-card border-border hover:scale-105 transition-all ${
                  plan.popular ? 'border-primary border-2 shadow-glow' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Star size={16} fill="currentColor" />
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-primary" size={14} />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      className={`w-full ${plan.popular ? 'gradient-primary shadow-glow' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">All Plans Include</h2>
            <p className="text-muted-foreground text-lg">Core features available in every subscription</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Delivery</h3>
              <p className="text-muted-foreground">Instant signal notifications via your preferred channel</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Analysis</h3>
              <p className="text-muted-foreground">Every signal backed by professional market research</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock customer support for all members</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Trading Smarter?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders using our signals. Start with a 14-day money-back guarantee.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 hover:scale-105 transition-transform">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
