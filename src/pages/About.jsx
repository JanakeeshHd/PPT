import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Target,
  Eye,
  Zap,
  Cog,
  Building2,
  Shield,
  BookOpen,
  PenTool,
  Filter,
  Truck,
  Headphones,
  CheckCircle,
} from 'lucide-react';
import Card from '../components/Card';
import Container from '../components/Container';
import { pageHeroes } from '../data/websiteData';

gsap.registerPlugin(ScrollTrigger);

function PageHero({ badge, title, highlight, subtitle }) {
  return (
    <section className="pt-24 pb-16 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      <Container className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-dark border border-sky-500/20 mb-8">
          <span className="w-3 h-3 bg-sky-500 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-sky-400 letter-spacing-wider">{badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
          {title}
          <span className="text-gradient bg-gradient-to-r from-sky-500 to-cyan-500 block mt-2">
            {highlight}
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      </Container>
    </section>
  );
}

function CompanyStory() {
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
    <section ref={sectionRef} className="relative py-12 sm:py-16 overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-500/5 to-transparent" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-sky-500/20 mb-6">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-sky-400">About Pavana Powers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Trusted Partner for
            <span className="text-gradient bg-gradient-to-r from-sky-500 to-cyan-500">
              {' '}Electrical Solutions
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="glassDark">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Company Overview</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Pavana Powers Technologies is a specialised electrical solutions company focused on projects requiring Surge Protection Devices (SPD), Grounding & Monitoring Devices (GMD), and Industrial Fuse Protection Solutions. With strong application knowledge and a customer-focused approach, we work closely with consultants, contractors, panel builders, OEMs, system integrators, and end users to provide the right technical solutions for safe and reliable electrical systems.
                </p>
              </Card>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card variant="glassDark">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-sky-400" />
                    <h4 className="text-lg font-bold text-white">Mission</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
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
                    <Eye className="w-6 h-6 text-cyan-400" />
                    <h4 className="text-lg font-bold text-white">Vision</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    To be the trusted partner of choice for electrical protection solutions, ensuring uninterrupted operations and safety for critical infrastructure worldwide.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px]">
              <motion.div style={{ y: y1 }} className="collage-item absolute top-0 left-0 w-3/5">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-dark border border-sky-500/20 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-sky-500/30 to-cyan-500/30 flex items-center justify-center">
                    <Building2 className="w-24 h-24 text-white/30" />
                  </div>
                </div>
              </motion.div>

              <motion.div style={{ y: y2 }} className="collage-item absolute top-16 right-0 w-3/5">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-dark border border-sky-500/20 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/30 to-amber-500/30 flex items-center justify-center">
                    <Cog className="w-24 h-24 text-white/30" />
                  </div>
                </div>
              </motion.div>

              <motion.div style={{ y: y1 }} className="collage-item absolute bottom-0 left-8 w-1/2">
                <div className="aspect-square rounded-2xl overflow-hidden glass-dark border border-sky-500/20 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-amber-500/30 to-sky-500/30 flex items-center justify-center">
                    <Shield className="w-20 h-20 text-white/30" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const processSteps = [
  {
    id: 1,
    title: 'Study & Analysis',
    icon: BookOpen,
    description: 'We conduct a thorough study and analysis of your electrical system requirements and challenges.',
    color: 'from-sky-500 to-sky-600',
  },
  {
    id: 2,
    title: 'Design & Engineering',
    icon: PenTool,
    description: 'Our expert engineers design custom solutions tailored to your specific needs.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 3,
    title: 'Solution Selection',
    icon: Filter,
    description: 'We help you select the optimal combination of products and technologies.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    id: 4,
    title: 'Supply & Installation',
    icon: Truck,
    description: 'We deliver and install the complete solution at your facility with precision.',
    color: 'from-sky-500 to-cyan-500',
  },
  {
    id: 5,
    title: 'Ongoing Support',
    icon: Headphones,
    description: 'Our support team is available 24/7 to assist you with any needs.',
    color: 'from-cyan-500 to-amber-500',
  },
];

function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={containerRef} className="py-12 sm:py-16 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-sky-500/20 mb-6">
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-sky-300">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our
            <span className="text-gradient bg-gradient-to-r from-sky-400 to-cyan-400 block">
              Process
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A systematic approach to delivering exceptional electrical protection solutions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-sky-500 to-amber-500 -translate-x-1/2"
            style={{
              height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
            }}
          />

          <div className="space-y-12 md:space-y-20">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center md:items-start`}
                >
                  <div className={`flex-1 md:pr-8 md:pl-8 ${isEven ? 'md:text-right' : ''} mb-8 md:mb-0`}>
                    <div className="glass-dark rounded-3xl p-8 border border-sky-500/20 shadow-xl">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto md:mx-0`}>
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-white/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25, delay: index * 0.1 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center border-4 border-slate-950 shadow-xl shadow-sky-500/30`}
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function About() {
  const hero = pageHeroes.about;

  return (
    <>
      <PageHero {...hero} />
      <CompanyStory />
      <ProcessTimeline />
    </>
  );
}
