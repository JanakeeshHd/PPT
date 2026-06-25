import {
  Shield,
  Sparkles,
  Zap,
  Flame,
  Building2,
  Cog,
  Package,
  Wrench,
  CheckCircle,
  Users,
  ShieldCheck,
  Award,
  Target,
  Headphones,
  Factory,
  Building,
  Server,
  HeartPulse,
  Sun,
  Car,
  HardHat,
  Briefcase,
  Landmark,
} from 'lucide-react';

export const company = {
  name: 'Pavana Powers Technologies',
  shortName: 'Pavana Powers',
  email: 'pavanapowerstechnologies@gmail.com',
  emailHref: 'mailto:pavanapowerstechnologies@gmail.com',
  phone: '+91 7204269817',
  phoneHref: 'tel:+917204269817',
  phoneSecondary: '+91 9902880484',
  whatsapp: 'https://wa.me/917204269817',
  whatsappHref: 'https://wa.me/917204269817',
  address: '#543, 14th Main, HMT Layout Mathikere, Bangalore - 560054',
  addressShort: '#543, 14th Main, HMT Layout Mathikere, Bangalore',
  businessHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  businessHoursDetailed: {
    weekdays: 'Monday - Saturday: 9:00 AM - 7:00 PM',
    saturday: 'Saturday: 9:00 AM - 7:00 PM',
  },
};

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
];

export const footerQuickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/about' },
  { name: 'Careers', href: '/contact' },
  { name: 'Partners', href: '/about' },
  { name: 'News', href: '/' },
  { name: 'Contact', href: '/contact' },
];

export const footerProducts = [
  'Surge Protection',
  'Ground Monitoring',
  'Industrial Fuses',
  'Power Quality',
  'Lightning Protection',
  'Custom Solutions',
];

export const footerLegalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy', href: '#' },
  { name: 'Accessibility', href: '#' },
];

export const pageHeroes = {
  about: {
    badge: 'About Us',
    title: 'Empowering Industries with',
    highlight: 'Cutting-Edge Electrical Solutions',
    subtitle:
      'We are Pavana Powers Technologies, a trusted partner for industrial electrical systems, providing innovative solutions to power the future.',
  },
  products: {
    badge: 'Our Products',
    title: 'Premium Electrical',
    highlight: 'Protection & Solutions',
    subtitle:
      'Explore our comprehensive range of industrial electrical products, from surge protection to fire suppression systems.',
  },
  services: {
    badge: 'Our Services',
    title: 'Comprehensive Electrical',
    highlight: 'Services & Solutions',
    subtitle:
      'From supply and installation to maintenance and consultation, we provide end-to-end electrical solutions for industries.',
  },
  contact: {
    badge: 'Contact Us',
    title: 'Get in Touch with',
    highlight: 'Pavana Powers Technologies',
    subtitle:
      'Have questions or need assistance? Our team is here to help you with all your electrical needs.',
  },
};

export const products = [
  {
    id: 1,
    name: 'Mersen Surge Protection Devices (SPD)',
    icon: Shield,
    image: 'src/assets/images/mersinspd.jpg',
    color: 'from-blue-500 to-cyan-400',
    desc: 'Protect electrical systems and equipment from surges, transient voltages, and lightning strikes, ensuring safety and reliability.',
    shortDesc: 'Protect electrical systems from surges and lightning strikes.',
    features: ['Type 1, 2 & 3 Protection', 'LED Status Indicators', 'Remote Monitoring', 'Compact Design'],
    applications: ['Industrial Plants', 'Data Centers', 'Commercial Buildings', 'Hospitals'],
    benefits: ['Prevents Equipment Damage', 'Reduces Downtime', 'Extends Product Lifespan', 'Cost-Effective'],
  },
  {
    id: 2,
    name: 'Mersen Ground Monitoring Devices (GMD)',
    icon: Sparkles,
    image: 'src/assets/images/mersinGMD.jpeg',
    color: 'from-cyan-400 to-blue-500',
    desc: 'Continuous ground monitoring systems that alert you to any deviation from set values, ensuring electrical safety.',
    shortDesc: 'Continuous monitoring for electrical safety and compliance.',
    features: ['Real-time Monitoring', 'Alerts & Notifications', 'Data Logging', 'Easy to Install in DIN Rail'],
    applications: ['Power Plants', 'Manufacturing', 'Oil & Gas', 'Mining'],
    benefits: ['Prevents Electrical Hazards', 'Ensures Compliance', 'Improves Safety', 'Peace of Mind'],
  },
  {
    id: 3,
    name: 'Mersen Industrial Fuses',
    icon: Zap,
    image: 'src/assets/images/mersinFuse.jpg',
    color: 'from-amber-400 to-blue-500',
    desc: 'High-rupturing capacity fuses that protect against overloads and short circuits, ensuring safe operations.',
    shortDesc: 'High-rupturing capacity fuses for safe operations.',
    features: ['Fast Acting', 'High Breaking Capacity', 'Compact Design', 'Visual Indicators'],
    applications: ['Power Distribution', 'Motor Protection', 'Transformer Protection', 'Capacitor Banks'],
    benefits: ['Reliable Protection', 'Compliant with IEC Standards', 'Cost Effective', 'Wide Range'],
  },
  {
    id: 4,
    name: 'Tube Based Fire Suppression System',
    icon: Flame,
    image: 'src/assets/images/firesupression.png',
    color: 'from-blue-500 to-amber-400',
    desc: 'Automatic fire suppression systems using advanced tube technology for quick and efficient fire control.',
    shortDesc: 'Automatic fire suppression for quick and efficient control.',
    features: ['Automatic Detection', 'Quick Response', 'Low Maintenance', 'Environmentally Friendly'],
    applications: ['Electrical Panels', 'Server Rooms', 'Control Cabinets', 'Battery Rooms'],
    benefits: ['24/7 Protection', 'Minimal Damage', 'Easy Installation', 'Cost Efficient'],
  },
  {
    id: 5,
    name: 'Elevators',
    icon: Building2,
    image: 'src/assets/images/elevetors.jpg',
    color: 'from-cyan-400 to-amber-400',
    desc: 'Modern elevator solutions for commercial and industrial buildings with safety and efficiency as top priorities.',
    shortDesc: 'Modern elevator solutions for commercial and industrial buildings.',
    features: ['Smooth Ride', 'Energy Efficient', 'Advanced Safety', 'Smart Controls'],
    applications: ['Commercial Buildings', 'Industrial Facilities', 'Hospitals', 'Shopping Malls'],
    benefits: ['Reliable Operation', 'Energy Savings', 'Passenger Safety', 'Low Maintenance'],
  },
  {
    id: 6,
    name: 'Industrial Electrical Components',
    icon: Cog,
    image: 'src/assets/images/industrialcomponent.jpg',
    color: 'from-amber-400 to-cyan-400',
    desc: 'Comprehensive range of industrial electrical components for power distribution and control systems.',
    shortDesc: 'Industrial electrical components for power distribution and control.',
    features: ['High Quality', 'Durable', 'Compliant Standards', 'Wide Variety'],
    applications: ['Industrial Automation', 'Power Distribution', 'Control Systems', 'Renewable Energy'],
    benefits: ['Reliable Performance', 'Long Lifespan', 'Easy Integration', 'Technical Support'],
  },
];

export const featuredProductIds = [1, 2, 3, 4];

export const services = [
  {
    id: 1,
    name: 'Supply of Electrical Products',
    icon: Package,
    image: 'src/assets/images/mersinElectricalSupply.jpg',
    color: 'from-blue-500 to-cyan-400',
    desc: 'Comprehensive supply of industrial electrical products from leading manufacturers.',
    shortDesc: 'Comprehensive supply from leading manufacturers.',
    process: ['Consultation', 'Product Selection', 'Procurement', 'Delivery', 'Support'],
    benefits: ['Wide Product Range', 'Competitive Pricing', 'Timely Delivery', 'Quality Assurance'],
    industries: ['Manufacturing', 'Healthcare', 'IT', 'Energy'],
  },
  {
    id: 2,
    name: 'Installation Services',
    icon: Wrench,
    image: 'src/assets/images/mersinInstallation.jpg',
    color: 'from-cyan-400 to-blue-500',
    desc: 'Professional installation of electrical systems and equipment by certified technicians.',
    shortDesc: 'Professional installation by certified technicians.',
    process: ['Site Assessment', 'Planning', 'Installation', 'Testing', 'Handover'],
    benefits: ['Expert Installation', 'Safety Compliance', 'Warranty Support', 'Post-Installation Check'],
    industries: ['Industrial', 'Commercial', 'Healthcare', 'Education'],
  },
  {
    id: 3,
    name: 'Earthing Works',
    icon: Zap,
    image: 'src/assets/images/mersinEarthing.jpg',
    color: 'from-amber-400 to-blue-500',
    desc: 'Design and installation of earthing systems to ensure electrical safety and compliance.',
    shortDesc: 'Design and installation for electrical safety.',
    process: ['Soil Testing', 'Design', 'Installation', 'Testing', 'Certification'],
    benefits: ['Electrical Safety', 'Compliance', 'System Protection', 'Long-Term Reliability'],
    industries: ['Power Plants', 'Industrial', 'Commercial', 'Data Centers'],
  },
  {
    id: 4,
    name: 'Testing & Commissioning',
    icon: CheckCircle,
    image: 'src/assets/images/mersinTesting.jpg',
    color: 'from-blue-500 to-amber-400',
    desc: 'Comprehensive testing and commissioning of electrical systems to ensure optimal performance.',
    shortDesc: 'Comprehensive testing for optimal performance.',
    process: ['Pre-Commissioning', 'Functional Tests', 'Performance Tests', 'Documentation', 'Training'],
    benefits: ['Optimal Performance', 'Safety Assurance', 'Compliance', 'Extended Lifespan'],
    industries: ['Industrial', 'Power', 'Commercial', 'Renewable Energy'],
  },
  {
    id: 5,
    name: 'Industrial Electrical Consultation',
    icon: Users,
    image: 'src/assets/images/mersinConsultation.jpg',
    color: 'from-cyan-400 to-amber-400',
    desc: 'Expert consultation for industrial electrical system design, optimization, and modernization.',
    shortDesc: 'Expert consultation for industrial electrical systems.',
    process: ['Assessment', 'Analysis', 'Solution Design', 'Implementation Plan', 'Follow-Up'],
    benefits: ['Expert Advice', 'Cost Savings', 'Efficiency', 'Future-Proofing'],
    industries: ['Manufacturing', 'Energy', 'Oil & Gas', 'Mining'],
  },
  {
    id: 6,
    name: 'Maintenance & Technical Support',
    icon: ShieldCheck,
    image: 'src/assets/images/mersinMaintenance.jpg',
    color: 'from-amber-400 to-cyan-400',
    desc: 'Regular maintenance and 24/7 technical support to keep your systems running smoothly.',
    shortDesc: 'Maintenance and technical support for your systems.',
    process: ['Preventive Maintenance', 'Inspections', 'Repairs', 'Emergency Support', 'Upgrades'],
    benefits: ['Minimal Downtime', 'Longer Lifespan', 'Safety', 'Peace of Mind'],
    industries: ['All Industries'],
  },
];

export const featuredServiceIds = [1, 2, 3, 4];

export const aboutHighlights = [
  {
    num: '01',
    title: 'Surge Protection Devices',
    desc: 'Advanced SPD solutions to shield critical systems from voltage spikes and lightning.',
    icon: Shield,
  },
  {
    num: '02',
    title: 'Ground Monitoring Devices',
    desc: 'Continuous grounding monitoring for safer, compliant electrical installations.',
    icon: Sparkles,
  },
  {
    num: '03',
    title: 'Industrial Fuse Protection',
    desc: 'High-performance fuse solutions for reliable protection in demanding environments.',
    icon: Zap,
  },
];

export const whyChooseUsFeatures = [
  {
    id: 2,
    title: 'Strong Technical Knowledge',
    desc: 'Deep understanding of electrical distribution systems and protection solutions.',
    icon: Cog,
    color: 'from-cyan-400 to-blue-500',
    size: 'small',
  },
  {
    id: 3,
    title: 'Project-Based Approach',
    desc: 'Work closely with consultants and contractors to deliver tailored solutions.',
    icon: Award,
    color: 'from-amber-400 to-blue-500',
    size: 'small',
  },
  {
    id: 4,
    title: 'Customer-Focused',
    desc: 'Close coordination from selection stage to project execution.',
    icon: Users,
    color: 'from-blue-500 to-cyan-400',
    size: 'small',
  },
  {
    id: 5,
    title: 'Reliable Support',
    desc: 'Dedicated support to ensure your systems remain safe and operational.',
    icon: Headphones,
    color: 'from-cyan-400 to-amber-400',
    size: 'small',
  },
  {
    id: 6,
    title: 'Specialised Expertise',
    desc: 'Focused expertise in SPD, GMD, and Fuse Protection Solutions.',
    icon: Shield,
    color: 'from-amber-400 to-blue-500',
    size: 'small',
  },
];

export const mersenAchievements = [
  'Authorised Channel Partner',
  'Expert Technical Support',
  'Wide Product Range',
];

export const mersenBenefits = [
  { icon: Award, title: 'Trusted Partner', desc: 'Pavana Powers is proud to be an authorised channel partner of Mersen.' },
  { icon: Zap, title: 'Premium Products', desc: "Access to Mersen's industry-leading SPD, GMD, and fuse solutions." },
  { icon: Shield, title: 'Quality Assured', desc: "Products backed by Mersen's expertise and global reputation." },
  { icon: Target, title: 'Technical Expertise', desc: 'Combined knowledge to deliver the right solutions for your needs.' },
];

export const getFeaturedProducts = () =>
  featuredProductIds.map((id) => products.find((p) => p.id === id)).filter(Boolean);

export const industries = [
  { name: 'Industrial', icon: Factory },
  { name: 'Commercial Buildings', icon: Building },
  { name: 'IT & Data Centers', icon: Server },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Renewable Energy', icon: Sun },
  { name: 'EV Charging Infrastructure', icon: Car },
  { name: 'Manufacturing', icon: Cog },
  { name: 'Infrastructure & Construction', icon: HardHat },
  { name: 'OEM & Panel Builders', icon: Briefcase },
  { name: 'Government & Public Projects', icon: Landmark },
];

export const getFeaturedServices = () =>
  featuredServiceIds.map((id) => services.find((s) => s.id === id)).filter(Boolean);
