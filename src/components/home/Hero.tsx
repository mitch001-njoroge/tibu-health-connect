import { Button } from "@/components/ui/button";
import { MapPin, UserPlus } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-ocean">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now serving 47 counties in Kenya
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl lg:text-6xl">
              Connecting Underserved Patients to{" "}
              <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                Trusted Healthcare
              </span>{" "}
              Near Them
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Our offerings connect patients with suitable healthcare providers and caregivers, streamline the
              healthcare journey, and significantly reduce medical expenses. Find verified doctors, clinics, and
              wellness tools right in your community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                <MapPin className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Find Healthcare Near You
              </Button>
              <Button variant="outline" size="xl">
                <UserPlus className="mr-2 h-5 w-5" />
                Join as a Provider
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-secondary">500+</p>
                <p className="text-sm text-muted-foreground">Healthcare Providers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">47</p>
                <p className="text-sm text-muted-foreground">Counties Covered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">50K+</p>
                <p className="text-sm text-muted-foreground">Patients Connected</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Doctor consulting with patient using digital tools"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-success/20 flex items-center justify-center">
                  <span className="text-success text-lg">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Find fast appointments with verified doctors, specialists and caregivers
                  </p>
                  <p className="text-xs text-muted-foreground"> within your reach with ease of our digital platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
