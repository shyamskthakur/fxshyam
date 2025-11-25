import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, BarChart3, Clock, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { PricingCard } from "@/components/PricingCard";
import { forexPricing } from "@/data/pricingPlans";

const Forex = () => {
  const benefits = [
    "Real-time trading signals with 98% accuracy",
    "24/7 market monitoring and analysis",
    "Expert risk management strategies",
    "Beginner-friendly guidance and support",
    "Advanced technical analysis tools",
    "Daily market insights and forecasts",
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Expert Signals",
      description: "Receive accurate buy and sell alerts backed by professional analysis and proven strategies.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Protect your capital with advanced risk management techniques and smart trading plans.",
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Access deep market insights using advanced data analytics and technical indicators.",
    },
    {
      icon: Clock,
      title: "24/7 Coverage",
      description: "Trade anytime with our around-the-clock monitoring of all major forex sessions.",
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Develop winning strategies with guidance from our team of experienced analysts.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-3 bg-primary/10 rounded-xl mb-6">
              <TrendingUp className="text-primary" size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Forex Signal <span className="text-gradient">Provider</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Receive premium forex signals with expert insights, risk management, and real-time alerts from Fintrex's professional analyst team.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 hover:scale-105 transition-transform">
                Get Signals Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Master the Forex Market</h2>
            <p className="text-muted-foreground text-lg mb-8 text-center">
              The foreign exchange (forex) market is the largest and most liquid financial market in the world, with over $6 trillion traded daily. At Fintrex, we help you navigate this dynamic market with confidence through expert guidance and cutting-edge tools.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">What We Offer</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="gradient-card p-8 rounded-xl border border-border shadow-card"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How Fintrex Signal Service Works</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Sign Up & Get Started</h3>
                  <p className="text-muted-foreground text-lg">
                    Create your account and gain instant access to our signal service. Complete your profile and set your trading preferences to receive personalized signals tailored to your strategy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Receive Expert Signals</h3>
                  <p className="text-muted-foreground text-lg">
                    Get real-time trading signals generated by our team of 20+ professional analysts. Each signal includes entry points, stop loss, take profit levels, and market analysis.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Execute & Monitor Trades</h3>
                  <p className="text-muted-foreground text-lg">
                    Follow our signals to execute trades with confidence. Our risk management strategies help protect your capital while our 24/7 monitoring keeps you informed of market changes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Grow Your Portfolio</h3>
                  <p className="text-muted-foreground text-lg">
                    Track your performance, learn from expert insights, and continuously improve your trading strategy. Join 50,000+ traders achieving consistent profits with Fintrex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Forex Signal Pricing Plans</h2>
            <p className="text-muted-foreground text-lg">
              Choose the plan that best fits your trading goals and experience level
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {forexPricing.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Receive Premium Forex Signals?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who trust Fintrex as their signal provider.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 hover:scale-105 transition-transform">
              Subscribe to Signals
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Forex;
