
import { Product } from './types';

export const PRODUCTS: Product[] = [
  // --- Footwear ---
  {
    id: 'f1',
    name: 'Classic Velour Hotel Slipper',
    category: 'Disposable Footwear',
    subCategory: 'Hotel Slippers',
    description: 'The industry standard for 5-star hospitality. High-density foam enclosed in premium plush velour with closed-toe design.',
    sensory: 'Soft, classic warmth.',
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800',
    minOrder: '500 Pairs',
    specs: [{ label: 'Density', value: '400 GSM' }, { label: 'Sole', value: '5mm EVA' }]
  },
  {
    id: 'f2',
    name: 'Open-Toe Spa Waffle',
    category: 'Disposable Footwear',
    subCategory: 'Spa Slippers',
    description: 'Breathable cotton waffle weave designed for humidity control in spa and pool areas. Quick-drying structure.',
    sensory: 'Crisp, airy, dry.',
    image: 'https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&q=80&w=800',
    minOrder: '500 Pairs',
    specs: [{ label: 'Material', value: 'Cotton Blend' }, { label: 'Style', value: 'Open Toe' }]
  },
  {
    id: 'f3',
    name: 'Noir Premium Velvet',
    category: 'Disposable Footwear',
    subCategory: 'Premium Slippers',
    description: 'Ultra-plush black velvet slippers with memory foam insole and embroidered logo capability. For VIP suites.',
    sensory: 'Luxurious, sinking comfort.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800',
    minOrder: '200 Pairs',
    specs: [{ label: 'Padding', value: '10mm Memory' }, { label: 'Finish', value: 'Black Velvet' }]
  },
  {
    id: 'f4',
    name: 'Palm Leaf Eco-Slide',
    category: 'Disposable Footwear',
    subCategory: 'Eco-friendly Slippers',
    description: '100% biodegradable construction using pressed palm leaves and coconut husk fiber.',
    sensory: 'Organic, textured, natural.',
    image: 'https://images.unsplash.com/photo-1581559868325-1e43e2d634cb?auto=format&fit=crop&q=80&w=800',
    minOrder: '1000 Pairs',
    specs: [{ label: 'Plastic', value: '0%' }, { label: 'Compostable', value: 'Yes' }]
  },

  // --- Textiles ---
  {
    id: 't1',
    name: 'Royal Plush Robe',
    category: 'Guest Textiles',
    subCategory: 'Bathrobes',
    description: 'Heavyweight terry cloth bathrobe with shawl collar. Designed for durability and industrial laundering.',
    sensory: 'Heavy, warm embrace.',
    image: 'https://images.unsplash.com/photo-1564890369478-c5af469afff0?auto=format&fit=crop&q=80&w=800',
    minOrder: '50 Units',
    specs: [{ label: 'Weight', value: '450 GSM' }, { label: 'Weave', value: 'Micro-Terry' }]
  },
  {
    id: 't2',
    name: 'Compressed Viscose Towel',
    category: 'Guest Textiles',
    subCategory: 'Towels',
    description: 'Coin-sized compressed towels that expand with water. Sterile and perfect for welcome rituals.',
    sensory: 'Smooth, instant freshness.',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa478965c96?auto=format&fit=crop&q=80&w=800',
    minOrder: '5000 Units',
    specs: [{ label: 'Material', value: 'Viscose' }, { label: 'Size', value: '30x30cm' }]
  },
  {
    id: 't3',
    name: 'Canvas Slipper Bag',
    category: 'Guest Textiles',
    subCategory: 'Slipper bags',
    description: 'Drawstring cotton canvas bag for hygienic footwear presentation.',
    sensory: 'Robust, natural fabric.',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6fb8813?auto=format&fit=crop&q=80&w=800',
    minOrder: '1000 Units',
    specs: [{ label: 'Fabric', value: 'Cotton' }, { label: 'Print', value: 'Screen Print' }]
  },

  // --- Toiletries ---
  {
    id: 'tl1',
    name: 'White Tea Shampoo',
    category: 'Toiletries & Liquids',
    subCategory: 'Shampoo',
    description: 'Sulfate-free formulation enriched with white tea antioxidants.',
    sensory: 'Invigorating, clean scent.',
    image: 'https://images.unsplash.com/photo-1556228720-19de771507d7?auto=format&fit=crop&q=80&w=800',
    minOrder: '2000 Units',
    specs: [{ label: 'Volume', value: '40ml' }, { label: 'Packaging', value: 'Alu Tube' }]
  },
  {
    id: 'tl2',
    name: 'Argan Conditioner',
    category: 'Toiletries & Liquids',
    subCategory: 'Conditioner',
    description: 'Deeply hydrating conditioner with Moroccan Argan oil.',
    sensory: 'Silky, rich texture.',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&q=80&w=800',
    minOrder: '2000 Units',
    specs: [{ label: 'Active', value: 'Argan Oil' }, { label: 'Free From', value: 'Parabens' }]
  },
  {
    id: 'tl3',
    name: 'Citrus Verbena Gel',
    category: 'Toiletries & Liquids',
    subCategory: 'Shower gel',
    description: 'Energizing body wash with natural citrus extracts.',
    sensory: 'Zesty, awakening.',
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=800',
    minOrder: '2000 Units',
    specs: [{ label: 'Scent', value: 'Verbena' }, { label: 'PH', value: 'Balanced' }]
  },
  {
    id: 'tl4',
    name: 'Triple-Milled Soap',
    category: 'Toiletries & Liquids',
    subCategory: 'Soap',
    description: 'Dense, long-lasting guest soaps wrapped in pleated paper.',
    sensory: 'Creamy lather.',
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=800',
    minOrder: '5000 Units',
    specs: [{ label: 'Weight', value: '25g' }, { label: 'Base', value: 'Vegetable' }]
  },

  // --- Kits ---
  {
    id: 'k1',
    name: 'Eco Dental Kit',
    category: 'Personal Care Kits',
    subCategory: 'Dental kits',
    description: 'Wheat straw toothbrush with 5g mint toothpaste.',
    sensory: 'Matte finish.',
    image: 'https://images.unsplash.com/photo-1629198772922-0d627c2447b1?auto=format&fit=crop&q=80&w=800',
    minOrder: '1000 Sets',
    specs: [{ label: 'Material', value: 'Wheat Straw' }, { label: 'Bristles', value: 'Charcoal' }]
  },
  {
    id: 'k2',
    name: 'Executive Shave Set',
    category: 'Personal Care Kits',
    subCategory: 'Shaving kits',
    description: 'Triple-blade razor and soothing cream.',
    sensory: 'Smooth glide.',
    image: 'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&q=80&w=800',
    minOrder: '1000 Sets',
    specs: [{ label: 'Blades', value: '3' }, { label: 'Cream', value: '10ml' }]
  },
  {
    id: 'k3',
    name: 'Emergency Sewing Kit',
    category: 'Personal Care Kits',
    subCategory: 'Sewing kits',
    description: 'Pre-threaded needles, buttons, and safety pin in card sleeve.',
    sensory: 'Compact, essential.',
    image: 'https://images.unsplash.com/photo-1556228578-f7b53bd70a05?auto=format&fit=crop&q=80&w=800',
    minOrder: '2000 Units',
    specs: [{ label: 'Threads', value: '6 Colors' }, { label: 'Case', value: 'Cardboard' }]
  },

  // --- Accessories ---
  {
    id: 'a1',
    name: 'Bamboo Cotton Buds',
    category: 'Hygiene Accessories',
    subCategory: 'Cotton buds',
    description: 'Plastic-free stems with 100% cotton tips.',
    sensory: 'Sturdy, natural.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
    minOrder: '5000 Packs',
    specs: [{ label: 'Stem', value: 'Bamboo' }, { label: 'Pack', value: '4pcs' }]
  },
  {
    id: 'a2',
    name: 'Micellar Wipes',
    category: 'Hygiene Accessories',
    subCategory: 'Facial cleansing wipes',
    description: 'Individually wrapped biodegradable wipes.',
    sensory: 'Cooling, gentle.',
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=80&w=800',
    minOrder: '5000 Units',
    specs: [{ label: 'Fabric', value: 'Viscose' }, { label: 'Fluid', value: 'Micellar' }]
  },

  // --- Eco ---
  {
    id: 'e1',
    name: 'Solid Shampoo Bar',
    category: 'Eco-Line & Zero Waste',
    subCategory: 'Biodegradable materials',
    description: 'Waterless shampoo concentrate. Zero plastic.',
    sensory: 'Concentrated, earthy.',
    image: 'https://images.unsplash.com/photo-1617066921223-1d48c8230119?auto=format&fit=crop&q=80&w=800',
    minOrder: '1000 Units',
    specs: [{ label: 'Plastic', value: '0%' }, { label: 'Water', value: '0%' }]
  },

  // --- Custom ---
  {
    id: 'c1',
    name: 'Custom Mold Service',
    category: 'Custom & Private Label',
    subCategory: 'Private label production',
    description: 'Bespoke bottle shapes tailored to your brand.',
    sensory: 'Unique, branded.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    minOrder: '10000 Units',
    specs: [{ label: 'Mold', value: 'Custom' }, { label: 'Lead', value: '8 Weeks' }]
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Journal', href: '/blog' },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Tactile Economy: How Texture Influences Rate Perception",
    category: "Guest Experience",
    date: "October 12, 2024",
    author: "Elena V.",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Why high-GSM textiles and matte-finish amenities correlate directly with higher guest satisfaction scores in luxury market segments.",
    content: `
      <p class="lead">In the hyper-competitive landscape of luxury hospitality, the battle for guest loyalty is no longer won by visual aesthetics alone. It is won by the hand.</p>
      
      <p>When a guest enters a suite at the Ritz Paris or the Aman Tokyo, their first interaction is not with the concierge, but with the environment. The weight of the robe, the texture of the slipper, the cool touch of the ceramic soap dispenser. These serve as subconscious signals of value.</p>
      
      <h2>The Psychology of Touch</h2>
      <p>Research indicates that haptic feedback directly influences price perception. A heavier towel suggests density, durability, and cost. A matte finish implies sophistication, while high-gloss plastic signals mass production. This "Tactile Economy" is the invisible currency of the 5-star experience.</p>
      
      <blockquote>"Texture is the vocabulary of luxury. Without it, a space is silent."</blockquote>
      
      <p>We engineered our 'Noir Series' specifically to address this. By utilizing a 400GSM velour density, we increase the drag coefficient slightly, creating a sensation of 'sinking in' that correlates with relaxation responses in the parasympathetic nervous system.</p>
      
      <h3>Case Study: The Matte Finish</h3>
      <p>In 2023, we conducted a blind study with 500 frequent travelers. We presented two identical shampoos: one in a glossy bottle, one in a soft-touch matte bottle. 82% of participants rated the matte bottle as "more expensive" and "higher quality" purely based on hand-feel.</p>
      
      <p>For procurement managers, this data is critical. Investing in texture is not an aesthetic choice; it is an ROI strategy. It allows properties to justify higher ADR (Average Daily Rate) by aligning physical touchpoints with brand promise.</p>
    `
  },
  {
    id: 2,
    title: "Beyond Greenwashing: The Reality of Bioplastics",
    category: "Sustainability",
    date: "September 28, 2024",
    author: "Dr. Aris K.",
    role: "Chief Scientist",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
    excerpt: "A technical deep dive into PLA, PHA, and Mycelium. Which materials actually break down in industrial compost facilities?",
    content: `
      <p class="lead">The hospitality industry is awash with "eco-friendly" claims. But beneath the green labels lies a complex reality of supply chains and chemical degradation.</p>

      <p>Not all bioplastics are created equal. Polylactic Acid (PLA), derived from corn starch, has become the industry darling. However, it requires industrial composting facilities reaching 60°C to degrade—facilities that many municipalities lack. If thrown in a standard landfill, PLA behaves much like PET plastic, persisting for decades.</p>

      <h2>The Mycelium Alternative</h2>
      <p>Our lab has shifted focus to Mycelium-based packaging. Grown from mushroom roots, this material is truly home-compostable. It breaks down in garden soil within 45 days, returning nitrogen to the earth.</p>

      <blockquote>"Sustainability is not about doing less harm. It is about designing systems that are regenerative by nature."</blockquote>

      <p>We are currently piloting a zero-waste amenity kit where the packaging itself can be dissolved in water to create plant fertilizer. This is not science fiction; it is the supply chain of 2025.</p>
      
      <h3>The Cost of Compliance</h3>
      <p>While these materials currently carry a 15-20% premium over virgin plastics, regulatory pressure in the EU (via the Green Deal) and California will soon make single-use plastics prohibitively expensive through taxation. Early adopters are future-proofing their operations.</p>
    `
  },
  {
    id: 3,
    title: "Sterility vs. Comfort: The Modern Clinical Balance",
    category: "Healthcare",
    date: "September 15, 2024",
    author: "Sarah Jenkins",
    role: "Medical Liaison",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200",
    excerpt: "How premium clinics are adopting 'hotel-style' amenities while maintaining ISO 13485 hygiene standards.",
    content: `
      <p class="lead">The line between a private hospital and a luxury hotel is blurring. Patients paying premium rates for elective surgeries expect the recovery environment to match the quality of care.</p>

      <p>Traditionally, clinical environments prioritized sterility at the expense of comfort. Scratchy gowns, thin sheets, and medicinal-smelling soaps were the norm. Today, the "Patient Experience" (PX) is a key competitive differentiator.</p>

      <h2>The 600-Thread Count Gown</h2>
      <p>We developed a medical textile that withstands high-temperature sterilization (autoclaving) while retaining the hand-feel of Egyptian cotton. By treating the fibers with a silver-ion antimicrobial coating, we achieve ISO 13485 compliance without the "plastic" feel of traditional PPE.</p>

      <blockquote>"Recovery is physical, but it is also psychological. Comfort reduces cortisol, which speeds up healing."</blockquote>

      <p>Our partners in Zurich and Geneva have reported a marked increase in patient satisfaction scores after switching to our 'Clinical Luxe' line. It proves that safety and softness need not be mutually exclusive.</p>
    `
  },
  {
    id: 4,
    title: "2025 Scent Trends: The Return of the Botanical",
    category: "Design",
    date: "August 30, 2024",
    author: "Design Team",
    role: "AURA Studio",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Moving away from heavy synthetics towards subtle, grounding notes like Vetiver, Bergamot, and White Tea.",
    content: `
      <p class="lead">Olfactory memory is the strongest form of recall. For decades, hotels used heavy, synthetic perfumes to mask odors. The trend for 2025 is radically different: transparency.</p>

      <p>Guests are seeking grounding, natural scents that mimic the outdoors. The era of "Cotton Fresh" or generic "Ocean Breeze" is over. We are seeing a surge in demand for complex, woody notes: Vetiver, Cedar, and Hinoki Cypress.</p>

      <h2>The Anti-Allergen Movement</h2>
      <p>As sensitivity to synthetic fragrances rises, our 'Pure Botanical' line uses only steam-distilled essential oils. This not only provides a more authentic scent profile but reduces the risk of allergic reactions in sensitive guests.</p>

      <p>We recommend a subtle layering approach: a White Tea top note for the lobby (energizing), transitioning to a Lavender and Chamomile base for the suites (calming). This "Scent Architecture" guides the guest's emotional journey through the property.</p>
    `
  }
];
