-- SQL to create the team table in Supabase
CREATE TABLE public.team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  description text,
  image_url text,
  specialties text[],
  email text,
  linkedin text
);

-- Sample insert
INSERT INTO public.team_members (name, role, description, image_url, specialties, email, linkedin)
VALUES
('James Mitchell, PE', 'Principal Engineer & Founder', '25+ years of experience in civil engineering with expertise in large-scale infrastructure projects.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300', ARRAY['MS Civil Engineering','PE Licensed'], 'james@sterlingcivil.com', '#'),
('Sarah Thompson, PE', 'Senior Project Manager', 'Expert in project management and bridge engineering.', 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300', ARRAY['Bridge Engineering','PMP Certified'], 'sarah@sterlingcivil.com', '#');
