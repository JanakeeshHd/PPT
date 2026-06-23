import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  Clock,
  ChevronRight
} from 'lucide-react';
import { FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import Button from './Button';
import Container from './Container';
import { company, footerQuickLinks, footerProducts, footerLegalLinks } from '../data/websiteData';

const socialLinks = [
  { icon: FaXTwitter, label: 'X', href: 'https://twitter.com', color: 'hover:text-sky-400 hover:bg-sky-400/20' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-500 hover:bg-blue-500/20' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com', color: 'hover:text-pink-500 hover:bg-pink-500/20' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-16 sm:pt-20 border-t border-sky-500/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <Container className="relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 sm:mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-500 flex items-center justify-center shadow-glow overflow-hidden flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Pavana Powers Technologies Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block text-2xl font-extrabold bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent tracking-tight leading-tight">
                  Pavana Powers
                </span>
                <span className="block text-xs text-gray-400 tracking-[0.25em] uppercase -mt-1 leading-none">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6">
              Engineering excellence in electrical protection and power quality solutions for a safer, more efficient future.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/50 border border-sky-500/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Address</p>
                  <p className="text-white text-sm leading-relaxed">{company.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/50 border border-sky-500/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Phone</p>
                  <p className="text-white text-sm">{company.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/50 border border-sky-500/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-gray-500 text-xs mb-1">Email</p>
                  <a
                    href={company.emailHref}
                    className="text-white text-sm break-all hover:text-sky-400 transition-colors duration-300"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-11 h-11 rounded-xl glass border border-sky-500/20 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <Shield className="w-5 h-5 text-sky-400" />
              Quick Links
            </h5>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-sky-400 flex items-center gap-2 transition-all duration-300 hover:pl-2"
                  >
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h5 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              Products
            </h5>
            <ul className="space-y-3">
              {footerProducts.map((name) => (
                <li key={name}>
                  <div className="text-gray-400 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    {name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <Globe className="w-5 h-5 text-emerald-400" />
              Stay Updated
            </h5>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Get the latest news and updates directly in your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-sky-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500/50 focus:bg-slate-900/70 transition-all duration-300"
              />
              <Button variant="primary" size="md" icon={ArrowRight} className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mb-6" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Pavana Powers Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {footerLegalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
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
