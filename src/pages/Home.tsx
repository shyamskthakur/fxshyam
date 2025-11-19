import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsSection } from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, BarChart3, Bitcoin, Coins, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-forex.jpg";

const Home = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Forex Trading",
      description: "Trade global currencies with expert insights, risk management, and real-time signals.",
      href: "/services/forex",
    },
    {
      icon: Bitcoin,
      title: "Crypto Trading",
      description: "Navigate the digital market confidently with our professional crypto signals and analysis.",
      href: "/services/crypto",
    },
    {
      icon: Coins,
      title: "Comex Trading",
      description: "Gain access to gold, silver, and commodity markets with precise entry and exit strategies.",
      href: "/services/comex",
    },
    {
      icon: BarChart3,
      title: "Indices Trading",
      description: "Trade top global indices and diversify your portfolio with our expert research-backed guidance.",
      href: "/services/indices",
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Best Forex Trading Signals",
      description: "Receive accurate, AI-driven buy and sell alerts from our expert analysts and maximize your trading potential every day.",
    },
    {
      icon: Shield,
      title: "Risk Management Strategies",
      description: "Protect your capital with proven risk management techniques and smart trading plans designed to reduce losses and increase consistency.",
    },
    {
      icon: BarChart3,
      title: "Market Research Methods",
      description: "Our professional team uses advanced data analytics and technical tools to study global market trends and forecast profitable opportunities.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
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
              Empowering Traders Worldwide with{" "}
              <span className="text-gradient animate-shimmer bg-[length:200%_100%]">Expert Signals</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              Start your journey with Fintrex Forex Solutions – a trusted global forex broker providing accurate trading signals, market research, and risk management strategies for beginners and professionals alike.
            </p>
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Fintrex?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine technology, intelligence, and global market insights to help you make smarter trading decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="gradient-card p-8 rounded-xl border border-border shadow-card animate-slide-up opacity-0 [animation-fill-mode:forwards] hover:scale-105 hover:shadow-glow transition-all duration-300 group" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="text-primary group-hover:animate-pulse" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Empowering traders with world-class forex solutions, expert signals, and strategic market insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="animate-slide-up opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="group hover:scale-105 hover:-rotate-1 transition-all duration-300">
                  <ServiceCard {...service} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-scale-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Ready to Start Trading Smarter?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
            Partner with Fintrex Forex Solutions and take your trading journey to the next level.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 hover:scale-110 transition-all duration-300 animate-pulse-glow animate-slide-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
