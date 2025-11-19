import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bitcoin, Shield, TrendingUp, Zap, Lock, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Crypto = () => {
  const features = [
    {
      icon: Bitcoin,
      title: "Multi-Crypto Support",
      description: "Trade Bitcoin, Ethereum, and all major cryptocurrencies with expert guidance.",
    },
    {
      icon: Zap,
      title: "Real-Time Signals",
      description: "Get instant alerts for crypto market opportunities backed by AI analysis.",
    },
    {
      icon: Shield,
      title: "Secure Trading",
      description: "Advanced security measures and risk management for cryptocurrency investments.",
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Deep dive into blockchain trends, DeFi movements, and crypto market dynamics.",
    },
    {
      icon: Lock,
      title: "Portfolio Protection",
      description: "Strategic stop-loss and take-profit recommendations for crypto volatility.",
    },
    {
      icon: BarChart3,
      title: "Technical Indicators",
      description: "Advanced charting tools and indicators specific to cryptocurrency markets.",
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
              <Bitcoin className="text-primary" size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Crypto Trading <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Navigate the digital market confidently with our professional crypto signals and analysis. Trade Bitcoin, Ethereum, and more with expert support.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary shadow-glow text-lg px-8">
                Start Crypto Trading
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Master Cryptocurrency Markets</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Cryptocurrency trading presents unique opportunities and challenges. With 24/7 markets, high volatility, and constant innovation, having expert guidance is essential. Fintrex provides professional crypto analysis, real-time signals, and risk management strategies tailored for digital assets.
            </p>
          </div>

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

      {/* Why Crypto Trading Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Trade Crypto with Fintrex?</h2>
            
            <div className="space-y-8">
              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Expert Crypto Analysis</h3>
                <p className="text-muted-foreground text-lg">
                  Our analysts specialize in cryptocurrency markets, tracking blockchain metrics, on-chain data, and technical patterns unique to digital assets. We provide insights on major cryptocurrencies including Bitcoin, Ethereum, and emerging altcoins.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">24/7 Market Monitoring</h3>
                <p className="text-muted-foreground text-lg">
                  Unlike traditional markets, crypto never sleeps. Our team monitors global crypto exchanges around the clock, ensuring you never miss critical market movements or trading opportunities across different time zones.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Risk Management for Volatility</h3>
                <p className="text-muted-foreground text-lg">
                  Cryptocurrency markets are known for extreme volatility. We provide specialized risk management strategies including position sizing, stop-loss recommendations, and portfolio diversification advice to protect your capital in this dynamic environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Crypto Trading Approach</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-xl font-semibold mb-4">Technical Analysis</h3>
                <p className="text-muted-foreground">
                  Advanced charting, pattern recognition, and indicator analysis specifically calibrated for crypto market behavior and volatility.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-xl font-semibold mb-4">Fundamental Research</h3>
                <p className="text-muted-foreground">
                  Deep analysis of blockchain projects, tokenomics, development activity, and market adoption trends.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-xl font-semibold mb-4">Sentiment Analysis</h3>
                <p className="text-muted-foreground">
                  Monitoring social media, news sentiment, and whale movements to gauge market psychology and potential trends.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-xl font-semibold mb-4">On-Chain Metrics</h3>
                <p className="text-muted-foreground">
                  Tracking network activity, transaction volumes, and other blockchain-specific data for informed decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Trade Cryptocurrency?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the digital revolution with expert guidance from Fintrex's crypto trading specialists.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary shadow-glow text-lg px-8">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Crypto;
