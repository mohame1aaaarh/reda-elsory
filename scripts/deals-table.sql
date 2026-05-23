-- Site settings (key-value store for editable notes etc)
CREATE TABLE settings (
  key TEXT PRIMARY KEY,
  value TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON settings FOR SELECT USING (true);
CREATE POLICY "Admin insert" ON settings FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update" ON settings FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete" ON settings FOR DELETE USING (auth.role() = 'authenticated');

INSERT INTO settings (key, value) VALUES ('deals_note', 'عروض عيد الأضحى');

-- Deals / Offers table
CREATE TABLE deals (
  id BIGSERIAL PRIMARY KEY,
  title_ar TEXT NOT NULL,
  description_ar TEXT,
  image_url TEXT,
  price DECIMAL(10,2) NOT NULL,
  old_price DECIMAL(10,2),
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE deals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON deals FOR SELECT USING (true);
CREATE POLICY "Admin insert" ON deals FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update" ON deals FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete" ON deals FOR DELETE USING (auth.role() = 'authenticated');

-- Seed some sample deals
INSERT INTO deals (title_ar, description_ar, price, old_price, display_order, is_active) VALUES
  ('عرض الشاورما', 'شاورما دجاج + بطاطس + مشروب', 120, 160, 1, true),
  ('عرض العائلة', 'بروستد 8 قطع + بطاطس كبير + كول سلو + خبز', 250, 320, 2, true),
  ('عرض الكريب', '2 كريب نوتيلا + 2 عصير', 150, 190, 3, true);
