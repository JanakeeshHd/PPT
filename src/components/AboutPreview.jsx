import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import Container from './Container';
import { scrollToTop } from './Common';
import { aboutHighlights } from '../data/data';

export default function AboutPreview() {
  const handleNavClick = () => scrollToTop();

  return (
    <section className="py-24 sm:py-32 bg-brand-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-64 h-64 bg-brand-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-secondary/8 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-8">
              <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-brand-primary">About Pavana Powers</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-brand-white leading-[1.15] mb-6">
              Your Trusted Partner for{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Electrical Solutions
              </span>
            </h2>

            <p className="text-lg text-brand-grey leading-relaxed mb-10">
              Pavana Powers Technologies is a specialized electrical solutions company focused on Surge Protection Devices (SPD), Grounding & Monitoring Devices (GMD), and Industrial Fuse Protection Solutions.
            </p>

            <Link to="/about" onClick={handleNavClick}>
              <Button variant="accent" size="lg" icon={ArrowRight}>
                Learn More About Us
              </Button>
            </Link>
          </motion.div>

          <div className="space-y-4">
            {aboutHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group flex gap-5 p-6 rounded-2xl glass-dark border border-white/10 hover:border-brand-primary/30 transition-all duration-300"
                >
                  <span className="text-3xl font-bold text-white/10 group-hover:text-brand-primary/30 transition-colors duration-300 leading-none flex-shrink-0">
                    {item.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-brand-primary flex-shrink-0" />
                      <h3 className="font-semibold text-brand-white">{item.title}</h3>
                    </div>
                    <p className="text-brand-grey text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-brand-primary/40 group-hover:text-brand-primary flex-shrink-0 mt-1 transition-colors duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
