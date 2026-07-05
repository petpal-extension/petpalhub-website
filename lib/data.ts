export type Feature = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  gradient: string;
  premium?: boolean;
};

export const features: Feature[] = [
  {
    slug: "pettune",
    name: "PetTune",
    tagline: "Reminders that actually get remembered",
    description:
      "Vaccinations, vet visits, medication, walks, and feeding times, plus bite-sized pet-care knowledge, delivered as friendly nudges throughout the day.",
    icon: "BellRing",
    gradient: "from-royal-500 to-violet-500",
  },
  {
    slug: "petbazaar",
    name: "PetBazaar",
    tagline: "Curated products, honest picks",
    description:
      "A hand-picked marketplace of pet products from trusted brands, matched to your pet's profile so you stop guessing what they actually need.",
    icon: "ShoppingBag",
    gradient: "from-violet-500 to-turquoise-500",
  },
  {
    slug: "pawprints",
    name: "PawPrints",
    tagline: "Their face, your favorite things",
    description:
      "Upload a photo of your pet and design custom mugs, tees, hats, and more, printed and shipped straight to your door.",
    icon: "Shirt",
    gradient: "from-turquoise-500 to-royal-500",
  },
  {
    slug: "pawplays",
    name: "PawPlays",
    tagline: "A quick break, pet-themed",
    description:
      "Snake, Brick Breaker, Pet Adventure, and memory games starring the animals you love, right inside your browser.",
    icon: "Gamepad2",
    gradient: "from-royal-500 to-turquoise-500",
  },
  {
    slug: "pixelpal",
    name: "PixelPal",
    tagline: "A pixel pet that lives on your screen",
    description:
      "Pick a companion that wanders your screen and reacts to your cursor — a small, delightful presence while you work.",
    icon: "MousePointer2",
    gradient: "from-violet-500 to-royal-500",
    premium: true,
  },
  {
    slug: "petvault",
    name: "PetVault",
    tagline: "Web3 for the pet community",
    description:
      "Connect a wallet to donate, join whitelists, and take part in upcoming NFT and crypto projects built for animal welfare.",
    icon: "Vault",
    gradient: "from-turquoise-500 to-violet-500",
  },
  {
    slug: "petmatch",
    name: "PetMatch",
    tagline: "Our reason for being here",
    description:
      "Search adoptable pets nearby and connect with shelters directly. It's the feature that sets PetPalHub apart, and the mission behind everything else.",
    icon: "HeartHandshake",
    gradient: "from-royal-500 to-violet-500",
  },
  {
    slug: "petspotlight",
    name: "PetSpotlight",
    tagline: "The wall of fame",
    description:
      "Put your pet on the front page. Choose a 3, 7, or 30-day spotlight slot in a limited rotating slideshow seen by the whole community.",
    icon: "Sparkles",
    gradient: "from-violet-500 to-turquoise-500",
  },
  {
    slug: "pawprohub",
    name: "PawPro Hub",
    tagline: "Every pet service, one place",
    description:
      "Vets, walkers, sitters, hotels, travel, grooming, training, food, and subscription boxes, plus Treat Pet Owner, our brand collaboration program.",
    icon: "Building2",
    gradient: "from-turquoise-500 to-royal-500",
  },
  {
    slug: "bargains",
    name: "BarkGains",
    tagline: "Coupons, found automatically",
    description:
      "Premium members get discount codes and offers for pet brands collected and applied automatically, so nothing gets left at checkout.",
    icon: "Tag",
    gradient: "from-royal-500 to-turquoise-500",
    premium: true,
  },
  {
    slug: "tailtreasures",
    name: "TailTreasures",
    tagline: "Pet-themed art, made by hand",
    description:
      "A curated shop of original pet-themed digital art and prints from independent artists, in the spirit of your favorite craft marketplace.",
    icon: "Palette",
    gradient: "from-violet-500 to-royal-500",
  },
];

export const stats = [
  { value: 48000, suffix: "+", label: "Happy pets tracked" },
  { value: 210000, suffix: "+", label: "Reminders delivered" },
  { value: 6300, suffix: "+", label: "Products ordered" },
  { value: 19500, suffix: "+", label: "Community members" },
  { value: 27, suffix: "", label: "Countries reached" },
];

export type Product = {
  name: string;
  blurb: string;
};

export const merchandise: Product[] = [
  { name: "Custom mugs", blurb: "Their portrait, your morning coffee" },
  { name: "T-shirts", blurb: "Soft cotton, sharp print" },
  { name: "Hoodies", blurb: "For chilly walk-time" },
  { name: "Phone cases", blurb: "A tiny frame for a big personality" },
  { name: "Pet magnets", blurb: "Fridge-worthy faces" },
  { name: "Canvas prints", blurb: "Gallery quality, wall ready" },
  { name: "Blankets", blurb: "Cozy, for both of you" },
  { name: "Pillows", blurb: "Nap-approved" },
  { name: "Stickers", blurb: "For laptops and water bottles" },
  { name: "Keychains", blurb: "Carry them everywhere" },
  { name: "3D figures", blurb: "A tiny sculpture of someone you love" },
];

export const games = [
  { name: "Snake", desc: "The classic, with a tail that wags." },
  { name: "Brick Breaker", desc: "Bounce, break, repeat." },
  { name: "Pet Adventure", desc: "A side-scrolling romp for treats." },
  { name: "Memory Match", desc: "Flip cards, find pairs, beat your best time." },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  highlighted?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get started with a happier pet routine.",
    cta: "Install free",
    features: [
      "Core PetTune reminders",
      "PetBazaar browsing",
      "PawPlays mini-games",
      "PetMatch adoption search",
      "Community profiles",
    ],
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "/month",
    description: "For pet parents who want more help, more often.",
    cta: "Go Premium",
    highlighted: true,
    features: [
      "Everything in Free",
      "Extended & custom reminders",
      "Daily motivational quotes",
      "PixelPal desktop companion",
      "BarkGains discount feed",
      "Priority PetSpotlight pricing",
    ],
  },
  {
    name: "PetPalium",
    price: "$9.99",
    period: "/month",
    description: "The full experience, for the most devoted households.",
    cta: "Go PetPalium",
    features: [
      "Everything in Premium",
      "Multi-pet household support",
      "Early access to PetVault drops",
      "Featured PawPro Hub listing discounts",
      "Dedicated support",
    ],
  },
];

export const testimonials = [
  {
    name: "Maria K.",
    role: "Dog mom, Golden Retriever",
    quote:
      "The reminders alone changed how I manage vet visits. I haven't missed a vaccination since I installed it.",
  },
  {
    name: "Daniel R.",
    role: "Cat dad, two rescues",
    quote:
      "PetMatch is what got me to actually adopt instead of just browsing. Found both of mine through PetPalHub.",
  },
  {
    name: "Sofia L.",
    role: "PawPrints customer",
    quote:
      "Ordered a mug with my dog's face on it and it arrived looking better than the photo I sent in.",
  },
  {
    name: "Tomás B.",
    role: "Premium member",
    quote:
      "PixelPal walking around my screen while I work is a small thing that makes a genuinely big difference to my day.",
  },
];

export const faqs = [
  {
    q: "Is PetPalHub free to use?",
    a: "Yes. The core extension, including PetTune reminders, PetBazaar, PawPlays, and PetMatch, is free forever. Premium and PetPalium unlock extra features for pet parents who want more.",
  },
  {
    q: "What is PetMatch and how is it different?",
    a: "PetMatch connects you directly with shelters and adoptable pets nearby. It's the feature PetPalHub was originally built around, and it stays free and central to the whole platform.",
  },
  {
    q: "How does PetVault work?",
    a: "PetVault lets you connect a crypto wallet to donate to animal welfare causes or join the whitelist for upcoming community NFT drops. Participation is entirely optional.",
  },
  {
    q: "Can I cancel Premium anytime?",
    a: "Yes, Premium and PetPalium are both month-to-month with no lock-in. Cancel anytime from your account settings and keep access until the end of your billing period.",
  },
  {
    q: "Which platforms is PetPalHub available on?",
    a: "PetPalHub is currently a Chrome extension. Android and iOS apps are in development, starting with the PetTune reminders feature, with desktop support planned after.",
  },
  {
    q: "How is PetSpotlight priced?",
    a: "You can book a 3, 7, or 30-day slot in the rotating homepage slideshow. Slots are limited and Premium members receive priority pricing.",
  },
];
