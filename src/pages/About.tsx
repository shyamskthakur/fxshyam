import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StatsSection } from "@/components/StatsSection";
import { Target, Eye, Users, Award } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Providing premium trading signals backed by advanced market research, expert analysis, and intelligent strategies for consistent trading success.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become the world's most trusted signal provider, building a global community of confident traders through innovation, transparency, and expert market intelligence.",
    },
    {
      icon: Users,
      title: "Expert Signal Team",
      description: "Powered by 20+ professional analysts with 10+ years of experience, we deliver high-accuracy signals and deep market intelligence to traders worldwide.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "With a 98% signal accuracy rate and 50,000+ active subscribers, we've established ourselves as a trusted premium signal provider.",
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
              About <span className="text-gradient">Fintrex</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Your premium signal provider delivering expert analysis and profitable trading opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Your Trusted Premium Signal Provider</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Empowering traders worldwide with premium trading signals, in-depth market research, and proven forex strategies designed by professional analysts with over a decade of experience.
              </p>
              <p className="text-muted-foreground text-lg">
                At <strong className="text-foreground">Fintrex Forex Solutions</strong>, we deliver high-accuracy trading signals backed by expert analysis and advanced market intelligence. Our signal service helps beginners and experienced traders make smarter, faster, and more profitable trading decisions.
              </p>
            </div>
            <div className="animate-fade-in">
              <img 
                src={aboutTeamImage} 
                alt="Professional trading team" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="gradient-card p-8 rounded-xl border border-border shadow-card animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Traders Choose Fintrex</h2>
            
            <div className="space-y-8">
              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Expert Analysis</h3>
                <p className="text-muted-foreground text-lg">
                  Our team of 20+ professional analysts brings over a decade of combined experience in forex markets. We use advanced data analytics and technical tools to deliver accurate, real-time signals backed by deep market intelligence.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Complete Signal Service</h3>
                <p className="text-muted-foreground text-lg">
                  From beginners learning to follow signals to experienced traders seeking advanced insights, we provide complete signal services including risk management parameters, market research, and professional analysis with every signal.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">24/7 Signal Delivery</h3>
                <p className="text-muted-foreground text-lg">
                  We monitor all major forex sessions 24/7, ensuring you never miss profitable signals. Whether you trade currencies, cryptocurrencies, commodities, or indices, receive timely signals with complete entry and exit parameters.
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

export default About;
