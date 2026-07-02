import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCircleCheck, FaAward } from 'react-icons/fa6';
import { useState } from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import Container from '../components/Container';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import {
  aboutHighlights,
  getFeaturedProducts,
  getFeaturedServices,
  mersenAchievements,
  mersenBenefits,
  industries,
  whyChooseUsFeatures,
} from '../data/websiteData';

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

function PreviewCard({ item, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card variant="glassDark" className="h-full p-0 overflow-hidden group">
        <div className="h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-white mb-3">{item.name}</h3>
          <p className="text-gray-400 text-sm flex-grow">{item.shortDesc}</p>
        </div>
      </Card>
    </motion.div>
  );
}

// Single-use components for Home page
function AboutPreview() {
  const handleNavClick = () => scrollToTop();

  return (
    <section className="py-10 sm:py-12 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark border border-sky-500/30 mb-6 shadow-lg">
              <span className="w-3 h-3 bg-sky-500 rounded-full animate-pulse shadow-lg shadow-sky-500/50" />
              <span className="text-sm font-semibold text-sky-400 tracking-wider">About Pavana Powers</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Your Trusted Partner for{' '}
              <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg">
                Electrical Solutions
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-400/90 leading-relaxed mb-8 max-w-xl text-justify">
              Pavana Powers Technologies is a specialized electrical solutions company focused on Surge Protection Devices (SPD), Grounding & Monitoring Devices (GMD), and Industrial Fuse Protection Solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" onClick={handleNavClick}>
                <Button variant="primary" size="lg" icon={FaArrowRight} className="shadow-xl shadow-sky-500/30">
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
                  className="group flex gap-6 p-7 rounded-3xl glass-dark border border-sky-500/20 hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-400"
                >
                  <span className="text-5xl font-black text-white/8 group-hover:text-sky-500/40 transition-colors duration-300 leading-none flex-shrink-0">
                    {item.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-sky-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                  </div>
                  <FaCircleCheck className="w-7 h-7 text-sky-500/30 group-hover:text-sky-400 group-hover:scale-110 flex-shrink-0 mt-1 transition-all duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProductsPreview() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-10 sm:py-12 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Products"
          title="Featured"
          highlight="Products"
          subtitle="Explore our range of premium electrical protection and solution products."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredProducts.map((product, index) => (
            <PreviewCard key={product.id} item={product} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="primary" size="lg" icon={FaArrowRight}>
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
    <section className="py-10 sm:py-12 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Services"
          title="Featured"
          highlight="Services"
          subtitle="End-to-end electrical solutions for industries."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredServices.map((service, index) => (
            <PreviewCard key={service.id} item={service} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="primary" size="lg" icon={FaArrowRight}>
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function MersenPartnership() {
  const [isHovered, setIsHovered] = useState(false);
  const partnershipStartYear = 2016;
  const partnershipYears = Math.max(0, new Date().getFullYear() - partnershipStartYear);

  const achievements = mersenAchievements;
  const benefits = mersenBenefits;

  return (
    <section className="py-10 sm:py-12 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-sky-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 opacity-30 blur-xl" />

              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full glass-dark border-2 border-sky-500/30 shadow-2xl flex flex-col items-center justify-center">
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-sky-500/30 to-cyan-500/30" />

                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
                      <FaAward className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </div>

                    <p className="text-6xl md:text-8xl font-bold text-white" style={{ textShadow: '0 0 30px rgba(56, 189, 248, 0.5)' }}>
                      {partnershipYears}
                    </p>
                    <p className="text-xl md:text-2xl text-white/80 mt-2 font-semibold">Years of Partnership</p>

                    <div className="mt-6 flex items-center justify-center gap-3">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent to-sky-400" />
                      <p className="text-sky-400 font-semibold tracking-widest text-sm">MERSEN & PAVANA</p>
                      <div className="h-px w-12 bg-gradient-to-l from-transparent to-sky-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-sky-500/20 mb-4">
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-sky-400">Authorised Mersen Partner</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                10 Years of
                <span className="text-gradient bg-gradient-to-r from-sky-500 to-cyan-500 block">
                  Trust & Partnership
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed text-justify">
                Pavana Powers Technologies is proud to be an authorised channel partner of Mersen, bringing you industry-leading electrical protection solutions.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="glass-dark rounded-2xl p-5 border border-sky-500/20">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
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
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <FaCircleCheck className="w-6 h-6 text-amber-400" />
                Key Achievements
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCircleCheck className="w-5 h-5 text-sky-400 flex-shrink-0" />
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

function HomeIndustries() {
  return (
    <section className="py-10 sm:py-12 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          badge="Industries We Serve"
          title="Powering"
          highlight="Diverse Industries"
          subtitle="We provide electrical protection solutions across a wide range of industries, ensuring safety and reliability for critical infrastructure."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group h-full"
              >
                  <div className="glass-dark border border-sky-500/20 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:border-sky-500/40 hover:shadow-glow h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center mb-3">
                    <Icon className="w-7 h-7 text-sky-400" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-white">
                    {industry.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function WhyChooseUs() {
  const features = whyChooseUsFeatures;
  return (
    <section className="py-10 sm:py-12 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-sky-500/20 mb-6">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-sky-400">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose
            <span className="text-gradient bg-gradient-to-r from-sky-500 to-cyan-500">
              {' '}Pavana Powers
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-justify">
            We work closely with our customers from selection stage to execution, providing practical and technically reliable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                className="h-full"
              >
                <div className="h-full relative group">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20 blur-xl`} />
                  <Card variant="glassDark" className="relative h-full p-6">
                    <div className="flex flex-col h-full">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 flex-grow leading-relaxed text-sm md:text-base whitespace-normal hyphens-auto break-words">{feature.desc}</p>
                    </div>
                  </Card>
                </div>
              </motion.div>
            );
          })}
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
      <ProductsPreview />
      <ServicesPreview />
      <HomeIndustries />
      <MersenPartnership />
      <WhyChooseUs />
    </>
  );
}
