/* ============================================================
   DATA.JS — All site content as JSON-driven data arrays
   ============================================================ */

window.ICONMAT = window.ICONMAT || {};

ICONMAT.data = {

    /* ---- NAV LINKS ---- */
    navLinks: [
        { label: 'Home', href: 'index.html' },
        { label: 'About', href: 'about.html' },
        { label: 'Exhibitors', href: 'exhibitors.html' },
        { label: 'Visitors', href: 'visitors.html' },
        { label: 'Sponsors', href: 'sponsors.html' },
        { label: 'Insights', href: 'insights.html' },
        { label: 'Floor Plan', href: 'floor-plan.html' },
        { label: 'Contact', href: 'contact.html' },
    ],

    /* ---- FOOTER LINKS ---- */
    footerLinks: [
        {
            title: 'Quick Links',
            links: [
                { label: 'About ICONMAT', href: 'about.html' },
                { label: 'For Exhibitors', href: 'exhibitors.html' },
                { label: 'For Visitors', href: 'visitors.html' },
                { label: 'Become a Sponsor', href: 'sponsors.html' },
                { label: 'Industry Insights', href: 'insights.html' },
            ]
        },
        {
            title: 'Event Info',
            links: [
                { label: 'Floor Plan', href: 'floor-plan.html' },
                { label: 'Exhibition Zones', href: 'floor-plan.html' },
                { label: 'Contact Us', href: 'contact.html' },
                { label: 'Book Your Stall', href: 'exhibitors.html' },
                { label: 'Register Free', href: 'visitors.html' },
            ]
        },
        {
            title: 'Highlights',
            links: [
                { label: 'Materials Pavilion', href: 'index.html#highlights' },
                { label: 'B2B Meets', href: 'index.html#highlights' },
                { label: 'Live Demos', href: 'index.html#highlights' },
                { label: 'Green Zone', href: 'floor-plan.html' },
                { label: 'Steel & Cement Zone', href: 'floor-plan.html' },
            ]
        },
    ],

    /* ---- KEY STATS ---- */
    stats: [
        { number: 250, suffix: '+', prefix: '', label: 'Exhibitors', icon: 'building' },
        { number: 12000, suffix: '+', prefix: '', label: 'Trade Visitors', icon: 'users' },
        { number: 20, suffix: '+', prefix: '', label: 'Countries', icon: 'globe' },
        { number: 300, suffix: '+', prefix: '₹', label: 'Crore Business Potential', icon: 'trending-up' },
    ],

    /* ---- EVENT HIGHLIGHTS ---- */
    highlights: [
        {
            icon: 'layers',
            title: 'Building Materials Mega Pavilion',
            desc: 'A vast showcase of core construction materials — cement, aggregates, steel, RMC, and structural systems all under one roof.',
        },
        {
            icon: 'grid',
            title: 'Tiles, Flooring & Interiors Zone',
            desc: 'Ceramic, vitrified, marble, engineered wood, and luxury finishes — the complete interior materials spectrum.',
        },
        {
            icon: 'zap',
            title: 'Steel, Cement & RMC Zone',
            desc: 'Structural and ready-mix concrete solutions from leading manufacturers, directly meeting bulk buyers and contractors.',
        },
        {
            icon: 'leaf',
            title: 'Green & Sustainable Materials Pavilion',
            desc: 'Eco-friendly, recycled, and low-carbon materials driving India\'s green building revolution.',
        },
        {
            icon: 'monitor',
            title: 'Live Product Demonstrations',
            desc: 'See construction materials in action — performance tests, installation demos, and hands-on product experience.',
        },
        {
            icon: 'briefcase',
            title: 'B2B Buyer-Seller Meets',
            desc: 'Pre-scheduled one-on-one business meetings connecting manufacturers directly with procurement heads and decision-makers.',
        },
    ],

    /* ---- INDUSTRY SNAPSHOT ITEMS ---- */
    industrySnapshot: [
        {
            title: 'Construction Sector Growth',
            value: '11–15%',
            label: 'Annually',
            icon: 'trending-up',
        },
        {
            title: 'Real Estate Demand Rise',
            value: '12%+',
            label: 'Year-on-Year',
            icon: 'home',
        },
        {
            title: 'Tamil Nadu Economic Target',
            value: '$1T',
            label: 'Ambition by 2030',
            icon: 'award',
        },
        {
            title: 'Material Categories in Demand',
            value: '20+',
            label: 'Segments',
            icon: 'package',
        },
    ],

    /* ---- WHY ICONMAT NOW ---- */
    whyIconmat: [
        {
            number: '01',
            title: 'Sustainable Materials Revolution',
            desc: 'Industry shifting to eco-friendly, low-carbon materials — ICONMAT connects innovators with buyers.',
        },
        {
            number: '02',
            title: 'Prefabrication & Modular Growth',
            desc: 'Faster construction through precast and modular solutions — the future of India\'s infrastructure.',
        },
        {
            number: '03',
            title: 'Smart & Energy-Efficient Products',
            desc: 'Thermal insulation, smart glass, and energy-efficient building products are in massive demand.',
        },
        {
            number: '04',
            title: 'Faster Project Execution',
            desc: 'Contractors and developers need faster procurement — ICONMAT is the sourcing hub.',
        },
    ],

    /* ---- PRODUCT CATEGORIES ---- */
    productCategories: [
        { icon: 'box', title: 'Cement & Concrete Products', img: 'assets/images/cement2.jpg' },
        { icon: 'layers', title: 'Steel & Structural Materials', img: 'assets/images/steel.png' },
        { icon: 'grid', title: 'Tiles, Marble & Flooring', img: 'assets/images/tiles_marbles.jpg' },
        { icon: 'droplet', title: 'Paints, Coatings & Chemicals', img: 'assets/images/painting.jpg' },
        { icon: 'maximize', title: 'Glass & Facade Systems', img: 'assets/images/glass1.jpg' },
        { icon: 'tool', title: 'Plumbing & Sanitary Products', img: 'assets/images/plumbing.jpg' },
        { icon: 'zap', title: 'Electrical & Lighting Materials', img: 'assets/images/electrical.jpg' },
        { icon: 'cpu', title: 'Precast & Modular Components', img: 'assets/images/precast.jpg' },
    ],

    /* ---- EMERGING SEGMENTS ---- */
    emergingSegments: [
        {
            icon: 'leaf',
            title: 'Eco-Friendly Materials',
            desc: 'Recycled aggregates, fly ash, green cement, and bio-based insulation materials leading the sustainability drive.',
        },
        {
            icon: 'feather',
            title: 'Lightweight Construction',
            desc: 'AAC blocks, UPVC systems, and composite panels enabling faster, lighter, and cost-effective construction.',
        },
        {
            icon: 'printer',
            title: '3D Printing Materials',
            desc: 'Specialized construction-grade printable concrete and polymer materials for next-gen building techniques.',
        },
        {
            icon: 'cpu',
            title: 'Smart Building Materials',
            desc: 'Self-healing concrete, electrochromic glass, and sensor-embedded materials for intelligent buildings.',
        },
    ],

    /* ---- EXHIBITOR BENEFITS ---- */
    exhibitorBenefits: [
        { icon: 'users', title: 'Direct Access to Bulk Buyers', desc: 'Meet procurement heads, contractors, and developers making multi-crore purchasing decisions.' },
        { icon: 'share-2', title: 'Distributor & Dealer Expansion', desc: 'Build your distribution network across Tamil Nadu and South India in four days.' },
        { icon: 'monitor', title: 'Product Showcase & Live Demos', desc: 'Present your materials to a live audience and demonstrate product superiority on-site.' },
        { icon: 'bar-chart-2', title: 'Strong ROI Through B2B Leads', desc: 'Generate qualified leads with serious buying intent — the highest-quality sales opportunity of the year.' },
        { icon: 'map-pin', title: 'Strategic South India Presence', desc: 'Establish or strengthen your brand presence in one of India\'s fastest-growing materials markets.' },
        { icon: 'award', title: 'Brand Visibility & PR Coverage', desc: 'Media coverage, industry recognition, and thought leadership opportunities at every stage.' },
    ],

    /* ---- SPONSOR TIERS ---- */
    sponsorTiers: [
        {
            name: 'Silver',
            title: 'Silver Sponsor',
            icon: 'star',
            featured: false,
            features: [
                'Logo on event banners',
                'Exhibition space (6 sqm)',
                'Website logo listing',
                '50 complimentary passes',
                'Social media mentions',
            ],
        },
        {
            name: 'Gold',
            title: 'Gold Sponsor',
            icon: 'award',
            featured: false,
            features: [
                'Premium logo placement',
                'Exhibition space (12 sqm)',
                'Speaking slot (15 mins)',
                '100 complimentary passes',
                'Press release inclusion',
                'B2B meeting facilitation',
            ],
        },
        {
            name: 'Platinum',
            title: 'Platinum Sponsor',
            icon: 'shield',
            featured: true,
            features: [
                'Headline logo on all materials',
                'Premium booth (24 sqm)',
                'Keynote speaking slot',
                '200 complimentary passes',
                'Exclusive category rights',
                'Dedicated media coverage',
                'Product demo stage access',
            ],
        },
        {
            name: 'Title',
            title: 'Title Sponsor',
            icon: 'zap',
            featured: false,
            features: [
                'Event naming rights',
                'Mega pavilion (50+ sqm)',
                'Multiple speaking slots',
                '500 complimentary passes',
                'Full media exclusivity',
                'VIP networking events',
                'All Platinum benefits',
                'Custom activations',
            ],
        },
    ],

    /* ---- SPONSORSHIP BENEFITS ---- */
    sponsorBenefits: [
        { icon: 'eye', title: 'High Brand Visibility', desc: 'Reach 12,000+ industry professionals and C-suite decision-makers over 4 days.' },
        { icon: 'target', title: 'Targeted Audience', desc: 'Precision access to procurement heads, builders, developers, and material buyers.' },
        { icon: 'users', title: 'Lead Generation', desc: 'Generate qualified B2B leads with documented buying intent from serious trade visitors.' },
        { icon: 'mic', title: 'Speaking Opportunities', desc: 'Position your brand as a thought leader with keynote and panel speaking slots.' },
    ],

    /* ---- VISITOR PROFILES ---- */
    visitorProfiles: [
        { icon: 'home', title: 'Builders & Developers' },
        { icon: 'tool', title: 'Contractors & Engineers' },
        { icon: 'pen-tool', title: 'Architects & Interior Designers' },
        { icon: 'package', title: 'Dealers & Distributors' },
        { icon: 'briefcase', title: 'Procurement Heads' },
        { icon: 'shield', title: 'Government Buyers' },
    ],

    /* ---- VISITOR EXPERIENCE ---- */
    visitorExperience: [
        { icon: 'layers', title: 'Latest Building Materials', desc: 'Discover new and innovative materials from 250+ exhibitors across all construction categories.' },
        { icon: 'dollar-sign', title: 'Cost-Effective Sourcing', desc: 'Compare prices and find the best deals directly from manufacturers — cut out the middlemen.' },
        { icon: 'star', title: 'New Product Launches', desc: 'Be the first to see products being launched in the Indian market by leading manufacturers.' },
        { icon: 'bar-chart-2', title: 'Supplier Comparisons', desc: 'Evaluate multiple suppliers side by side and make informed procurement decisions on-site.' },
        { icon: 'users', title: 'Industry Networking', desc: 'Connect with 12,000+ professionals, build relationships, and discover partnership opportunities.' },
        { icon: 'book-open', title: 'Knowledge Sessions', desc: 'Attend expert talks on sustainable construction, material innovation, and market trends.' },
    ],

    /* ---- INDUSTRY INSIGHTS ---- */
    insights: [
        {
            number: '01',
            title: 'Massive Infrastructure Pipeline',
            icon: 'layers',
            desc: 'Multi-billion dollar investments in roads, metro, logistics parks, and industrial corridors are driving continuous demand for cement, steel, and aggregates.',
            points: [
                'Chennai Metro Phase 2 & 3 expansion',
                'Industrial Corridors & SEZ development',
                'National Highway upgrades across Tamil Nadu',
            ],
        },
        {
            number: '02',
            title: 'Real Estate Expansion',
            icon: 'home',
            desc: 'Tamil Nadu\'s residential and commercial real estate sectors are growing rapidly, fuelled by urbanization and IT sector expansion.',
            points: [
                'Growth in residential housing demand',
                'Commercial & IT park development',
                'Rise of Tier-2 cities like Coimbatore, Madurai, Salem',
            ],
        },
        {
            number: '03',
            title: 'Sustainable Materials Revolution',
            icon: 'leaf',
            desc: 'A structural shift toward eco-friendly, energy-efficient materials is underway, driven by both government mandates and market demand.',
            points: [
                'Green Building Council certifications on the rise',
                'Government push for BEE-rated materials',
                'Energy-efficient glass, insulation & smart materials demand',
            ],
        },
        {
            number: '04',
            title: 'Industrial & Manufacturing Growth',
            icon: 'cpu',
            desc: 'Tamil Nadu is emerging as India\'s premier manufacturing hub, driving demand for industrial-grade construction materials.',
            points: [
                'Electronics & auto manufacturing cluster growth',
                'Warehousing & logistics facility construction boom',
                'Data center and industrial park development',
            ],
        },
        {
            number: '05',
            title: 'Supply Chain Transformation',
            icon: 'share-2',
            desc: 'Digitization, e-procurement platforms, and organized distribution networks are transforming how construction materials are sourced and delivered.',
            points: [
                'Rise of organized material marketplaces',
                'Faster logistics and last-mile distribution networks',
                'Direct manufacturer-to-contractor procurement models',
            ],
        },
    ],

    /* ---- MARKET OUTLOOK ---- */
    marketOutlook: [
        {
            icon: 'trending-up',
            title: 'Precast Technology',
            desc: 'Rapid adoption of precast and prefab components is reducing construction time by 30–40% across major projects.',
        },
        {
            icon: 'box',
            title: 'Ready-Mix Concrete',
            desc: 'RMC market growing at 12%+ annually, driven by quality requirements and faster project execution timelines.',
        },
        {
            icon: 'cpu',
            title: 'Smart Materials',
            desc: 'India\'s smart materials sector projected to grow to $2.5B by 2027 — self-healing, responsive, and intelligent building products.',
        },
    ],

    /* ---- EXHIBITION ZONES ---- */
    exhibitionZones: [
        {
            zone: 'Hall A',
            title: 'Cement & Steel Zone',
            desc: 'The largest zone, housing major cement manufacturers, steel producers, and RMC suppliers. The heartbeat of ICONMAT.',
            size: '8,000 sqm',
        },
        {
            zone: 'Hall B',
            title: 'Tiles & Interiors Pavilion',
            desc: 'Complete interior materials showcase — ceramic, porcelain, marble, engineered wood, and luxury surface materials.',
            size: '6,500 sqm',
        },
        {
            zone: 'Hall C',
            title: 'Green Materials Zone',
            desc: 'Dedicated zone for eco-friendly, sustainable, and energy-efficient building materials — the future of construction.',
            size: '4,000 sqm',
        },
        {
            zone: 'Hall D',
            title: 'Machinery Support Zone',
            desc: 'Construction machinery, material handling equipment, mixing plants, and installation tools supporting exhibitor demonstrations.',
            size: '3,500 sqm',
        },
    ],

    /* ---- CONTACT INFO ---- */
    contact: {
        organizer: 'Fair Connects India LLP',
        email: 'info@iconmat.in',
        phone: '+91 XXXXX XXXXX',
        address: 'Chennai Trade Centre, Nandambakkam, Chennai, Tamil Nadu 600089',
        social: {
            linkedin: '#',
            instagram: '#',
            facebook: '#',
        }
    },

    /* ---- KEY GROWTH DRIVERS (About Page) ---- */
    growthDrivers: [
        { icon: 'train', title: 'Chennai Metro Expansion', desc: 'Phase 2 & 3 adding 120+ km of new metro lines, driving massive demand for construction materials.' },
        { icon: 'map', title: 'Industrial Corridors & SEZs', desc: 'New industrial zones and special economic zones creating continuous demand for industrial materials.' },
        { icon: 'truck', title: 'Highway & Logistics Projects', desc: 'National highway upgrades and logistics parks driving aggregate, asphalt, and structural material demand.' },
        { icon: 'monitor', title: 'IT Parks & Commercial Spaces', desc: 'Expanded IT corridors and commercial real estate projects fuelling demand for premium building materials.' },
        { icon: 'home', title: 'Affordable Housing Schemes', desc: 'Government housing projects driving volume demand for cost-effective, high-performance materials.' },
    ],
};
