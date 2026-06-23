import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Zap,
  Shield,
  Cog,
  Phone,
  MessageSquare,
  ChevronRight,
  Home,
  Building2,
  PackageOpen,
  PhoneCall,
  CircleUser
} from 'lucide-react';
import Button from './Button';
import { navLinks } from '../data/websiteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Building2 },
    { name: 'Products', href: '/products', icon: PackageOpen },
    { name: 'Services', href: '/services', icon: Cog },
    { name: 'Contact', href: '/contact', icon: PhoneCall }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark py-3 shadow-2xl backdrop-blur-3xl border-b border-blue-500/20'
          : 'bg-transparent py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group" aria-label="Pavana Powers Technologies - Home">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 flex items-center justify-center shadow-xl shadow-blue-500/30 overflow-hidden group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <img
                src="/logo.png"
                alt="Pavana Powers Technologies Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">
                Pavana Powers
              </span>
              <span className="block text-xs text-gray-400 tracking-widest uppercase mt-0.5">Technologies</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" role="menubar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  role="menuitem"
                  className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-all duration-300 rounded-xl ${
                    isActive
                      ? 'text-blue-400 bg-white/10 shadow-lg'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-white hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-md glass-dark border-l border-blue-500/30 lg:hidden z-50"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-blue-500/20">
                  <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 flex items-center justify-center shadow-xl">
                      <img
                        src="/logo.png"
                        alt="Pavana Powers Technologies Logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">
                        Pavana Powers
                      </span>
                      <span className="block text-xs text-gray-400 tracking-widest uppercase">Technologies</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 text-white hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10"
                    aria-label="Close mobile menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-3">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.href}
                          className={`flex items-center justify-between w-full px-6 py-5 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                            isActive
                              ? 'text-blue-400 bg-white/10 shadow-lg border border-blue-500/20'
                              : 'text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              isActive ? 'bg-blue-500/20' : 'bg-white/5'
                            }`}>
                              <Icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-gray-400'}`} />
                            </div>
                            {item.name}
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-500" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Menu Footer */}
                <div className="p-6 border-t border-blue-500/20 space-y-4">
                  <a
                    href="tel:+917204269817"
                    className="flex items-center gap-3 w-full px-6 py-4 text-white font-semibold border border-blue-500/20 rounded-2xl hover:bg-white/5 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Call Us</div>
                      <div>+91 7204269817</div>
                    </div>
                  </a>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="primary" icon={MessageSquare} className="w-full text-lg py-4 shadow-xl shadow-blue-500/30">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
