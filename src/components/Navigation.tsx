import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/40">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-semibold">Apple</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-sm hover:text-foreground/70 transition-colors">Store</a>
              <a href="#" className="text-sm hover:text-foreground/70 transition-colors">Mac</a>
              <a href="#" className="text-sm hover:text-foreground/70 transition-colors">iPhone</a>
              <a href="#" className="text-sm hover:text-foreground/70 transition-colors">Watch</a>
              <a href="#" className="text-sm hover:text-foreground/70 transition-colors">AirPods</a>
              <a href="#" className="text-sm hover:text-foreground/70 transition-colors">Support</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
