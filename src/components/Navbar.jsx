import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Search,
  Phone,
  Globe,
  ChevronDown,
  Zap,
  Cog,
  Users,
  Building2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import Button from './Button';
import { navLinks } from '../data/data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const lastFocusedElementRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen && navRef.current) {
      lastFocusedElementRef.current = document.activeElement;
      const focusableElements = navRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    } else if (lastFocusedElementRef.current) {
      lastFocusedElementRef.current.focus();
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'glass-dark py-4 shadow-2xl backdrop-blur-3xl'
          : 'bg-transparent py-6'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-8">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3" aria-label="Pavana Powers Technologies - Home">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-glow overflow-hidden">
              <img
                src="/logo.png"
                alt="Pavana Powers Technologies Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent tracking-tight">
                Pavana Powers
              </span>
              <span className="block text-[10px] sm:text-xs text-brand-grey tracking-[0.3em] uppercase -mt-1">Technologies</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                role="menuitem"
                className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-all duration-300 rounded-2xl ${
                  location.pathname === link.href
                    ? 'text-brand-primary bg-white/5'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>


          <button
            className="lg:hidden p-3 text-white hover:bg-white/5 rounded-2xl transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm glass-dark border-l border-white/10 lg:hidden backdrop-blur-3xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-8 border-b border-white/10">
                <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-glow overflow-hidden">
                    <img
                      src="/logo.png"
                      alt="Pavana Powers Technologies Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xl font-extrabold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent tracking-tight">
                      Pavana Powers
                    </span>
                    <span className="block text-[10px] text-brand-grey tracking-[0.3em] uppercase -mt-1">Technologies</span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 text-white hover:bg-white/5 rounded-2xl transition-all duration-300"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-8 py-8 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`flex items-center justify-between w-full px-6 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                      location.pathname === link.href
                        ? 'text-brand-primary bg-white/5'
                        : 'text-white hover:bg-white/5'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="p-8 border-t border-white/10 space-y-4">
                <Button className="w-full" variant="accent" size="lg" icon={ArrowRight}>
                  Request Quote
                </Button>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 text-white font-semibold border border-white/20 rounded-2xl hover:bg-white/5 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
