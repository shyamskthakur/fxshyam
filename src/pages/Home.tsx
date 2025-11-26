import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsSection } from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, BarChart3, Bitcoin, Coins, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-forex.jpg";
import { TradingViewWidget, MarketOverviewWidget } from "@/components/TradingViewWidget";
import { HomePricingSection } from "@/components/HomePricingSection";
const Home = () => {
  const services = [{
    icon: TrendingUp,
    title: "Forex Signals",
    description: "Receive accurate real-time forex signals with entry points, stop loss, and take profit levels from expert analysts.",
    href: "/services/forex"
  }, {
    icon: Bitcoin,
    title: "Crypto Signals",
    description: "Navigate the digital market confidently with our professional crypto signals and technical analysis.",
    href: "/services/crypto"
  }, {
    icon: Coins,
    title: "Comex Signals",
    description: "Get precise commodity signals for gold, silver, and metals with clear entry and exit strategies.",
    href: "/services/comex"
  }, {
    icon: BarChart3,
    title: "Indices Signals",
    description: "Trade global indices confidently with our expert research-backed signals and market insights.",
    href: "/services/indices"
  }];
  const features = [{
    icon: TrendingUp,
    title: "Premium Trading Signals",
    description: "Receive high-accuracy buy and sell signals from our 20+ expert analysts. Each signal includes entry, stop loss, and take profit levels."
  }, {
    icon: Shield,
    title: "Professional Risk Management",
    description: "Every signal comes with proven risk management strategies to protect your capital and maximize consistent profits."
  }, {
    icon: BarChart3,
    title: "Advanced Market Analysis",
    description: "Get access to daily market research, technical analysis, and forecasts powered by advanced data analytics and expert insights."
  }];
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105" style={{
          backgroundImage: `url(${heroImage})`
        }}>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Expert Forex Signal Provider for{" "}
              <span className="text-gradient animate-shimmer bg-[length:200%_100%]">Smart Traders</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">Join Fintrex Forex Solution – your trusted global signal provider delivering accurate trading signals, deep market research, and professional risk management for traders worldwide.</p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 hover:scale-105 transition-transform duration-300 animate-pulse-glow">
                  Get Started
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Why Choose Fintrex Signal Provider?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We deliver premium trading signals powered by expert analysis, advanced technology, and 10+ years of market intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={index} className="gradient-card p-8 rounded-xl border border-border shadow-card animate-slide-up opacity-0 [animation-fill-mode:forwards] hover:scale-105 hover:shadow-glow transition-all duration-300 group" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="text-primary group-hover:animate-pulse" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Signal Showcase Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">Live Market Analysis</h2>
            <MarketOverviewWidget />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">Professional Signal Analysis</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our expert team analyzes market data 24/7 to deliver precise trading signals with high accuracy rates. Every signal includes complete trade details and risk management parameters.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground">Real-time signal delivery via multiple channels</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground">Detailed entry, stop loss, and take profit levels</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground">Risk-reward ratio analysis for every trade</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <TradingViewWidget symbol="FX:EURUSD" height={450} />
            </div>
          </div>

          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Signal Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Premium trading signals across multiple markets, all backed by expert analysis and proven strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => <div key={index} className="animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="group hover:scale-105 hover:-rotate-1 transition-all duration-300">
                  <ServiceCard {...service} />
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1 animate-fade-in">
              <TradingViewWidget symbol="BINANCE:BTCUSDT" height={450} />
            </div>
            <div className="order-1 lg:order-2 animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">Expert Analysts, Professional Signals</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our team of 20+ professional analysts brings over 10 years of combined experience. We monitor global markets 24/7 to identify the best trading opportunities and deliver signals with 98% accuracy.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 gradient-card rounded-xl border border-border hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-gradient mb-2">20+</div>
                  <div className="text-muted-foreground">Expert Analysts</div>
                </div>
                <div className="text-center p-6 gradient-card rounded-xl border border-border hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                  <div className="text-muted-foreground">Signal Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <HomePricingSection />

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-scale-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Start Receiving Premium Signals Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
            Join 50,000+ traders who trust Fintrex for professional trading signals and market intelligence.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 hover:scale-110 transition-all duration-300 animate-pulse-glow animate-slide-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;