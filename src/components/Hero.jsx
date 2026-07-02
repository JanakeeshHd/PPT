import { FaArrowRight, FaPhone, FaChevronDown } from 'react-icons/fa6';
import Button from './Button';
import TextReveal from './TextReveal';
import heroImage from '../assets/images/hero.png';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden flex items-center py-12 lg:py-16 bg-mesh">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Subtle Dark Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-slate-900/50 to-slate-950/60" />
      </div>

      <div className="absolute inset-0 z-0 bg-grid pointer-events-none opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark border border-sky-500/30 mb-6">
          <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" />
          <span className="text-sm font-semibold text-sky-300 letter-spacing-wider">Authorised Mersen Partner</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-5 leading-tight">
          <TextReveal as="span" immediate className="block">
            Protecting Critical Infrastructure with
          </TextReveal>
          <TextReveal
            as="span"
            immediate
            delay={0.3}
            className="block text-gradient-hero mt-2 sm:mt-3"
          >
            Premium Electrical Solutions
          </TextReveal>
        </h1>

        <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed text-balance mb-8">
          <TextReveal as="span" immediate delay={0.6}>
            As an authorised Mersen channel partner, we deliver industry-leading surge protection, grounding & monitoring, and industrial fuses to safeguard your operations.
          </TextReveal>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="xl" icon={FaArrowRight}>
            Explore Products
          </Button>
          <Button variant="glass" size="xl" icon={FaPhone}>
            Get a Quote
          </Button>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3 text-white/70">
          <span className="text-sm tracking-widest">Scroll to explore</span>
          <FaChevronDown className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
}
