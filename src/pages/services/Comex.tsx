import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Coins, TrendingUp, Shield, BarChart3, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Comex = () => {
  const commodities = [
    {
      name: "Gold (XAU)",
      description: "Trade the world's most precious metal with expert analysis of geopolitical factors and market trends.",
    },
    {
      name: "Silver (XAG)",
      description: "Capitalize on silver's dual role as both precious metal and industrial commodity.",
    },
    {
      name: "Crude Oil",
      description: "Navigate energy markets with insights into supply, demand, and global economic factors.",
    },
    {
      name: "Natural Gas",
      description: "Trade natural gas futures with analysis of seasonal patterns and production data.",
    },
    {
      name: "Copper",
      description: "Follow industrial metal trends with our comprehensive market intelligence.",
    },
    {
      name: "Platinum & Palladium",
      description: "Access specialized analysis for these rare and valuable precious metals.",
    },
  ];

  const features = [
    {
      icon: Coins,
      title: "Precious Metals",
      description: "Expert guidance on gold, silver, platinum, and palladium trading with technical and fundamental analysis.",
    },
    {
      icon: TrendingUp,
      title: "Energy Commodities",
      description: "Navigate oil and gas markets with insights into OPEC decisions, inventory reports, and geopolitical events.",
    },
    {
      icon: Shield,
      title: "Hedging Strategies",
      description: "Protect your portfolio against inflation and market volatility with commodity trading.",
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Access real-time data on supply, demand, and global economic factors affecting commodity prices.",
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
              <Coins className="text-primary" size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Comex <span className="text-gradient">Commodity Trading</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Gain access to gold, silver, and commodity markets with precise entry and exit strategies from our expert analysts.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary shadow-glow text-lg px-8">
                Start Trading Commodities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Trade Global Commodities</h2>
            <p className="text-muted-foreground text-lg mb-12">
              The commodity markets offer unique opportunities for diversification and profit. From precious metals like gold and silver to energy commodities like oil and natural gas, Fintrex provides expert analysis and trading signals to help you navigate these complex markets with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

      {/* Commodities We Cover Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Commodities We Cover</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commodities.map((commodity, index) => (
                <div 
                  key={index} 
                  className="gradient-card p-6 rounded-xl border border-border shadow-card"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Sparkles className="text-warning" size={24} />
                    <h3 className="text-xl font-semibold">{commodity.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{commodity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Trade Commodities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Trade Commodities?</h2>
            
            <div className="space-y-8">
              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Inflation Hedge</h3>
                <p className="text-muted-foreground text-lg">
                  Commodities, especially precious metals, have historically served as a hedge against inflation and currency devaluation. When paper currencies lose value, tangible assets like gold and silver often maintain or increase their worth.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Portfolio Diversification</h3>
                <p className="text-muted-foreground text-lg">
                  Commodities typically have low correlation with stocks and bonds, making them excellent diversification tools. Adding commodities to your portfolio can help reduce overall risk and improve returns during market volatility.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Global Economic Indicators</h3>
                <p className="text-muted-foreground text-lg">
                  Commodity prices reflect global supply and demand dynamics, geopolitical events, and economic trends. Trading commodities gives you exposure to macroeconomic forces and opportunities to profit from global market movements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How Fintrex Helps You Trade Commodities</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technical Analysis</h4>
                    <p className="text-muted-foreground">Chart patterns, support/resistance levels, and momentum indicators for precise entry and exit points.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fundamental Research</h4>
                    <p className="text-muted-foreground">Analysis of supply/demand, inventory reports, production data, and geopolitical factors.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Market Intelligence</h4>
                    <p className="text-muted-foreground">Real-time updates on OPEC decisions, mining output, weather impacts, and economic indicators.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Risk Management</h4>
                    <p className="text-muted-foreground">Position sizing, stop-loss strategies, and hedging techniques for commodity volatility.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Trading Signals</h4>
                    <p className="text-muted-foreground">Clear buy/sell recommendations with entry points, targets, and stop-loss levels.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Educational Resources</h4>
                    <p className="text-muted-foreground">Learn commodity trading fundamentals and advanced strategies from our experts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Trade Commodities?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Diversify your portfolio with expert commodity trading guidance from Fintrex.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary shadow-glow text-lg px-8">
              Start Trading Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Comex;
