import { AlertTriangle, Clock, UserX, Heart, Sparkles } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    text: "Hard to get fast appointments with primary care physicians"
  },
  {
    icon: AlertTriangle,
    text: "Even harder to access specialists when you need them most"
  },
  {
    icon: Clock,
    text: "Long waiting times and endless queues at facilities"
  },
  {
    icon: UserX,
    text: "Brokers and fraudulent services exploiting vulnerable patients"
  }
];

const WhyWeBuiltThis = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              <AlertTriangle className="h-4 w-4" />
              The Reality of Healthcare in Kenya
            </div>
            <h2 className="text-3xl font-bold text-secondary md:text-4xl mb-4">
              Why We Built This Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Healthcare in Kenya is quite frustrating. We asked ourselves: can we do better?
            </p>
          </div>

          {/* Pain Points */}
          <div className="grid gap-4 sm:grid-cols-2 mb-10">
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-5 rounded-xl bg-muted border border-border"
              >
                <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="h-5 w-5 text-destructive" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>

          {/* The Answer */}
          <div className="bg-gradient-to-br from-primary/5 via-success/5 to-accent/5 border border-primary/20 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Our Answer
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Patients Deserve Better
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              That's why we're building an innovative platform that puts patients first—making it easy to find trusted doctors, 
              book appointments quickly, and access quality healthcare without the frustration.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <Heart className="h-5 w-5" />
              <span>Ease of access. Trusted providers. Better outcomes.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeBuiltThis;
