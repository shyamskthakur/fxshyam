import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MarketInsights = () => {
  const latestInsights = [
    {
      title: "Forex Trading for Beginners: Complete 2025 Guide",
      category: "Education",
      date: "March 15, 2025",
      excerpt: "Learn the fundamentals of forex trading including currency pairs, market hours, and essential strategies for new traders.",
      trend: "up",
    },
    {
      title: "Risk Management Strategies Every Trader Needs",
      category: "Strategy",
      date: "March 12, 2025",
      excerpt: "Discover proven techniques to protect your capital and minimize losses while maximizing trading opportunities.",
      trend: "neutral",
    },
    {
      title: "Best Forex Trading Signals: What Makes Them Accurate?",
      category: "Signals",
      date: "March 10, 2025",
      excerpt: "Understand how professional analysts generate high-accuracy trading signals and what factors contribute to their success.",
      trend: "up",
    },
    {
      title: "Understanding Forex Market Hours and Trading Sessions",
      category: "Education",
      date: "March 8, 2025",
      excerpt: "Master the art of timing your trades by understanding global forex market hours and optimal trading sessions.",
      trend: "neutral",
    },
    {
      title: "Market Research Methods: Tools Professionals Use",
      category: "Analysis",
      date: "March 5, 2025",
      excerpt: "Explore advanced data analytics and technical tools that professional traders use to forecast market movements.",
      trend: "up",
    },
    {
      title: "Crypto Market Trends: What to Watch in 2025",
      category: "Crypto",
      date: "March 3, 2025",
      excerpt: "Analysis of emerging cryptocurrency trends, blockchain developments, and market opportunities for digital asset traders.",
      trend: "up",
    },
  ];

  const marketTrends = [
    {
      pair: "EUR/USD",
      change: "+0.85%",
      direction: "up",
      signal: "Bullish momentum continues",
    },
    {
      pair: "GBP/USD",
      change: "+0.42%",
      direction: "up",
      signal: "Breaking resistance at 1.2750",
    },
    {
      pair: "USD/JPY",
      change: "-0.31%",
      direction: "down",
      signal: "Correction expected",
    },
    {
      pair: "BTC/USD",
      change: "+2.15%",
      direction: "up",
      signal: "Strong buyer interest",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Market <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Stay updated with expert analysis, trading strategies, and the latest trends in forex, crypto, and global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Live Market Trends */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Today's Market Trends</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {marketTrends.map((trend, index) => (
              <Card key={index} className="gradient-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{trend.pair}</CardTitle>
                    {trend.direction === "up" ? (
                      <TrendingUp className="text-success" size={20} />
                    ) : (
                      <TrendingDown className="text-destructive" size={20} />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold mb-2 ${trend.direction === "up" ? "text-success" : "text-destructive"}`}>
                    {trend.change}
                  </div>
                  <p className="text-sm text-muted-foreground">{trend.signal}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Latest Articles & Analysis</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestInsights.map((insight, index) => (
                <Card key={index} className="gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {insight.category}
                      </span>
                      {insight.trend === "up" && <TrendingUp className="text-success" size={18} />}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{insight.title}</CardTitle>
                    <CardDescription className="flex items-center space-x-2 text-xs">
                      <Calendar size={14} />
                      <span>{insight.date}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{insight.excerpt}</p>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="gradient-card border-border">
                <CardHeader>
                  <CardTitle>What does Fintrex Forex Solutions offer to traders?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fintrex Forex Solutions provides complete trading support for both beginners and professionals. From forex trading strategies and market research methods to risk management and expert signal intelligence, we help traders make smarter global trading decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border">
                <CardHeader>
                  <CardTitle>What makes our forex trading signals the best?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our signal intelligence analysts and research team use advanced tools to deliver accurate, real-time forex signals. Each signal is backed by deep analysis and proven strategies, ensuring reliable performance for traders worldwide. With a 98% success rate, our signals consistently outperform market averages.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border">
                <CardHeader>
                  <CardTitle>How does your risk management approach work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We employ a multi-layered risk management strategy including position sizing, stop-loss placement, portfolio diversification, and real-time monitoring. Our analysts provide specific risk parameters with every trade signal, helping you protect capital while maximizing profit potential.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketInsights;
