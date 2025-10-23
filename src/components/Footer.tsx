const footerLinks = {
  Product: ["Store", "Mac", "iPhone", "Watch", "AirPods", "Accessories"],
  Support: ["Help Center", "Contact Us", "Returns", "Warranty", "Repairs"],
  Company: ["About", "Careers", "Press", "Investors", "Partners"],
  Legal: ["Privacy", "Terms", "Cookies", "Compliance"],
};

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/40">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/40 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Apple Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
