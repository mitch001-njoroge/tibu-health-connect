import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart, Users, TrendingDown, Shield } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-ocean py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-secondary mb-6 md:text-5xl">
              About TIBU Health-Connect
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're on a mission to transform healthcare access in Kenya by connecting 
              underserved patients with trusted, nearby medical services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-muted p-8 rounded-2xl">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-secondary mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the healthcare gap in Kenya by providing a digital platform that 
                connects underserved communities with quality, affordable, and accessible 
                healthcare services within their localities.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-2xl">
              <div className="h-14 w-14 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-success" />
              </div>
              <h2 className="text-2xl font-bold text-secondary mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Kenya where every citizen, regardless of location or economic status, 
                has access to verified healthcare providers within their community, 
                enabling early detection, prevention, and better health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-24 gradient-ocean">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center md:text-4xl">
              The Problem We're Solving
            </h2>
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Healthcare in Kenya is fragmented. Millions of people in rural and peri-urban 
                areas must travel long distances—sometimes over 50km—just to access basic 
                medical services. This leads to:
              </p>
              <ul className="space-y-4">
                {[
                  "Delayed treatment and preventable deaths",
                  "High transportation costs eating into family budgets",
                  "Exploitation by healthcare brokers who misdirect patients",
                  "Late detection of treatable conditions",
                  "Overcrowding at major hospitals while local clinics remain underutilized"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingDown className="h-3 w-3 text-destructive" />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center md:text-4xl">
            How We Make a Difference
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Patient-First Technology",
                description: "Our platform puts patients at the center, making it easy to find and connect with verified healthcare providers nearby."
              },
              {
                icon: Shield,
                title: "Verified Provider Network",
                description: "Every doctor, clinic, and pharmacy in our network is vetted and licensed, protecting patients from fraud and malpractice."
              },
              {
                icon: Users,
                title: "Community Health Ambassadors",
                description: "We train local ambassadors to help community members navigate the platform and access the care they need."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-border hover:shadow-card transition-shadow">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center md:text-4xl">
            Our Impact Targets
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "70%", label: "Reduction in travel for care" },
              { value: "50%", label: "Decrease in delayed treatments" },
              { value: "100K", label: "Patients connected by 2026" },
              { value: "47", label: "Counties with coverage" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
