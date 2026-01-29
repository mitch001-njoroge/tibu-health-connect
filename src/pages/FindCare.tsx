import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MapPin, Search, Stethoscope, User, Building, Filter, Phone, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Provider = Tables<"providers">;

const counties = [
  "All Counties", "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Machakos",
  "Kiambu", "Nyeri", "Kakamega", "Kilifi", "Garissa", "Meru",
  "Turkana", "Bungoma", "Homa Bay", "Migori", "Kitui", "Makueni",
  "Kajiado", "Uasin Gishu", "Trans Nzoia", "Nandi", "Baringo", "Laikipia",
  "Embu", "Kirinyaga", "Muranga", "Tharaka Nithi", "Nyandarua", "Vihiga", "Busia",
  "Kisii", "Bomet", "Kericho", "Narok", "Siaya"
];

const providerTypes = [
  { value: "all", label: "All Providers" },
  { value: "doctor", label: "Doctors" },
  { value: "specialist", label: "Specialists" },
  { value: "caregiver", label: "Caregivers" },
  { value: "clinic", label: "Clinics & Facilities" },
  { value: "other", label: "Other Healthcare" },
];

const specialties = [
  "All Specialties", "General Medicine", "Pediatrics", "Cardiology", "Dermatology",
  "Gynecology", "Orthopedics", "Neurology", "Psychiatry", "Oncology",
  "Ophthalmology", "ENT", "Dentistry", "Physiotherapy", "Nutrition"
];

const FindCare = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCounty, setSelectedCounty] = useState(searchParams.get("county") || "All Counties");
  const [selectedType, setSelectedType] = useState(searchParams.get("type") || "all");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");

  useEffect(() => {
    fetchProviders();
  }, [selectedCounty, selectedType, selectedSpecialty]);

  const fetchProviders = async () => {
    setIsLoading(true);
    try {
      let query = supabase
        .from("providers")
        .select("*")
        .eq("status", "approved")
        .order("full_name");

      if (selectedCounty !== "All Counties") {
        query = query.ilike("county", selectedCounty.toLowerCase());
      }

      if (selectedType !== "all") {
        query = query.eq("provider_type", selectedType as "doctor" | "specialist" | "caregiver" | "clinic" | "other");
      }

      if (selectedSpecialty !== "All Specialties") {
        query = query.ilike("specialty", `%${selectedSpecialty}%`);
      }

      const { data, error } = await query;

      if (error) throw error;
      setProviders(data || []);
    } catch (error) {
      console.error("Error fetching providers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedCounty !== "All Counties") params.set("county", selectedCounty);
    if (selectedType !== "all") params.set("type", selectedType);
    setSearchParams(params);
    fetchProviders();
  };

  const getProviderTypeLabel = (type: string) => {
    const found = providerTypes.find((p) => p.value === type);
    return found?.label || type;
  };

  const getProviderIcon = (type: string) => {
    switch (type) {
      case "doctor":
      case "specialist":
        return <Stethoscope className="h-5 w-5" />;
      case "clinic":
        return <Building className="h-5 w-5" />;
      default:
        return <User className="h-5 w-5" />;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-success/5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl font-bold text-secondary mb-4 md:text-4xl lg:text-5xl">
              Find Healthcare Near You
            </h1>
            <p className="text-lg text-muted-foreground">
              Search for doctors, specialists, clinics, and caregivers across Kenya. 
              Get connected to quality healthcare in your county.
            </p>
          </div>

          {/* Search Filters */}
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-6 shadow-card border border-border">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  County
                </label>
                <Select value={selectedCounty} onValueChange={setSelectedCounty}>
                  <SelectTrigger className="h-11 bg-background">
                    <SelectValue placeholder="Select county" />
                  </SelectTrigger>
                  <SelectContent className="bg-card z-50">
                    {counties.map((county) => (
                      <SelectItem key={county} value={county}>
                        {county}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  <User className="inline h-4 w-4 mr-1" />
                  Provider Type
                </label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="h-11 bg-background">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card z-50">
                    {providerTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  <Filter className="inline h-4 w-4 mr-1" />
                  Specialty
                </label>
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger className="h-11 bg-background">
                    <SelectValue placeholder="Select specialty" />
                  </SelectTrigger>
                  <SelectContent className="bg-card z-50">
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button onClick={handleSearch} size="lg" className="w-full h-11">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                {isLoading ? "Searching..." : `${providers.length} Provider${providers.length !== 1 ? "s" : ""} Found`}
              </h2>
              {selectedCounty !== "All Counties" && (
                <p className="text-muted-foreground">in {selectedCounty} County</p>
              )}
            </div>
          </div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2 mt-2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-muted rounded w-full mb-2"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : providers.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Stethoscope className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary mb-2">No Providers Found</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We couldn't find any approved healthcare providers matching your criteria. 
                  Try adjusting your filters or check back later as more providers join.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {providers.map((provider) => (
                <Card key={provider.id} className="hover:shadow-card transition-shadow group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {getProviderIcon(provider.provider_type)}
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {provider.full_name}
                          </CardTitle>
                          <CardDescription>
                            {getProviderTypeLabel(provider.provider_type)}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {provider.specialty && (
                      <Badge variant="secondary" className="font-normal">
                        {provider.specialty}
                      </Badge>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{provider.location}, {provider.county}</span>
                    </div>

                    {provider.years_of_experience && (
                      <p className="text-sm text-muted-foreground">
                        {provider.years_of_experience} years of experience
                      </p>
                    )}

                    {provider.bio && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {provider.bio}
                      </p>
                    )}

                    <div className="pt-3 border-t border-border flex flex-wrap gap-2">
                      {provider.phone && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={`tel:${provider.phone}`}>
                            <Phone className="h-3.5 w-3.5 mr-1" />
                            Call
                          </a>
                        </Button>
                      )}
                      {provider.email && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={`mailto:${provider.email}`}>
                            <Mail className="h-3.5 w-3.5 mr-1" />
                            Email
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default FindCare;
