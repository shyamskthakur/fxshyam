import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Users, TrendingUp, Shield, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CopyTrading = () => {
  const features = [
    {
      icon: Copy,
      title: "Automated Copying",
      description: "Automatically replicate trades from professional traders in real-time without manual intervention."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Built-in risk controls and stop-loss features to protect your capital while copying trades."
    },
    {
      icon: TrendingUp,
      title: "Proven Track Records",
      description: "Access detailed performance statistics and historical data of all master traders."
    },
    {
      icon: Users,
      title: "Expert Traders",
      description: "Copy from verified professional traders with years of profitable trading experience."
    }
  ];

  const masterTraders = [
    {
      name: "Alexander Smith",
      expertise: "Forex & Indices",
      followers: "2,500+",
      winRate: "87%",
      avgReturn: "+12.5%",
      experience: "10 years"
    },
    {
      name: "Sarah Johnson",
      expertise: "Crypto Trading",
      followers: "1,800+",
      winRate: "82%",
      avgReturn: "+15.2%",
      experience: "8 years"
    },
    {
      name: "Michael Chen",
      expertise: "Commodities",
      followers: "3,200+",
      winRate: "85%",
      avgReturn: "+11.8%",
      experience: "12 years"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Choose a Master Trader",
      description: "Browse our verified traders and select one that matches your trading goals and risk appetite."
    },
    {
      step: "2",
      title: "Set Your Parameters",
      description: "Configure copy amount, risk levels, and stop-loss settings according to your preferences."
    },
    {
      step: "3",
      title: "Start Copying",
      description: "Activate copy trading and watch as trades are automatically replicated to your account."
    },
    {
      step: "4",
      title: "Monitor & Adjust",
      description: "Track performance in real-time and adjust settings or switch traders anytime."
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
              Copy Trading Made Simple
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
              Automatically copy trades from expert traders. No experience needed. Start earning like a pro today.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 hover:scale-105 transition-transform animate-slide-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
                Start Copy Trading
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Copy Trading?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional trading made accessible to everyone with our advanced copy trading platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="gradient-card border-border hover:border-primary transition-all hover:scale-105 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Master Traders Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Master Traders</h2>
            <p className="text-muted-foreground text-lg">Copy from the best - verified professionals with proven track records</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {masterTraders.map((trader, index) => (
              <Card key={index} className="gradient-card border-border hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="text-primary" size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{trader.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{trader.expertise}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Followers</p>
                      <p className="text-lg font-bold">{trader.followers}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Win Rate</p>
                      <p className="text-lg font-bold text-green-500">{trader.winRate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Return</p>
                      <p className="text-lg font-bold text-primary">{trader.avgReturn}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Experience</p>
                      <p className="text-lg font-bold">{trader.experience}</p>
                    </div>
                  </div>
                  <Button className="w-full gradient-primary">Copy Trader</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How Copy Trading Works</h2>
            <p className="text-muted-foreground text-lg">Get started in 4 simple steps</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-primary">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Why Copy Trading?</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Save Time</h3>
                  <p className="text-muted-foreground">No need to spend hours analyzing markets. Let professionals do the work while you focus on other things.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Learn from Experts</h3>
                  <p className="text-muted-foreground">Study successful trading strategies by watching how professionals trade in real-time.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Manage Risk</h3>
                  <p className="text-muted-foreground">Set your own risk parameters and stop-loss levels to protect your investment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Copy Trading Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders who are already profiting from copy trading. No experience required.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 hover:scale-105 transition-transform">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CopyTrading;
