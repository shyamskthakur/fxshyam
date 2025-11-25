import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, BarChart3, DollarSign, Target } from "lucide-react";
import { MarketOverviewWidget, TradingViewWidget } from "@/components/TradingViewWidget";

const Research = () => {
  const marketAnalysis = [
    {
      icon: TrendingUp,
      title: "Forex Market Analysis",
      description: "Comprehensive analysis of major currency pairs with technical and fundamental insights.",
      trend: "Bullish",
      confidence: "85%"
    },
    {
      icon: DollarSign,
      title: "Commodity Trends",
      description: "Gold, silver, and oil price movements with expert predictions and entry points.",
      trend: "Neutral",
      confidence: "78%"
    },
    {
      icon: Activity,
      title: "Crypto Market Review",
      description: "Bitcoin, Ethereum, and altcoin analysis with blockchain trends and insights.",
      trend: "Bullish",
      confidence: "82%"
    },
    {
      icon: BarChart3,
      title: "Indices Performance",
      description: "S&P 500, Dow Jones, and global indices analysis with market sentiment tracking.",
      trend: "Bullish",
      confidence: "88%"
    }
  ];

  const weeklyInsights = [
    {
      title: "EUR/USD Weekly Forecast",
      date: "Nov 25, 2025",
      summary: "European Central Bank policy decisions expected to drive volatility. Key resistance at 1.1800.",
      signal: "BUY"
    },
    {
      title: "Gold Price Analysis",
      date: "Nov 24, 2025",
      summary: "Safe-haven demand increases amid global uncertainty. Watch $2,100 support level.",
      signal: "HOLD"
    },
    {
      title: "Bitcoin Technical Breakdown",
      date: "Nov 23, 2025",
      summary: "BTC consolidating near $88,000. Breakout above resistance could target $95,000.",
      signal: "BUY"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Market Research & Analysis
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
              Expert market research, technical analysis, and trading insights updated daily by our professional analysts.
            </p>
          </div>
        </div>
      </section>

      {/* Live Market Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Live Market Overview</h2>
            <p className="text-muted-foreground text-lg">Real-time market data and trending assets</p>
          </div>
          <MarketOverviewWidget />
        </div>
      </section>

      {/* Market Analysis Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Today's Market Analysis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketAnalysis.map((analysis, index) => (
              <Card key={index} className="gradient-card border-border hover:border-primary transition-all hover:scale-105 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <analysis.icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{analysis.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{analysis.description}</CardDescription>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      {analysis.trend === "Bullish" ? (
                        <TrendingUp className="text-green-500" size={16} />
                      ) : (
                        <Target className="text-yellow-500" size={16} />
                      )}
                      <span className="text-sm font-medium">{analysis.trend}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{analysis.confidence}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Analysis Charts</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">EUR/USD Analysis</h3>
              <TradingViewWidget symbol="FX:EURUSD" height={450} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Gold Price Chart</h3>
              <TradingViewWidget symbol="OANDA:XAUUSD" height={450} />
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Insights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Weekly Market Insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {weeklyInsights.map((insight, index) => (
              <Card key={index} className="gradient-card border-border hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{insight.title}</CardTitle>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      insight.signal === "BUY" ? "bg-green-500/20 text-green-500" : "bg-yellow-500/20 text-yellow-500"
                    }`}>
                      {insight.signal}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{insight.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Premium Research Access</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to receive daily research reports, exclusive analysis, and priority trading signals.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
