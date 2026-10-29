// Mani Electronices E-commerce Store Logic

// Product Dataset
const products = [
  {
    id: 1,
    title: "7 Socket Extension Board with Switch",
    brand: "AMLER",
    category: "home",
    tag: "Components Store",
    price: 330,
    rating: 5.0,
    reviews: "1.2k",
    image: "https://m.media-amazon.com/images/I/414iWOFXnIL.jpg",
    images: ["https://m.media-amazon.com/images/I/41+8kozFAAL.jpg", "https://m.media-amazon.com/images/I/41HdBu6FpmL.jpg", "https://m.media-amazon.com/images/I/41Kbphc3BML.jpg"],
    features: [
      "5 Universal 3‑Pin + 2 Two‑Pin Sockets",
      "2.5 Meter Heavy Duty Power Strip",
      "Multi Plug Spike Guard Extension Board",
      "Built-in Safety Fuse",
      "Fast Charging"
    ],
    desc: "AMLER 7 Socket Extension Board with Switch | 5 Universal 3‑Pin + 2 Two‑Pin Sockets | 2.5 Meter Heavy Duty Power Strip | Multi Plug Spike Guard Extension Board for Home, Office & Appliances",
    color: "White",
    discount: 10,
    inStock: true,
    warranty: "1 Year"
  },
  {
    id: 2,
    title: "Sony WH-XB700 Wireless Bluetooth On Ear Headphone with Mic (Black)",
    brand: "Sony",
    category: "music",
    tag: "Music",
    price: 19900,
    rating: 4.8,
    reviews: "1.8k",
    image: "https://m.media-amazon.com/images/I/6198fAKjDsL._SX522_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61ccVCGpsyL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/616n+rloVcL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/61GpXx4pWvL._SL1200_.jpg",
      "https://m.media-amazon.com/images/I/71XWVkF3vRL._SL1200_.jpg",
      "https://m.media-amazon.com/images/I/71n2d3OwE4L._SL1200_.jpg"
    ],
    features: [
      "High-Resolution 40mm Neodymium Drivers for Immersive Audio",
      "Up to 40 Hours of Wireless Playback on a Single Charge",
      "Plush Ergonomic Earcups with Memory Foam Padding",
      "Quick Charge Technology: 10 Minutes Charge = 3 Hours Play",
      "Deep Bass",
      "Fast Charging",
      "Foldable/Collapsible",
      "Noise Cancellation"
    ],
    desc: "Immerse yourself in pure sound with Headsound Wireless Headphones. Featuring 40mm neodymium drivers, 40 hours playtime, and memory foam earcups.",
    color: "Black",
    discount: 20,
    inStock: true,
    warranty: "2 Years"
  },
  {
    id: 3,
    title: "ILIFE A30 Pro Robotic Vacuum Cleaner",
    brand: "ILIFE",
    category: "home",
    tag: "Home",
    price: 19900,
    rating: 4.2,
    reviews: "1k",
    image: "https://m.media-amazon.com/images/I/51CLiKDNAqL._SX679_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71iS-22+atL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71N5DdkrOkL._SX679_.jpg",
      ""
    ],
    features: [
      "5000Pa Strong Suction",
      "Self-Emptying Station",
      "LiDAR Navigation",
      "App and Alexa Control",
      "Fast Charging"
    ],
    desc: "ILIFE A30 Pro Robotic Vacuum Cleaner with LiDAR Navigation, 5000Pa Suction, and Self-Emptying Station. Smart vacuum and mop combo with multi-floor mapping and app control.",
    color: "Black",
    discount: 30,
    inStock: true,
    warranty: "1 Year"
  },
  {
    id: 4,
    title: "CCTV Smart Camera",
    brand: "Generic",
    category: "home",
    tag: "Home",
    price: 2000,
    rating: 4.9,
    reviews: "320",
    image: "https://m.media-amazon.com/images/I/61dW2tlW1-L._SX679_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61Gcfk2L3sL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61T5b8ubvXL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61HpjfNjYlL._SX679_.jpg"
    ],
    features: [
      "2K Resolution ",
      "Infrared Night Vision",
      "Two-Way Clear Audio",
      "Smartphone Alerts"
    ],
    desc: "Intelligent home security camera with 2k resolution, infrared night vision, motion tracking, two-way audio, and real-time smartphone alert notifications.",
    color: "White",
    discount: 15,
    inStock: true,
    warranty: "1 Year"
  },
  {
    id: 5,
    title: "FITRIC M3 Portable Bluetooth Speaker",
    brand: "FITRIC",
    category: "music",
    tag: "Music",
    price: 260,
    rating: 3.8,
    reviews: "250",
    image: "https://rukminim1.flixcart.com/image/1536/1536/xif0q/speaker-mobile-mod/r/6/4/1-mini-boost-4d-metal-bluetooth-wireless-speaker-colorful-small-original-imagvgj6cxny7cfm.jpeg?q=90",
    images: [
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/speaker/smart-speaker/5/p/a/m3-portable-bluetooth-mini-speaker-dynamic-metal-sound-with-high-original-imah5ghbz6tqn68z.jpeg?q=90",
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/speaker-mobile-mod/v/u/0/1-mini-boost-4d-metal-bluetooth-wireless-speaker-colorful-small-original-imagvfwggbyx6zxh.jpeg?q=90"
    ],
    features: [
      "Dynamic Metal Sound & Rich Bass",
      "Built-in Voice Assistant (Google, Alexa & Siri)",
      "Ultra-Portable & Pocket-Sized Build",
      "Rechargeable Battery & Wireless Connectivity",
      "Deep Bass",
      "Water Resistant"
    ],
    desc: "FITRIC M3: Dynamic Metal Sound Mini Bluetooth Speaker with Google, Alexa & Siri voice assistants. Portable, powerful sound with high bass and wireless connectivity.",
    color: "Grey",
    discount: 45,
    inStock: true,
    warranty: "No Warranty"
  },
  {
    id: 6,
    title: "Diode",
    brand: "Generic",
    category: "diy",
    tag: "DIY Kit",
    price: 15,
    rating: 4.7,
    reviews: "780",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Diode-closeup.jpg/1280px-Diode-closeup.jpg",
    images: [
      "https://images.unsplash.com/photo-1517055720730-0d53fedf701e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608564697071-ddf911d837e5?q=80&w=600&auto=format&fit=crop"
    ],
    features: [
      "1N4007 Rectifier Diode",
      "2A 1000V Diode",
      "Small signal diode",
      "Low forward voltage drop"
    ],
    desc: "1N4007 Rectifier Diode: High-quality diode for electronics projects. Perfect for hobbyists and learners.",
    color: "Multicolor",
    discount: 0,
    inStock: true,
    warranty: "No Warranty"
  },
  {
    id: 7,
    title: "OnePlus Buds 2R Wireless Earbuds",
    brand: "OnePlus",
    category: "music",
    tag: "Music",
    price: 3200,
    rating: 4.8,
    reviews: "1.8k",
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/headphone/g/a/4/buds-2r-nord-wireless-bluetooth-in-earbuds-with-up-to-38h-music-original-imahafgx4sgsghhq.jpeg?q=90",
    images: [
      "https://rukminim2.flixcart.com/image/1536/1536/xif0q/headphone/c/8/p/buds-2r-nord-wireless-bluetooth-in-earbuds-with-up-to-38h-music-original-imahafgxggnxwy9b.jpeg?q=90",
      "https://rukminim2.flixcart.com/image/1536/1536/xif0q/headphone/a/l/k/buds-2r-nord-wireless-bluetooth-in-earbuds-with-up-to-38h-music-original-imahafgxvtcrtesg.jpeg?q=90",
      "https://rukminim2.flixcart.com/image/1536/1536/xif0q/headphone/a/t/5/buds-2r-nord-wireless-bluetooth-in-earbuds-with-up-to-38h-music-original-imahafgxxg6bdfap.jpeg?q=90"
    ],
    features: [
      "Ultra-Compact Carrying Case",
      "Instant Auto-Pairing Bluetooth 5.3",
      "Vibrant LED Battery Indicator",
      "IPX5 Sweat & Water Resistance",
      "Deep Bass",
      "Fast Charging",
      "Sweat Proof",
      "True Wireless",
      "Water Resistant"
    ],
    desc: "TWS Nord: Ultra-compact wireless earbuds with Bluetooth 5.3, LED battery indicator, and IPX5 sweat resistance for music on-the-go.",
    color: "Blue",
    discount: 10,
    inStock: true,
    warranty: "1 Year"
  },
  {
    id: 8,
    title: "JBL Tune 520BT Wireless Headphones",
    brand: "JBL",
    category: "music",
    tag: "Music",
    price: 2999,
    rating: 4.8,
    reviews: "1.2k",
    image: "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwf6f09a2f/01.JBL_Tune_520BT_ProductImage_Hero_Blue.png?sw=535&sh=535",
    images: [
      "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw06477355/pdp/JBL_Tune_520BT_Lifestyle_Image_White_904x560.png?sw=2034&sh=1260",
      "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd44a0ab2/pdp/JBL_Tune_520BT_Lifestyle_Image_Purple_904x560.png?sw=2034&sh=1260",
      "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwbf3354a0/04.JBL_Live_770NC_Product%20Image_Left_Black.png?sw=535&sh=535"
    ],
    features: [
      "Elegant All-White Design",
      "Studio-Grade Acoustic Tuning",
      "Comfortable Ergonomic Fit",
      "Foldable Design with Travel Pouch",
      "Deep Bass",
      "Fast Charging",
      "Foldable/Collapsible",
      "True Wireless"
    ],
    desc: "Headsound Tune 520BT: Bluetooth over-ear headphones with exceptional comfort memory foam earcups and punchy, crystal-clear sound profiles.",
    color: "White",
    discount: 15,
    inStock: true,
    warranty: "1 Year"
  },
  {
    id: 9,
    title: "Philips Signify Smart Motion LED Bulb",
    brand: "Philips",
    category: "home",
    tag: "Bulb",
    price: 150,
    rating: 4.6,
    reviews: "5k",
    image: "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsMotionSensingBulb.png?v=1769679029",
    images: [
      "https://in.shop.lighting.lighting.philips.com/cdn/shop/files/Artboard2_ee50492b-a262-4151-833d-feb35322b0fb.png?v=1769679029",
      "https://in.shop.lighting.lighting.philips.com/cdn/shop/files/Artboard1_9651c16c-8585-476e-8d92-4881fee1757e.png?v=1769679029",
      "https://in.shop.lighting.lighting.philips.com/cdn/shop/files/Artboard6_0f7403e7-87bc-4c5f-bab4-e41eb4e57a1a.png?v=1769679029"
    ],
    features: [
      "360° Smart Motion Tracking",
      "Crystal Clear Two-Way Audio",
      "8GB Built-in Storage",
      "One-Tap Privacy Mode"
    ],
    desc: "Illuminate your space with Philips Smart Bulb Motion Sensor - an innovative 9W LED bulb that combines warm white light with smart motion sensing technology.",
    color: "White",
    discount: 5,
    inStock: false,
    warranty: "1 Year"
  },
  {
    id: 10,
    title: "Mani Electronics Peker 32 Air Purifier",
    brand: "Mani Electronics",
    category: "home",
    tag: "Other",
    price: 990,
    rating: 5.0,
    reviews: "2k",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop"
    ],
    features: [
      "3-Stage HEPA Filtration System",
      "Super-Quiet Sleep Mode (22dB)",
      "Vibrant Smart Touch Dashboard",
      "Compact Space-Saving Cylindrical Shape"
    ],
    desc: "Peker 32: Smart cylindrical ambient air purifier and odor remover. Super quiet motor, modern white cylindrical design, ideal for small office desks and workspaces.",
    color: "White",
    discount: 50,
    inStock: true,
    warranty: "1 Year"
  },
  {
    id: 11,
    title: "Mani Electronics R175 Amplifier",
    brand: "Mani Electronics",
    category: "music",
    tag: "Music",
    price: 3410,
    rating: 4.8,
    reviews: "2.4k",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop"
    ],
    features: [
      "Digital Equalizer Visualizer",
      "Optical, AUX, & Bluetooth Inputs",
      "Low-Latency Qualcomm aptX Audio",
      "Includes Remote Control Utility"
    ],
    desc: "Mani Electronics R175: Hybrid audio amplifier with digital equalizer dashboard. Features support for optical audio input, AUX, and low-latency Bluetooth transmission.",
    color: "Black",
    discount: 25,
    inStock: true,
    warranty: "1 Year"
  },
  {
    id: 12,
    title: "Cyberpunk Cyberdeck Mechanical Keyboard",
    brand: "Cyberpunk",
    category: "custom",
    tag: "DIY Kit",
    price: 18900,
    rating: 4.9,
    reviews: "180",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517055720730-0d53fedf701e?q=80&w=600&auto=format&fit=crop"
    ],
    features: [
      "Hot-Swappable Mechanical Switches",
      "Solid Brass Mounting Plate",
      "Custom Pre-lubed Linear Switches",
      "Vibrant RGB Underglow Lighting",
      "Flatwire"
    ],
    desc: "Cyberpunk Cyberdeck: A beautiful custom mechanical keyboard cyberdeck build, hot-swappable keycaps, brass plate, and linear pre-lubed switches for the ultimate typing acoustics.",
    color: "Multicolor",
    discount: 30,
    inStock: true,
    warranty: "1 Year"
  },
  {
    id: 13,
    title: "Anchor Spike Guard Extension Board",
    brand: "Anchor",
    category: "home",
    tag: "Electrical",
    price: 499,
    rating: 4.8,
    reviews: "2.1k",
    image: "https://rukminim1.flixcart.com/image/1536/1536/xif0q/surge-protector/f/i/1/8-5219-no-anchor-original-imahcjth9q5zbnjv.jpeg?q=90",
    images: [
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/surge-protector/2/u/y/8-5219-no-anchor-original-imahcjthxc2jbv8p.jpeg?q=90",
      "https://rukminim1.flixcart.com/image/1536/1536/xif0q/surge-protector/u/e/y/8-5219-no-anchor-original-imahcjthv7u4mhhf.jpeg?q=90"
    ],
    features: [
      "4 Universal Sockets with Individual Switches",
      "Built-in Spike & Surge Protection (6A, 240V~)",
      "High-Grade Fire Retardant Plastic Body",
      "Heavy-Duty 1.5 Meter Copper Cord",
      "Flatwire"
    ],
    desc: "Anchor premium multi-port extension board featuring 4 universal sockets, individual switches for each socket, a master indicator light, and heavy-duty built-in surge protection for all your electronics.",
    color: "White",
    discount: 20,
    inStock: true,
    warranty: "2 Years"
  },
  {
    id: 14,
    title: "Boat Rockerz 450 Wireless Bluetooth Headphone",
    brand: "Boat",
    category: "music",
    tag: "Music",
    price: 1499,
    rating: 4.4,
    reviews: "5.4k",
    image: "https://m.media-amazon.com/images/I/51xxA+6E+xL._SL1500_.jpg",
    images: ["https://m.media-amazon.com/images/I/51xxA+6E+xL._SL1500_.jpg"],
    features: [
      "Up to 15 Hours Battery Playback",
      "40mm Dynamic Audio Drivers",
      "Deep Bass",
      "Fast Charging",
      "Foldable/Collapsible"
    ],
    desc: "Boat Rockerz 450 Wireless Bluetooth Headphone with up to 15 hours playback, comfortable earcups, and HD sound quality.",
    color: "Black",
    discount: 55,
    inStock: true,
    warranty: "1 Year"
  },
  {
    id: 15,
    title: "Noise Defy Active Noise Cancelling Bluetooth Headphone",
    brand: "Noise",
    category: "music",
    tag: "Music",
    price: 4999,
    rating: 4.6,
    reviews: "1.1k",
    image: "https://m.media-amazon.com/images/I/61HeK2RL1oL._SL1500_.jpg",
    images: ["https://m.media-amazon.com/images/I/61HeK2RL1oL._SL1500_.jpg"],
    features: [
      "30dB Active Noise Cancellation",
      "Memory Foam Cushion Pads",
      "Deep Bass",
      "Fast Charging",
      "Noise Cancellation",
      "True Wireless"
    ],
    desc: "Noise Defy Bluetooth over-ear headphones with 30dB Active Noise Cancellation, memory foam cups, and dual connectivity.",
    color: "Blue",
    discount: 35,
    inStock: true,
    warranty: "1 Year"
  },
  {
    id: 16,
    title: "Double Door Refrigerator Repair & Gas Refill",
    brand: "LG",
    category: "services",
    tag: "Service",
    price: 1200,
    rating: 4.8,
    reviews: "120",
    image: "https://images.unsplash.com/photo-1571175432290-efb86f4cf679?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1571175432290-efb86f4cf679?q=80&w=600&auto=format&fit=crop"],
    features: [
      "Comprehensive Diagnostics",
      "Water Resistant"
    ],
    desc: "Complete diagnostic, compressor repair, and gas refilling for single and double door refrigerators at your home.",
    color: "Silver",
    discount: 15,
    inStock: true,
    warranty: "No Warranty",
    isService: true,
    serviceType: "repair",
    deviceCategory: "fridge",
    serviceMode: "home-visit",
    repairUrgency: "express"
  },
  {
    id: 17,
    title: "Desert Cooler Installation & Wet Service",
    brand: "Symphony",
    category: "services",
    tag: "Service",
    price: 500,
    rating: 4.5,
    reviews: "85",
    image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1621905252507-b354bc25edac?q=80&w=600&auto=format&fit=crop"],
    features: [
      "Premium Filter Replacement",
      "Sweat Proof"
    ],
    desc: "Professional mounting, wiring, pad replacement and thorough cleaning of desert coolers.",
    color: "White",
    discount: 10,
    inStock: true,
    warranty: "No Warranty",
    isService: true,
    serviceType: "installation",
    deviceCategory: "cooler",
    serviceMode: "home-visit",
    repairUrgency: "normal"
  },
  {
    id: 18,
    title: "55-inch LED/QLED Smart TV Screen Repair",
    brand: "Samsung",
    category: "services",
    tag: "Service",
    price: 8500,
    rating: 4.7,
    reviews: "210",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600&auto=format&fit=crop"],
    features: [
      "Panel replacement",
      "Flatwire"
    ],
    desc: "Bring in your TV for panel repair, display backlight replacement, or motherboard issues. Done in-store by certified technicians.",
    color: "Black",
    discount: 20,
    inStock: true,
    warranty: "No Warranty",
    isService: true,
    serviceType: "repair",
    deviceCategory: "tv",
    serviceMode: "store-walk-in",
    repairUrgency: "express"
  },
  {
    id: 19,
    title: "Apple/Samsung Smart Watch Battery Swap & Waterproofing",
    brand: "Apple",
    category: "services",
    tag: "Service",
    price: 1500,
    rating: 4.9,
    reviews: "340",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop"],
    features: [
      "Preservation Pressure Testing",
      "True Wireless",
      "Water Resistant"
    ],
    desc: "Quick in-store battery replacement with original cell and pressure testing for water resistance preservation.",
    color: "Grey",
    discount: 30,
    inStock: true,
    warranty: "No Warranty",
    isService: true,
    serviceType: "maintenance",
    deviceCategory: "watch",
    serviceMode: "store-walk-in",
    repairUrgency: "normal"
  }
];

// App State
let cart = [];
let activeCategory = "all";
let searchQuery = "";
let wishlist = [];
let currentImageIndex = 0;
let currentPage = 1;
const itemsPerPage = 4;

// Active Filter Parameters
let filterState = {
  priceMin: null,
  priceMax: null,
  brands: [],
  rating: 'all',
  availability: [], // 'in-stock', 'out-of-stock'
  warranty: [], // '1 Year', '2 Years', 'No Warranty'
  features: [],
  discount: 0,
  color: null,
  serviceType: [],
  deviceCategory: [],
  serviceMode: [],
  repairUrgency: []
};

// DOM Elements
const productGrid = document.getElementById("productGrid");
const recommendationsCarousel = document.getElementById("recommendationsCarousel");
const categoryMainHeader = document.getElementById("categoryMainHeader");
const categorySubItems = document.querySelectorAll(".category-sub-item");
const currentCategoryTitle = document.getElementById("currentCategoryTitle");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const globalCartCount = document.getElementById("globalCartCount");

// Header Search Elements
const searchToggleBtn = document.getElementById("searchToggleBtn");
const headerSearchBar = document.getElementById("headerSearchBar");
const headerSearchInput = document.getElementById("headerSearchInput");
const headerSearchCloseBtn = document.getElementById("headerSearchCloseBtn");
const searchDrawerOverlay = document.getElementById("searchDrawerOverlay");

// Mobile Menu Elements
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const closeMobileMenuBtn = document.getElementById("closeMobileMenuBtn");



// Cart DOM
const cartDrawerOverlay = document.getElementById("cartDrawerOverlay");
const cartItemsList = document.getElementById("cartItemsList");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");
const cartToggleBtn = document.getElementById("cartToggleBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const checkoutBtn = document.getElementById("checkoutBtn");

// Wishlist DOM
const wishlistDrawerOverlay = document.getElementById("wishlistDrawerOverlay");
const wishlistItemsList = document.getElementById("wishlistItemsList");
const wishlistToggleBtn = document.getElementById("wishlistToggleBtn");
const closeWishlistBtn = document.getElementById("closeWishlistBtn");
const globalWishlistCount = document.getElementById("globalWishlistCount");

// Modal DOM
const productDetailModal = document.getElementById("productDetailModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalProductImg = document.getElementById("modalProductImg");
const modalProductTag = document.getElementById("modalProductTag");
const modalProductCategory = document.getElementById("modalProductCategory");
const modalProductBrand = document.getElementById("modalProductBrand");
const modalProductTitle = document.getElementById("modalProductTitle");
const modalProductStars = document.getElementById("modalProductStars");
const modalProductReviews = document.getElementById("modalProductReviews");
const modalProductPrice = document.getElementById("modalProductPrice");
const modalProductDesc = document.getElementById("modalProductDesc");
const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");
const modalBuyNowBtn = document.getElementById("modalBuyNowBtn");
const modalPrevImgBtn = document.getElementById("modalPrevImgBtn");
const modalNextImgBtn = document.getElementById("modalNextImgBtn");
const modalCarouselDots = document.getElementById("modalCarouselDots");
const modalWishlistBtn = document.getElementById("modalWishlistBtn");
const modalProductFeatures = document.getElementById("modalProductFeatures");
let currentOpenProductId = null;

// Carousel navigation
const carouselPrevBtn = document.getElementById("carouselPrevBtn");
const carouselNextBtn = document.getElementById("carouselNextBtn");

// Newsletter Form
const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Populate dynamic filters
  initDynamicFilters();


  // Parse URL search query for brand/product search filtering on shop page
  const params = new URLSearchParams(window.location.search);
  const searchParam = params.get("search");
  if (searchParam) {
    searchQuery = searchParam;
    if (searchInput) searchInput.value = searchQuery;
    if (headerSearchInput) headerSearchInput.value = searchQuery;
  }

  initScrollAnimations();
  if (productGrid) renderProductGrid();
  if (recommendationsCarousel) renderRecommendations();
  if (document.getElementById("count-all")) updateCategoryCounts();
  setupEventListeners();
  setupSidebarAccordions();
  setupAuthEventListeners();
  updateGlobalWishlistCounter();
  updateGlobalCartCounter();
});

// Calculate and render sidebar category counts
function updateCategoryCounts() {
  const counts = {
    all: products.length,
    home: products.filter(p => p.category === "home").length,
    music: products.filter(p => p.category === "music").length,
    diy: products.filter(p => p.category === "diy").length,
    custom: products.filter(p => p.category === "custom").length,
    services: products.filter(p => p.category === "services").length
  };

  for (const [cat, count] of Object.entries(counts)) {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = count;
  }
}

// Render rating stars HTML helper
function getRatingStarsHtml(rating) {
  let starsHtml = "";
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    } else if (i === fullStars && hasHalf) {
      starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
    } else {
      starsHtml += '<i class="fa-regular fa-star"></i>';
    }
  }
  return starsHtml;
}

// Render main product grid
function renderProductGrid() {
  if (!productGrid) return;
  
  // Calculate and update matching product counts for each filter in real-time
  updateFilterFacets();

  // Filter list
  let filtered = products;

  // 1. Filter by category
  if (activeCategory !== "all") {
    filtered = filtered.filter(p => p.category === activeCategory);
  }

  // 2. Filter by search query (checks title, desc, tag, brand, and handles singular/plural search inputs)
  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase();
    const querySingular = query.endsWith('s') ? query.slice(0, -1) : query;
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query) ||
      p.tag.toLowerCase().includes(query) ||
      (p.brand && p.brand.toLowerCase().includes(query)) ||
      // Also match singular form if user searched for plural (e.g. "Speakers" -> matches "speaker")
      (query !== querySingular && (
        p.title.toLowerCase().includes(querySingular) ||
        p.desc.toLowerCase().includes(querySingular) ||
        p.tag.toLowerCase().includes(querySingular) ||
        (p.brand && p.brand.toLowerCase().includes(querySingular))
      ))
    );
  }

  // 3. Filter by Price Range
  if (filterState.priceMin !== null && filterState.priceMin !== "") {
    filtered = filtered.filter(p => p.price >= parseFloat(filterState.priceMin));
  }
  if (filterState.priceMax !== null && filterState.priceMax !== "") {
    filtered = filtered.filter(p => p.price <= parseFloat(filterState.priceMax));
  }

  // 4. Filter by Brands (Company)
  if (filterState.brands.length > 0) {
    filtered = filtered.filter(p => p.brand && filterState.brands.includes(p.brand));
  }

  // 5. Filter by Rating
  if (filterState.rating !== 'all') {
    filtered = filtered.filter(p => p.rating >= parseFloat(filterState.rating));
  }

  // 6. Filter by Availability
  if (filterState.availability.length > 0) {
    filtered = filtered.filter(p => {
      const status = p.inStock ? 'in-stock' : 'out-of-stock';
      return filterState.availability.includes(status);
    });
  }

  // 7. Filter by Warranty
  if (filterState.warranty.length > 0) {
    filtered = filtered.filter(p => p.warranty && filterState.warranty.includes(p.warranty));
  }

  // 8. Filter by Features
  if (filterState.features.length > 0) {
    filtered = filtered.filter(p => {
      if (!p.features || p.features.length === 0) return false;
      // All selected features must be present in product features
      return filterState.features.every(f => 
        p.features.some(pf => pf.toLowerCase().includes(f.toLowerCase()))
      );
    });
  }

  // 9. Filter by Discount
  if (filterState.discount > 0) {
    filtered = filtered.filter(p => p.discount !== undefined && p.discount >= filterState.discount);
  }

  // 10. Filter by Color
  if (filterState.color) {
    filtered = filtered.filter(p => p.color && p.color.toLowerCase() === filterState.color.toLowerCase());
  }

  // 11. Repair & Service Filters
  if (filterState.serviceType.length > 0) {
    filtered = filtered.filter(p => p.isService && p.serviceType && filterState.serviceType.includes(p.serviceType));
  }
  if (filterState.deviceCategory.length > 0) {
    filtered = filtered.filter(p => p.isService && p.deviceCategory && filterState.deviceCategory.includes(p.deviceCategory));
  }
  if (filterState.serviceMode.length > 0) {
    filtered = filtered.filter(p => p.isService && p.serviceMode && filterState.serviceMode.includes(p.serviceMode));
  }
  if (filterState.repairUrgency.length > 0) {
    filtered = filtered.filter(p => p.isService && p.repairUrgency && filterState.repairUrgency.includes(p.repairUrgency));
  }

  // Update clear filters button visibility
  const btnClearFilters = document.getElementById("btnClearFilters");
  if (btnClearFilters) {
    const isAnyFilterActive = activeCategory !== "all" || 
                              searchQuery.trim() !== "" ||
                              (filterState.priceMin !== null && filterState.priceMin !== "") ||
                              (filterState.priceMax !== null && filterState.priceMax !== "") ||
                              filterState.brands.length > 0 ||
                              filterState.rating !== 'all' ||
                              filterState.availability.length > 0 ||
                              filterState.warranty.length > 0 ||
                              filterState.features.length > 0 ||
                              filterState.discount > 0 ||
                              filterState.color !== null ||
                              filterState.serviceType.length > 0 ||
                              filterState.deviceCategory.length > 0 ||
                              filterState.serviceMode.length > 0 ||
                              filterState.repairUrgency.length > 0;
    if (isAnyFilterActive) {
      btnClearFilters.classList.add("show");
    } else {
      btnClearFilters.classList.remove("show");
    }
  }

  // Calculate total pages
  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  if (currentPage < 1) {
    currentPage = 1;
  }

  // Get products for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filtered.slice(startIndex, endIndex);

  // Clear grid
  productGrid.style.opacity = 0;

  setTimeout(() => {
    productGrid.innerHTML = "";

    if (paginatedProducts.length === 0) {
      productGrid.innerHTML = `
        <div class="cart-empty-state" style="grid-column: 1 / -1; padding: 48px 0;">
          <i class="fa-solid fa-magnifying-glass-minus"></i>
          <p>No products found matching your search filters.</p>
        </div>
      `;
      productGrid.style.opacity = 1;
      renderPagination(totalPages);
      return;
    }

    paginatedProducts.forEach((product, index) => {
      const card = document.createElement("div");
      card.className = "product-card reveal-on-scroll reveal-up";
      card.style.transitionDelay = `${(index % 4) * 0.08}s`;
      card.addEventListener("click", () => openDetailModal(product.id));

      const isWishlisted = wishlist.includes(product.id);

      card.innerHTML = `
        <div class="product-card-inner">
          <div class="product-card-header">
            <span class="product-card-tag">${product.tag}</span>
            <div style="display: flex; gap: 8px;">
              <button class="product-card-wishlist ${isWishlisted ? 'active' : ''}" data-id="${product.id}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" title="Wishlist">
                <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
              </button>
            </div>
          </div>
          <div class="product-card-img-wrapper">
            <img src="${product.image}" alt="${product.title}" class="product-card-bg-img">
          </div>
          <div class="product-card-body">
            <div class="product-card-brand">${product.brand || 'GENERIC'}</div>
            <h3 class="product-card-title">${product.title}</h3>
            <div class="product-card-rating">
              <span class="rating-stars">${getRatingStarsHtml(product.rating)}</span>
              <span class="rating-text">
                ${product.rating} (${product.reviews} Reviews)
                ${product.rating >= 4.8 ? `<i class="fa-solid fa-circle-check" style="color: var(--accent-color); font-size: 11px; margin-left: 4px;" title="Top Rated"></i>` : ''}
              </span>
            </div>
            <div class="product-card-price-row">
              <span class="product-card-price">₹${product.price.toFixed(2)}</span>
            </div>
            <div class="product-card-buttons">
              <button class="product-card-btn btn-add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                <span>Add to Cart</span> <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <button class="product-card-btn btn-buy-now" onclick="event.stopPropagation(); buyNow(${product.id})">
                <span>Buy Now</span> <i class="fa-solid fa-bolt"></i>
              </button>
            </div>
          </div>
        </div>
      `;
      productGrid.appendChild(card);
      if (scrollObserver) {
        scrollObserver.observe(card);
      } else {
        card.classList.add('active');
      }
    });

    productGrid.style.opacity = 1;
    renderPagination(totalPages);
  }, 150);
}

// Render pagination controls dynamically
function renderPagination(totalPages) {
  const paginationContainer = document.querySelector(".pagination");
  if (!paginationContainer) return;

  paginationContainer.innerHTML = "";

  // Create prev button
  const prevBtn = document.createElement("button");
  prevBtn.className = `pagination-btn${currentPage === 1 ? ' disabled' : ''}`;
  prevBtn.id = "prevPageBtn";
  prevBtn.title = "Previous Page";
  prevBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
  if (currentPage > 1) {
    prevBtn.addEventListener("click", () => {
      currentPage--;
      renderProductGrid();
      const header = document.querySelector(".content-header");
      if (header) {
        header.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
  paginationContainer.appendChild(prevBtn);

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      createPageButton(i, paginationContainer);
    }
  } else {
    // Page 1
    createPageButton(1, paginationContainer);

    if (currentPage <= 4) {
      for (let i = 2; i <= 5; i++) {
        createPageButton(i, paginationContainer);
      }
      createEllipsis(paginationContainer);
      createPageButton(totalPages, paginationContainer);
    } else if (currentPage >= totalPages - 3) {
      createEllipsis(paginationContainer);
      for (let i = totalPages - 4; i <= totalPages; i++) {
        createPageButton(i, paginationContainer);
      }
    } else {
      createEllipsis(paginationContainer);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        createPageButton(i, paginationContainer);
      }
      createEllipsis(paginationContainer);
      createPageButton(totalPages, paginationContainer);
    }
  }

  // Create next button
  const nextBtn = document.createElement("button");
  nextBtn.className = `pagination-btn${currentPage === totalPages ? ' disabled' : ''}`;
  nextBtn.id = "nextPageBtn";
  nextBtn.title = "Next Page";
  nextBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
  if (currentPage < totalPages) {
    nextBtn.addEventListener("click", () => {
      currentPage++;
      renderProductGrid();
      const header = document.querySelector(".content-header");
      if (header) {
        header.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
  paginationContainer.appendChild(nextBtn);
}

function createPageButton(pageNumber, container) {
  const btn = document.createElement("button");
  btn.className = `pagination-btn${pageNumber === currentPage ? ' active' : ''}`;
  btn.textContent = pageNumber;
  btn.addEventListener("click", () => {
    if (currentPage !== pageNumber) {
      currentPage = pageNumber;
      renderProductGrid();
      const header = document.querySelector(".content-header");
      if (header) {
        header.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
  container.appendChild(btn);
}

function createEllipsis(container) {
  const span = document.createElement("span");
  span.className = "pagination-ellipsis";
  span.textContent = "...";
  container.appendChild(span);
}

// Render recommendations horizontal carousel
function renderRecommendations() {
  if (!recommendationsCarousel) return;
  // Use a mix of items for recommendations
  const recommendationList = products.slice(0, 12);
  recommendationsCarousel.innerHTML = "";

  if (recommendationList.length === 0) return;

  recommendationList.forEach((product, index) => {
    const item = document.createElement("div");
    item.className = "carousel-item reveal-on-scroll reveal-up";
    item.style.transitionDelay = `${(index) * 0.08}s`;

    const card = document.createElement("div");
    card.className = "product-card";
    card.addEventListener("click", () => openDetailModal(product.id));

    const isWishlisted = wishlist.includes(product.id);

    card.innerHTML = `
      <div class="product-card-inner">
        <div class="product-card-header">
          <span class="product-card-tag">${product.tag}</span>
          <div style="display: flex; gap: 8px;">
            <button class="product-card-wishlist ${isWishlisted ? 'active' : ''}" data-id="${product.id}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" title="Wishlist">
              <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
          </div>
        </div>
        <div class="product-card-img-wrapper">
          <img src="${product.image}" alt="${product.title}" class="product-card-bg-img">
        </div>
        <div class="product-card-body">
          <div class="product-card-brand">${product.brand || 'GENERIC'}</div>
          <h3 class="product-card-title">${product.title}</h3>
          <div class="product-card-rating">
            <span class="rating-stars">${getRatingStarsHtml(product.rating)}</span>
            <span class="rating-text">
              ${product.rating} (${product.reviews} Reviews)
              ${product.rating >= 4.8 ? `<i class="fa-solid fa-circle-check" style="color: var(--accent-color); font-size: 11px; margin-left: 4px;" title="Top Rated"></i>` : ''}
            </span>
          </div>
          <div class="product-card-price-row">
            <span class="product-card-price">₹${product.price.toFixed(2)}</span>
          </div>
          <div class="product-card-buttons">
            <button class="product-card-btn btn-add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
              <span>Add to Cart</span> <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <button class="product-card-btn btn-buy-now" onclick="event.stopPropagation(); buyNow(${product.id})">
              <span>Buy Now</span> <i class="fa-solid fa-bolt"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    item.appendChild(card);
    recommendationsCarousel.appendChild(item);
    if (scrollObserver) {
      scrollObserver.observe(item);
    } else {
      item.classList.add('active');
    }
  });
}

// Event Listeners setup
function setupEventListeners() {
  // Sidebar category filter clicks
  // Sidebar category main header click
  if (categoryMainHeader) {
    categoryMainHeader.addEventListener("click", (e) => {
      e.preventDefault();

      const target = e.target;
      const isChevron = target.closest(".chevron-icon");

      // Animate item
      categoryMainHeader.classList.add("category-click-bounce");
      categoryMainHeader.addEventListener("animationend", () => {
        categoryMainHeader.classList.remove("category-click-bounce");
      }, { once: true });

      if (isChevron) {
        categoryMainHeader.classList.toggle("collapsed");
      } else {
        // Toggle collapsed state but also activate filter
        categoryMainHeader.classList.toggle("collapsed");
        categoryMainHeader.classList.add("active");
        categorySubItems.forEach(sub => sub.classList.remove("active"));

        activeCategory = "all";
        currentCategoryTitle.textContent = "Give All You Need";
        currentPage = 1;
        renderProductGrid();
      }
    });
  }

  // Sidebar category sub items clicks
  categorySubItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      // Animate item
      item.classList.add("category-click-bounce");
      item.addEventListener("animationend", () => {
        item.classList.remove("category-click-bounce");
      }, { once: true });

      categoryMainHeader.classList.remove("active");
      categorySubItems.forEach(sub => sub.classList.remove("active"));
      item.classList.add("active");

      activeCategory = item.getAttribute("data-category");

      // Update heading text
      const titleSpan = item.querySelector("span").textContent.trim();
      currentCategoryTitle.textContent = titleSpan;

      currentPage = 1;
      renderProductGrid();
    });
  });

  // Header Search bar toggle
  if (searchToggleBtn && searchDrawerOverlay) {
    searchToggleBtn.addEventListener("click", () => {
      searchDrawerOverlay.classList.add("open");
      headerSearchInput.focus();
    });
  }

  if (searchDrawerOverlay) {
    searchDrawerOverlay.addEventListener("click", (e) => {
      if (e.target === searchDrawerOverlay) {
        searchDrawerOverlay.classList.remove("open");
        headerSearchInput.value = "";
        searchQuery = "";
        if (searchInput) searchInput.value = "";
        currentPage = 1;
        if (productGrid) renderProductGrid();
      }
    });
  }

  // Mobile Menu Drawer handlers
  if (mobileMenuToggle && mobileMenuOverlay) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuOverlay.classList.add("open");
    });
  }

  if (closeMobileMenuBtn && mobileMenuOverlay) {
    closeMobileMenuBtn.addEventListener("click", () => {
      mobileMenuOverlay.classList.remove("open");
    });
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", (e) => {
      if (e.target === mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove("open");
      }
    });
  }

  const mobileNavLinksList = document.querySelectorAll(".mobile-nav-item");
  mobileNavLinksList.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenuOverlay.classList.remove("open");
    });
  });


  if (headerSearchCloseBtn && searchDrawerOverlay) {
    headerSearchCloseBtn.addEventListener("click", () => {
      searchDrawerOverlay.classList.remove("open");
      headerSearchInput.value = "";
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      currentPage = 1;
      if (productGrid) renderProductGrid();
    });
  }

  // Real-time search inputs syncing & filtering
  if (headerSearchInput) {
    headerSearchInput.addEventListener("input", () => {
      searchQuery = headerSearchInput.value;
      if (searchInput) searchInput.value = searchQuery; // sync values
      currentPage = 1;
      renderProductGrid();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      searchQuery = searchInput.value;
      if (headerSearchInput) headerSearchInput.value = searchQuery; // sync values
      currentPage = 1;
      renderProductGrid();
    });
  }

  // Search button action
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      if (searchInput) searchQuery = searchInput.value;
      currentPage = 1;
      renderProductGrid();
    });
  }

  // Cart Drawer open/close toggles
  if (cartToggleBtn) cartToggleBtn.addEventListener("click", toggleCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener("click", toggleCartDrawer);
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener("click", (e) => {
      if (e.target === cartDrawerOverlay) toggleCartDrawer();
    });
  }

  // Wishlist Drawer open/close toggles
  if (wishlistToggleBtn) wishlistToggleBtn.addEventListener("click", toggleWishlistDrawer);
  if (closeWishlistBtn) closeWishlistBtn.addEventListener("click", toggleWishlistDrawer);
  if (wishlistDrawerOverlay) {
    wishlistDrawerOverlay.addEventListener("click", (e) => {
      if (e.target === wishlistDrawerOverlay) toggleWishlistDrawer();
    });
  }

  // Checkout action
  if (checkoutBtn) checkoutBtn.addEventListener("click", handleCheckout);

  // Modal open/close actions
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeDetailModal);
  if (productDetailModal) {
    productDetailModal.addEventListener("click", (e) => {
      if (e.target === productDetailModal) closeDetailModal();
    });
  }

  // Keyboard accessibility: close product detail modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && currentOpenProductId) {
      closeDetailModal();
    }
  });

  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener("click", () => {
      if (currentOpenProductId) {
        addToCart(currentOpenProductId);
      }
    });
  }

  if (modalBuyNowBtn) {
    modalBuyNowBtn.addEventListener("click", () => {
      if (currentOpenProductId) {
        buyNow(currentOpenProductId);
        closeDetailModal();
      }
    });
  }

  // Modal image carousel navigation
  if (modalPrevImgBtn) modalPrevImgBtn.addEventListener("click", () => navigateCarousel(-1));
  if (modalNextImgBtn) modalNextImgBtn.addEventListener("click", () => navigateCarousel(1));

  // Wishlist toggle
  if (modalWishlistBtn) modalWishlistBtn.addEventListener("click", () => toggleWishlist(currentOpenProductId));

  // Recommendations Carousel scroll actions
  if (carouselPrevBtn && recommendationsCarousel) {
    carouselPrevBtn.addEventListener("click", () => {
      recommendationsCarousel.classList.remove("slide-next");
      recommendationsCarousel.classList.add("slide-prev");
      
      const cardWidth = 320 + 24; // Card width + gap
      recommendationsCarousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      
      setTimeout(() => {
        recommendationsCarousel.classList.remove("slide-prev");
      }, 600);
    });
  }

  if (carouselNextBtn && recommendationsCarousel) {
    carouselNextBtn.addEventListener("click", () => {
      recommendationsCarousel.classList.remove("slide-prev");
      recommendationsCarousel.classList.add("slide-next");
      
      const cardWidth = 320 + 24; // Card width + gap
      recommendationsCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
      
      setTimeout(() => {
        recommendationsCarousel.classList.remove("slide-next");
      }, 600);
    });
  }

  // Newsletter Submit
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailVal = newsletterEmail.value.trim();
      if (emailVal) {
        showToast(`Thank you! ${emailVal} has been signed up.`, "success");
        newsletterEmail.value = "";
      }
    });
  }

  // Home logo click resets filter
  const logoLink = document.getElementById("logoLink");
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      if (productGrid) {
        e.preventDefault();
        resetFilters();
      }
    });
  }

  // Clear filters button click
  const btnClearFilters = document.getElementById("btnClearFilters");
  if (btnClearFilters) {
    btnClearFilters.addEventListener("click", () => {
      // Add a bounce/click animation
      btnClearFilters.classList.add("category-click-bounce");
      btnClearFilters.addEventListener("animationend", () => {
        btnClearFilters.classList.remove("category-click-bounce");
      }, { once: true });

      resetFilters();
      showToast("All filters cleared", "info");
    });
  }

  // Sticky header transition on scroll
  const headerEl = document.querySelector("header");
  if (headerEl) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        headerEl.classList.add("scrolled");
      } else {
        headerEl.classList.remove("scrolled");
      }
    });
  }

  // --- FILTER EVENT LISTENERS ---
  const filterModal = document.getElementById("filterModal");
  const filterPopupTriggerBtn = document.getElementById("filterPopupTriggerBtn");
  const mobileFloatingFilterBtn = document.getElementById("mobileFloatingFilterBtn");
  const closeFilterModalBtn = document.getElementById("closeFilterModalBtn");
  const btnApplyPopupFilters = document.getElementById("btnApplyPopupFilters");
  const btnClearPopupFilters = document.getElementById("btnClearPopupFilters");

  // Open filter modal
  if (filterPopupTriggerBtn) {
    filterPopupTriggerBtn.addEventListener("click", () => {
      filterModal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }
  if (mobileFloatingFilterBtn) {
    mobileFloatingFilterBtn.addEventListener("click", () => {
      filterModal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }

  // Close filter modal
  if (closeFilterModalBtn) {
    closeFilterModalBtn.addEventListener("click", () => {
      filterModal.classList.remove("open");
      document.body.style.overflow = "";
    });
  }
  if (filterModal) {
    filterModal.addEventListener("click", (e) => {
      if (e.target === filterModal) {
        filterModal.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  // Apply popup filters
  if (btnApplyPopupFilters) {
    btnApplyPopupFilters.addEventListener("click", () => {
      syncFilters('popup');
      currentPage = 1;
      renderProductGrid();
      filterModal.classList.remove("open");
      document.body.style.overflow = "";
      showToast("Filters applied", "success");
    });
  }

  // Clear popup filters
  if (btnClearPopupFilters) {
    btnClearPopupFilters.addEventListener("click", () => {
      resetFilters();
      filterModal.classList.remove("open");
      document.body.style.overflow = "";
      showToast("Filters reset", "info");
    });
  }

  // Live checkbox / radio change triggers for both sidebar and popup
  const allCheckboxesAndRadios = document.querySelectorAll('.sidebar input[type="checkbox"], .sidebar input[type="radio"], #filterModal input[type="checkbox"], #filterModal input[type="radio"]');
  allCheckboxesAndRadios.forEach(input => {
    input.addEventListener("change", () => {
      const isPopup = input.closest('#filterModal') !== null;
      syncFilters(isPopup ? 'popup' : 'sidebar');
      currentPage = 1;
      renderProductGrid();
    });
  });

  // Sidebar Price Range Apply
  const btnApplyPrice = document.getElementById("btnApplyPrice");
  if (btnApplyPrice) {
    btnApplyPrice.addEventListener("click", () => {
      syncFilters('sidebar');
      currentPage = 1;
      renderProductGrid();
      showToast("Price filter applied", "info");
    });
  }

  // Color selection logic for both grids
  const colorButtons = document.querySelectorAll(".color-btn");
  colorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const colorName = btn.getAttribute("data-color");
      const isActive = btn.classList.contains("active");

      // Deactivate all color buttons in both grids
      colorButtons.forEach(b => b.classList.remove("active"));

      if (isActive) {
        filterState.color = null;
        showToast("Color filter cleared", "info");
      } else {
        // Activate in both grids
        document.querySelectorAll(`.color-btn[data-color="${colorName}"]`).forEach(b => {
          b.classList.add("active");
        });
        filterState.color = colorName;
        showToast(`Filtered by color: ${colorName}`, "info");
      }

      currentPage = 1;
      renderProductGrid();
    });
  });
}

// Reset filters to default state
function resetFilters() {
  activeCategory = "all";
  searchQuery = "";
  if (searchInput) searchInput.value = "";
  if (headerSearchInput) headerSearchInput.value = "";
  if (headerSearchBar) headerSearchBar.classList.remove("open");

  if (categoryMainHeader) {
    categoryMainHeader.classList.add("active");
    categoryMainHeader.classList.remove("collapsed");
  }
  if (categorySubItems) {
    categorySubItems.forEach(i => i.classList.remove("active"));
  }

  // Reset inputs
  document.querySelectorAll('#priceMin, #priceMax, #popupPriceMin, #popupPriceMax').forEach(input => {
    input.value = "";
  });

  // Reset checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
  });

  // Reset radios
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    if (radio.value === "all" || radio.value === "0") {
      radio.checked = true;
    } else {
      radio.checked = false;
    }
  });

  // Reset colors grid
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Reset state
  filterState = {
    priceMin: null,
    priceMax: null,
    brands: [],
    rating: 'all',
    availability: [],
    warranty: [],
    features: [],
    discount: 0,
    color: null,
    serviceType: [],
    deviceCategory: [],
    serviceMode: [],
    repairUrgency: []
  };

  if (currentCategoryTitle) currentCategoryTitle.textContent = "Give All You Need";
  currentPage = 1;
  renderProductGrid();
}

// Setup dropdown accordions in the sidebar
function setupSidebarAccordions() {
  const headers = document.querySelectorAll(".dropdown-header");
  headers.forEach(el => {
    el.classList.add("collapsed");
    el.addEventListener("click", () => {
      el.classList.toggle("collapsed");
    });
  });
}

// Sync sidebar filters with popup filters and vice versa
function syncFilters(source) {
  if (source === 'sidebar') {
    const minVal = document.getElementById("priceMin").value;
    const maxVal = document.getElementById("priceMax").value;
    filterState.priceMin = minVal;
    filterState.priceMax = maxVal;
    const pMin = document.getElementById("popupPriceMin");
    const pMax = document.getElementById("popupPriceMax");
    if (pMin) pMin.value = minVal;
    if (pMax) pMax.value = maxVal;

    // Brands
    const brandCheckboxes = document.querySelectorAll('.sidebar input[name="brand"]:checked');
    filterState.brands = Array.from(brandCheckboxes).map(cb => cb.value);
    document.querySelectorAll('#filterModal input[name="popup-brand"]').forEach(cb => {
      cb.checked = filterState.brands.includes(cb.value);
    });

    // Rating
    const ratingRadio = document.querySelector('.sidebar input[name="rating"]:checked');
    filterState.rating = ratingRadio ? ratingRadio.value : 'all';
    const popupRatingRadio = document.querySelector(`#filterModal input[name="popup-rating"][value="${filterState.rating}"]`);
    if (popupRatingRadio) popupRatingRadio.checked = true;

    // Availability
    const availCheckboxes = document.querySelectorAll('.sidebar input[name="availability"]:checked');
    filterState.availability = Array.from(availCheckboxes).map(cb => cb.value);
    document.querySelectorAll('#filterModal input[name="popup-availability"]').forEach(cb => {
      cb.checked = filterState.availability.includes(cb.value);
    });

    // Warranty
    const warrantyCheckboxes = document.querySelectorAll('.sidebar input[name="warranty"]:checked');
    filterState.warranty = Array.from(warrantyCheckboxes).map(cb => cb.value);
    document.querySelectorAll('#filterModal input[name="popup-warranty"]').forEach(cb => {
      cb.checked = filterState.warranty.includes(cb.value);
    });

    // Features
    const featureCheckboxes = document.querySelectorAll('.sidebar input[name="features"]:checked');
    filterState.features = Array.from(featureCheckboxes).map(cb => cb.value);
    document.querySelectorAll('#filterModal input[name="popup-features"]').forEach(cb => {
      cb.checked = filterState.features.includes(cb.value);
    });

    // Discount
    const discountRadio = document.querySelector('.sidebar input[name="discount"]:checked');
    filterState.discount = discountRadio ? parseInt(discountRadio.value) : 0;
    const popupDiscountRadio = document.querySelector(`#filterModal input[name="popup-discount"][value="${filterState.discount}"]`);
    if (popupDiscountRadio) popupDiscountRadio.checked = true;

    // Service Type
    const serviceTypeCbs = document.querySelectorAll('.sidebar input[name="serviceType"]:checked');
    filterState.serviceType = Array.from(serviceTypeCbs).map(cb => cb.value);
    document.querySelectorAll('#filterModal input[name="popup-serviceType"]').forEach(cb => {
      cb.checked = filterState.serviceType.includes(cb.value);
    });

    // Device Category
    const deviceCatCbs = document.querySelectorAll('.sidebar input[name="deviceCategory"]:checked');
    filterState.deviceCategory = Array.from(deviceCatCbs).map(cb => cb.value);
    document.querySelectorAll('#filterModal input[name="popup-deviceCategory"]').forEach(cb => {
      cb.checked = filterState.deviceCategory.includes(cb.value);
    });

    // Service Mode
    const serviceModeCbs = document.querySelectorAll('.sidebar input[name="serviceMode"]:checked');
    filterState.serviceMode = Array.from(serviceModeCbs).map(cb => cb.value);
    document.querySelectorAll('#filterModal input[name="popup-serviceMode"]').forEach(cb => {
      cb.checked = filterState.serviceMode.includes(cb.value);
    });

    // Repair Urgency
    const urgencyCbs = document.querySelectorAll('.sidebar input[name="repairUrgency"]:checked');
    filterState.repairUrgency = Array.from(urgencyCbs).map(cb => cb.value);
    document.querySelectorAll('#filterModal input[name="popup-repairUrgency"]').forEach(cb => {
      cb.checked = filterState.repairUrgency.includes(cb.value);
    });

  } else if (source === 'popup') {
    const minVal = document.getElementById("popupPriceMin").value;
    const maxVal = document.getElementById("popupPriceMax").value;
    filterState.priceMin = minVal;
    filterState.priceMax = maxVal;
    document.getElementById("priceMin").value = minVal;
    document.getElementById("priceMax").value = maxVal;

    // Category in popup syncs activeCategory
    const catCheckboxes = document.querySelectorAll('#filterModal input[name="popup-category"]:checked');
    const checkedCats = Array.from(catCheckboxes).map(cb => cb.value);
    if (checkedCats.length > 0) {
      activeCategory = checkedCats[0];
      if (categoryMainHeader) categoryMainHeader.classList.remove("active");
      categorySubItems.forEach(sub => {
        if (sub.getAttribute("data-category") === activeCategory) {
          sub.classList.add("active");
          const titleSpan = sub.querySelector("span").textContent.trim();
          if (currentCategoryTitle) currentCategoryTitle.textContent = titleSpan;
        } else {
          sub.classList.remove("active");
        }
      });
    }

    // Brands
    const brandCheckboxes = document.querySelectorAll('#filterModal input[name="popup-brand"]:checked');
    filterState.brands = Array.from(brandCheckboxes).map(cb => cb.value);
    document.querySelectorAll('.sidebar input[name="brand"]').forEach(cb => {
      cb.checked = filterState.brands.includes(cb.value);
    });

    // Rating
    const ratingRadio = document.querySelector('#filterModal input[name="popup-rating"]:checked');
    filterState.rating = ratingRadio ? ratingRadio.value : 'all';
    const sidebarRatingRadio = document.querySelector(`.sidebar input[name="rating"][value="${filterState.rating}"]`);
    if (sidebarRatingRadio) sidebarRatingRadio.checked = true;

    // Availability
    const availCheckboxes = document.querySelectorAll('#filterModal input[name="popup-availability"]:checked');
    filterState.availability = Array.from(availCheckboxes).map(cb => cb.value);
    document.querySelectorAll('.sidebar input[name="availability"]').forEach(cb => {
      cb.checked = filterState.availability.includes(cb.value);
    });

    // Warranty
    const warrantyCheckboxes = document.querySelectorAll('#filterModal input[name="popup-warranty"]:checked');
    filterState.warranty = Array.from(warrantyCheckboxes).map(cb => cb.value);
    document.querySelectorAll('.sidebar input[name="warranty"]').forEach(cb => {
      cb.checked = filterState.warranty.includes(cb.value);
    });

    // Features
    const featureCheckboxes = document.querySelectorAll('#filterModal input[name="popup-features"]:checked');
    filterState.features = Array.from(featureCheckboxes).map(cb => cb.value);
    document.querySelectorAll('.sidebar input[name="features"]').forEach(cb => {
      cb.checked = filterState.features.includes(cb.value);
    });

    // Discount
    const discountRadio = document.querySelector('#filterModal input[name="popup-discount"]:checked');
    filterState.discount = discountRadio ? parseInt(discountRadio.value) : 0;
    const sidebarDiscountRadio = document.querySelector(`.sidebar input[name="discount"][value="${filterState.discount}"]`);
    if (sidebarDiscountRadio) sidebarDiscountRadio.checked = true;

    // Service Type
    const serviceTypeCbs = document.querySelectorAll('#filterModal input[name="popup-serviceType"]:checked');
    filterState.serviceType = Array.from(serviceTypeCbs).map(cb => cb.value);
    document.querySelectorAll('.sidebar input[name="serviceType"]').forEach(cb => {
      cb.checked = filterState.serviceType.includes(cb.value);
    });

    // Device Category
    const deviceCatCbs = document.querySelectorAll('#filterModal input[name="popup-deviceCategory"]:checked');
    filterState.deviceCategory = Array.from(deviceCatCbs).map(cb => cb.value);
    document.querySelectorAll('.sidebar input[name="deviceCategory"]').forEach(cb => {
      cb.checked = filterState.deviceCategory.includes(cb.value);
    });

    // Service Mode
    const serviceModeCbs = document.querySelectorAll('#filterModal input[name="popup-serviceMode"]:checked');
    filterState.serviceMode = Array.from(serviceModeCbs).map(cb => cb.value);
    document.querySelectorAll('.sidebar input[name="serviceMode"]').forEach(cb => {
      cb.checked = filterState.serviceMode.includes(cb.value);
    });

    // Repair Urgency
    const urgencyCbs = document.querySelectorAll('#filterModal input[name="popup-repairUrgency"]:checked');
    filterState.repairUrgency = Array.from(urgencyCbs).map(cb => cb.value);
    document.querySelectorAll('.sidebar input[name="repairUrgency"]').forEach(cb => {
      cb.checked = filterState.repairUrgency.includes(cb.value);
    });
  }
}

// Toast notification helper
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let icon = '<i class="fa-solid fa-circle-check"></i>';
  if (type === "info") {
    icon = '<i class="fa-solid fa-circle-info"></i>';
  } else if (type === "warning") {
    icon = '<i class="fa-solid fa-circle-exclamation"></i>';
  }

  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);

  // Trigger transition
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  // Remove toast
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Toggle Cart Drawer
function toggleCartDrawer() {
  cartDrawerOverlay.classList.toggle("open");
  renderCart();
}

// Add Item to Shopping Cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.product.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  updateGlobalCartCounter();
  showToast(`Added "${product.title}" to cart.`);
}

// Buy Now function - adds to cart and opens drawer
function buyNow(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.product.id === productId);
  if (!existing) {
    cart.push({ product, quantity: 1 });
  }

  updateGlobalCartCounter();
  updateCartSubtotals();

  // Trigger slide-in drawer
  cartDrawerOverlay.classList.add("open");
  renderCart();
}

// Update Global Cart Count Indicator Badge
function updateGlobalCartCounter() {
  if (!globalCartCount) return;
  const totalQty = cart.reduce((total, item) => total + item.quantity, 0);
  globalCartCount.textContent = totalQty;

  // Trigger bounce animation
  globalCartCount.classList.remove("cart-bump");
  void globalCartCount.offsetWidth; // trigger reflow
  globalCartCount.classList.add("cart-bump");

  if (totalQty > 0) {
    globalCartCount.style.display = "flex";
  } else {
    globalCartCount.style.display = "none";
  }
}

// Render cart drawer items list
function renderCart() {
  cartItemsList.innerHTML = "";

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Your shopping cart is currently empty.</p>
      </div>
    `;
    updateCartSubtotals();
    return;
  }

  cart.forEach(item => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <div class="cart-item-img-wrapper">
        <img src="${item.product.image}" alt="${item.product.title}" class="cart-item-img">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.product.title}</h4>
        <span class="cart-item-price">₹${item.product.price.toFixed(2)}</span>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="adjustQuantity(${item.product.id}, -1)">
            <i class="fa-solid fa-minus"></i>
          </button>
          <span class="qty-text">${item.quantity}</span>
          <button class="qty-btn" onclick="adjustQuantity(${item.product.id}, 1)">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <button class="btn-remove-item" onclick="removeCartItem(${item.product.id})" title="Remove Item">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    cartItemsList.appendChild(itemEl);
  });

  updateCartSubtotals();
}

// Adjust quantity of item in cart
window.adjustQuantity = function (productId, delta) {
  const item = cart.find(item => item.product.id === productId);
  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    removeCartItem(productId);
  } else {
    updateGlobalCartCounter();
    renderCart();
  }
};

// Remove item entirely from cart
window.removeCartItem = function (productId) {
  const index = cart.findIndex(item => item.product.id === productId);
  if (index !== -1) {
    const title = cart[index].product.title;
    cart.splice(index, 1);
    updateGlobalCartCounter();
    renderCart();
    showToast(`Removed "${title}" from cart.`, "info");
  }
};

// Calculate and render price subtotals
function updateCartSubtotals() {
  const subtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  cartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
  cartTotal.textContent = `₹${subtotal.toFixed(2)}`;
}

// Handle cart drawer Checkout process
function handleCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty. Please add items to checkout.", "warning");
    return;
  }

  showToast("Order placed successfully! Thank you for shopping at Mani Electronices.", "success");

  // Clear cart
  cart = [];
  updateGlobalCartCounter();
  renderCart();
  toggleCartDrawer();
}

// Open Product Detail Modal popup
window.openDetailModal = function (productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentOpenProductId = productId;
  currentImageIndex = 0;

  modalProductTag.textContent = product.tag;
  modalProductCategory.textContent = product.category.toUpperCase();
  if (modalProductBrand) {
    modalProductBrand.textContent = (product.brand || "GENERIC").toUpperCase();
  }
  modalProductTitle.textContent = product.title;
  modalProductStars.innerHTML = getRatingStarsHtml(product.rating);
  modalProductReviews.textContent = `${product.rating} (${product.reviews} Reviews)`;
  modalProductPrice.textContent = `₹${product.price.toFixed(2)}`;
  modalProductDesc.textContent = product.desc;

  // Render carousel & features
  updateModalCarousel(product);
  renderModalFeatures(product);
  updateWishlistBtnState(productId);

  productDetailModal.classList.add("open");
  document.body.style.overflow = "hidden"; // Disable background scrolling
};

// Close Product Detail Modal popup
function closeDetailModal() {
  productDetailModal.classList.remove("open");
  currentOpenProductId = null;
  document.body.style.overflow = ""; // Re-enable background scrolling
}

// Update carousel images and dots
function updateModalCarousel(product) {
  const images = product.images || [product.image];
  modalProductImg.src = images[currentImageIndex];
  modalProductImg.alt = product.title;

  if (images.length <= 1) {
    modalPrevImgBtn.style.display = "none";
    modalNextImgBtn.style.display = "none";
  } else {
    modalPrevImgBtn.style.display = "flex";
    modalNextImgBtn.style.display = "flex";
  }

  modalCarouselDots.innerHTML = "";
  images.forEach((img, index) => {
    const dot = document.createElement("button");
    dot.className = `carousel-dot${index === currentImageIndex ? ' active' : ''}`;
    dot.title = `Go to photo ${index + 1}`;
    dot.addEventListener("click", () => {
      if (currentImageIndex !== index) {
        currentImageIndex = index;

        // Add image change pop animation
        modalProductImg.classList.add("carousel-image-change");
        modalProductImg.addEventListener("animationend", () => {
          modalProductImg.classList.remove("carousel-image-change");
        }, { once: true });

        updateModalCarousel(product);
      }
    });
    modalCarouselDots.appendChild(dot);
  });
}

// Navigate image carousel
function navigateCarousel(direction) {
  if (!currentOpenProductId) return;
  const product = products.find(p => p.id === currentOpenProductId);
  if (!product) return;

  const images = product.images || [product.image];
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;

  // Add image change pop animation
  modalProductImg.classList.add("carousel-image-change");
  modalProductImg.addEventListener("animationend", () => {
    modalProductImg.classList.remove("carousel-image-change");
  }, { once: true });

  // Add button click bounce animation
  const arrowBtn = direction === 1 ? modalNextImgBtn : modalPrevImgBtn;
  if (arrowBtn) {
    arrowBtn.classList.add("arrow-click-bounce");
    arrowBtn.addEventListener("animationend", () => {
      arrowBtn.classList.remove("arrow-click-bounce");
    }, { once: true });
  }

  updateModalCarousel(product);
}

// Render key features list
function renderModalFeatures(product) {
  modalProductFeatures.innerHTML = "";
  const features = product.features || [
    "Premium build quality",
    "High performance components",
    "1-Year manufacturer warranty",
    "Eco-friendly materials"
  ];
  features.forEach(feature => {
    const li = document.createElement("li");
    li.className = "modal-feature-item";
    li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${feature}</span>`;
    modalProductFeatures.appendChild(li);
  });
}

// Toggle product in wishlist
function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed "${product.title}" from wishlist.`, "info");
  } else {
    wishlist.push(productId);
    showToast(`Added "${product.title}" to wishlist.`, "success");
  }
  updateWishlistBtnState(productId);
  updateWishlistCardButtons();
  updateGlobalWishlistCounter();
  renderWishlist();
}
window.toggleWishlist = toggleWishlist;

// Update wishlist button active/inactive state in modal
function updateWishlistBtnState(productId) {
  if (!modalWishlistBtn) return;
  const isWishlisted = wishlist.includes(productId);
  const icon = modalWishlistBtn.querySelector("i");
  if (icon) {
    if (isWishlisted) {
      modalWishlistBtn.classList.add("active");
      icon.className = "fa-solid fa-heart";
    } else {
      modalWishlistBtn.classList.remove("active");
      icon.className = "fa-regular fa-heart";
    }
  }
}

// Update all wishlist buttons active/inactive state on active cards
function updateWishlistCardButtons() {
  const cardButtons = document.querySelectorAll(".product-card-wishlist");
  cardButtons.forEach(btn => {
    const productId = parseInt(btn.getAttribute("data-id"));
    const icon = btn.querySelector("i");
    if (icon) {
      if (wishlist.includes(productId)) {
        btn.classList.add("active");
        icon.className = "fa-solid fa-heart";
      } else {
        btn.classList.remove("active");
        icon.className = "fa-regular fa-heart";
      }
    }
  });
}

// Toggle Wishlist Drawer
function toggleWishlistDrawer() {
  if (wishlistDrawerOverlay) {
    wishlistDrawerOverlay.classList.toggle("open");
    renderWishlist();
  }
}

// Update Global Wishlist Count Indicator Badge
function updateGlobalWishlistCounter() {
  if (!globalWishlistCount) return;
  const count = wishlist.length;
  globalWishlistCount.textContent = count;

  // Trigger bounce animation
  globalWishlistCount.classList.remove("wishlist-bump");
  void globalWishlistCount.offsetWidth; // trigger reflow
  globalWishlistCount.classList.add("wishlist-bump");

  if (count > 0) {
    globalWishlistCount.style.display = "flex";
  } else {
    globalWishlistCount.style.display = "none";
  }
}

// Render wishlist drawer items list
function renderWishlist() {
  if (!wishlistItemsList) return;
  wishlistItemsList.innerHTML = "";

  if (wishlist.length === 0) {
    wishlistItemsList.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-heart-crack" style="font-size: 48px; color: var(--text-light); margin-bottom: 16px;"></i>
        <p>Your wishlist is currently empty.</p>
      </div>
    `;
    return;
  }

  wishlist.forEach(id => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <div class="cart-item-img-wrapper">
        <img src="${product.image}" alt="${product.title}" class="cart-item-img">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-title">${product.title}</h4>
        <span class="cart-item-price">₹${product.price.toFixed(2)}</span>
        <div>
          <button class="wishlist-add-to-cart-btn" onclick="addToCartFromWishlist(${product.id})">
            <i class="fa-solid fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
      <button class="btn-remove-item" onclick="toggleWishlist(${product.id})" title="Remove Item">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    wishlistItemsList.appendChild(itemEl);
  });
}

// Add item to cart from wishlist and show toast
window.addToCartFromWishlist = function (productId) {
  addToCart(productId);
  renderWishlist();
};

// Auth Modal Logic
const authModal = document.getElementById("authModal");
const authSlider = document.getElementById("authSlider");
const profileBtn = document.getElementById("profileBtn");
const closeAuthModalBtn = document.getElementById("closeAuthModalBtn");
const toSignUpLink = document.getElementById("toSignUpLink");
const toSignInLink = document.getElementById("toSignInLink");

const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");

// Registration Success Modal elements
const regSuccessModal = document.getElementById("regSuccessModal");
const closeRegSuccessBtn = document.getElementById("closeRegSuccessBtn");
const regSuccessActionBtn = document.getElementById("regSuccessActionBtn");

// Social Login buttons
const googleLoginBtn = document.getElementById("googleLoginBtn");
const appleLoginBtn = document.getElementById("appleLoginBtn");
const googleRegisterBtn = document.getElementById("googleRegisterBtn");
const appleRegisterBtn = document.getElementById("appleRegisterBtn");

// Set up Auth event listeners
function setupAuthEventListeners() {
  if (profileBtn) {
    profileBtn.addEventListener("click", () => {
      authModal.classList.add("open");
    });
  }

  if (closeAuthModalBtn) {
    closeAuthModalBtn.addEventListener("click", () => {
      authModal.classList.remove("open");
    });
  }

  // Click outside to close Auth Modal
  if (authModal) {
    authModal.addEventListener("click", (e) => {
      if (e.target === authModal) {
        authModal.classList.remove("open");
      }
    });
  }

  // Slide to Register form
  if (toSignUpLink) {
    toSignUpLink.addEventListener("click", () => {
      authSlider.style.transform = "translateX(-50%)";
    });
  }

  // Slide back to Login form
  if (toSignInLink) {
    toSignInLink.addEventListener("click", () => {
      authSlider.style.transform = "translateX(0)";
    });
  }

  // Sign In Form submission
  if (signInForm) {
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signInEmail").value;
      showToast(`Welcome back, ${email}! Logged in successfully.`, "success");
      signInForm.reset();
      authModal.classList.remove("open");
    });
  }

  // Sign Up Form submission
  if (signUpForm) {
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("signUpName").value;

      // Close login modal and open registration success screen
      if (authModal) authModal.classList.remove("open");
      if (regSuccessModal) regSuccessModal.classList.add("open");

      signUpForm.reset();
      // Smoothly switch slider back to login side in the background
      authSlider.style.transform = "translateX(0)";
    });
  }

  // Close Registration Success Modal
  if (closeRegSuccessBtn) {
    closeRegSuccessBtn.addEventListener("click", () => {
      if (regSuccessModal) regSuccessModal.classList.remove("open");
    });
  }

  // Action button in Success Modal: Close success, reopen Login Modal
  if (regSuccessActionBtn) {
    regSuccessActionBtn.addEventListener("click", () => {
      if (regSuccessModal) regSuccessModal.classList.remove("open");
      if (authModal) authModal.classList.add("open");
    });
  }

  // Click outside to close Registration Success Modal
  if (regSuccessModal) {
    regSuccessModal.addEventListener("click", (e) => {
      if (e.target === regSuccessModal) {
        regSuccessModal.classList.remove("open");
      }
    });
  }

  // Social log click events
  const socialActions = [
    { el: googleLoginBtn, msg: "Connecting with Google..." },
    { el: appleLoginBtn, msg: "Connecting with Apple..." },
    { el: googleRegisterBtn, msg: "Registering with Google..." },
    { el: appleRegisterBtn, msg: "Registering with Apple..." }
  ];

  socialActions.forEach(action => {
    if (action.el) {
      action.el.addEventListener("click", () => {
        showToast(action.msg, "info");
      });
    }
  });

  // Forgot password
  if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = document.getElementById("signInEmail").value.trim();
      if (email) {
        showToast(`Password reset link sent to: ${email}`, "success");
      } else {
        showToast("Please enter your email to request a reset link.", "warning");
      }
    });
  }
}

// ==========================================================================
// SCROLL REVEAL ANIMATIONS (IntersectionObserver-based, GPU composited)
// ==========================================================================
let scrollObserver = null;

function initScrollAnimations() {
  // If IntersectionObserver is not supported, immediately activate all elements
  if (!window.IntersectionObserver) {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('active'));
    return;
  }

  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px 0px -80px 0px', // trigger slightly before entering the full viewport
    threshold: 0.1 // 10% visibility triggers it
  };

  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve to keep DOM lightweight and prevent repeat transitions
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe static reveal elements
  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });
}

// ==========================================================================
// DYNAMIC REAL-TIME FILTERING & FACETED SEARCH LOGIC
// ==========================================================================

// Format string to title case (e.g. home-visit -> Home Visit)
function formatDisplayName(str) {
  if (!str) return "";
  return str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

// Dynamically populate filter lists on load
function initDynamicFilters() {
  // Extract unique brands from the dataset
  const brands = Array.from(new Set(products.map(p => p.brand).filter(Boolean))).sort((a, b) => a.localeCompare(b));

  // Populate Brands in Sidebar
  const sidebarBrandList = document.getElementById("sidebarBrandList");
  if (sidebarBrandList) {
    sidebarBrandList.innerHTML = brands.map(brand => `
      <label class="filter-checkbox">
        <input type="checkbox" name="brand" value="${brand}">
        <span>${brand}</span>
      </label>
    `).join("");
  }

  // Populate Brands in Popup Modal
  const popupBrandList = document.getElementById("popupBrandList");
  if (popupBrandList) {
    popupBrandList.innerHTML = brands.map(brand => `
      <label class="filter-checkbox">
        <input type="checkbox" name="popup-brand" value="${brand}">
        <span>${brand}</span>
      </label>
    `).join("");
  }
}

// Get filtered products list, optionally excluding one filter group for faceted search count calculations
function getFilteredProducts(excludeGroup = null) {
  let filtered = products;

  // Category filter (global, never excluded)
  if (activeCategory !== "all") {
    filtered = filtered.filter(p => p.category === activeCategory);
  }

  // Search filter (global, never excluded)
  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase();
    const querySingular = query.endsWith('s') ? query.slice(0, -1) : query;
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query) ||
      p.tag.toLowerCase().includes(query) ||
      (p.brand && p.brand.toLowerCase().includes(query)) ||
      (query !== querySingular && (
        p.title.toLowerCase().includes(querySingular) ||
        p.desc.toLowerCase().includes(querySingular) ||
        p.tag.toLowerCase().includes(querySingular) ||
        (p.brand && p.brand.toLowerCase().includes(querySingular))
      ))
    );
  }

  // Price Range
  if (excludeGroup !== 'price') {
    if (filterState.priceMin !== null && filterState.priceMin !== "") {
      filtered = filtered.filter(p => p.price >= parseFloat(filterState.priceMin));
    }
    if (filterState.priceMax !== null && filterState.priceMax !== "") {
      filtered = filtered.filter(p => p.price <= parseFloat(filterState.priceMax));
    }
  }

  // Brands
  if (excludeGroup !== 'brands') {
    if (filterState.brands.length > 0) {
      filtered = filtered.filter(p => p.brand && filterState.brands.includes(p.brand));
    }
  }

  // Rating
  if (excludeGroup !== 'rating') {
    if (filterState.rating !== 'all') {
      filtered = filtered.filter(p => p.rating >= parseFloat(filterState.rating));
    }
  }

  // Availability
  if (excludeGroup !== 'availability') {
    if (filterState.availability.length > 0) {
      filtered = filtered.filter(p => {
        const status = p.inStock ? 'in-stock' : 'out-of-stock';
        return filterState.availability.includes(status);
      });
    }
  }

  // Warranty
  if (excludeGroup !== 'warranty') {
    if (filterState.warranty.length > 0) {
      filtered = filtered.filter(p => p.warranty && filterState.warranty.includes(p.warranty));
    }
  }

  // Features
  if (excludeGroup !== 'features') {
    if (filterState.features.length > 0) {
      filtered = filtered.filter(p => {
        if (!p.features || p.features.length === 0) return false;
        return filterState.features.every(f => 
          p.features.some(pf => pf.toLowerCase().includes(f.toLowerCase()))
        );
      });
    }
  }

  // Discount
  if (excludeGroup !== 'discount') {
    if (filterState.discount > 0) {
      filtered = filtered.filter(p => p.discount !== undefined && p.discount >= filterState.discount);
    }
  }

  // Color
  if (excludeGroup !== 'color') {
    if (filterState.color) {
      filtered = filtered.filter(p => p.color && p.color.toLowerCase() === filterState.color.toLowerCase());
    }
  }

  // Service Type
  if (excludeGroup !== 'serviceType') {
    if (filterState.serviceType.length > 0) {
      filtered = filtered.filter(p => p.isService && p.serviceType && filterState.serviceType.includes(p.serviceType));
    }
  }

  // Device Category
  if (excludeGroup !== 'deviceCategory') {
    if (filterState.deviceCategory.length > 0) {
      filtered = filtered.filter(p => p.isService && p.deviceCategory && filterState.deviceCategory.includes(p.deviceCategory));
    }
  }

  // Service Mode
  if (excludeGroup !== 'serviceMode') {
    if (filterState.serviceMode.length > 0) {
      filtered = filtered.filter(p => p.isService && p.serviceMode && filterState.serviceMode.includes(p.serviceMode));
    }
  }

  // Repair Urgency
  if (excludeGroup !== 'repairUrgency') {
    if (filterState.repairUrgency.length > 0) {
      filtered = filtered.filter(p => p.isService && p.repairUrgency && filterState.repairUrgency.includes(p.repairUrgency));
    }
  }

  return filtered;
}

// Recalculate matching product counts for each filter option in real time
function updateFilterFacets() {
  // Brands
  updateGroupFacets('brand', 'brands');
  updateGroupFacets('popup-brand', 'brands');

  // Rating
  updateGroupFacets('rating', 'rating');
  updateGroupFacets('popup-rating', 'rating');

  // Availability
  updateGroupFacets('availability', 'availability');
  updateGroupFacets('popup-availability', 'availability');

  // Warranty
  updateGroupFacets('warranty', 'warranty');
  updateGroupFacets('popup-warranty', 'warranty');

  // Features
  updateGroupFacets('features', 'features');
  updateGroupFacets('popup-features', 'features');

  // Discount
  updateGroupFacets('discount', 'discount');
  updateGroupFacets('popup-discount', 'discount');

  // Service Type
  updateGroupFacets('serviceType', 'serviceType');
  updateGroupFacets('popup-serviceType', 'serviceType');

  // Device Category
  updateGroupFacets('deviceCategory', 'deviceCategory');
  updateGroupFacets('popup-deviceCategory', 'deviceCategory');

  // Service Mode
  updateGroupFacets('serviceMode', 'serviceMode');
  updateGroupFacets('popup-serviceMode', 'serviceMode');

  // Repair Urgency
  updateGroupFacets('repairUrgency', 'repairUrgency');
  updateGroupFacets('popup-repairUrgency', 'repairUrgency');

  // Colors
  updateColorFacets();
}

function updateGroupFacets(inputName, excludeGroup) {
  const inputs = document.querySelectorAll(`input[name="${inputName}"]`);
  const tempFiltered = getFilteredProducts(excludeGroup);

  inputs.forEach(input => {
    const val = input.value;
    let count = 0;

    if (excludeGroup === 'brands') {
      count = tempFiltered.filter(p => p.brand === val).length;
    } else if (excludeGroup === 'rating') {
      if (val === 'all') {
        count = tempFiltered.length;
      } else {
        count = tempFiltered.filter(p => p.rating >= parseFloat(val)).length;
      }
    } else if (excludeGroup === 'availability') {
      count = tempFiltered.filter(p => (p.inStock ? 'in-stock' : 'out-of-stock') === val).length;
    } else if (excludeGroup === 'warranty') {
      count = tempFiltered.filter(p => p.warranty === val).length;
    } else if (excludeGroup === 'features') {
      count = tempFiltered.filter(p => p.features && p.features.some(f => f.toLowerCase().includes(val.toLowerCase()))).length;
    } else if (excludeGroup === 'discount') {
      if (val === '0') {
        count = tempFiltered.length;
      } else {
        count = tempFiltered.filter(p => p.discount !== undefined && p.discount >= parseInt(val)).length;
      }
    } else if (excludeGroup === 'serviceType') {
      count = tempFiltered.filter(p => p.isService && p.serviceType === val).length;
    } else if (excludeGroup === 'deviceCategory') {
      count = tempFiltered.filter(p => p.isService && p.deviceCategory === val).length;
    } else if (excludeGroup === 'serviceMode') {
      count = tempFiltered.filter(p => p.isService && p.serviceMode === val).length;
    } else if (excludeGroup === 'repairUrgency') {
      count = tempFiltered.filter(p => p.isService && p.repairUrgency === val).length;
    }

    const label = input.closest('label');
    if (label) {
      const span = label.querySelector('span');
      if (span) {
        if (!span.dataset.originalText) {
          span.dataset.originalText = span.textContent.trim();
        }
        const originalText = span.dataset.originalText;
        span.innerHTML = `${originalText} <span class="facet-count">(${count})</span>`;
      }

      if (count === 0 && !input.checked) {
        input.disabled = true;
        label.classList.add('facet-disabled');
      } else {
        input.disabled = false;
        label.classList.remove('facet-disabled');
      }
    }
  });
}

function updateColorFacets() {
  const colorButtons = document.querySelectorAll(".color-btn");
  const tempFiltered = getFilteredProducts('color');

  colorButtons.forEach(btn => {
    const color = btn.getAttribute("data-color");
    const count = tempFiltered.filter(p => p.color && p.color.toLowerCase() === color.toLowerCase()).length;
    const isActive = btn.classList.contains("active");

    btn.title = `${color} (${count})`;

    if (count === 0 && !isActive) {
      btn.style.opacity = "0.2";
      btn.style.pointerEvents = "none";
    } else {
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
    }
  });
}
