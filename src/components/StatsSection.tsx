interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "20+", label: "Expert Analysts" },
  { value: "10+", label: "Years Experience" },
  { value: "50K+", label: "Active Traders" },
  { value: "98%", label: "Success Rate" },
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
