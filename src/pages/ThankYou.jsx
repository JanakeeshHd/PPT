import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Home, ArrowRight, Mail, Phone } from 'lucide-react';
import Button from '../components/Button';
import Container from '../components/Container';
import Card from '../components/Card';
import { company } from '../data/data';

export default function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 bg-dark-950">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br from-green-500 to-green-700 mb-10 shadow-2xl shadow-green-500/40">
            <CheckCircle2 className="w-20 h-20 text-white" />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent mb-4">
            Thank You!
          </h1>

          <h2 className="text-2xl font-bold text-white mb-6">
            Your Request Has Been Submitted
          </h2>

          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Our team will review your request and get back to you within 24 hours.
            We're excited to work with you to find the perfect power protection solution.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card variant="glassDark" className="p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <a
                href={company.emailHref}
                className="text-white/60 text-sm break-all hover:text-brand-primary transition-colors duration-300"
              >
                {company.email}
              </a>
            </Card>

            <Card variant="glassDark" className="p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-secondary-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-white/60 text-sm">+1 (234) 567-890</p>
            </Card>

            <Card variant="glassDark" className="p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500/20 to-primary-500/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 text-accent-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Response Time</h3>
              <p className="text-white/60 text-sm">Within 24 hours</p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="accent" size="lg" icon={Home}>
                Return Home
              </Button>
            </Link>
            <Link to="/#products">
              <Button variant="glass" size="lg" icon={ArrowRight}>
                Explore Products
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
