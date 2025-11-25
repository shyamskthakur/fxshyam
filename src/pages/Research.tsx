import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, LineChart, PieChart, Activity, Target } from "lucide-react";
import { MarketOverviewWidget } from "@/components/TradingViewWidget";

const Research = () => {
  const researchAreas = [
    {
      icon: TrendingUp,
      title: "Technical Analysis",
      description: "Advanced chart patterns, indicators, and price action analysis for precise entry and exit points."
    },
    {
      icon: BarChart3,
      title: "Fundamental Analysis",
      description: "Economic data, central bank policies, and geopolitical events that drive market movements."
    },
    {
      icon: LineChart,
      title: "Market Sentiment",
      description: "Investor positioning, sentiment indicators, and market psychology analysis."
    },
    {
      icon: PieChart,
      title: "Correlation Studies",
      description: "Inter-market relationships and how different assets move in relation to each other."
    },
    {
      icon: Activity,
      title: "Volatility Research",
      description: "Market volatility patterns and risk assessment for optimal position sizing."
    },
    {
      icon: Target,
      title: "Strategy Development",
      description: "Creating and backtesting trading strategies with proven success rates."
    }
  ];

  const methodologies = [
    {
      title: "Data-Driven Insights",
      description: "We analyze millions of data points daily using advanced algorithms and machine learning to identify high-probability trading opportunities."
    },
    {
      title: "Multi-Timeframe Analysis",
      description: "Our team examines market trends across multiple timeframes, from minute charts to monthly patterns, ensuring comprehensive market understanding."
    },
    {
      title: "Risk-First Approach",
      description: "Every analysis includes detailed risk assessment, ensuring our clients can make informed decisions while protecting their capital."
    },
    {
      title: "Real-Time Monitoring",
      description: "24/7 market surveillance with instant alert systems to capitalize on emerging opportunities and manage existing positions."
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
              Market <span className="text-gradient">Research</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Professional market analysis powered by expert analysts, advanced technology, and proven methodologies. Our research drives accurate trading signals across all markets.
            </p>
          </div>
        </div>
      </section>

      {/* Live Market Overview */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Live Market Overview</h2>
          <MarketOverviewWidget />
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Research Expertise</h2>
            <p className="text-muted-foreground text-lg">
              We combine traditional analysis methods with cutting-edge technology to deliver comprehensive market insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {researchAreas.map((area, index) => (
              <Card key={index} className="gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <area.icon className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodologies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Research Methodology</h2>
            
            <div className="space-y-8">
              {methodologies.map((method, index) => (
                <Card key={index} className="gradient-card border-border">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-xl">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{method.title}</CardTitle>
                        <CardDescription className="text-base">{method.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Expert Research Team</h2>
            <p className="text-muted-foreground text-lg mb-12 text-center">
              Our team of 20+ professional analysts brings decades of combined experience across forex, crypto, commodities, and indices markets.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="gradient-card border-border text-center">
                <CardHeader>
                  <div className="text-5xl font-bold text-gradient mb-2">20+</div>
                  <CardTitle>Expert Analysts</CardTitle>
                  <CardDescription>Professional market researchers</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="gradient-card border-border text-center">
                <CardHeader>
                  <div className="text-5xl font-bold text-gradient mb-2">24/7</div>
                  <CardTitle>Market Coverage</CardTitle>
                  <CardDescription>Around-the-clock analysis</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="gradient-card border-border text-center">
                <CardHeader>
                  <div className="text-5xl font-bold text-gradient mb-2">10+</div>
                  <CardTitle>Years Experience</CardTitle>
                  <CardDescription>Proven track record</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Access to Our Research</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders who benefit from our professional market research and analysis.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
