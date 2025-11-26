import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}
interface PricingCardProps {
  plan: PricingPlan;
}
export const PricingCard = ({
  plan
}: PricingCardProps) => {
  return <Card className={`gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 relative ${plan.popular ? 'border-primary border-2 scale-105' : ''}`}>
      {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-primary text-primary-foreground rounded-full text-sm font-semibold shadow-glow py-[6px] text-left my-0 mx-0 px-[16px] mb-0 mt-0 pt-[6px]">
            Most Popular
          </span>
        </div>}
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
        <div className="text-4xl font-bold text-gradient mb-2">
          ${plan.price}
          <span className="text-lg text-muted-foreground font-normal">/{plan.period}</span>
        </div>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => <li key={index} className="flex items-start gap-3">
              <Check className="text-success mt-0.5 flex-shrink-0" size={20} />
              <span className="text-foreground">{feature}</span>
            </li>)}
        </ul>
        <Link to="/contact" className="block">
          <Button className={`w-full ${plan.popular ? 'gradient-primary shadow-glow' : 'border-primary'}`} variant={plan.popular ? 'default' : 'outline'} size="lg">
            Get Started
          </Button>
        </Link>
      </CardContent>
    </Card>;
};