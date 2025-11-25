import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Globe, Target, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { PricingCard } from "@/components/PricingCard";
import { indicesPricing } from "@/data/pricingPlans";

const Indices = () => {
  const majorIndices = [
    { name: "S&P 500 (US500)", region: "United States", description: "500 largest US companies" },
    { name: "NASDAQ 100 (NAS100)", region: "United States", description: "Top 100 non-financial companies" },
    { name: "Dow Jones (US30)", region: "United States", description: "30 blue-chip US stocks" },
    { name: "FTSE 100 (UK100)", region: "United Kingdom", description: "100 largest UK companies" },
    { name: "DAX 40 (GER40)", region: "Germany", description: "40 major German companies" },
    { name: "CAC 40 (FRA40)", region: "France", description: "40 largest French companies" },
    { name: "Nikkei 225 (JPN225)", region: "Japan", description: "225 top Japanese stocks" },
    { name: "ASX 200 (AUS200)", region: "Australia", description: "200 largest Australian stocks" },
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Markets",
      description: "Access major indices from US, Europe, Asia, and emerging markets with expert analysis.",
    },
    {
      icon: TrendingUp,
      title: "Market Trends",
      description: "Track broad market movements and economic indicators through index trading.",
    },
    {
      icon: Shield,
      title: "Diversified Risk",
      description: "Spread risk across multiple companies with single index positions.",
    },
    {
      icon: Zap,
      title: "High Liquidity",
      description: "Trade the most liquid markets with tight spreads and instant execution.",
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
              <BarChart3 className="text-primary" size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Indices <span className="text-gradient">Trading</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Trade top global indices and diversify your portfolio with our expert research-backed guidance and market intelligence.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary shadow-glow text-lg px-8">
                Start Trading Indices
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Trade the World's Leading Indices</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Stock indices represent the performance of a group of stocks and serve as benchmarks for entire markets or sectors. Trading indices allows you to take positions on overall market movements without selecting individual stocks, offering diversification and reduced single-stock risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="gradient-card p-6 rounded-xl border border-border shadow-card"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Indices Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Major Indices We Cover</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {majorIndices.map((index, idx) => (
                <div 
                  key={idx} 
                  className="gradient-card p-6 rounded-xl border border-border shadow-card"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gradient">{index.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{index.region}</p>
                  <p className="text-xs text-muted-foreground">{index.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Trade Indices with Fintrex?</h2>
            
            <div className="space-y-8">
              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Diversification Made Simple</h3>
                <p className="text-muted-foreground text-lg">
                  Instead of researching and trading dozens of individual stocks, indices give you instant exposure to entire markets. The S&P 500, for example, provides exposure to 500 major US companies with a single trade, automatically diversifying your risk.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Economic Indicators</h3>
                <p className="text-muted-foreground text-lg">
                  Major indices serve as barometers for economic health. Our analysts track GDP reports, employment data, central bank decisions, and corporate earnings to provide you with actionable insights on index movements and trading opportunities.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Lower Volatility</h3>
                <p className="text-muted-foreground text-lg">
                  While individual stocks can be highly volatile, indices smooth out company-specific risks. Poor performance by one company is often offset by strong performance from others, resulting in more stable price movements ideal for strategic trading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Strategies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Indices Trading Strategies</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <Target className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-4">Trend Following</h3>
                <p className="text-muted-foreground">
                  Identify and ride major market trends using technical indicators and momentum analysis. Our signals help you enter at optimal points and manage positions for maximum profit.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <TrendingUp className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-4">Swing Trading</h3>
                <p className="text-muted-foreground">
                  Capitalize on short to medium-term price swings in indices. We provide analysis of support/resistance levels and key reversal patterns for profitable swing trades.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <Shield className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-4">News Trading</h3>
                <p className="text-muted-foreground">
                  React to major economic announcements, earnings seasons, and geopolitical events. Our team monitors news flow and provides rapid analysis for time-sensitive opportunities.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <BarChart3 className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-4">Correlation Analysis</h3>
                <p className="text-muted-foreground">
                  Trade multiple indices based on inter-market relationships. We identify arbitrage opportunities and correlation breakdowns across global markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How We Support Your Index Trading</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Market Analysis</h3>
                  <p className="text-muted-foreground text-lg">
                    Receive comprehensive daily analysis covering all major global indices, including technical setups, economic calendar events, and sentiment indicators.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Trading Signals</h3>
                  <p className="text-muted-foreground text-lg">
                    Get clear buy/sell signals with specific entry points, stop-loss levels, and profit targets. Each signal includes our analysts' rationale and confidence level.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Risk Management</h3>
                  <p className="text-muted-foreground text-lg">
                    Learn and apply professional risk management techniques including position sizing, portfolio allocation, and correlation-based hedging strategies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Performance Tracking</h3>
                  <p className="text-muted-foreground text-lg">
                    Monitor your progress with detailed performance metrics and insights. Our platform helps you track what's working and continuously improve your trading approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Indices Trading Pricing Plans</h2>
            <p className="text-muted-foreground text-lg">
              Choose your plan to start trading global indices
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {indicesPricing.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Trade Global Indices?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders accessing world markets with Fintrex's expert indices trading guidance.
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

export default Indices;
