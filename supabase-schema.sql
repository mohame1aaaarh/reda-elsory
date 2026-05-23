-- Categories table (menu sections)
CREATE TABLE categories (
  id BIGSERIAL PRIMARY KEY,
  name_ar TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  display_order INTEGER DEFAULT 0,
  note_ar TEXT,
  emoji TEXT DEFAULT '🍽️'
);

-- Menu items
CREATE TABLE menu_items (
  id BIGSERIAL PRIMARY KEY,
  category_id BIGINT REFERENCES categories(id) ON DELETE CASCADE,
  name_ar TEXT NOT NULL,
  description_ar TEXT,
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Item options/prices (sizes or add-ons)
CREATE TABLE item_options (
  id BIGSERIAL PRIMARY KEY,
  menu_item_id BIGINT REFERENCES menu_items(id) ON DELETE CASCADE,
  label_ar TEXT,
  price DECIMAL(10,2) NOT NULL,
  is_size BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0
);

-- Storage bucket for images
-- Run this in Supabase SQL editor:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('menu-images', 'menu-images', true);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE item_options ENABLE ROW LEVEL SECURITY;

-- Public can read everything
CREATE POLICY "Public read access" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read access" ON menu_items FOR SELECT USING (true);
CREATE POLICY "Public read access" ON item_options FOR SELECT USING (true);

-- Only authenticated users can modify
CREATE POLICY "Admin insert" ON categories FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update" ON categories FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete" ON categories FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert" ON menu_items FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update" ON menu_items FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete" ON menu_items FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert" ON item_options FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update" ON item_options FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete" ON item_options FOR DELETE USING (auth.role() = 'authenticated');

-- ===== STORAGE BUCKET POLICIES =====
-- Run this in Supabase SQL editor to create the bucket:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('menu-images', 'menu-images', true);

-- Allow public read access to images
CREATE POLICY "Public read" ON storage.objects FOR SELECT USING (bucket_id = 'menu-images');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'menu-images' AND auth.role() = 'authenticated'
  );

-- Allow authenticated users to update their images
CREATE POLICY "Authenticated users can update" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'menu-images' AND auth.role() = 'authenticated'
  );

-- Allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'menu-images' AND auth.role() = 'authenticated'
  );
