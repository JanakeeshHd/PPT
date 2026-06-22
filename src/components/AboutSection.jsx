import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Zap, Cog, Building2, Shield } from 'lucide-react';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.collage-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.5)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-brand-background">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary-500/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-6">
            <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-brand-primary">About Pavana Powers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
            Your Trusted Partner for
            <span className="text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary">
              {' '}Electrical Solutions
            </span>
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Company Story */}
          <div className="space-y-8">
            {/* Story Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="glassDark">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                    <Zap className="w-6 h-6 text-brand-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-white">Company Overview</h3>
                </div>
                <p className="text-brand-grey leading-relaxed">
                  Pavana Powers Technologies is a specialised electrical solutions company focused on projects requiring Surge Protection Devices (SPD), Grounding & Monitoring Devices (GMD), and Industrial Fuse Protection Solutions. With strong application knowledge and a customer-focused approach, we work closely with consultants, contractors, panel builders, OEMs, system integrators, and end users to provide the right technical solutions for safe and reliable electrical systems.
                </p>
              </Card>
            </motion.div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card variant="glassDark">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-brand-primary" />
                    <h4 className="text-lg font-bold text-brand-white">Mission</h4>
                  </div>
                  <p className="text-brand-grey text-sm">
                    To provide reliable and technically advanced electrical protection solutions that improve system safety, reliability, and power quality across every project we support.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card variant="glassDark">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-brand-secondary" />
                    <h4 className="text-lg font-bold text-brand-white">Vision</h4>
                  </div>
                  <p className="text-brand-grey text-sm">
                    To be the trusted partner of choice for electrical protection solutions, ensuring uninterrupted operations and safety for critical infrastructure worldwide.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Image Collage */}
          <div className="relative">
            <div className="relative h-[500px]">
              <motion.div style={{ y: y1 }} className="collage-item absolute top-0 left-0 w-3/5">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-dark border border-white/10 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 flex items-center justify-center">
                    <Building2 className="w-24 h-24 text-white/30" />
                  </div>
                </div>
              </motion.div>

              <motion.div style={{ y: y2 }} className="collage-item absolute top-16 right-0 w-3/5">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-dark border border-white/10 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-secondary-500/30 to-accent-500/30 flex items-center justify-center">
                    <Cog className="w-24 h-24 text-white/30" />
                  </div>
                </div>
              </motion.div>

              <motion.div style={{ y: y1 }} className="collage-item absolute bottom-0 left-8 w-1/2">
                <div className="aspect-square rounded-2xl overflow-hidden glass-dark border border-white/10 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-accent-500/30 to-primary-500/30 flex items-center justify-center">
                    <Shield className="w-20 h-20 text-white/30" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
