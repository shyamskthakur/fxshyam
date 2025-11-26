import { useState } from "react";
import { PricingCard } from "./PricingCard";
import { forexPricing, cryptoPricing, comexPricing, indicesPricing } from "@/data/pricingPlans";
import { TrendingUp, Bitcoin, Coins, BarChart3 } from "lucide-react";
export const HomePricingSection = () => {
  const [selectedService, setSelectedService] = useState<"forex" | "crypto" | "comex" | "indices">("forex");
  const services = [{
    id: "forex" as const,
    name: "Forex",
    icon: TrendingUp,
    pricing: forexPricing
  }, {
    id: "crypto" as const,
    name: "Crypto",
    icon: Bitcoin,
    pricing: cryptoPricing
  }, {
    id: "comex" as const,
    name: "Comex",
    icon: Coins,
    pricing: comexPricing
  }, {
    id: "indices" as const,
    name: "Indices",
    icon: BarChart3,
    pricing: indicesPricing
  }];
  const currentPricing = services.find(s => s.id === selectedService)?.pricing || forexPricing;
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Pricing Plans</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Choose your service and select the plan that fits your trading goals
          </p>
          
          {/* Service Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map(service => {
            const Icon = service.icon;
            return <button key={service.id} onClick={() => setSelectedService(service.id)} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedService === service.id ? "bg-primary text-primary-foreground shadow-glow scale-105" : "bg-accent text-accent-foreground hover:bg-primary/80 hover:text-primary-foreground hover:scale-105"}`}>
                  <Icon size={20} />
                  {service.name}
                </button>;
          })}
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-[40px]">
          {currentPricing.map((plan, index) => <div key={index} className="animate-fade-in">
              <PricingCard plan={plan} />
            </div>)}
        </div>
      </div>
    </section>;
};