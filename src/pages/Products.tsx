import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Stethoscope, 
  Smartphone, 
  Shield, 
  Calendar, 
  MessageCircle,
  Activity,
  FileText,
  ArrowRight
} from "lucide-react";

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-ocean py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-secondary mb-6 md:text-5xl">
              Products & Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive suite of digital health tools designed to make quality 
              healthcare accessible to every Kenyan, wherever they are.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
            Core Platform Features
          </h2>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Provider Search */}
            <div className="bg-muted p-8 rounded-2xl">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                County-Based Provider Search
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Search for healthcare providers by county, sub-county, or specific location. 
                Filter by specialty, ratings, and availability to find the right care for your needs.
              </p>
              <ul className="space-y-3">
                {[
                  "Find nearby hospitals, clinics & pharmacies",
                  "Search by specialty (pediatrics, cardiology, etc.)",
                  "View provider ratings and reviews",
                  "Get directions and contact information"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Doctor Connect */}
            <div className="bg-muted p-8 rounded-2xl">
              <div className="h-14 w-14 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                <Stethoscope className="h-7 w-7 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Direct Doctor Connection
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Connect directly with verified doctors and specialists. Book appointments, 
                send inquiries, and manage your healthcare journey—all in one place.
              </p>
              <ul className="space-y-3">
                {[
                  "View doctor profiles and qualifications",
                  "Book appointments online",
                  "Send secure messages",
                  "Access appointment history"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-5 w-5 rounded-full bg-success/20 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-success"></span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Wellness Tools */}
      <section className="py-16 md:py-24 gradient-ocean">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Digital Wellness Tools
            </h2>
            <p className="text-muted-foreground">
              Empower yourself with home health analysis tools for early detection and prevention.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Activity, title: "Health Tracking", desc: "Monitor vital signs and wellness metrics" },
              { icon: FileText, title: "Symptom Checker", desc: "AI-powered symptom assessment" },
              { icon: Calendar, title: "Reminders", desc: "Medication and appointment reminders" },
              { icon: MessageCircle, title: "Health Tips", desc: "Personalized wellness recommendations" }
            ].map((tool, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-card transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <tool.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  Secure & Private Platform
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Your health data is protected with enterprise-grade security. We comply 
                  with data protection regulations and never share your information without consent.
                </p>
                <ul className="space-y-3">
                  {[
                    "End-to-end encryption",
                    "GDPR & local data protection compliance",
                    "Secure payment processing",
                    "Regular security audits"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <Shield className="h-4 w-4 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted p-8 rounded-2xl text-center">
                <Smartphone className="h-24 w-24 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mobile-First Design</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Access TIBU Health-Connect on any device. Our platform is optimized for 
                  mobile use, even on low-bandwidth connections.
                </p>
                <Button className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
