const products = [
  // ---------------- MAKEUP ----------------
  // Lipstick
  {
    id: 1,
    name: "Matte Lipstick - Ruby Red",
    category: "Makeup",
    subcategory: "Lipstick",
    brand: "Maybelline",
    price: 399,
    image: "/assets/images/lipstick1.jpg"
  },
  {
    id: 2,
    name: "Satin Lipstick - Nude",
    category: "Makeup",
    subcategory: "Lipstick",
    brand: "Lakme",
    price: 299,
    image: "/assets/images/lipstick2.jpg"
  },
  {
    id: 3,
    name: "Liquid Lipstick - Wine",
    category: "Makeup",
    subcategory: "Lipstick",
    brand: "Colorbar",
    price: 499,
    image: "/assets/images/lipstick3.jpg"
  },
  {
    id: 4,
    name: "Cream Lipstick - Peach",
    category: "Makeup",
    subcategory: "Lipstick",
    brand: "Nykaa",
    price: 349,
    image: "/assets/images/lipstick4.jpg"
  },
  {
    id: 5,
    name: "Glossy Lipstick - Pink",
    category: "Makeup",
    subcategory: "Lipstick",
    brand: "Huda Beauty",
    price: 599,
    image: "/assets/images/lipstick5.jpg"
  },

  // Foundation
  {
    id: 6,
    name: "Liquid Foundation",
    category: "Makeup",
    subcategory: "Foundation",
    brand: "L'Oreal",
    price: 799,
    image: "/assets/images/foundation1.jpg"
  },
  {
    id: 7,
    name: "Matte Foundation",
    category: "Makeup",
    subcategory: "Foundation",
    brand: "MAC",
    price: 1250,
    image: "/assets/images/foundation2.jpg"
  },
  {
    id: 8,
    name: "CC Cream",
    category: "Makeup",
    subcategory: "Foundation",
    brand: "Lakme",
    price: 499,
    image: "/assets/images/foundation3.jpg"
  },
  {
    id: 9,
    name: "BB Cream",
    category: "Makeup",
    subcategory: "Foundation",
    brand: "Ponds",
    price: 349,
    image: "/assets/images/foundation4.jpg"
  },
  {
    id: 10,
    name: "Mineral Foundation",
    category: "Makeup",
    subcategory: "Foundation",
    brand: "BareMinerals",
    price: 999,
    image: "/assets/images/foundation5.jpg"
  },

  // Eye Makeup
  {
    id: 11,
    name: "Kajal Stick",
    category: "Makeup",
    subcategory: "Eye Makeup",
    brand: "Maybelline",
    price: 199,
    image: "/assets/images/kajal.jpg"
  },
  {
    id: 12,
    name: "Liquid Eyeliner",
    category: "Makeup",
    subcategory: "Eye Makeup",
    brand: "Lakme",
    price: 250,
    image: "/assets/images/eyeliner.jpg"
  },
  {
    id: 13,
    name: "Waterproof Mascara",
    category: "Makeup",
    subcategory: "Eye Makeup",
    brand: "Nykaa",
    price: 499,
    image: "/assets/images/mascara.jpg"
  },
  {
    id: 14,
    name: "Eyebrow Pencil",
    category: "Makeup",
    subcategory: "Eye Makeup",
    brand: "Swiss Beauty",
    price: 175,
    image: "/assets/images/eyebrow.jpg"
  },
  {
    id: 15,
    name: "Eyeshadow Palette",
    category: "Makeup",
    subcategory: "Eye Makeup",
    brand: "Huda Beauty",
    price: 1799,
    image: "/assets/images/eyeshadow.jpg"
  },

  // ---------------- SKINCARE ----------------
  // Serum
  {
    id: 16,
    name: "Vitamin C Serum",
    category: "Skincare",
    subcategory: "Serum",
    brand: "Minimalist",
    price: 699,
    image: "/assets/images/vitaminC.jpg"
  },
  {
    id: 17,
    name: "Hyaluronic Acid Serum",
    category: "Skincare",
    subcategory: "Serum",
    brand: "Dot & Key",
    price: 799,
    image: "/assets/images/serum2.jpg"
  },
  {
    id: 18,
    name: "Niacinamide Serum",
    category: "Skincare",
    subcategory: "Serum",
    brand: "The Ordinary",
    price: 950,
    image: "/assets/images/serum3.jpg"
  },
  {
    id: 19,
    name: "Retinol Serum",
    category: "Skincare",
    subcategory: "Serum",
    brand: "Plum",
    price: 650,
    image: "/assets/images/serum4.jpg"
  },
  {
    id: 20,
    name: "Kojic Acid Serum",
    category: "Skincare",
    subcategory: "Serum",
    brand: "WOW",
    price: 499,
    image: "/assets/images/serum5.jpg"
  },

  // Moisturizer
  {
    id: 21,
    name: "Aloe Vera Gel",
    category: "Skincare",
    subcategory: "Moisturizer",
    brand: "Patanjali",
    price: 150,
    image: "/assets/images/moisturizer1.jpg"
  },
  {
    id: 22,
    name: "Daily Moisturizing Lotion",
    category: "Skincare",
    subcategory: "Moisturizer",
    brand: "Aveeno",
    price: 699,
    image: "/assets/images/moisturizer2.jpg"
  },
  {
    id: 23,
    name: "Oil-Free Moisturizer",
    category: "Skincare",
    subcategory: "Moisturizer",
    brand: "Neutrogena",
    price: 599,
    image: "/assets/images/moisturizer3.jpg"
  },
  {
    id: 24,
    name: "Hydrating Gel",
    category: "Skincare",
    subcategory: "Moisturizer",
    brand: "Clinique",
    price: 1450,
    image: "/assets/images/moisturizer4.jpg"
  },
  {
    id: 25,
    name: "Day Cream with SPF",
    category: "Skincare",
    subcategory: "Moisturizer",
    brand: "Nivea",
    price: 299,
    image: "/assets/images/moisturizer5.jpg"
  },

  // ---------------- HAIRCARE ----------------
  {
    id: 26,
    name: "Anti Hair Fall Shampoo",
    category: "Haircare",
    subcategory: "Shampoo",
    brand: "Pantene",
    price: 249,
    image: "/assets/images/shampoo1.jpg"
  },
  {
    id: 27,
    name: "Keratin Shampoo",
    category: "Haircare",
    subcategory: "Shampoo",
    brand: "Tresemme",
    price: 375,
    image: "/assets/images/shampoo2.jpg"
  },
  {
    id: 28,
    name: "Rosemary Essential Oil",
    category: "Haircare",
    subcategory: "Hair Oil",
    brand: "Rosemary",
    price: 399,
    image: "/assets/images/oil1.jpg"
  },
  {
    id: 29,
    name: "Coconut Hair Oil",
    category: "Haircare",
    subcategory: "Hair Oil",
    brand: "Parachute",
    price: 120,
    image: "/assets/images/oil2.jpg"
  },
  {
    id: 30,
    name: "Hair Mask for Repair",
    category: "Haircare",
    subcategory: "Hair Mask",
    brand: "L'Oreal",
    price: 499,
    image: "/assets/images/mask1.jpg"
  },

  // ---------------- BATH & BODY ----------------
  {
    id: 31,
    name: "Shea Butter Body Lotion",
    category: "Bath & Body",
    subcategory: "Body Lotion",
    brand: "Vaseline",
    price: 275,
    image: "/assets/images/bodylotion1.jpg"
  },
  {
    id: 32,
    name: "Soothing Body Wash",
    category: "Bath & Body",
    subcategory: "Body Wash",
    brand: "Dove",
    price: 299,
    image: "/assets/images/bodywash1.jpg"
  },
  {
    id: 33,
    name: "Exfoliating Body Scrub",
    category: "Bath & Body",
    subcategory: "Scrub",
    brand: "mCaffeine",
    price: 349,
    image: "/assets/images/bodyscrub1.jpg"
  },
  {
    id: 34,
    name: "Refreshing Talcum Powder",
    category: "Bath & Body",
    subcategory: "Powder",
    brand: "Pond's",
    price: 150,
    image: "/assets/images/powder1.jpg"
  },
  {
    id: 35,
    name: "Cocoa Butter Body Cream",
    category: "Bath & Body",
    subcategory: "Body Cream",
    brand: "Nivea",
    price: 375,
    image: "/assets/images/bodycream1.jpg"
  },

  // ---------------- FRAGRANCE ----------------
  {
    id: 36,
    name: "Eau de Parfum - Jasmine",
    category: "Fragrance",
    subcategory: "Perfume",
    brand: "Plum",
    price: 699,
    image: "/assets/images/perfume1.jpg"
  },
  {
    id: 37,
    name: "Floral Body Mist",
    category: "Fragrance",
    subcategory: "Body Mist",
    brand: "Bath & Body Works",
    price: 799,
    image: "/assets/images/bodymist1.jpg"
  },
  {
    id: 38,
    name: "Woody Perfume Roll-on",
    category: "Fragrance",
    subcategory: "Roll-on",
    brand: "Engage",
    price: 199,
    image: "/assets/images/rollon1.jpg"
  },
  {
    id: 39,
    name: "Citrus Cologne",
    category: "Fragrance",
    subcategory: "Cologne",
    brand: "Beardo",
    price: 450,
    image: "/assets/images/cologne1.jpg"
  },
  {
    id: 40,
    name: "Vanilla Scent Spray",
    category: "Fragrance",
    subcategory: "Body Spray",
    brand: "Secret Temptation",
    price: 299,
    image: "/assets/images/bodyspray1.jpg"
  },
  {
  id: 41,
  name: "Ultra Light Sunscreen SPF 50",
  category: "Skincare",
  subcategory: "Sunscreen",
  brand: "Neutrogena",
  price: 549,
  image: "/assets/images/sunscreen1.jpg"
},
{
  id: 42,
  name: "Matte Finish Sunscreen SPF 40",
  category: "Skincare",
  subcategory: "Sunscreen",
  brand: "Lotus Herbals",
  price: 375,
  image: "/assets/images/sunscreen2.jpg"
},
{
  id: 43,
  name: "Mineral Sunscreen SPF 30",
  category: "Skincare",
  subcategory: "Sunscreen",
  brand: "The Moms Co",
  price: 499,
  image: "/assets/images/sunscreen3.jpg"
},
{
  id: 44,
  name: "Aloe Soothing Sun Cream SPF 50+",
  category: "Skincare",
  subcategory: "Sunscreen",
  brand: "COSRX",
  price: 750,
  image: "/assets/images/sunscreen4.jpg"
},
{
  id: 45,
  name: "HydraGel Indian Sunscreen SPF 50",
  category: "Skincare",
  subcategory: "Sunscreen",
  brand: "Minimalist",
  price: 399,
  image: "/assets/images/sunscreen5.jpg"
},
{
  id: 46,
  name: "Oil Clear Face Wash",
  category: "Skincare",
  subcategory: "Face Wash",
  brand: "Himalaya",
  price: 199,
  image: "/assets/images/facewash1.jpg"
},
{
  id: 47,
  name: "Tea Tree Face Wash",
  category: "Skincare",
  subcategory: "Face Wash",
  brand: "Mamaearth",
  price: 249,
  image: "/assets/images/facewash2.jpg"
},
{
  id: 48,
  name: "Activated Charcoal Face Wash",
  category: "Skincare",
  subcategory: "Face Wash",
  brand: "WOW Skin Science",
  price: 299,
  image: "/assets/images/facewash3.jpg"
},
{
  id: 49,
  name: "Vitamin C Foaming Face Wash",
  category: "Skincare",
  subcategory: "Face Wash",
  brand: "Plum",
  price: 349,
  image: "/assets/images/facewash4.jpg"
},
{
  id: 50,
  name: "Hydrating Face Wash with Hyaluronic Acid",
  category: "Skincare",
  subcategory: "Face Wash",
  brand: "Cetaphil",
  price: 450,
  image: "/assets/images/facewash5.jpg"
},
{
  id: 51,
  name: "Fit Me Concealer",
  category: "Makeup",
  subcategory: "Concealer",
  brand: "Maybelline",
  price: 475,
  image: "/assets/images/concealer1.jpg"
},
{
  id: 52,
  name: "HD Pro Conceal",
  category: "Makeup",
  subcategory: "Concealer",
  brand: "L.A. Girl",
  price: 595,
  image: "/assets/images/concealer2.jpg"
},
{
  id: 53,
  name: "True Match Concealer",
  category: "Makeup",
  subcategory: "Concealer",
  brand: "L'Oréal",
  price: 799,
  image: "/assets/images/concealer3.jpg"
},
{
  id: 54,
  name: "Liquid Camouflage Concealer",
  category: "Makeup",
  subcategory: "Concealer",
  brand: "Catrice",
  price: 399,
  image: "/assets/images/concealer4.jpg"
},
{
  id: 55,
  name: "Full Coverage Concealer",
  category: "Makeup",
  subcategory: "Concealer",
  brand: "Swiss Beauty",
  price: 229,
  image: "/assets/images/concealer5.jpg"
},
//shampoo bhaki

{
  id: 56,
  name: "Color Protect Shampoo",
  category: "Haircare",
  subcategory: "Shampoo",
  brand: "L'Oreal",
  price: 425,
  image: "/assets/images/shampoo6.jpg"
},
{
  id: 57,
  name: "Apple Cider Vinegar Shampoo",
  category: "Haircare",
  subcategory: "Shampoo",
  brand: "WOW",
  price: 499,
  image: "/assets/images/shampoo7.jpg"
},
{
  id: 58,
  name: "Ayurvedic Shampoo",
  category: "Haircare",
  subcategory: "Shampoo",
  brand: "Khadi Natural",
  price: 260,
  image: "/assets/images/shampoo8.jpg"
},

//oilll
{
  id: 59,
  name: "Almond Hair Oil",
  category: "Haircare",
  subcategory: "Hair Oil",
  brand: "Bajaj",
  price: 120,
  image: "/assets/images/hairoil6.jpg"
},
{
  id: 60,
  name: "Ayurvedic Hair Oil",
  category: "Haircare",
  subcategory: "Hair Oil",
  brand: "Dabur",
  price: 110,
  image: "/assets/images/hairoil7.jpg"
},
{
  id: 61,
  name: "Herbal Hair Oil",
  category: "Haircare",
  subcategory: "Hair Oil",
  brand: "Khadi Natural",
  price: 210,
  image: "/assets/images/hairoil8.jpg"
},
//mask
{
  id: 62,
  name: "Smoothening Hair Mask",
  category: "Haircare",
  subcategory: "Hair Mask",
  brand: "L'Oreal",
  price: 499,
  image: "/assets/images/hairmask6.jpg"
},
{
  id: 63,
  name: "Hydrating Hair Mask",
  category: "Haircare",
  subcategory: "Hair Mask",
  brand: "Schwarzkopf",
  price: 675,
  image: "/assets/images/hairmask7.jpg"
},
{
  id: 64,
  name: "Natural Repair Hair Mask",
  category: "Haircare",
  subcategory: "Hair Mask",
  brand: "Khadi Natural",
  price: 399,
  image: "/assets/images/hairmask8.jpg"
},
{
  id: 65,
  name: "Color Protection Hair Mask",
  category: "Haircare",
  subcategory: "Hair Mask",
  brand: "Biotique",
  price: 299,
  image: "/assets/images/hairmask9.jpg"
}






];

export default products;
