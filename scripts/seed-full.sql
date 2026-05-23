-- ============================================
-- رضا السوري - Full Database Seed
-- ============================================

-- Categories
INSERT INTO categories (name_ar, slug, display_order, note_ar, emoji) VALUES
('الفتة', 'fatteh', 1, 'يقدم مع أرز سوري + ثومية + بطاطس + مخلل', '🥙'),
('ساندوتشات الشاورما', 'shawarma-sandwiches', 2, NULL, '🌯'),
('أوزان الشاورما', 'shawarma-weights', 3, NULL, '⚖️'),
('وجبات الشاورما', 'shawarma-meals', 4, 'يقدم مع ثومية + بطاطس + مخلل', '🍽️'),
('فراخ شواية', 'grilled-chicken', 5, 'مع أرز سوري + بطاطس + ثومية + مخلل + عيش', '🍗'),
('المقبلات', 'appetizers', 6, NULL, '🥗'),
('الكريب', 'crepes', 7, 'إضافة جبنة: +10', '🥞'),
('الفرايز والبطاطس', 'fries', 8, NULL, '🍟'),
('ساندوتشات الغربي', 'western-sandwiches', 9, NULL, '🥪'),
('الوجبات الغربي', 'western-meals', 10, 'يقدم مع أرز + بطاطس + ثومية + مخلل + عيش', '🍽️'),
('البروستد', 'broasted', 11, 'مع بطاطس + عيش شامي + ثومية', '🍗'),
('صواني', 'trays', 12, NULL, '🍽️');

-- ========== 🥙 الفتة ==========
INSERT INTO menu_items (category_id, name_ar, display_order) VALUES
(1, 'فتة شاورما فراخ', 1),
(1, 'فتة كرسبي', 2),
(1, 'فتة زنجر', 3),
(1, 'فتة شيش طاووق', 4);

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 135, true, 1 FROM menu_items WHERE name_ar = 'فتة شاورما فراخ';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'M', 110, true, 2 FROM menu_items WHERE name_ar = 'فتة شاورما فراخ';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'S', 90, true, 3 FROM menu_items WHERE name_ar = 'فتة شاورما فراخ';

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 135, true, 1 FROM menu_items WHERE name_ar = 'فتة كرسبي';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'M', 110, true, 2 FROM menu_items WHERE name_ar = 'فتة كرسبي';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'S', 90, true, 3 FROM menu_items WHERE name_ar = 'فتة كرسبي';

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 135, true, 1 FROM menu_items WHERE name_ar = 'فتة زنجر';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'M', 110, true, 2 FROM menu_items WHERE name_ar = 'فتة زنجر';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'S', 90, true, 3 FROM menu_items WHERE name_ar = 'فتة زنجر';

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 145, true, 1 FROM menu_items WHERE name_ar = 'فتة شيش طاووق';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'M', 115, true, 2 FROM menu_items WHERE name_ar = 'فتة شيش طاووق';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'S', 95, true, 3 FROM menu_items WHERE name_ar = 'فتة شيش طاووق';

-- ========== 🌯 ساندوتشات الشاورما ==========
INSERT INTO menu_items (category_id, name_ar, display_order) VALUES
(2, 'شاورما فراخ', 1),
(2, 'شاورما عيش سوري', 2),
(2, 'شاورما وسط سوري', 3),
(2, 'شاورما عيش فرنسي', 4),
(2, 'شاورما عيش شامي', 5),
(2, 'إضافة بطاطس', 6),
(2, 'إضافة موتزاريلا', 7);

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 110, false, 1 FROM menu_items WHERE name_ar = 'شاورما فراخ';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 80, false, 1 FROM menu_items WHERE name_ar = 'شاورما عيش سوري';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 65, false, 1 FROM menu_items WHERE name_ar = 'شاورما وسط سوري';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 85, false, 1 FROM menu_items WHERE name_ar = 'شاورما عيش فرنسي';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 50, false, 1 FROM menu_items WHERE name_ar = 'شاورما عيش شامي';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 5, false, 1 FROM menu_items WHERE name_ar = 'إضافة بطاطس';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 10, false, 1 FROM menu_items WHERE name_ar = 'إضافة موتزاريلا';

-- ========== ⚖️ أوزان الشاورما ==========
INSERT INTO menu_items (category_id, name_ar, display_order) VALUES
(3, 'كيلو', 1),
(3, 'نص كيلو', 2),
(3, 'ربع كيلو', 3);

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 550, false, 1 FROM menu_items WHERE name_ar = 'كيلو';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 290, false, 1 FROM menu_items WHERE name_ar = 'نص كيلو';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 170, false, 1 FROM menu_items WHERE name_ar = 'ربع كيلو';

-- ========== 🍽️ وجبات الشاورما ==========
INSERT INTO menu_items (category_id, name_ar, display_order) VALUES
(4, 'وجبة عربي سينجل', 1),
(4, 'وجبة عربي دبل', 2),
(4, 'وجبة عربي تربل', 3),
(4, 'وجبة ماريه', 4),
(4, 'وجبة بايتس شاورما موتزاريلا', 5);

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 125, false, 1 FROM menu_items WHERE name_ar = 'وجبة عربي سينجل';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 175, false, 1 FROM menu_items WHERE name_ar = 'وجبة عربي دبل';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 260, false, 1 FROM menu_items WHERE name_ar = 'وجبة عربي تربل';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 130, false, 1 FROM menu_items WHERE name_ar = 'وجبة ماريه';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 140, false, 1 FROM menu_items WHERE name_ar = 'وجبة بايتس شاورما موتزاريلا';

-- ========== 🍗 فراخ شواية ==========
INSERT INTO menu_items (category_id, name_ar, display_order) VALUES
(5, 'فرخة كاملة', 1),
(5, 'نص فرخة', 2),
(5, 'ربع صدر', 3),
(5, 'ربع ورك', 4);

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 350, false, 1 FROM menu_items WHERE name_ar = 'فرخة كاملة';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 190, false, 1 FROM menu_items WHERE name_ar = 'نص فرخة';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 110, false, 1 FROM menu_items WHERE name_ar = 'ربع صدر';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 100, false, 1 FROM menu_items WHERE name_ar = 'ربع ورك';

-- ========== 🥗 المقبلات ==========
INSERT INTO menu_items (category_id, name_ar, display_order) VALUES
(6, 'طبق بطاطس', 1),
(6, 'طبق أرز', 2),
(6, 'علبة ثومية', 3),
(6, 'علبة مخلل', 4),
(6, 'علبة بطاطس', 5),
(6, 'جبنة فرايز', 6),
(6, 'عيش سوري', 7),
(6, 'عيش شامي كبير', 8);

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 20, false, 1 FROM menu_items WHERE name_ar = 'طبق بطاطس';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 20, false, 1 FROM menu_items WHERE name_ar = 'طبق أرز';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 20, false, 1 FROM menu_items WHERE name_ar = 'علبة ثومية';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 15, false, 1 FROM menu_items WHERE name_ar = 'علبة مخلل';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 20, false, 1 FROM menu_items WHERE name_ar = 'علبة بطاطس';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 1.5, false, 1 FROM menu_items WHERE name_ar = 'جبنة فرايز';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 3, false, 1 FROM menu_items WHERE name_ar = 'عيش سوري';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 15, false, 1 FROM menu_items WHERE name_ar = 'عيش شامي كبير';

-- ========== 🥞 الكريب ==========
INSERT INTO menu_items (category_id, name_ar, description_ar, display_order) VALUES
(7, 'كريب بطاطس', NULL, 1),
(7, 'كريب سجق', NULL, 2),
(7, 'كريب بانيه كوكي', NULL, 3),
(7, 'كريب شاورما فراخ', NULL, 4),
(7, 'كريب زنجر', NULL, 5),
(7, 'كريب كرسبي', NULL, 6),
(7, 'كريب اسكالوب بانيه', NULL, 7),
(7, 'كريب شيش طاووق', NULL, 8),
(7, 'كريب ميكس فراخ', NULL, 9);

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 50, false, 1 FROM menu_items WHERE name_ar = 'كريب بطاطس';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 70, false, 1 FROM menu_items WHERE name_ar = 'كريب سجق';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 60, false, 1 FROM menu_items WHERE name_ar = 'كريب بانيه كوكي';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 95, false, 1 FROM menu_items WHERE name_ar = 'كريب شاورما فراخ';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 100, false, 1 FROM menu_items WHERE name_ar = 'كريب زنجر';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 100, false, 1 FROM menu_items WHERE name_ar = 'كريب كرسبي';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 95, false, 1 FROM menu_items WHERE name_ar = 'كريب اسكالوب بانيه';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 100, false, 1 FROM menu_items WHERE name_ar = 'كريب شيش طاووق';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 110, false, 1 FROM menu_items WHERE name_ar = 'كريب ميكس فراخ';

-- ========== 🍟 الفرايز والبطاطس ==========
INSERT INTO menu_items (category_id, name_ar, display_order) VALUES
(8, 'بطاطس', 1),
(8, 'فرايز', 2),
(8, 'بطاطس موتزاريلا', 3),
(8, 'بطاطس شاورما', 4),
(8, 'رينجو فرايز', 5);

-- بطاطس
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'سوري', 30, true, 1 FROM menu_items WHERE name_ar = 'بطاطس';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'شامي', 25, true, 2 FROM menu_items WHERE name_ar = 'بطاطس';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'فرنسي', 40, true, 3 FROM menu_items WHERE name_ar = 'بطاطس';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'صاج', 40, true, 4 FROM menu_items WHERE name_ar = 'بطاطس';

-- فرايز
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'سوري', 30, true, 1 FROM menu_items WHERE name_ar = 'فرايز';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'شامي', 25, true, 2 FROM menu_items WHERE name_ar = 'فرايز';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'فرنسي', 40, true, 3 FROM menu_items WHERE name_ar = 'فرايز';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'صاج', 40, true, 4 FROM menu_items WHERE name_ar = 'فرايز';

-- بطاطس موتزاريلا
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'سوري', 35, true, 1 FROM menu_items WHERE name_ar = 'بطاطس موتزاريلا';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'شامي', 28, true, 2 FROM menu_items WHERE name_ar = 'بطاطس موتزاريلا';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'فرنسي', 45, true, 3 FROM menu_items WHERE name_ar = 'بطاطس موتزاريلا';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'صاج', 40, true, 4 FROM menu_items WHERE name_ar = 'بطاطس موتزاريلا';

-- بطاطس شاورما
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'سوري', 40, true, 1 FROM menu_items WHERE name_ar = 'بطاطس شاورما';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'شامي', 40, true, 2 FROM menu_items WHERE name_ar = 'بطاطس شاورما';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'فرنسي', 50, true, 3 FROM menu_items WHERE name_ar = 'بطاطس شاورما';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'صاج', 50, true, 4 FROM menu_items WHERE name_ar = 'بطاطس شاورما';

-- رينجو فرايز
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'سوري', 35, true, 1 FROM menu_items WHERE name_ar = 'رينجو فرايز';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'شامي', 45, true, 2 FROM menu_items WHERE name_ar = 'رينجو فرايز';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'فرنسي', 55, true, 3 FROM menu_items WHERE name_ar = 'رينجو فرايز';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'صاج', 60, true, 4 FROM menu_items WHERE name_ar = 'رينجو فرايز';

-- ========== 🥪 ساندوتشات الغربي ==========
INSERT INTO menu_items (category_id, name_ar, display_order) VALUES
(9, 'كرسبي', 1),
(9, 'زنجر', 2),
(9, 'اسكالوب بانيه', 3),
(9, 'شيش طاووق', 4),
(9, 'فاهيتا', 5);

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'S', 75, true, 1 FROM menu_items WHERE name_ar = 'كرسبي';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'M', 95, true, 2 FROM menu_items WHERE name_ar = 'كرسبي';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 115, true, 3 FROM menu_items WHERE name_ar = 'كرسبي';

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'S', 75, true, 1 FROM menu_items WHERE name_ar = 'زنجر';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'M', 95, true, 2 FROM menu_items WHERE name_ar = 'زنجر';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 115, true, 3 FROM menu_items WHERE name_ar = 'زنجر';

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'S', 75, true, 1 FROM menu_items WHERE name_ar = 'اسكالوب بانيه';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'M', 95, true, 2 FROM menu_items WHERE name_ar = 'اسكالوب بانيه';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 115, true, 3 FROM menu_items WHERE name_ar = 'اسكالوب بانيه';

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'M', 105, true, 1 FROM menu_items WHERE name_ar = 'شيش طاووق';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 130, true, 2 FROM menu_items WHERE name_ar = 'شيش طاووق';

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'M', 105, true, 1 FROM menu_items WHERE name_ar = 'فاهيتا';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 130, true, 2 FROM menu_items WHERE name_ar = 'فاهيتا';

-- ========== 🍽️ الوجبات الغربي ==========
INSERT INTO menu_items (category_id, name_ar, display_order) VALUES
(10, 'وجبة كرسبي', 1),
(10, 'وجبة زنجر', 2),
(10, 'وجبة اسكالوب بانيه', 3),
(10, 'وجبة شيش طاووق', 4),
(10, 'وجبة ميكس', 5),
(10, 'وجبة ميكس الرضا', 6),
(10, 'وجبة فراخ بانيه', 7);

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'S', 95, true, 1 FROM menu_items WHERE name_ar = 'وجبة كرسبي';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'M', 125, true, 2 FROM menu_items WHERE name_ar = 'وجبة كرسبي';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 145, true, 3 FROM menu_items WHERE name_ar = 'وجبة كرسبي';

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'S', 95, true, 1 FROM menu_items WHERE name_ar = 'وجبة زنجر';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'M', 125, true, 2 FROM menu_items WHERE name_ar = 'وجبة زنجر';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 145, true, 3 FROM menu_items WHERE name_ar = 'وجبة زنجر';

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'S', 95, true, 1 FROM menu_items WHERE name_ar = 'وجبة اسكالوب بانيه';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'M', 125, true, 2 FROM menu_items WHERE name_ar = 'وجبة اسكالوب بانيه';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 145, true, 3 FROM menu_items WHERE name_ar = 'وجبة اسكالوب بانيه';

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'S', 105, true, 1 FROM menu_items WHERE name_ar = 'وجبة شيش طاووق';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 150, true, 2 FROM menu_items WHERE name_ar = 'وجبة شيش طاووق';

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'S', 110, true, 1 FROM menu_items WHERE name_ar = 'وجبة ميكس';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'L', 155, true, 2 FROM menu_items WHERE name_ar = 'وجبة ميكس';

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 145, false, 1 FROM menu_items WHERE name_ar = 'وجبة ميكس الرضا';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 140, false, 1 FROM menu_items WHERE name_ar = 'وجبة فراخ بانيه';

-- ========== 🍗 البروستد ==========
INSERT INTO menu_items (category_id, name_ar, display_order) VALUES
(11, 'فرخة كاملة', 1),
(11, 'نص فرخة', 2),
(11, 'ربع فرخة', 3),
(11, '2 قطعة', 4);

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 370, false, 1 FROM menu_items WHERE name_ar = 'فرخة كاملة' AND category_id = 11;
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 195, false, 1 FROM menu_items WHERE name_ar = 'نص فرخة' AND category_id = 11;
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 125, false, 1 FROM menu_items WHERE name_ar = 'ربع فرخة' AND category_id = 11;
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 115, false, 1 FROM menu_items WHERE name_ar = '2 قطعة' AND category_id = 11;

-- ========== 🍽️ صواني ==========
INSERT INTO menu_items (category_id, name_ar, description_ar, display_order) VALUES
(12, 'صنية اللمة', '6 قطع شاورما + بطاطس + ثومية + عيش + مخلل', 1),
(12, 'صنية العيلة', '12 ساندوتش شاورما + بطاطس + ثومية + عيش + مخلل', 2),
(12, 'صنية الرضا', '12 ساندوتش شاورما + بانيه + بطاطس + ثومية + عيش + مخلل', 3);

INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 460, false, 1 FROM menu_items WHERE name_ar = 'صنية اللمة';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 470, false, 1 FROM menu_items WHERE name_ar = 'صنية العيلة';
INSERT INTO item_options (menu_item_id, label_ar, price, is_size, display_order)
SELECT id, 'السعر', 445, false, 1 FROM menu_items WHERE name_ar = 'صنية الرضا';
