// =============================================
// GLOWGUIDE – KNOWLEDGE BASE & PRODUCT DATA
// =============================================

const GlowData = {

  // ── PRODUCTS ──
  products: [
    // FACIAL WASH
    { id: 1, name: "CeraVe Foaming Facial Cleanser", category: "facial-wash", emoji: "🧼", brand: "CeraVe", price: 185000, skinTypes: ["berminyak","kombinasi"], concerns: ["jerawat","komedo","pori-besar"], ingredients: ["niacinamide","ceramide","hyaluronic-acid"], description: "Pembersih berbusa ringan yang membersihkan minyak berlebih tanpa mengganggu skin barrier.", rating: 4.8, reviews: 1240 },
    { id: 2, name: "Cetaphil Gentle Skin Cleanser", category: "facial-wash", emoji: "🫧", brand: "Cetaphil", price: 165000, skinTypes: ["sensitif","normal","kering"], concerns: ["kulit-sensitif","kulit-kering"], ingredients: ["glycerin","niacinamide"], description: "Formula lembut bebas sabun yang cocok untuk kulit sensitif dan kering.", rating: 4.7, reviews: 980 },
    { id: 3, name: "The Ordinary Squalane Cleanser", category: "facial-wash", emoji: "✨", brand: "The Ordinary", price: 220000, skinTypes: ["kering","normal","sensitif"], concerns: ["kulit-kering","kulit-sensitif"], ingredients: ["squalane","glycerin"], description: "Pembersih berbahan squalane yang melembapkan sambil membersihkan secara menyeluruh.", rating: 4.6, reviews: 756 },
    { id: 4, name: "Wardah Acnederm Facial Wash", category: "facial-wash", emoji: "🌿", brand: "Wardah", price: 45000, skinTypes: ["berminyak","kombinasi"], concerns: ["jerawat","komedo"], ingredients: ["salicylic-acid","tea-tree"], description: "Facial wash khusus jerawat dengan kandungan Salicylic Acid untuk mengontrol minyak.", rating: 4.4, reviews: 2100 },
    { id: 5, name: "Emina Bright Stuff Face Wash", category: "facial-wash", emoji: "🌸", brand: "Emina", price: 25000, skinTypes: ["normal","kombinasi"], concerns: ["kulit-kusam","bekas-jerawat"], ingredients: ["vitamin-c","glycerin"], description: "Facial wash mencerahkan dengan kandungan Vitamin C untuk kulit tampak lebih cerah.", rating: 4.3, reviews: 1850 },

    // TONER
    { id: 6, name: "Some By Mi AHA BHA PHA Toner", category: "toner", emoji: "💧", brand: "Some By Mi", price: 155000, skinTypes: ["berminyak","kombinasi"], concerns: ["jerawat","komedo","pori-besar"], ingredients: ["aha","bha","pha","niacinamide"], description: "Toner eksfoliasi dengan triple acid untuk membersihkan pori dan meratakan tekstur kulit.", rating: 4.7, reviews: 3200 },
    { id: 7, name: "Hada Labo Gokujyun Lotion", category: "toner", emoji: "💦", brand: "Hada Labo", price: 85000, skinTypes: ["kering","normal","sensitif"], concerns: ["kulit-kering","garis-halus"], ingredients: ["hyaluronic-acid","glycerin"], description: "Toner pelembap dengan 5 jenis Hyaluronic Acid untuk hidrasi intensif dari lapisan dalam.", rating: 4.9, reviews: 4500 },
    { id: 8, name: "Pyunkang Yul Essence Toner", category: "toner", emoji: "🌿", brand: "Pyunkang Yul", price: 195000, skinTypes: ["sensitif","kering","normal"], concerns: ["kulit-sensitif","kulit-kering"], ingredients: ["astragalus-root","glycerin"], description: "Essence toner minimalis dengan 1 bahan utama untuk kulit sensitif yang butuh ketenangan.", rating: 4.8, reviews: 890 },
    { id: 9, name: "Azarine Hydrasoothe Toner", category: "toner", emoji: "🪷", brand: "Azarine", price: 55000, skinTypes: ["sensitif","kering","normal"], concerns: ["kulit-sensitif","kulit-kering"], ingredients: ["centella-asiatica","allantoin","glycerin"], description: "Toner menenangkan dengan Centella Asiatica untuk kulit sensitif dan merah.", rating: 4.5, reviews: 1670 },
    { id: 10, name: "Somethinc Level 1% BHA", category: "toner", emoji: "⚗️", brand: "Somethinc", price: 89000, skinTypes: ["berminyak","kombinasi"], concerns: ["jerawat","komedo","pori-besar"], ingredients: ["bha","niacinamide"], description: "Toner BHA 1% untuk exfoliasi lembut, membersihkan pori tersumbat.", rating: 4.6, reviews: 2340 },

    // SERUM
    { id: 11, name: "The Ordinary Niacinamide 10%", category: "serum", emoji: "🔬", brand: "The Ordinary", price: 145000, skinTypes: ["berminyak","kombinasi"], concerns: ["jerawat","pori-besar","kulit-kusam","bekas-jerawat"], ingredients: ["niacinamide","zinc"], description: "Serum Niacinamide 10% + Zinc 1% untuk mengontrol sebum, menyamarkan pori, dan mencerahkan.", rating: 4.8, reviews: 8900 },
    { id: 12, name: "Somethinc Hyaluronic Acid Serum", category: "serum", emoji: "💎", brand: "Somethinc", price: 98000, skinTypes: ["kering","normal","sensitif"], concerns: ["kulit-kering","garis-halus"], ingredients: ["hyaluronic-acid","panthenol"], description: "Serum HA untuk melembapkan kulit secara intensif dan mengurangi tampilan garis halus.", rating: 4.7, reviews: 3400 },
    { id: 13, name: "Azarine Acne Spot Serum", category: "serum", emoji: "🎯", brand: "Azarine", price: 65000, skinTypes: ["berminyak","kombinasi"], concerns: ["jerawat","bekas-jerawat"], ingredients: ["salicylic-acid","tea-tree","niacinamide"], description: "Serum spot treatment untuk jerawat aktif dengan kandungan Salicylic Acid dan Tea Tree.", rating: 4.5, reviews: 1980 },
    { id: 14, name: "Erha Bright C Serum", category: "serum", emoji: "☀️", brand: "Erha", price: 265000, skinTypes: ["normal","kombinasi","kering"], concerns: ["kulit-kusam","bekas-jerawat","hiperpigmentasi"], ingredients: ["vitamin-c","niacinamide","glycerin"], description: "Serum Vitamin C untuk mencerahkan wajah, meratakan warna kulit, dan antioksidan.", rating: 4.6, reviews: 760 },
    { id: 15, name: "Avoskin Miraculous Retinol Serum", category: "serum", emoji: "🌙", brand: "Avoskin", price: 175000, skinTypes: ["normal","kombinasi"], concerns: ["garis-halus","tanda-penuaan","bekas-jerawat"], ingredients: ["retinol","peptide","niacinamide"], description: "Serum anti-aging dengan Retinol untuk meremajakan kulit dan menyamarkan tanda penuaan.", rating: 4.7, reviews: 1230 },
    { id: 16, name: "Wardah Lightening Serum", category: "serum", emoji: "💫", brand: "Wardah", price: 55000, skinTypes: ["normal","kombinasi","berminyak"], concerns: ["kulit-kusam","hiperpigmentasi"], ingredients: ["vitamin-c","alpha-arbutin"], description: "Serum pencerah dengan Vitamin C dan Alpha Arbutin untuk kulit lebih cerah merata.", rating: 4.3, reviews: 4500 },

    // MOISTURIZER
    { id: 17, name: "CeraVe Moisturizing Cream", category: "moisturizer", emoji: "🏺", brand: "CeraVe", price: 245000, skinTypes: ["kering","sensitif","normal"], concerns: ["kulit-kering","kulit-sensitif"], ingredients: ["ceramide","hyaluronic-acid","glycerin"], description: "Pelembap kaya dengan 3 essential ceramide untuk memperkuat skin barrier kulit kering.", rating: 4.9, reviews: 6700 },
    { id: 18, name: "Hada Labo Gokujyun Cream", category: "moisturizer", emoji: "🫙", brand: "Hada Labo", price: 105000, skinTypes: ["kering","normal"], concerns: ["kulit-kering","garis-halus"], ingredients: ["hyaluronic-acid","squalane","glycerin"], description: "Krim pelembap dengan HA untuk hidrasi panjang dan kulit lembut sepanjang hari.", rating: 4.8, reviews: 3200 },
    { id: 19, name: "Emina Bright Stuff Moisturizer", category: "moisturizer", emoji: "🌟", brand: "Emina", price: 35000, skinTypes: ["normal","kombinasi"], concerns: ["kulit-kusam"], ingredients: ["vitamin-c","niacinamide"], description: "Pelembap ringan mencerahkan untuk pemakaian sehari-hari yang mudah diaplikasikan.", rating: 4.4, reviews: 2800 },
    { id: 20, name: "Acnes Sealing Jelly", category: "moisturizer", emoji: "💚", brand: "Acnes", price: 42000, skinTypes: ["berminyak","kombinasi"], concerns: ["jerawat","pori-besar"], ingredients: ["salicylic-acid","tea-tree","glycerin"], description: "Pelembap gel ringan anti-jerawat yang tidak menyumbat pori untuk kulit berminyak.", rating: 4.5, reviews: 3100 },
    { id: 21, name: "Avoskin Hydrating Treatment Essence", category: "moisturizer", emoji: "🌺", brand: "Avoskin", price: 155000, skinTypes: ["sensitif","kering","normal"], concerns: ["kulit-sensitif","kulit-kering"], ingredients: ["centella-asiatica","panthenol","ceramide"], description: "Essence pelembap dengan Centella Asiatica untuk menenangkan dan menghidrasi kulit sensitif.", rating: 4.6, reviews: 980 },

    // SUNSCREEN
    { id: 22, name: "Azarine Hydrasoothe Sunscreen SPF45", category: "sunscreen", emoji: "☀️", brand: "Azarine", price: 65000, skinTypes: ["sensitif","kering","normal"], concerns: ["kulit-sensitif","perlindungan-uv"], ingredients: ["zinc-oxide","centella-asiatica","glycerin"], description: "Sunscreen mineral SPF45 PA++++ dengan tekstur ringan dan tidak meninggalkan white cast.", rating: 4.8, reviews: 5600 },
    { id: 23, name: "Biore UV Aqua Rich SPF50", category: "sunscreen", emoji: "🌊", brand: "Biore", price: 95000, skinTypes: ["berminyak","kombinasi","normal"], concerns: ["perlindungan-uv","kulit-kusam"], ingredients: ["chemical-filter","hyaluronic-acid"], description: "Sunscreen aqua gel SPF50 PA++++ ultralight yang cocok untuk iklim tropis Indonesia.", rating: 4.9, reviews: 8900 },
    { id: 24, name: "Wardah UV Shield SPF30", category: "sunscreen", emoji: "🛡️", brand: "Wardah", price: 45000, skinTypes: ["normal","kombinasi"], concerns: ["perlindungan-uv"], ingredients: ["chemical-filter","vitamin-e"], description: "Sunscreen sehari-hari dengan perlindungan UVA & UVB untuk aktivitas indoor.", rating: 4.3, reviews: 3400 },
    { id: 25, name: "Skin1004 Madagascar Centella SPF50", category: "sunscreen", emoji: "🌿", brand: "Skin1004", price: 215000, skinTypes: ["sensitif","kering"], concerns: ["kulit-sensitif","perlindungan-uv"], ingredients: ["centella-asiatica","zinc-oxide"], description: "Sunscreen mineral dengan Centella Asiatica untuk proteksi sekaligus menenangkan kulit sensitif.", rating: 4.7, reviews: 2100 },

    // MASK
    { id: 26, name: "Innisfree Super Volcanic Pore Clay Mask", category: "mask", emoji: "🌋", brand: "Innisfree", price: 175000, skinTypes: ["berminyak","kombinasi"], concerns: ["pori-besar","komedo","kulit-berminyak"], ingredients: ["volcanic-ash","kaolin","niacinamide"], description: "Clay mask dengan Volcanic Ash Jeju untuk membersihkan pori dan mengontrol minyak berlebih.", rating: 4.8, reviews: 4500 },
    { id: 27, name: "Etude SoonJung Cica Balm Mask", category: "mask", emoji: "🪴", brand: "Etude", price: 145000, skinTypes: ["sensitif","kering"], concerns: ["kulit-sensitif","kulit-merah"], ingredients: ["centella-asiatica","panthenol","madecassoside"], description: "Sheet mask dengan Cica untuk menenangkan kulit iritasi dan kemerahan secara intensif.", rating: 4.7, reviews: 1200 },
    { id: 28, name: "The Body Shop Vitamin C Glow Mask", category: "mask", emoji: "🍊", brand: "The Body Shop", price: 255000, skinTypes: ["normal","kombinasi","berminyak"], concerns: ["kulit-kusam","hiperpigmentasi"], ingredients: ["vitamin-c","yuzu","glycerin"], description: "Sleeping mask Vitamin C untuk pencerah intensif saat tidur agar wajah glowing pagi harinya.", rating: 4.6, reviews: 890 },
    { id: 29, name: "Somethinc Kaolin Clay Mask", category: "mask", emoji: "🏔️", brand: "Somethinc", price: 89000, skinTypes: ["berminyak","kombinasi"], concerns: ["pori-besar","komedo","kulit-berminyak"], ingredients: ["kaolin","bentonite","salicylic-acid"], description: "Clay mask dengan double clay formula untuk menghilangkan minyak dan membersihkan pori.", rating: 4.5, reviews: 1780 },
    { id: 30, name: "Avoskin Miraculous Ampoule Mask", category: "mask", emoji: "💆", brand: "Avoskin", price: 55000, skinTypes: ["kering","normal","sensitif"], concerns: ["kulit-kering","garis-halus"], ingredients: ["hyaluronic-acid","peptide","ceramide"], description: "Sheet mask ampoule untuk hidrasi intensif dan anti-aging dalam 20 menit.", rating: 4.6, reviews: 670 }
  ],

  // ── INGREDIENTS KNOWLEDGE BASE ──
  ingredients: [
    { id: "niacinamide", name: "Niacinamide", emoji: "💊", category: "brightening", benefit: "Mengontrol produksi minyak, menyamarkan pori, mencerahkan, dan meratakan warna kulit. Toleransi tinggi untuk hampir semua jenis kulit.", skinTypes: ["Berminyak", "Kombinasi", "Normal", "Sensitif"], concerns: ["Jerawat", "Pori Besar", "Kusam", "Bekas Jerawat"], avoid: [], strength: 85 },
    { id: "salicylic-acid", name: "Salicylic Acid (BHA)", emoji: "🧪", category: "acne-fighter", benefit: "Menembus ke dalam pori untuk melarutkan kotoran dan sel kulit mati. Efektif melawan jerawat, komedo, dan minyak berlebih.", skinTypes: ["Berminyak", "Kombinasi"], concerns: ["Jerawat", "Komedo", "Pori Besar"], avoid: ["Kulit Kering", "Kulit Sensitif"], strength: 90 },
    { id: "hyaluronic-acid", name: "Hyaluronic Acid", emoji: "💧", category: "hydrating", benefit: "Humektan super yang mampu mengikat kelembapan 1000x beratnya untuk kulit lembap sepanjang hari.", skinTypes: ["Kering", "Normal", "Sensitif", "Berminyak"], concerns: ["Kulit Kering", "Garis Halus"], avoid: [], strength: 80 },
    { id: "centella-asiatica", name: "Centella Asiatica", emoji: "🌿", category: "soothing", benefit: "Bahan anti-inflamasi alami yang menenangkan kemerahan, mempercepat penyembuhan luka, dan memperkuat skin barrier.", skinTypes: ["Sensitif", "Kering", "Normal"], concerns: ["Kulit Sensitif", "Kulit Merah", "Jerawat"], avoid: [], strength: 75 },
    { id: "retinol", name: "Retinol (Vitamin A)", emoji: "🌙", category: "anti-aging", benefit: "Gold standard anti-aging yang meningkatkan produksi kolagen, mempercepat regenerasi sel, dan menyamarkan tanda-tanda penuaan.", skinTypes: ["Normal", "Kombinasi"], concerns: ["Garis Halus", "Tanda Penuaan", "Bekas Jerawat"], avoid: ["Kulit Sensitif", "Hamil/Menyusui"], strength: 95 },
    { id: "vitamin-c", name: "Vitamin C", emoji: "☀️", category: "brightening", benefit: "Antioksidan kuat yang mencerahkan kulit, meratakan warna kulit, merangsang kolagen, dan melindungi dari paparan sinar UV.", skinTypes: ["Normal", "Kombinasi", "Kering"], concerns: ["Kusam", "Hiperpigmentasi", "Bekas Jerawat"], avoid: ["Kulit Sensitif (konsentrasi tinggi)"], strength: 88 },
    { id: "ceramide", name: "Ceramide", emoji: "🛡️", category: "barrier-repair", benefit: "Lipid penting penyusun skin barrier yang melindungi dari dehidrasi dan iritan eksternal. Cocok untuk restore barrier rusak.", skinTypes: ["Kering", "Sensitif", "Normal"], concerns: ["Kulit Kering", "Kulit Sensitif", "Skin Barrier Rusak"], avoid: [], strength: 78 },
    { id: "aha", name: "AHA (Glycolic/Lactic Acid)", emoji: "✨", category: "exfoliant", benefit: "Eksfolian water-soluble yang mengangkat sel kulit mati di permukaan untuk kulit lebih cerah, halus, dan merata.", skinTypes: ["Normal", "Kering", "Kombinasi"], concerns: ["Kusam", "Tekstur Tidak Rata", "Garis Halus"], avoid: ["Kulit Sensitif"], strength: 82 },
    { id: "bha", name: "BHA (Beta Hydroxy Acid)", emoji: "⚗️", category: "exfoliant", benefit: "Eksfolian oil-soluble yang menembus pori untuk membersihkan dari dalam. Ideal untuk kulit berminyak dan berjerawat.", skinTypes: ["Berminyak", "Kombinasi"], concerns: ["Jerawat", "Komedo", "Pori Besar"], avoid: ["Kulit Kering", "Kulit Sensitif"], strength: 87 },
    { id: "peptide", name: "Peptide", emoji: "🔗", category: "anti-aging", benefit: "Rantai asam amino yang merangsang produksi kolagen, mengencangkan kulit, dan mengurangi tampilan garis halus.", skinTypes: ["Normal", "Kering", "Kombinasi"], concerns: ["Garis Halus", "Tanda Penuaan"], avoid: [], strength: 72 },
    { id: "zinc", name: "Zinc", emoji: "⚡", category: "acne-fighter", benefit: "Mineral anti-inflamasi yang mengurangi kemerahan jerawat, mengontrol produksi sebum, dan mempercepat penyembuhan.", skinTypes: ["Berminyak", "Kombinasi"], concerns: ["Jerawat", "Kulit Berminyak"], avoid: [], strength: 70 },
    { id: "glycerin", name: "Glycerin", emoji: "💎", category: "hydrating", benefit: "Humektan dasar yang menarik kelembapan dari udara ke kulit. Aman untuk semua jenis kulit dan cocok sebagai pelembap harian.", skinTypes: ["Semua Jenis Kulit"], concerns: ["Kulit Kering", "Dehidrasi"], avoid: [], strength: 65 },
    { id: "squalane", name: "Squalane", emoji: "🌰", category: "moisturizing", benefit: "Emolien ringan dari tanaman zaitun yang melembutkan dan menghaluskan kulit tanpa rasa berat atau berminyak.", skinTypes: ["Kering", "Normal", "Kombinasi"], concerns: ["Kulit Kering", "Dehidrasi"], avoid: [], strength: 68 },
    { id: "alpha-arbutin", name: "Alpha Arbutin", emoji: "🌷", category: "brightening", benefit: "Bahan pencerah yang menghambat produksi melanin. Lebih lembut dari Hydroquinone dan cocok untuk pemakaian jangka panjang.", skinTypes: ["Normal", "Kering", "Sensitif"], concerns: ["Hiperpigmentasi", "Bekas Jerawat", "Kusam"], avoid: [], strength: 76 },
    { id: "tea-tree", name: "Tea Tree Oil", emoji: "🌲", category: "acne-fighter", benefit: "Antibakteri alami yang efektif melawan bakteri penyebab jerawat. Baik sebagai spot treatment untuk jerawat aktif.", skinTypes: ["Berminyak", "Kombinasi"], concerns: ["Jerawat"], avoid: ["Kulit Sensitif (konsentrasi tinggi)"], strength: 72 },
    { id: "panthenol", name: "Panthenol (B5)", emoji: "🌼", category: "soothing", benefit: "Provitamin B5 yang menenangkan, melembapkan, dan mempercepat penyembuhan kulit. Cocok sebagai bahan after-treatment.", skinTypes: ["Semua Jenis Kulit"], concerns: ["Kulit Sensitif", "Kulit Kering", "Iritasi"], avoid: [], strength: 65 }
  ],

  // ── KNOWLEDGE BASE RULES ──
  rules: [
    // Oily + Acne
    { id: 1, conditions: { skinType: "berminyak", concerns: ["jerawat"], sensitivity: ["rendah","sedang"] }, output: { ingredients: ["salicylic-acid","niacinamide","zinc","tea-tree"], avoid: ["coconut-oil","heavy-cream"], routine: "oily-acne", advice: "Fokus pada pembersihan pori dan kontrol minyak. Gunakan produk berbasis gel atau water-based." } },
    // Oily + Comedone
    { id: 2, conditions: { skinType: "berminyak", concerns: ["komedo","pori-besar"] }, output: { ingredients: ["salicylic-acid","bha","niacinamide","clay"], avoid: ["heavy-oil","coconut-oil"], routine: "oily-basic", advice: "Eksfoliasi rutin dengan BHA 2-3x seminggu untuk membersihkan pori tersumbat." } },
    // Dry + Sensitive
    { id: 3, conditions: { skinType: "kering", concerns: ["kulit-sensitif"] }, output: { ingredients: ["ceramide","centella-asiatica","hyaluronic-acid","glycerin","panthenol"], avoid: ["alcohol","aha","bha","retinol"], routine: "dry-sensitive", advice: "Prioritaskan barrier repair dan hidrasi intensif. Hindari bahan aktif keras seperti AHA/BHA." } },
    // Dry + Anti-aging
    { id: 4, conditions: { skinType: "kering", concerns: ["garis-halus","tanda-penuaan"] }, output: { ingredients: ["hyaluronic-acid","peptide","squalane","ceramide","retinol"], avoid: ["alcohol-denat","strong-exfoliant"], routine: "dry-antiaging", advice: "Kombinasikan hidrasi intensif dan retinol malam hari untuk hasil anti-aging maksimal." } },
    // Combination + Normal
    { id: 5, conditions: { skinType: "kombinasi", concerns: [] }, output: { ingredients: ["niacinamide","hyaluronic-acid","glycerin"], avoid: [], routine: "combination-basic", advice: "Gunakan produk ringan dan seimbangkan antara zona T yang berminyak dan pipi yang lebih kering." } },
    // Combination + Dull
    { id: 6, conditions: { skinType: "kombinasi", concerns: ["kulit-kusam","hiperpigmentasi","bekas-jerawat"] }, output: { ingredients: ["vitamin-c","niacinamide","aha","alpha-arbutin"], avoid: ["heavy-oil"], routine: "brightening", advice: "Fokus pada brightening serum di pagi hari dan eksfoliasi AHA 2x seminggu di malam hari." } },
    // Sensitive + Redness
    { id: 7, conditions: { skinType: "sensitif", concerns: ["kulit-sensitif","kulit-merah"] }, output: { ingredients: ["centella-asiatica","panthenol","ceramide","glycerin"], avoid: ["fragrance","alcohol","essential-oil","aha","bha","retinol"], routine: "sensitive-basic", advice: "Pilih produk fragrance-free dan minimal ingredients. Patch test setiap produk baru selama 3 hari." } },
    // Normal + Maintenance
    { id: 8, conditions: { skinType: "normal", concerns: [] }, output: { ingredients: ["niacinamide","vitamin-c","hyaluronic-acid","sunscreen"], avoid: [], routine: "normal-basic", advice: "Pertahankan kondisi kulit yang baik dengan rutinitas sederhana namun konsisten." } },
    // Any skin + Anti-aging concern
    { id: 9, conditions: { skinType: "normal", concerns: ["garis-halus","tanda-penuaan"] }, output: { ingredients: ["retinol","peptide","vitamin-c","hyaluronic-acid"], avoid: [], routine: "antiaging", advice: "Mulai retinol dengan konsentrasi rendah 0.025%, naikkan bertahap setiap bulan." } },
    // Oily + Brightening
    { id: 10, conditions: { skinType: "berminyak", concerns: ["kulit-kusam","bekas-jerawat"] }, output: { ingredients: ["niacinamide","vitamin-c","alpha-arbutin","aha"], avoid: ["heavy-cream","oil-based"], routine: "oily-brightening", advice: "Gunakan Niacinamide pagi dan Vitamin C serum untuk mencerahkan bekas jerawat." } }
  ],

  // ── ROUTINES ──
  routines: {
    "oily-acne": {
      morning: [
        { step: 1, name: "Facial Wash", emoji: "🧼", desc: "Busa ringan untuk bersihkan minyak & kotoran", productIds: [1, 4] },
        { step: 2, name: "Toner", emoji: "💧", desc: "BHA toner untuk kontrol minyak & bersihkan pori", productIds: [6, 10] },
        { step: 3, name: "Serum", emoji: "🔬", desc: "Niacinamide untuk kendalikan sebum & pori", productIds: [11, 16] },
        { step: 4, name: "Moisturizer", emoji: "💚", desc: "Gel moisturizer ringan non-comedogenic", productIds: [20] },
        { step: 5, name: "Sunscreen", emoji: "☀️", desc: "SPF 50 PA++++ untuk proteksi kulit", productIds: [23, 24] }
      ],
      night: [
        { step: 1, name: "Facial Wash", emoji: "🧼", desc: "Bersihkan makeup dan kotoran seharian", productIds: [1, 4] },
        { step: 2, name: "Toner", emoji: "⚗️", desc: "BHA toner untuk eksfoliasi lembut", productIds: [6, 10] },
        { step: 3, name: "Serum Treatment", emoji: "🎯", desc: "Spot treatment untuk jerawat aktif", productIds: [13, 11] },
        { step: 4, name: "Moisturizer", emoji: "💚", desc: "Pelembap gel untuk malam hari", productIds: [20] },
        { step: 5, name: "Mask (2x/week)", emoji: "🌋", desc: "Clay mask untuk membersihkan pori", productIds: [26, 29] }
      ]
    },
    "dry-sensitive": {
      morning: [
        { step: 1, name: "Gentle Cleanser", emoji: "🫧", desc: "Sabun lembut tanpa busa berlebih", productIds: [2, 3] },
        { step: 2, name: "Essence Toner", emoji: "💦", desc: "Hydrating toner untuk lapisan kelembapan pertama", productIds: [7, 9] },
        { step: 3, name: "Serum HA", emoji: "💎", desc: "Hyaluronic Acid untuk hidrasi intensif", productIds: [12] },
        { step: 4, name: "Moisturizer", emoji: "🏺", desc: "Rich cream untuk mengunci kelembapan", productIds: [17, 18] },
        { step: 5, name: "Sunscreen Mineral", emoji: "🌿", desc: "Mineral sunscreen SPF 50 lembut di kulit", productIds: [22, 25] }
      ],
      night: [
        { step: 1, name: "Gentle Cleanser", emoji: "🫧", desc: "Double cleanse dengan micellar lalu gentle cleanser", productIds: [2, 3] },
        { step: 2, name: "Soothing Toner", emoji: "🪷", desc: "Toner Cica untuk menenangkan setelah dibersihkan", productIds: [9, 8] },
        { step: 3, name: "Serum Repair", emoji: "🌿", desc: "Centella serum untuk perbaikan barrier semalam", productIds: [12, 21] },
        { step: 4, name: "Night Cream", emoji: "🏺", desc: "Krim malam kaya untuk nutrisi dan perbaikan", productIds: [17, 18] },
        { step: 5, name: "Sheet Mask (2x/week)", emoji: "💆", desc: "Soothing sheet mask untuk hidrasi ekstra", productIds: [27, 30] }
      ]
    },
    "brightening": {
      morning: [
        { step: 1, name: "Facial Wash", emoji: "🧼", desc: "Facial wash dengan kandungan pencerah", productIds: [5, 1] },
        { step: 2, name: "Toner", emoji: "💧", desc: "Hydrating toner sebagai base kelembapan", productIds: [7, 9] },
        { step: 3, name: "Vitamin C Serum", emoji: "☀️", desc: "Vitamin C untuk cerahkan dan proteksi antioksidan", productIds: [14, 16] },
        { step: 4, name: "Moisturizer", emoji: "🌟", desc: "Pelembap ringan mencerahkan", productIds: [19, 21] },
        { step: 5, name: "Sunscreen SPF50", emoji: "☀️", desc: "WAJIB: sunscreen untuk jaga hasil pencerah", productIds: [23, 22] }
      ],
      night: [
        { step: 1, name: "Facial Wash", emoji: "🧼", desc: "Bersihkan SPF dan makeup", productIds: [5, 2] },
        { step: 2, name: "AHA Toner (2-3x/week)", emoji: "✨", desc: "AHA untuk eksfoliasi & angkat sel kulit mati", productIds: [6] },
        { step: 3, name: "Brightening Serum", emoji: "💫", desc: "Alpha Arbutin / Niacinamide untuk malam", productIds: [11, 14] },
        { step: 4, name: "Moisturizer", emoji: "🌟", desc: "Pelembap untuk kunci nutrisi malam", productIds: [19, 21] },
        { step: 5, name: "Vitamin C Mask (1x/week)", emoji: "🍊", desc: "Sleeping mask Vitamin C untuk hasil intensif", productIds: [28] }
      ]
    },
    "normal-basic": {
      morning: [
        { step: 1, name: "Gentle Cleanser", emoji: "🫧", desc: "Pembersih lembut untuk rutinitas pagi", productIds: [2, 5] },
        { step: 2, name: "Toner", emoji: "💧", desc: "Balancing toner untuk menyeimbangkan kulit", productIds: [7, 9] },
        { step: 3, name: "Niacinamide Serum", emoji: "🔬", desc: "Niacinamide untuk maintenance kulit sehat", productIds: [11] },
        { step: 4, name: "Moisturizer", emoji: "🌟", desc: "Pelembap ringan untuk pagi hari", productIds: [19, 21] },
        { step: 5, name: "Sunscreen", emoji: "☀️", desc: "SPF 30-50 setiap hari tanpa kecuali", productIds: [23, 24] }
      ],
      night: [
        { step: 1, name: "Cleanser", emoji: "🧼", desc: "Bersihkan kotoran dan polutan seharian", productIds: [2, 5] },
        { step: 2, name: "Toner", emoji: "💦", desc: "Hydrating toner untuk persiapan serum", productIds: [7] },
        { step: 3, name: "Treatment Serum", emoji: "💎", desc: "Serum sesuai concern malam hari", productIds: [12, 11] },
        { step: 4, name: "Moisturizer", emoji: "🏺", desc: "Krim malam untuk nutrisi kulit", productIds: [18, 19] }
      ]
    },
    "antiaging": {
      morning: [
        { step: 1, name: "Gentle Cleanser", emoji: "🫧", desc: "Pembersih lembut agar tidak ganggu barrier", productIds: [2, 3] },
        { step: 2, name: "Hydrating Toner", emoji: "💦", desc: "Hidrasi pertama sebelum serum", productIds: [7, 8] },
        { step: 3, name: "Vitamin C Serum", emoji: "☀️", desc: "Antioksidan + stimulasi kolagen", productIds: [14, 16] },
        { step: 4, name: "Peptide Moisturizer", emoji: "🫙", desc: "Pelembap peptide untuk kencangkan kulit", productIds: [18, 17] },
        { step: 5, name: "Sunscreen SPF50", emoji: "☀️", desc: "Sunscreen: langkah anti-aging terpenting!", productIds: [23, 25] }
      ],
      night: [
        { step: 1, name: "Cleanser", emoji: "🧼", desc: "Bersihkan wajah dengan lembut", productIds: [2, 3] },
        { step: 2, name: "Toner", emoji: "💧", desc: "Toner hidrasi sebelum retinol", productIds: [7] },
        { step: 3, name: "Retinol Serum", emoji: "🌙", desc: "Retinol 0.025% - 0.1% untuk anti-aging", productIds: [15] },
        { step: 4, name: "Rich Night Cream", emoji: "🏺", desc: "Krim malam rich untuk kurangi TEWL", productIds: [17, 18] },
        { step: 5, name: "Ampoule Mask (2x/week)", emoji: "💆", desc: "Masker ampoule anti-aging seminggu 2x", productIds: [30] }
      ]
    }
  },

  // ── SKIN QUIZ QUESTIONS ──
  quizQuestions: [
    {
      id: 1,
      question: "Bagaimana kondisi kulit wajahmu sekitar 2-3 jam setelah mencuci muka tanpa produk apapun?",
      emoji: "⏰",
      options: [
        { value: "very-oily", label: "Terasa sangat berminyak dan mengkilap di seluruh wajah", emoji: "💦", score: { berminyak: 3 } },
        { value: "normal-oil", label: "Sedikit berminyak di zona T (dahi, hidung, dagu)", emoji: "😐", score: { kombinasi: 3 } },
        { value: "tight", label: "Terasa kencang, kering, bahkan sedikit mengelupas", emoji: "🏜️", score: { kering: 3 } },
        { value: "balanced", label: "Tidak terlalu berminyak, tidak terlalu kering. Nyaman!", emoji: "✨", score: { normal: 3 } }
      ]
    },
    {
      id: 2,
      question: "Apa yang terjadi saat kamu mencoba produk skincare baru?",
      emoji: "🧴",
      options: [
        { value: "react", label: "Sering muncul kemerahan, gatal, atau breakout", emoji: "🔴", score: { sensitif: 3 } },
        { value: "sometimes", label: "Kadang bereaksi, tergantung produknya", emoji: "🟡", score: { sensitif: 1, normal: 1 } },
        { value: "fine", label: "Biasanya baik-baik saja", emoji: "🟢", score: { normal: 2 } },
        { value: "never", label: "Hampir tidak pernah bereaksi", emoji: "✅", score: { normal: 3 } }
      ]
    },
    {
      id: 3,
      question: "Seberapa sering kamu mengalami jerawat atau komedo?",
      emoji: "😤",
      options: [
        { value: "always", label: "Hampir selalu ada jerawat di wajah", emoji: "😭", score: { berminyak: 2 } },
        { value: "often", label: "Cukup sering, terutama di zona T", emoji: "😟", score: { berminyak: 1, kombinasi: 1 } },
        { value: "rarely", label: "Jarang, hanya saat hormonal atau stres", emoji: "😊", score: { normal: 2 } },
        { value: "never", label: "Hampir tidak pernah jerawatan", emoji: "🌟", score: { normal: 3, kering: 1 } }
      ]
    },
    {
      id: 4,
      question: "Bagaimana pori-pori kulitmu terlihat?",
      emoji: "🔍",
      options: [
        { value: "large", label: "Terlihat besar dan jelas, terutama di hidung", emoji: "😰", score: { berminyak: 2, kombinasi: 1 } },
        { value: "medium", label: "Sedang, terlihat di beberapa area", emoji: "😌", score: { kombinasi: 2 } },
        { value: "small", label: "Kecil dan hampir tidak terlihat", emoji: "✨", score: { kering: 1, normal: 2 } },
        { value: "invisible", label: "Sangat halus, hampir tidak kelihatan", emoji: "🌸", score: { normal: 2, kering: 1 } }
      ]
    },
    {
      id: 5,
      question: "Bagaimana kondisi kulitmu saat cuaca panas atau banyak aktivitas?",
      emoji: "🌡️",
      options: [
        { value: "very-shiny", label: "Wajah langsung sangat berminyak dan berkilap", emoji: "💦", score: { berminyak: 3 } },
        { value: "tzone-shiny", label: "Hanya zona T yang berminyak", emoji: "😅", score: { kombinasi: 3 } },
        { value: "no-change", label: "Tidak banyak berubah, masih terasa nyaman", emoji: "😊", score: { normal: 2 } },
        { value: "drier", label: "Justru terasa lebih kering dan tidak nyaman", emoji: "😣", score: { kering: 3 } }
      ]
    },
    {
      id: 6,
      question: "Bagaimana reaksi kulitmu terhadap udara dingin atau AC?",
      emoji: "❄️",
      options: [
        { value: "tight-peel", label: "Terasa sangat kencang dan kadang mengelupas", emoji: "🥶", score: { kering: 3 } },
        { value: "somewhat-dry", label: "Sedikit kencang tapi tidak separah itu", emoji: "😐", score: { kering: 1, normal: 1 } },
        { value: "fine", label: "Tidak ada masalah, baik-baik saja", emoji: "😊", score: { normal: 2, berminyak: 1 } },
        { value: "still-oily", label: "Masih terasa berminyak meski di AC", emoji: "💧", score: { berminyak: 2 } }
      ]
    },
    {
      id: 7,
      question: "Apakah kulit wajahmu sering terlihat kemerahan atau terasa terbakar saat kena matahari?",
      emoji: "☀️",
      options: [
        { value: "always", label: "Selalu, kulit sangat mudah memerah dan terasa panas", emoji: "🔴", score: { sensitif: 3 } },
        { value: "sometimes", label: "Cukup sering, terutama paparan langsung", emoji: "🟠", score: { sensitif: 2 } },
        { value: "rarely", label: "Hanya kalau terlalu lama di luar", emoji: "🟡", score: { normal: 1 } },
        { value: "never", label: "Tidak pernah, kulit cukup tahan", emoji: "🟢", score: { normal: 2, berminyak: 1 } }
      ]
    },
    {
      id: 8,
      question: "Setelah menggunakan foundation, bagaimana hasilnya setelah beberapa jam?",
      emoji: "💄",
      options: [
        { value: "transfer", label: "Mudah transfer dan terlihat sangat berminyak", emoji: "😬", score: { berminyak: 3 } },
        { value: "tzone-only", label: "Berminyak hanya di zona T, pipi oke", emoji: "😕", score: { kombinasi: 3 } },
        { value: "cakey", label: "Cenderung cakey atau terkelupas di beberapa area", emoji: "😤", score: { kering: 3 } },
        { value: "perfect", label: "Relatif oke sampai sore hari", emoji: "😍", score: { normal: 3 } }
      ]
    }
  ],

  // ── SKIN TYPE RESULTS ──
  skinTypeResults: {
    berminyak: {
      emoji: "💧",
      name: "Kulit Berminyak",
      description: "Kulitmu memproduksi sebum berlebih yang membuat wajah terlihat mengkilap, terutama di area T-zone. Kabar baiknya, kulit berminyak cenderung lebih lambat menua!",
      traits: ["Pori-pori terlihat besar", "Mudah berjerawat", "Makeup mudah luntur", "T-zone berminyak", "Kulit tampak mengkilap"],
      healthTips: ["Gunakan cleanser berbusa ringan 2x sehari", "Eksfoliasi dengan BHA 2-3x seminggu", "Jangan skip moisturizer!", "Gunakan sunscreen non-comedogenic", "Coba clay mask seminggu sekali"],
      routineKey: "oily-acne"
    },
    kering: {
      emoji: "🌵",
      name: "Kulit Kering",
      description: "Kulitmu kekurangan kelembapan alami, membuat kulit terasa kencang, kasar, dan kadang mengelupas. Fokus pada hidrasi intensif dan barrier repair.",
      traits: ["Kulit terasa kencang", "Sering mengelupas", "Pori-pori kecil", "Garis halus terlihat", "Kulit terasa tidak nyaman"],
      healthTips: ["Double cleanse dengan oil cleanser malam", "Layer hidrasi: toner → essence → serum → krim", "Gunakan humektan + emolien", "Hindari air panas saat cuci muka", "Pakai overnight mask 2-3x seminggu"],
      routineKey: "dry-sensitive"
    },
    kombinasi: {
      emoji: "⚖️",
      name: "Kulit Kombinasi",
      description: "Kulitmu memiliki karakteristik dua tipe kulit: zona T (dahi, hidung, dagu) yang berminyak dan area pipi yang normal hingga kering. Butuh pendekatan yang seimbang.",
      traits: ["T-zone berminyak", "Pipi normal/kering", "Pori campuran", "Mudah jerawat di T-zone", "Sulit memilih produk"],
      healthTips: ["Gunakan produk ringan yang balanced", "Multi-masking: clay di T-zone, hydrating di pipi", "Niacinamide untuk keseimbangan", "Fokus SPF tanpa berat", "Hindari produk terlalu heavy/too-light"],
      routineKey: "combination-basic"
    },
    sensitif: {
      emoji: "🌸",
      name: "Kulit Sensitif",
      description: "Kulitmu mudah bereaksi terhadap produk atau lingkungan dengan kemerahan, gatal, atau iritasi. Pilih produk minimal ingredients dan fragrance-free.",
      traits: ["Mudah kemerahan", "Bereaksi terhadap produk baru", "Terasa gatal atau perih", "Skin barrier lemah", "Perlu waktu lama untuk sembuh"],
      healthTips: ["Pilih produk fragrance-free", "Patch test setiap produk baru", "Gunakan bahan aktif ringan (Centella, Ceramide)", "Hindari AHA/BHA terlalu awal", "Konsultasi ke dermatologis jika perlu"],
      routineKey: "dry-sensitive"
    },
    normal: {
      emoji: "✨",
      name: "Kulit Normal",
      description: "Selamat! Kulitmu dalam kondisi yang seimbang. Tidak terlalu berminyak, tidak terlalu kering, dan jarang bermasalah. Tugas utamamu adalah maintenance dan proteksi.",
      traits: ["Produksi sebum seimbang", "Pori kecil dan rapi", "Jarang jerawat", "Tampak cerah alami", "Mudah merespons produk"],
      healthTips: ["Konsisten dengan rutinitas dasar", "Tambahkan antioksidan (Vitamin C) di pagi hari", "Jangan lupa SPF setiap hari", "Perkenalkan retinol untuk anti-aging dini", "Rawat dengan baik sebelum masalah datang"],
      routineKey: "normal-basic"
    }
  }
};

// Export untuk digunakan di halaman lain
if (typeof module !== 'undefined') module.exports = GlowData;
