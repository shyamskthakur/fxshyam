import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export const ServiceCard = ({ icon: Icon, title, description, href }: ServiceCardProps) => {
  return (
    <Card className="group gradient-card border-border hover:border-primary transition-all duration-300 shadow-card hover:shadow-glow">
      <CardHeader>
        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="text-primary" size={28} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
        <Link to={href}>
          <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary/80">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
