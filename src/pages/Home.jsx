import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, CheckCircle, Award, Target, Shield } from 'lucide-react';
import { useRef, useState } from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import Container from '../components/Container';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import {
  aboutHighlights,
  whyChooseUsFeatures,
  getFeaturedProducts,
  getFeaturedServices,
  mersenAchievements,
  mersenBenefits,
} from '../data/websiteData';

function scrollToTop() {
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(0, { immediate: true });
  else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

function PreviewCard({ item, index = 0 }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card variant="glassDark" className="h-full">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
          <Icon className="w-8 h-8 text-brand-white" />
        </div>
        <h3 className="text-xl font-bold text-brand-white mb-4">{item.name}</h3>
        <p className="text-brand-grey">{item.shortDesc}</p>
      </Card>
    </motion.div>
  );
}

// Single-use components for Home page
function AboutPreview() {
  const handleNavClick = () => scrollToTop();

  return (
    <section className="py-24 sm:py-32 bg-brand-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark border border-white/15 mb-8 shadow-lg">
              <span className="w-3 h-3 bg-brand-primary rounded-full animate-pulse shadow-lg shadow-brand-primary/50" />
              <span className="text-sm font-semibold text-brand-primary tracking-wider">About Pavana Powers</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-white leading-[1.1] mb-8">
              Your Trusted Partner for{' '}
              <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent drop-shadow-lg">
                Electrical Solutions
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-brand-grey/90 leading-relaxed mb-10 max-w-xl">
              Pavana Powers Technologies is a specialized electrical solutions company focused on Surge Protection Devices (SPD), Grounding & Monitoring Devices (GMD), and Industrial Fuse Protection Solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" onClick={handleNavClick}>
                <Button variant="accent" size="lg" icon={ArrowRight} className="shadow-xl shadow-brand-accent/30">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="space-y-5">
            {aboutHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ x: -8, scale: 1.02 }}
                  className="group flex gap-6 p-7 rounded-3xl glass-dark border border-white/10 hover:border-brand-primary/40 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-400"
                >
                  <span className="text-5xl font-black text-white/8 group-hover:text-brand-primary/40 transition-colors duration-300 leading-none flex-shrink-0">
                    {item.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-brand-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-white">{item.title}</h3>
                    </div>
                    <p className="text-brand-grey text-base leading-relaxed">{item.desc}</p>
                  </div>
                  <CheckCircle2 className="w-7 h-7 text-brand-primary/30 group-hover:text-brand-primary group-hover:scale-110 flex-shrink-0 mt-1 transition-all duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

const TiltCard = ({ feature, children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sizeClasses = feature.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : '';

  return (
    <motion.div
      className={`${sizeClasses}`}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="relative">
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20 blur-xl`} />
        <Card variant="glassDark" className="relative h-full">
          {children}
        </Card>
      </div>
    </motion.div>
  );
};

function WhyChooseUs() {
  const features = whyChooseUsFeatures;
  return (
    <section className="py-32 bg-brand-surface relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-6">
            <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-brand-primary">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
            Why Choose
            <span className="text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary">
              {' '}Pavana Powers
            </span>
          </h2>
          <p className="text-xl text-brand-grey max-w-2xl mx-auto">
            We work closely with our customers from selection stage to execution, providing practical and technically reliable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              >
                <TiltCard feature={feature}>
                  <div className="flex flex-col h-full">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 flex-grow">{feature.desc}</p>

                    {feature.size === 'large' && (
                      <motion.div
                        className="mt-6 flex items-center gap-2 text-primary-400"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <span className="font-semibold">Learn more</span>
                        <Zap className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-32 bg-brand-surface relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-brand-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Products"
          title="Featured"
          highlight="Products"
          subtitle="Explore our range of premium electrical protection and solution products."
        />

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <PreviewCard key={product.id} item={product} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="accent" size="lg" icon={ArrowRight}>
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const featuredServices = getFeaturedServices();

  return (
    <section className="py-32 bg-brand-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-brand-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Services"
          title="Featured"
          highlight="Services"
          subtitle="End-to-end electrical solutions for industries."
        />

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <PreviewCard key={service.id} item={service} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="accent" size="lg" icon={ArrowRight}>
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function MersenPartnership() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);
      x.set(mouseX);
      y.set(mouseY);
    }
  };

  const achievements = mersenAchievements;
  const benefits = mersenBenefits;

  return (
    <section className="py-32 bg-brand-background relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-400/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              x.set(0);
              y.set(0);
            }}
            className="flex justify-center"
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 opacity-30 blur-xl"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full glass-dark border-2 border-white/20 shadow-2xl flex flex-col items-center justify-center">
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30" />

                  <div className="relative z-10 text-center">
                    <motion.div
                      className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center"
                      animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Award className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </motion.div>

                    <motion.p
                      className="text-6xl md:text-8xl font-bold text-white"
                      style={{ textShadow: '0 0 30px rgba(14, 165, 233, 0.5)' }}
                    >
                      10
                    </motion.p>
                    <p className="text-xl md:text-2xl text-white/80 mt-2 font-semibold">Years of Partnership</p>

                    <div className="mt-6 flex items-center justify-center gap-3">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-400" />
                      <p className="text-primary-400 font-semibold tracking-widest text-sm">MERSEN & PAVANA</p>
                      <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-400" />
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-primary-400 shadow-lg shadow-primary-400/50" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-4 h-4 rounded-full bg-secondary-400 shadow-lg shadow-secondary-400/50" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-4 h-4 rounded-full bg-accent-400 shadow-lg shadow-accent-400/50" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-4 h-4 rounded-full bg-primary-300 shadow-lg shadow-primary-300/50" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-6">
                <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-brand-primary">Authorised Mersen Partner</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
                10 Years of
                <span className="text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary block">
                  Trust & Partnership
                </span>
              </h2>
              <p className="text-xl text-brand-grey leading-relaxed">
                Pavana Powers Technologies is proud to be an authorised channel partner of Mersen, bringing you industry-leading electrical protection solutions.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="glass-dark rounded-2xl p-5 border border-white/10">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                          <p className="text-white/60 text-sm">{benefit.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent-400" />
                Key Achievements
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-white/80">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      <ProductsPreview />
      <ServicesPreview />
      <MersenPartnership />
    </>
  );
}
