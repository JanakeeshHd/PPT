import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapLocationDot,
  FaBolt,
  FaShieldHalved,
  FaClock,
  FaChevronRight,
  FaComments,
} from 'react-icons/fa6';
import { FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import Container from './Container';
import { company, footerQuickLinks, footerProducts, footerLegalLinks } from '../data/websiteData';

const whatsappInterestMessage =
  'Hi Pavana Powers Technologies, I am interested in your products. Please share more details about the suitable options for my requirement.';

const whatsappInterestHref = `${company.whatsappHref}?text=${encodeURIComponent(whatsappInterestMessage)}`;

const socialLinks = [
  { icon: FaXTwitter, label: 'X', href: 'https://twitter.com', color: 'hover:text-sky-400 hover:bg-sky-400/20' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-500 hover:bg-blue-500/20' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com', color: 'hover:text-pink-500 hover:bg-pink-500/20' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-12 sm:pt-16 border-t border-sky-500/20 relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 sm:mb-12">
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

            <p className="text-gray-400 leading-relaxed mb-5 text-justify">
              Engineering excellence in electrical protection and power quality solutions for a safer, more efficient future.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-3 mb-5">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/50 border border-sky-500/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <FaMapLocationDot className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Address</p>
                  <a
                    href={company.addressHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm leading-relaxed hover:text-sky-400 transition-colors duration-300"
                  >
                    {company.addressShort}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/50 border border-sky-500/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Phone</p>
                  <a
                    href={company.phoneHref}
                    className="text-white text-sm hover:text-sky-400 transition-colors duration-300"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/50 border border-sky-500/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="w-5 h-5 text-sky-400" />
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
              <FaShieldHalved className="w-5 h-5 text-sky-400" />
              Quick Links
            </h5>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-sky-400 flex items-center gap-2 transition-all duration-300 hover:pl-2"
                  >
                    <FaChevronRight className="w-4 h-4 flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h5 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <FaBolt className="w-5 h-5 text-cyan-400" />
              Products
            </h5>
            <ul className="space-y-3">
              {footerProducts.map((name) => (
                <li key={name}>
                  <div className="text-gray-400 flex items-center gap-2">
                    <FaChevronRight className="w-4 h-4 flex-shrink-0" />
                    {name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with us */}
          <div>
            <h5 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <FaComments className="w-5 h-5 text-emerald-400" />
              Connect with us
            </h5>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed text-justify">
              Message us on WhatsApp for product details, pricing, and the right solution for your requirement.
            </p>
            <a
              href={whatsappInterestHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12.04 2C6.55 2 2.1 6.45 2.1 11.94c0 1.74.46 3.44 1.34 4.94L2 22l5.26-1.38c1.45.79 3.09 1.2 4.78 1.2 5.49 0 9.94-4.45 9.94-9.94C22 6.45 17.53 2 12.04 2zm5.79 14.09c-.24.68-1.43 1.3-1.98 1.39-.51.08-1.15.12-1.86-.11-.43-.14-.98-.32-1.69-.63-2.97-1.28-4.89-4.31-5.03-4.51-.14-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.38.79-.38h.57c.18 0 .42-.07.66.5.24.58.82 2 .89 2.14.07.14.11.3.02.49-.08.2-.12.32-.24.49-.12.17-.26.39-.37.52-.12.14-.24.29-.1.55.14.26.64 1.06 1.38 1.72.95.85 1.74 1.11 2 .23.08-.24.44-.39.72-.27.28.12 1.78.84 2.09.99.31.15.51.24.59.38.08.14.08.79-.16 1.47z" />
              </svg>
              WhatsApp for product inquiry
            </a>
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
