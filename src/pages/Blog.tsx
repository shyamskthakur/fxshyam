import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight, TrendingUp, TrendingDown } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "EUR/USD Analysis: Key Levels to Watch This Week",
      category: "Forex",
      date: "Nov 25, 2025",
      author: "James Wilson",
      excerpt: "The EUR/USD pair continues to show bullish momentum as market participants await critical economic data releases. Technical analysis suggests...",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
      trend: "up"
    },
    {
      title: "Bitcoin's Path to $100K: What You Need to Know",
      category: "Crypto",
      date: "Nov 24, 2025",
      author: "Sarah Martinez",
      excerpt: "Bitcoin's recent consolidation phase has traders questioning the next major move. Our analysis reveals key support and resistance levels that...",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800",
      trend: "up"
    },
    {
      title: "Gold Market Update: Safe Haven Demand Increases",
      category: "Comex",
      date: "Nov 23, 2025",
      author: "Michael Chen",
      excerpt: "With global uncertainty on the rise, gold prices have seen increased safe-haven demand. We analyze the technical and fundamental factors driving...",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800",
      trend: "up"
    },
    {
      title: "S&P 500 Technical Breakdown: Bull Run Continues",
      category: "Indices",
      date: "Nov 22, 2025",
      author: "Emily Johnson",
      excerpt: "The S&P 500 reached new all-time highs this week. Our technical analysis examines whether this momentum is sustainable and identifies key...",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800",
      trend: "up"
    },
    {
      title: "Top 5 Risk Management Strategies for Forex Traders",
      category: "Education",
      date: "Nov 21, 2025",
      author: "David Park",
      excerpt: "Successful trading isn't just about finding winning trades—it's about protecting your capital. Learn the essential risk management strategies that...",
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800",
      trend: null
    },
    {
      title: "Understanding Market Sentiment: A Comprehensive Guide",
      category: "Education",
      date: "Nov 20, 2025",
      author: "Lisa Anderson",
      excerpt: "Market sentiment plays a crucial role in price movements. This guide explains how to read and interpret market sentiment indicators to improve...",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
      trend: null
    }
  ];

  const categories = ["All", "Forex", "Crypto", "Comex", "Indices", "Education"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Trading Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
              Latest market analysis, trading strategies, and educational content from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "gradient-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Article</h2>
          </div>
          <Card className="gradient-card border-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-[400px] lg:h-auto">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                {blogPosts[0].trend && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <TrendingUp size={16} />
                    Bullish
                  </div>
                )}
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-sm text-primary font-semibold mb-3">{blogPosts[0].category}</div>
                <h3 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {blogPosts[0].author}
                  </div>
                </div>
                <Button className="gradient-primary w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Recent Articles</h2>
            <p className="text-muted-foreground text-lg">Stay updated with the latest market trends and trading insights</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="gradient-card border-border overflow-hidden hover:border-primary transition-all hover:scale-105 group">
                <div className="relative h-[200px] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {post.trend && (
                    <div className={`absolute top-4 right-4 ${post.trend === 'up' ? 'bg-green-500' : 'bg-red-500'} text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1`}>
                      {post.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                      {post.trend === 'up' ? 'Bullish' : 'Bearish'}
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="text-sm text-primary font-semibold mb-2">{post.category}</div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                  </div>
                  <Button variant="ghost" className="text-primary p-0 h-auto hover:text-primary/80">
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest trading insights, market analysis, and educational content delivered to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
              />
              <Button className="gradient-primary px-8">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
