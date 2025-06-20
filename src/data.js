// Central data file for Astha Furnitures website

export const siteConfig = {
  name: "Astha Furnitures & Interiors",
  // description: "Transform your home with premium furniture",
  phone: "+91 98765 43210",
  email: "info@asthafurnitures.com",
  address: "123 Furniture Street, Mumbai, India",
};

export const navigationItems = [
  { name: "Sofas", href: "/category/sofas" },
  { name: "Living", href: "/category/living" },
  { name: "Bedroom", href: "/category/bedroom" },
  { name: "Dining & Kitchen", href: "/category/dining-kitchen" },
  { name: "Storage", href: "/category/storage" },
  { name: "Study & Office", href: "/category/study-office" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Our Projects", href: "/projects" },
];

export const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    alt: "Modern Living Room",
    title: "Transform Your",
    subtitle: "Home Today",
    description:
      "Discover premium furniture that combines style, comfort, and quality.",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    alt: "Elegant Sofa Set",
    title: "Elegant",
    subtitle: "Living Spaces",
    description:
      "Create beautiful spaces with our curated furniture collections.",
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    alt: "Bedroom Furniture",
    title: "Comfort",
    subtitle: "& Style",
    description: "Experience luxury and comfort in every piece of furniture.",
  },
  {
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    alt: "Dining Room Set",
    title: "Perfect",
    subtitle: "Dining Experience",
    description: "Gather around beautiful dining sets for memorable moments.",
  },
];

export const summerSaleSlides = [
  {
    title: "Summer Sale",
    subtitle: "Up to 75% OFF",
    description: "Register Now & Get a Chance to Avail",
    features: ["Free Shipping", "No Cost EMI", "36 Months Warranty"],
    bgColor: "bg-gradient-to-r from-orange-400 to-red-500",
  },
  {
    title: "Monsoon Special",
    subtitle: "Up to 60% OFF",
    description: "Limited Time Offer on Premium Furniture",
    features: ["Free Installation", "Easy Returns", "1 Year Warranty"],
    bgColor: "bg-gradient-to-r from-blue-400 to-indigo-500",
  },
  {
    title: "Festive Collection",
    subtitle: "Up to 50% OFF",
    description: "Celebrate with New Furniture",
    features: ["Quick Delivery", "Expert Assembly", "Quality Assured"],
    bgColor: "bg-gradient-to-r from-purple-400 to-pink-500",
  },
];

export const topPicksCategories = [
  {
    name: "Sofa Sets",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    href: "/category/sofas",
  },
  {
    name: "Beds",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80",
    href: "/category/bedroom",
  },
  {
    name: "Dining Table Sets",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
    href: "/category/dining-kitchen",
  },
  {
    name: "Sofa Cum Beds",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80",
    href: "/category/sofas",
  },
  {
    name: "TV Units",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    href: "/category/living",
  },
  {
    name: "Book Shelves",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    href: "/category/storage",
  },
  {
    name: "Coffee Tables",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80",
    href: "/category/living",
  },
  {
    name: "Study Tables",
    image:
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&q=80",
    href: "/category/study-office",
  },
];

export const aboutUsCategories = [
  {
    title: "Bedroom",
    subtitle: "Furniture",
    discount: "UPTO 48% OFF",
    description: "Create your perfect sanctuary with our bedroom collection",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80",
    href: "/category/bedroom",
    bgColor: "bg-green-600",
  },
  {
    title: "Living Room",
    subtitle: "Furniture",
    discount: "UPTO 60% OFF",
    description: "Complete furniture sets to transform your living space",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    href: "/category/living",
    bgColor: "bg-teal-600",
  },
  {
    title: "Dining Room",
    subtitle: "Furniture",
    discount: "UPTO 52% OFF",
    description: "Elegant dining sets for memorable family gatherings",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
    href: "/category/dining-kitchen",
    bgColor: "bg-cyan-600",
  },
];

export const sampleProducts = [
  {
    id: "1",
    name: "Modern 3 Seater Fabric Sofa",
    price: 25999,
    originalPrice: 35999,
    discount: 28,
    rating: 4.5,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    isNew: false,
    isSale: true,
    category: "sofas",
  },
  {
    id: "2",
    name: "King Size Wooden Bed with Storage",
    price: 32999,
    originalPrice: 45999,
    discount: 28,
    rating: 4.7,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80",
    isNew: true,
    isSale: true,
    category: "bedroom",
  },
  {
    id: "3",
    name: "6 Seater Dining Table Set",
    price: 28999,
    originalPrice: 38999,
    discount: 26,
    rating: 4.3,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
    isNew: false,
    isSale: true,
    category: "dining",
  },
  {
    id: "4",
    name: "Executive Office Chair",
    price: 12999,
    originalPrice: 18999,
    discount: 32,
    rating: 4.6,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&q=80",
    isNew: false,
    isSale: true,
    category: "office",
  },
  {
    id: "5",
    name: "L-Shaped Corner Sofa",
    price: 45999,
    originalPrice: 65999,
    discount: 30,
    rating: 4.8,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    isNew: true,
    isSale: true,
    category: "sofas",
  },
  {
    id: "6",
    name: "Wardrobe with Mirror",
    price: 22999,
    originalPrice: 29999,
    discount: 23,
    rating: 4.4,
    reviews: 78,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    isNew: false,
    isSale: true,
    category: "bedroom",
  },
  {
    id: "7",
    name: "Coffee Table with Storage",
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    rating: 4.2,
    reviews: 45,
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80",
    isNew: false,
    isSale: true,
    category: "living",
  },
  {
    id: "8",
    name: "Recliner Chair",
    price: 18999,
    originalPrice: 24999,
    discount: 24,
    rating: 4.5,
    reviews: 92,
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80",
    isNew: true,
    isSale: true,
    category: "living",
  },
];

export const customerTestimonials = [
  {
    id: 1,
    customerName: "Rajesh & Priya Sharma",
    location: "Mumbai, Maharashtra",
    projectType: "Complete Home Makeover",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    testimonial:
      "Astha Furnitures transformed our entire home. The quality and craftsmanship exceeded our expectations. Highly recommended!",
    rating: 5,
    furniture: ["Living Room Set", "Bedroom Furniture", "Dining Table"],
  },
  {
    id: 2,
    customerName: "Amit & Sneha Patel",
    location: "Ahmedabad, Gujarat",
    projectType: "Living Room Renovation",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    testimonial:
      "The L-shaped sofa and coffee table perfectly fit our space. The team was professional and delivery was on time.",
    rating: 5,
    furniture: ["L-Shaped Sofa", "Coffee Table", "TV Unit"],
  },
  {
    id: 3,
    customerName: "Dr. Vikram & Kavya Reddy",
    location: "Bangalore, Karnataka",
    projectType: "Bedroom & Study Setup",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    testimonial:
      "Beautiful bedroom set with excellent storage solutions. The study table is perfect for our home office needs.",
    rating: 5,
    furniture: ["King Size Bed", "Wardrobe", "Study Table"],
  },
  {
    id: 4,
    customerName: "Rohit & Meera Gupta",
    location: "Delhi, NCR",
    projectType: "Dining Room Setup",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
    testimonial:
      "The 6-seater dining set is stunning and perfect for our family gatherings. Great value for money!",
    rating: 5,
    furniture: ["6-Seater Dining Set", "Bar Cabinet", "Crockery Unit"],
  },
  {
    id: 5,
    customerName: "Suresh & Lakshmi Iyer",
    location: "Chennai, Tamil Nadu",
    projectType: "Traditional Home Decor",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
    testimonial:
      "Astha Furnitures understood our traditional preferences and delivered exactly what we wanted. Excellent service!",
    rating: 5,
    furniture: ["Traditional Sofa Set", "Pooja Unit", "Storage Cabinets"],
  },
  {
    id: 6,
    customerName: "Karan & Riya Singh",
    location: "Pune, Maharashtra",
    projectType: "Modern Apartment Setup",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    testimonial:
      "Modern designs with excellent functionality. The space optimization solutions were brilliant for our compact apartment.",
    rating: 5,
    furniture: ["Compact Sofa", "Foldable Dining", "Multi-purpose Storage"],
  },
];

export const brands = [
  {
    name: "CasaGold",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&q=80",
    description: "Luxury Home Decor",
  },
  {
    name: "Earthy Homes",
    logo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&q=80",
    description: "Natural & Sustainable",
  },
  {
    name: "Rudhigat",
    logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&q=80",
    description: "Artisan Crafted",
  },
  {
    name: "Aakriti Art Creations",
    logo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&q=80",
    description: "Handmade Art Pieces",
  },
  {
    name: "The Quirk India",
    logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&q=80",
    description: "Unique & Quirky",
  },
  {
    name: "Ace of Spades",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&q=80",
    description: "Premium Collection",
  },
  {
    name: "Nestroots",
    logo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&q=80",
    description: "Modern Living",
  },
];

export const bankOffers = [
  {
    bank: "HDFC Bank",
    offer: "5% Instant Discount",
    condition: "On HDFC Bank Credit Card EMI",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&q=80",
  },
  {
    bank: "ICICI Bank",
    offer: "No Cost EMI",
    condition: "On leading brands",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&q=80",
  },
  {
    bank: "Axis Bank",
    offer: "10% OFF",
    condition: "On Visiting Your Nearest Store",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&q=80",
  },
];

export const productOffers = [
  {
    id: "no-cost-emi",
    title: "No Cost EMI",
    description: "Get it for ₹2301/m",
    type: "emi",
    icon: "💳",
  },
  {
    id: "easy-emi",
    title: "Easy EMI",
    description: "Get it for ₹2278/m",
    type: "emi",
    icon: "💰",
  },
  {
    id: "store-discount",
    title: "Store Discount",
    description: "Get up to 10% off",
    type: "discount",
    icon: "🏷️",
  },
];

export const filterOptions = {
  materials: [
    "Sheesham Wood",
    "Engineered Wood",
    "Fabric",
    "Metal",
    "Ash Wood",
    "Mango Wood",
  ],
  finishes: [
    "Walnut Finish",
    "Honey Finish",
    "Teak Finish",
    "Columbian Walnut Finish",
    "Black Finish",
    "White Finish",
    "Frosty White Finish",
    "Flowery Wenge Finish",
  ],
  storageOptions: ["With Storage", "Without Storage"],
  storageTypes: [
    "Drawer Storage",
    "Box Storage",
    "With Shelves",
    "Hydraulic Storage",
  ],
};
