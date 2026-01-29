-- Create enum for provider types
CREATE TYPE public.provider_type AS ENUM ('doctor', 'specialist', 'caregiver', 'clinic', 'other');

-- Create enum for provider status
CREATE TYPE public.provider_status AS ENUM ('pending', 'approved', 'rejected');

-- Create providers table
CREATE TABLE public.providers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  provider_type provider_type NOT NULL,
  specialty TEXT,
  license_number TEXT,
  years_of_experience INTEGER,
  location TEXT NOT NULL,
  county TEXT NOT NULL,
  bio TEXT,
  status provider_status NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable Row Level Security
ALTER TABLE public.providers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Providers can view their own profile"
ON public.providers
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Providers can insert their own profile"
ON public.providers
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Providers can update their own profile"
ON public.providers
FOR UPDATE
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_providers_updated_at
BEFORE UPDATE ON public.providers
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();