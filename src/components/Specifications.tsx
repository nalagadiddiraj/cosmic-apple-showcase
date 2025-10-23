const specs = [
  { label: "Display", value: "6.7\" Super Retina XDR" },
  { label: "Processor", value: "A17 Pro chip" },
  { label: "Camera", value: "48MP Main | 12MP Ultra Wide" },
  { label: "Storage", value: "Up to 1TB" },
  { label: "Battery", value: "Up to 29 hours video playback" },
  { label: "Connectivity", value: "5G | Wi-Fi 6E | Bluetooth 5.3" },
];

const Specifications = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Technical Specifications
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Power and performance in perfect harmony.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {specs.map((spec, index) => (
              <div
                key={spec.label}
                className="flex items-start p-6 bg-card rounded-xl border border-border/40 hover:border-accent/40 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex-1">
                  <dt className="text-sm font-medium text-muted-foreground mb-1">
                    {spec.label}
                  </dt>
                  <dd className="text-lg font-semibold">{spec.value}</dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
