-- Allow public viewing of approved providers (for patient search)
CREATE POLICY "Anyone can view approved providers"
ON public.providers
FOR SELECT
TO anon, authenticated
USING (status = 'approved');