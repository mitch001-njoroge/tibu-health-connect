import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";
import { User, Phone, MapPin, Building, Award, Stethoscope, Edit, X, LogOut } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

const profileSchema = z.object({
  fullName: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100),
  phone: z.string().trim().min(10, { message: "Please enter a valid phone number" }).max(20),
  providerType: z.enum(["doctor", "specialist", "caregiver", "clinic", "other"]),
  specialty: z.string().trim().max(100).optional(),
  licenseNumber: z.string().trim().max(50).optional(),
  yearsOfExperience: z.number().min(0).max(70).optional(),
  location: z.string().trim().min(2, { message: "Location is required" }).max(200),
  county: z.string().trim().min(2, { message: "County is required" }).max(100),
  bio: z.string().trim().max(1000).optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;
type Provider = Tables<"providers">;

const ProviderDashboard = () => {
  const navigate = useNavigate();
  const [provider, setProvider] = useState<Provider | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      providerType: "doctor",
      specialty: "",
      licenseNumber: "",
      yearsOfExperience: undefined,
      location: "",
      county: "",
      bio: "",
    },
  });

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session) {
          navigate("/provider-auth");
        } else if (event === "SIGNED_IN") {
          setTimeout(() => {
            fetchProviderProfile(session.user.id);
          }, 0);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/provider-auth");
      } else {
        fetchProviderProfile(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchProviderProfile = async (userId: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("providers")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        toast({
          title: "Profile not found",
          description: "Please complete your provider registration first.",
          variant: "destructive",
        });
        navigate("/provider-auth");
        return;
      }

      setProvider(data);
      form.reset({
        fullName: data.full_name,
        phone: data.phone,
        providerType: data.provider_type,
        specialty: data.specialty || "",
        licenseNumber: data.license_number || "",
        yearsOfExperience: data.years_of_experience || undefined,
        location: data.location,
        county: data.county,
        bio: data.bio || "",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to load profile",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (data: ProfileFormData) => {
    if (!provider) return;
    setIsSaving(true);

    try {
      const { error } = await supabase
        .from("providers")
        .update({
          full_name: data.fullName,
          phone: data.phone,
          provider_type: data.providerType,
          specialty: data.specialty || null,
          license_number: data.licenseNumber || null,
          years_of_experience: data.yearsOfExperience || null,
          location: data.location,
          county: data.county,
          bio: data.bio || null,
        })
        .eq("id", provider.id);

      if (error) throw error;

      setProvider({
        ...provider,
        full_name: data.fullName,
        phone: data.phone,
        provider_type: data.providerType,
        specialty: data.specialty || null,
        license_number: data.licenseNumber || null,
        years_of_experience: data.yearsOfExperience || null,
        location: data.location,
        county: data.county,
        bio: data.bio || null,
      });

      setIsEditing(false);
      toast({
        title: "Profile updated",
        description: "Your changes have been saved successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save profile",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const kenyanCounties = [
    "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Kiambu", "Machakos",
    "Kajiado", "Uasin Gishu", "Meru", "Nyeri", "Kilifi", "Kakamega", "Bungoma",
    "Kisii", "Migori", "Homa Bay", "Siaya", "Bomet", "Kericho", "Narok",
    "Trans Nzoia", "Nandi", "Baringo", "Laikipia", "Embu", "Kirinyaga", "Muranga",
    "Tharaka Nithi", "Kitui", "Makueni", "Nyandarua", "Vihiga", "Busia", "Other"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-success/10 text-success border-success/20";
      case "rejected":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-warning/10 text-warning border-warning/20";
    }
  };

  const getProviderTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      doctor: "Doctor",
      specialist: "Specialist",
      caregiver: "Caregiver",
      clinic: "Clinic/Facility",
      other: "Other Healthcare Provider",
    };
    return labels[type] || type;
  };

  if (isLoading) {
    return (
      <Layout>
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-4xl">
            <Card>
              <CardHeader>
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-4 w-64 mt-2" />
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-secondary">
                      Provider Dashboard
                    </CardTitle>
                    <CardDescription>
                      Manage your healthcare provider profile
                    </CardDescription>
                  </div>
                </div>
                {provider && (
                  <Badge className={getStatusColor(provider.status)}>
                    {provider.status.charAt(0).toUpperCase() + provider.status.slice(1)}
                  </Badge>
                )}
              </div>
              <div className="flex gap-2">
                {!isEditing ? (
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => {
                    setIsEditing(false);
                    if (provider) {
                      form.reset({
                        fullName: provider.full_name,
                        phone: provider.phone,
                        providerType: provider.provider_type,
                        specialty: provider.specialty || "",
                        licenseNumber: provider.license_number || "",
                        yearsOfExperience: provider.years_of_experience || undefined,
                        location: provider.location,
                        county: provider.county,
                        bio: provider.bio || "",
                      });
                    }
                  }}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSave)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                              <FormControl>
                                <Input {...field} placeholder="Dr. Jane Doe" className="pl-10" />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                              <FormControl>
                                <Input {...field} placeholder="0712 345 678" className="pl-10" />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="providerType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Provider Type *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="doctor">Doctor</SelectItem>
                                <SelectItem value="specialist">Specialist</SelectItem>
                                <SelectItem value="caregiver">Caregiver</SelectItem>
                                <SelectItem value="clinic">Clinic/Facility</SelectItem>
                                <SelectItem value="other">Other Healthcare Provider</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="specialty"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Specialty</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="e.g., Pediatrics, Cardiology" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="licenseNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>License Number</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="License #" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="yearsOfExperience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Years of Experience</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                min={0}
                                max={70}
                                placeholder="5"
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="county"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>County *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your county" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {kenyanCounties.map((county) => (
                                  <SelectItem key={county} value={county.toLowerCase()}>
                                    {county}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location/Address *</FormLabel>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                              <FormControl>
                                <Input {...field} placeholder="e.g., Westlands, Nairobi" className="pl-10" />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>About You</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Tell patients about your experience, qualifications, and services..."
                              className="min-h-[100px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end gap-3">
                      <Button type="submit" disabled={isSaving}>
                        {isSaving ? "Saving..." : "Save Changes"}
                      </Button>
                    </div>
                  </form>
                </Form>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <User className="h-4 w-4" /> Full Name
                      </p>
                      <p className="font-medium">{provider?.full_name}</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Phone className="h-4 w-4" /> Phone Number
                      </p>
                      <p className="font-medium">{provider?.phone}</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Stethoscope className="h-4 w-4" /> Provider Type
                      </p>
                      <p className="font-medium">{provider && getProviderTypeLabel(provider.provider_type)}</p>
                    </div>

                    {provider?.specialty && (
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Award className="h-4 w-4" /> Specialty
                        </p>
                        <p className="font-medium">{provider.specialty}</p>
                      </div>
                    )}

                    {provider?.license_number && (
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">License Number</p>
                        <p className="font-medium">{provider.license_number}</p>
                      </div>
                    )}

                    {provider?.years_of_experience && (
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Years of Experience</p>
                        <p className="font-medium">{provider.years_of_experience} years</p>
                      </div>
                    )}

                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Building className="h-4 w-4" /> County
                      </p>
                      <p className="font-medium capitalize">{provider?.county}</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> Location
                      </p>
                      <p className="font-medium">{provider?.location}</p>
                    </div>
                  </div>

                  {provider?.bio && (
                    <div className="space-y-1 pt-4 border-t">
                      <p className="text-sm text-muted-foreground">About</p>
                      <p className="text-foreground">{provider.bio}</p>
                    </div>
                  )}

                  <div className="pt-4 border-t text-sm text-muted-foreground">
                    <p>Email: {provider?.email}</p>
                    <p>Member since: {provider && new Date(provider.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ProviderDashboard;
