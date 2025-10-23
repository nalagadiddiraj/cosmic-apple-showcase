import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-product.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            The future is here.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience innovation like never before. Powerful performance meets elegant design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8">
              Buy Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
          <div className="relative max-w-5xl mx-auto animate-scale-in">
            <img
              src={heroImage}
              alt="Premium laptop with blue accents"
              className="w-full h-auto rounded-2xl shadow-2xl"
              style={{ boxShadow: 'var(--shadow-premium)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
