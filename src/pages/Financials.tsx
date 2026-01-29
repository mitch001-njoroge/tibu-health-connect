import Layout from "@/components/layout/Layout";
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Building2, 
  CreditCard,
  PiggyBank,
  BarChart3,
  Target
} from "lucide-react";

const Financials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-ocean py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-secondary mb-6 md:text-5xl">
              Financial Overview
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A sustainable business model that creates value for patients, providers, 
              and the broader healthcare ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
            Revenue Model
          </h2>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Provider Subscriptions */}
            <div className="bg-muted p-8 rounded-2xl">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Provider Subscriptions</h3>
              <p className="text-3xl font-bold text-primary mb-4">60%</p>
              <p className="text-muted-foreground mb-4">of projected revenue</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Basic tier: KSh 2,000/month</li>
                <li>• Professional tier: KSh 5,000/month</li>
                <li>• Enterprise tier: KSh 15,000/month</li>
              </ul>
            </div>

            {/* Premium Patient Services */}
            <div className="bg-muted p-8 rounded-2xl">
              <div className="h-14 w-14 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Premium Patient Services</h3>
              <p className="text-3xl font-bold text-success mb-4">25%</p>
              <p className="text-muted-foreground mb-4">of projected revenue</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Priority booking: KSh 100/month</li>
                <li>• Health tracking premium: KSh 200/month</li>
                <li>• Family plans: KSh 500/month</li>
              </ul>
            </div>

            {/* Partnerships */}
            <div className="bg-muted p-8 rounded-2xl">
              <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <CreditCard className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Strategic Partnerships</h3>
              <p className="text-3xl font-bold text-accent mb-4">15%</p>
              <p className="text-muted-foreground mb-4">of projected revenue</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Insurance integrations</li>
                <li>• Pharmaceutical partnerships</li>
                <li>• Government contracts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Savings */}
      <section className="py-16 md:py-24 gradient-ocean">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className="h-14 w-14 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                  <PiggyBank className="h-7 w-7 text-success" />
                </div>
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  Patient Cost Savings
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  By connecting patients with nearby healthcare, we significantly 
                  reduce the financial burden of accessing medical services.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-card">
                <h3 className="font-semibold text-foreground mb-6">Average Savings Per Patient</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Transport Costs</span>
                      <span className="font-semibold text-success">KSh 1,500/visit</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-success rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Time Saved</span>
                      <span className="font-semibold text-primary">4+ hours/visit</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Productivity Gain</span>
                      <span className="font-semibold text-accent">KSh 800/day</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-accent rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Total Annual Savings</span>
                    <span className="text-xl font-bold text-success">KSh 30,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
            5-Year Financial Projections
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { year: "Year 1", revenue: "KSh 5M", users: "10K", providers: "200" },
                { year: "Year 2", revenue: "KSh 25M", users: "50K", providers: "800" },
                { year: "Year 3", revenue: "KSh 80M", users: "150K", providers: "2K" },
                { year: "Year 5", revenue: "KSh 300M", users: "500K", providers: "5K" }
              ].map((proj, index) => (
                <div key={index} className="bg-muted p-6 rounded-xl text-center">
                  <p className="text-sm font-medium text-primary mb-2">{proj.year}</p>
                  <p className="text-2xl font-bold text-foreground mb-4">{proj.revenue}</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{proj.users} users</p>
                    <p>{proj.providers} providers</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Projected Healthcare Impact
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: TrendingUp, value: "KSh 2B", label: "Annual patient savings in travel costs" },
              { icon: Target, value: "70%", label: "Reduction in healthcare travel distance" },
              { icon: BarChart3, value: "50K", label: "Lives improved through early detection" },
              { icon: DollarSign, value: "KSh 500M", label: "Healthcare spending redirected locally" }
            ].map((metric, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-bold mb-2">{metric.value}</p>
                <p className="text-sm text-primary-foreground/80">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Interested in Our Mission?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're building a sustainable business that creates lasting impact in 
              Kenya's healthcare system. Contact us to learn more about partnership 
              and investment opportunities.
            </p>
            <p className="text-sm text-muted-foreground">
              Email: invest@econnect-tibu.co.ke
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Financials;
