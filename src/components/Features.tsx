import { Zap, Shield, Cpu, Battery } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing speeds with our cutting-edge processors and optimized software.",
  },
  {
    icon: Shield,
    title: "Ultra Secure",
    description: "Your privacy matters. Industry-leading encryption keeps your data safe.",
  },
  {
    icon: Cpu,
    title: "Powerful Performance",
    description: "Handle any task with ease. From creative work to gaming, we've got you covered.",
  },
  {
    icon: Battery,
    title: "All-Day Battery",
    description: "Keep going from sunrise to sunset with remarkable battery efficiency.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Why choose us?
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Innovative technology designed for the way you live, work, and play.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
