import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6 p-8 md:p-12 rounded-2xl bg-muted">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium">
            <Stethoscope className="h-4 w-4" />
            For Healthcare Providers
          </div>
          
          <h2 className="text-3xl font-bold text-secondary md:text-4xl">
            Partner With Kenya's Growing Health Network
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Are you a <span className="font-medium text-foreground">doctor, specialist, caregiver, or healthcare provider</span>? 
            Partner with ECONNECT-TIBU to reach more patients in underserved communities and urban areas—and grow your practice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="accent" size="xl" className="group" asChild>
              <Link to="/provider-auth">
                Register Your Practice
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="xl">
              Learn About Partnership
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            ✓ Free to join  ✓ Verified badge  ✓ Patient referrals  ✓ Digital tools
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
