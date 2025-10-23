import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Pro Phone",
    description: "Advanced camera system. Stunning display. Blazing fast.",
    price: "$999",
    image: product1,
  },
  {
    name: "Air Pods Pro",
    description: "Immersive sound. Active noise cancellation. All-day comfort.",
    price: "$249",
    image: product2,
  },
  {
    name: "Smart Watch",
    description: "Your health at a glance. Always connected. Always stylish.",
    price: "$399",
    image: product3,
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Explore the lineup.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-card rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                boxShadow: 'var(--shadow-elegant)',
              }}
            >
              <div className="aspect-square bg-secondary/50 flex items-center justify-center p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <p className="text-3xl font-bold mb-6">{product.price}</p>
                <div className="flex flex-col gap-2">
                  <Button className="w-full">Buy</Button>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
