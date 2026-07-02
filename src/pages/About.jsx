import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaBullseye,
  FaEye,
  FaBolt,
  FaBookOpen,
  FaPenNib,
  FaFilter,
  FaTruck,
  FaHeadphones,
  FaCircleCheck,
} from 'react-icons/fa6';
import Card from '../components/Card';
import Container from '../components/Container';
import TextReveal from '../components/TextReveal';
import { pageHeroes } from '../data/websiteData';

gsap.registerPlugin(ScrollTrigger);

function PageHero({ badge, title, highlight, subtitle }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-mesh">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-500/12 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/12 rounded-full blur-3xl" />
      </div>
      <Container className="relative z-10 w-full text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark border border-sky-500/30 mb-6 shadow-lg">
          <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" />
          <span className="text-sm font-semibold text-sky-300 letter-spacing-wider">{badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-5 leading-tight">
          <TextReveal as="span" immediate className="block">
            {title}
          </TextReveal>
          <TextReveal as="span" immediate delay={0.3} className="block text-gradient-hero mt-2 sm:mt-3">
            {highlight}
          </TextReveal>
        </h1>
        <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed text-balance mb-8">
          <TextReveal as="span" immediate delay={0.6}>
            {subtitle}
          </TextReveal>
        </p>
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="glassDark">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
                    <FaBolt className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Company Overview</h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm font-medium text-justify">
                  Pavana Powers Technologies is a specialised electrical solutions company focused on Surge Protection Devices (SPD), Grounding & Monitoring Devices (GMD), and Industrial Fuse Protection Solutions. We work closely with consultants, contractors, panel builders, OEMs, system integrators, and end users to deliver technically reliable solutions for safe electrical systems.
                </p>
              </Card>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="h-full"
              >
                <Card variant="glassDark" className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <FaBullseye className="w-6 h-6 text-sky-400" />
                    <h4 className="text-lg font-bold text-white">Mission</h4>
                  </div>
                  <p className="text-gray-400 text-sm font-medium text-justify">
                    To provide reliable and technically advanced electrical protection solutions that improve safety, reliability, and power quality in every project we support.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-full"
              >
                <Card variant="glassDark" className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <FaEye className="w-6 h-6 text-cyan-400" />
                    <h4 className="text-lg font-bold text-white">Vision</h4>
                  </div>
                  <p className="text-gray-400 text-sm font-medium text-justify">
                    To be the trusted partner of choice for electrical protection solutions, helping critical infrastructure operate safely and without interruption.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:hidden">
              <motion.div className="collage-item col-span-2">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden glass-dark border border-sky-500/20 shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="/about/1.png" alt="Mission" className="object-cover w-full h-full" />
                  </div>
                </div>
              </motion.div>

              <motion.div className="collage-item">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-dark border border-sky-500/20 shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="/about/2.png" alt="Vision" className="object-cover w-full h-full" />
                  </div>
                </div>
              </motion.div>

              <motion.div className="collage-item">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-dark border border-sky-500/20 shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="/about/3.png" alt="Company" className="object-cover w-full h-full" />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <motion.div style={{ y: y1 }} className="collage-item absolute top-0 left-0 w-3/5">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-dark border border-sky-500/20 shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="/about/1.png" alt="Mission" className="object-cover w-full h-full" />
                  </div>
                </div>
              </motion.div>

              <motion.div style={{ y: y2 }} className="collage-item absolute top-16 right-0 w-3/5">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-dark border border-sky-500/20 shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="/about/2.png" alt="Vision" className="object-cover w-full h-full" />
                  </div>
                </div>
              </motion.div>

              <motion.div style={{ y: y1 }} className="collage-item absolute bottom-0 left-8 w-1/2">
                <div className="aspect-square rounded-2xl overflow-hidden glass-dark border border-sky-500/20 shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="/about/3.png" alt="Company" className="object-cover w-full h-full" />
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
    icon: FaBookOpen,
    description: 'We conduct a thorough study and analysis of your electrical system requirements and challenges.',
    color: 'from-sky-500 to-sky-600',
  },
  {
    id: 2,
    title: 'Design & Engineering',
    icon: FaPenNib,
    description: 'Our expert engineers design custom solutions tailored to your specific needs.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 3,
    title: 'Solution Selection',
    icon: FaFilter,
    description: 'We help you select the optimal combination of products and technologies.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    id: 4,
    title: 'Supply & Installation',
    icon: FaTruck,
    description: 'We deliver and install the complete solution at your facility with precision.',
    color: 'from-sky-500 to-cyan-500',
  },
  {
    id: 5,
    title: 'Ongoing Support',
    icon: FaHeadphones,
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
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-justify">
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
                      <p className="text-white/70 leading-relaxed text-justify">{step.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25, delay: index * 0.1 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center border-4 border-slate-950 shadow-xl shadow-sky-500/30`}
                    >
                      <FaCircleCheck className="w-6 h-6 text-white" />
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
