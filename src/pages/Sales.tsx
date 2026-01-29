import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  MapPin, 
  Megaphone, 
  Handshake, 
  Target,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const Sales = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-ocean py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-secondary mb-6 md:text-5xl">
              Sales & Marketing Strategy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our multi-channel approach to growing the ECONNECT-TIBU network 
              and reaching underserved communities across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Strategy */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
            Partnership Strategy
          </h2>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Clinics */}
            <div className="bg-muted p-8 rounded-2xl">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Clinics & Hospitals</h3>
              <p className="text-muted-foreground mb-6">
                Partner with healthcare facilities to join our verified provider network.
              </p>
              <ul className="space-y-3">
                {[
                  "Free onboarding and setup",
                  "Patient referral system",
                  "Digital appointment booking",
                  "Analytics dashboard"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pharmacies */}
            <div className="bg-muted p-8 rounded-2xl">
              <div className="h-14 w-14 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Pharmacies</h3>
              <p className="text-muted-foreground mb-6">
                Connect pharmacies with patients seeking medication and health products.
              </p>
              <ul className="space-y-3">
                {[
                  "Inventory visibility",
                  "Prescription management",
                  "Delivery coordination",
                  "Customer notifications"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Doctors */}
            <div className="bg-muted p-8 rounded-2xl">
              <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Individual Doctors</h3>
              <p className="text-muted-foreground mb-6">
                Enable doctors to grow their practice and reach more patients.
              </p>
              <ul className="space-y-3">
                {[
                  "Professional profile page",
                  "Schedule management",
                  "Patient communication",
                  "Review management"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* County Outreach */}
      <section className="py-16 md:py-24 gradient-ocean">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  County-by-County Outreach
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our targeted approach focuses on underserved counties first, working 
                  with local health departments, community leaders, and existing health 
                  facilities to build comprehensive coverage.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">County Health Department Partnership</p>
                      <p className="text-sm text-muted-foreground">Official partnerships for provider verification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Community Leader Engagement</p>
                      <p className="text-sm text-muted-foreground">Working with chiefs and local leaders for trust</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Provider Network Building</p>
                      <p className="text-sm text-muted-foreground">Onboarding all qualified providers in the area</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-card">
                <h3 className="font-semibold text-foreground mb-4">Priority Counties</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Turkana", "Garissa", "Kilifi", "Homa Bay", 
                    "Migori", "Kitui", "Makueni", "Tana River",
                    "Wajir", "Mandera", "Marsabit", "Samburu"
                  ].map((county) => (
                    <span 
                      key={county}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                    >
                      {county}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Health Ambassadors */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Handshake className="h-4 w-4" />
              Community Program
            </div>
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Community Health Ambassador Program
            </h2>
            <p className="text-muted-foreground">
              Empowering local community members to help their neighbors access healthcare.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Training", desc: "Comprehensive training on platform use and health basics" },
              { title: "Equipment", desc: "Smartphone and data bundle provided" },
              { title: "Incentives", desc: "Commission on patient registrations" },
              { title: "Support", desc: "Ongoing mentorship and resources" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-border">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="group">
              Become an Ambassador
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Marketing Channels
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Megaphone, title: "Radio Campaigns", desc: "Vernacular radio in target counties" },
              { icon: Users, title: "Community Events", desc: "Health fairs and awareness campaigns" },
              { icon: Target, title: "Digital Marketing", desc: "Social media and targeted ads" },
              { icon: Handshake, title: "Referral Program", desc: "Word-of-mouth incentives" }
            ].map((channel, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">{channel.title}</h3>
                <p className="text-sm text-primary-foreground/70">{channel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sales;
