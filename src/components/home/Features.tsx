import { MapPin, Shield, Smartphone, Heart, Users, Clock, Siren } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Nearby Healthcare Access",
    description: "Find verified doctors, clinics, and hospitals in your county. No more long journeys for basic care.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Verified Providers",
    description: "Every healthcare provider is vetted and licensed, protecting you from brokers and fraudulent services.",
    color: "success"
  },
  {
    icon: Siren,
    title: "Emergency Ambulance",
    description: "Quick ambulance connectivity for emergency cases, especially in informal sectors. Fast response saves lives.",
    color: "destructive"
  },
  {
    icon: Smartphone,
    title: "Digital Wellness Tools",
    description: "Access home health analysis tools for early detection and prevention of common conditions.",
    color: "accent"
  },
  {
    icon: Heart,
    title: "Patient-First Approach",
    description: "Your health comes first. Our platform prioritizes your wellbeing over profit.",
    color: "primary"
  },
  {
    icon: Users,
    title: "Community Health Network",
    description: "Join a network of health ambassadors working to improve healthcare in underserved areas.",
    color: "success"
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 gradient-ocean">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4 md:text-4xl">
            Why Choose ECONNECT-TIBU?
          </h2>
          <p className="text-muted-foreground">
            We're building a healthier Kenya by connecting patients with quality care in their communities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 ${
                feature.color === 'primary' ? 'bg-primary/10' :
                feature.color === 'success' ? 'bg-success/10' : 
                feature.color === 'destructive' ? 'bg-destructive/10' : 'bg-accent/10'
              }`}>
                <feature.icon className={`h-6 w-6 ${
                  feature.color === 'primary' ? 'text-primary' :
                  feature.color === 'success' ? 'text-success' : 
                  feature.color === 'destructive' ? 'text-destructive' : 'text-accent'
                }`} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
