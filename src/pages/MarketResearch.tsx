import Layout from "@/components/layout/Layout";
import { TrendingUp, Users, MapPin, Heart, AlertTriangle, Clock } from "lucide-react";

const MarketResearch = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-ocean py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-secondary mb-6 md:text-5xl">
              Market Research
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Understanding Kenya's healthcare landscape and the urgent need for 
              accessible, local health services.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
            Healthcare Access Challenges in Kenya
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                icon: Users, 
                value: "20M+", 
                label: "Underserved Kenyans",
                desc: "Living in areas with limited healthcare access",
                color: "primary"
              },
              { 
                icon: MapPin, 
                value: "30+ km", 
                label: "Average Distance",
                desc: "Rural patients travel to reach basic care",
                color: "accent"
              },
              { 
                icon: Clock, 
                value: "4+ hours", 
                label: "Average Wait Time",
                desc: "At overcrowded urban hospitals",
                color: "success"
              },
              { 
                icon: Heart, 
                value: "40%", 
                label: "Preventable Deaths",
                desc: "Due to late detection and delayed care",
                color: "destructive"
              },
              { 
                icon: TrendingUp, 
                value: "KSh 15B", 
                label: "Annual Transport Costs",
                desc: "Spent by patients traveling for healthcare",
                color: "primary"
              },
              { 
                icon: AlertTriangle, 
                value: "60%", 
                label: "Broker Exploitation",
                desc: "Of rural patients misdirected by brokers",
                color: "accent"
              }
            ].map((stat, index) => (
              <div key={index} className="bg-muted p-6 rounded-xl">
                <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 ${
                  stat.color === 'primary' ? 'bg-primary/10' :
                  stat.color === 'success' ? 'bg-success/10' :
                  stat.color === 'destructive' ? 'bg-destructive/10' : 'bg-accent/10'
                }`}>
                  <stat.icon className={`h-6 w-6 ${
                    stat.color === 'primary' ? 'text-primary' :
                    stat.color === 'success' ? 'text-success' :
                    stat.color === 'destructive' ? 'text-destructive' : 'text-accent'
                  }`} />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="font-semibold text-foreground mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 md:py-24 gradient-ocean">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
              The Market Opportunity
            </h2>
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-2">Growing Digital Health Adoption</h3>
                  <p className="text-muted-foreground">
                    Kenya's mobile penetration exceeds 90%, with over 65% smartphone ownership. 
                    This creates a massive opportunity for digital health solutions.
                  </p>
                </div>
                <div className="border-l-4 border-success pl-4">
                  <h3 className="font-semibold text-foreground mb-2">Underserved Provider Network</h3>
                  <p className="text-muted-foreground">
                    Thousands of qualified healthcare providers in rural areas remain underutilized 
                    because patients don't know they exist or can't find them.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-semibold text-foreground mb-2">Government Healthcare Initiatives</h3>
                  <p className="text-muted-foreground">
                    The government's Universal Health Coverage (UHC) program and county health 
                    initiatives create alignment for digital health solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Early Detection */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
            Benefits of Early Detection & Local Access
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Reduced Mortality Rates",
                desc: "Early detection of conditions like diabetes, hypertension, and cancer can reduce mortality by up to 70%."
              },
              {
                title: "Lower Healthcare Costs",
                desc: "Prevention and early treatment cost 80% less than treating advanced conditions."
              },
              {
                title: "Family Economic Stability",
                desc: "Reduced travel and treatment costs keep families financially stable."
              },
              {
                title: "Community Health Improvement",
                desc: "Local healthcare access creates healthier, more productive communities."
              },
              {
                title: "Reduced Hospital Overcrowding",
                desc: "Local treatment reduces burden on major hospitals by 40%."
              },
              {
                title: "Better Patient Outcomes",
                desc: "Continuous local care leads to better adherence and outcomes."
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 rounded-xl border border-border hover:shadow-card transition-shadow">
                <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center mb-4">
                  <span className="text-success font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Demographics */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Target Demographics
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { segment: "Rural Residents", size: "15M+", desc: "Limited local options" },
              { segment: "Urban Poor", size: "5M+", desc: "Cost-sensitive patients" },
              { segment: "Working Class", size: "8M+", desc: "Time-constrained individuals" },
              { segment: "Elderly Population", size: "3M+", desc: "Mobility-challenged seniors" }
            ].map((demo, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <p className="text-3xl font-bold mb-2">{demo.size}</p>
                <p className="font-semibold mb-1">{demo.segment}</p>
                <p className="text-sm text-primary-foreground/70">{demo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketResearch;
