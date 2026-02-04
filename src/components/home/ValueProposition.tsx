import { CheckCircle, TrendingDown, Users, Clock, Wallet, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Right Provider, First Time",
    description: "We match patients with the ideal HCP based on their specific needs—no more trial and error.",
  },
  {
    icon: Wallet,
    title: "Negotiated Pricing",
    description: "We work with providers to offer fair, transparent pricing—reducing hidden costs for patients.",
  },
  {
    icon: TrendingDown,
    title: "Fewer Hospital Visits",
    description: "Early detection and proper matching mean fewer unnecessary trips and reduced overall expenses.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Core Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
              <HeartHandshake className="h-4 w-4" />
              Our Core Value
            </div>
            <h2 className="text-3xl font-bold text-secondary md:text-4xl mb-6">
              We Reduce Treatment Delays & Hidden Costs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              By matching patients with the <span className="font-semibold text-foreground">right provider the first time</span>, 
              we eliminate wasted time, unnecessary referrals, and surprise bills. 
              We connect you directly to trusted HCPs who meet your specific needs.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-6 md:grid-cols-3 mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-muted p-6 rounded-xl border border-border hover:shadow-card transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-br from-primary/5 via-success/5 to-accent/5 border border-primary/20 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-secondary mb-2">How Patients Feel the Value</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Less time searching. Lower medical bills. Faster treatment. 
                  No brokers. No hidden fees. Just quality healthcare—accessible and affordable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
