import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";

const Blog = () => {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up any existing scripts
    if (widgetContainerRef.current) {
      widgetContainerRef.current.innerHTML = '';
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: 'all_symbols',
      isTransparent: false,
      displayMode: 'regular',
      width: '100%',
      height: '100%',
      colorTheme: 'dark',
      locale: 'en'
    });

    if (widgetContainerRef.current) {
      widgetContainerRef.current.appendChild(script);
    }

    return () => {
      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Market <span className="text-gradient">Insights & News</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Stay updated with the latest market news, analysis, and trading insights from global financial markets.
            </p>
          </div>
        </div>
      </section>

      {/* TradingView News Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Market News</h2>
            
            <div className="tradingview-widget-container" style={{ height: '800px', width: '100%' }}>
              <div 
                className="tradingview-widget-container__widget" 
                ref={widgetContainerRef}
                style={{ height: 'calc(100% - 32px)', width: '100%' }}
              />
              <div className="tradingview-widget-copyright">
                <a 
                  href="https://www.tradingview.com/" 
                  rel="noopener nofollow" 
                  target="_blank"
                >
                  <span className="blue-text">Track all markets on TradingView</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Trading Education & Resources</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Enhance your trading knowledge with our comprehensive guides, market analysis, and expert insights.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="gradient-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
                <p className="text-muted-foreground">
                  Daily technical and fundamental analysis of major markets
                </p>
              </div>
              
              <div className="gradient-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Trading Strategies</h3>
                <p className="text-muted-foreground">
                  Proven trading strategies and risk management techniques
                </p>
              </div>
              
              <div className="gradient-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Economic Calendar</h3>
                <p className="text-muted-foreground">
                  Key economic events and their impact on markets
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
