import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronRight,
  Zap,
  Shield,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import Button from './Button';
import Container from './Container';
import { company, footerQuickLinks, footerProducts, footerLegalLinks } from '../data/data';

const socialLinks = [
  { icon: FaXTwitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/10' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/10' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com', color: 'hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/10' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-footer pt-20 sm:pt-24 lg:pt-32 border-t border-brand-border relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <Container className="relative z-10">
        <div className="mb-16 sm:mb-20">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div className="glass-dark rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center flex-shrink-0 shadow-glow">
                <Mail className="w-8 h-8 text-white" />
              </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Stay in the Loop</h3>
                  <p className="text-white/60 leading-relaxed">Subscribe to our newsletter for the latest product updates, industry insights, and exclusive offers.</p>
                </div>
              </div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 sm:py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary-400 focus:bg-white/7 transition-all duration-300"
                />
                <Button variant="accent" size="lg" icon={ArrowRight}>
                  Subscribe
                </Button>
              </form>
              <p className="text-white/40 text-xs sm:text-sm mt-4">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
            </div>

            <div className="glass-dark rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-primary-400" />
                Contact Us
              </h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <p className="text-brand-grey text-sm mb-1">Address</p>
                    <p className="text-brand-white font-medium leading-relaxed">{company.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <p className="text-brand-grey text-sm mb-1">Phone</p>
                    <p className="text-brand-white font-medium">{company.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-brand-grey text-sm mb-1">Email</p>
                    <a
                      href={company.emailHref}
                      className="text-brand-white font-medium break-all hover:text-brand-primary transition-colors duration-300"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Business Hours</p>
                    <p className="text-white font-medium">{company.businessHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 mb-16 sm:mb-20">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-glow overflow-hidden flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Pavana Powers Technologies Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-shrink-0">
                <span className="block text-xl font-extrabold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent tracking-tight leading-tight">
                  Pavana Powers
                </span>
                <span className="block text-[10px] sm:text-xs text-brand-grey tracking-[0.3em] uppercase -mt-1 leading-none">
                  Technologies
                </span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-8">
              Engineering excellence in electrical protection and power quality solutions for a safer, more efficient future.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-12 h-12 rounded-2xl glass-dark border border-white/10 flex items-center justify-center text-white/60 hover:scale-110 transition-all duration-300 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-400" />
              Quick Links
            </h5>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-brand-primary flex items-center gap-2 transition-all duration-300 hover:pl-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-secondary" />
              Products
            </h5>
            <ul className="space-y-3">
              {footerProducts.map((name) => (
                <li key={name} className="text-white/60 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 sm:pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Pavana Powers Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {footerLegalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/40 hover:text-white text-sm transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
