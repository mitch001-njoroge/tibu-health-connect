import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Search, Building2, Stethoscope, Pill, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const counties = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Machakos", 
  "Kiambu", "Nyeri", "Kakamega", "Kilifi", "Garissa", "Meru",
  "Turkana", "Bungoma", "Homa Bay", "Migori", "Kitui", "Makueni"
];

const CountySelector = () => {
  const navigate = useNavigate();
  const [selectedCounty, setSelectedCounty] = useState<string>("");
  const [searchResults, setSearchResults] = useState<boolean>(false);

  const handleSearch = () => {
    if (selectedCounty) {
      navigate(`/find-care?county=${encodeURIComponent(selectedCounty)}`);
    } else {
      navigate("/find-care");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4 md:text-4xl">
            Find Healthcare in Your County
          </h2>
          <p className="text-muted-foreground">
            Select your county to discover nearby clinics, hospitals, doctors, and pharmacies ready to serve you.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-xl mx-auto bg-muted rounded-2xl p-6 shadow-soft">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Select value={selectedCounty} onValueChange={setSelectedCounty}>
                <SelectTrigger className="h-12 bg-card border-border">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <SelectValue placeholder="Select your county" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  {counties.map((county) => (
                    <SelectItem key={county} value={county}>
                      {county} County
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleSearch} size="lg" className="h-12">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>

        {/* Results Preview */}
        {searchResults && selectedCounty && (
          <div className="mt-12 animate-fade-up">
            <h3 className="text-xl font-semibold text-center mb-6">
              Healthcare Providers in <span className="text-primary">{selectedCounty} County</span>
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">15 Hospitals</p>
                    <p className="text-sm text-muted-foreground">Available nearby</p>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">48 Doctors</p>
                    <p className="text-sm text-muted-foreground">Verified specialists</p>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-shadow sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Pill className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">32 Pharmacies</p>
                    <p className="text-sm text-muted-foreground">Stocked & ready</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => navigate(`/find-care?county=${encodeURIComponent(selectedCounty)}`)}
              >
                View All Providers in {selectedCounty}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountySelector;
