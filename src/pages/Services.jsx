import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6';
import Button from '../components/Button';
import Container from '../components/Container';
import TextReveal from '../components/TextReveal';
import { services, pageHeroes } from '../data/websiteData';

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

export default function Services() {
  const hero = pageHeroes.services;

  return (
    <>
      <PageHero {...hero} />

      <section className="py-14 md:py-20 bg-slate-900 relative">
        <Container>
          <div className="space-y-16 md:space-y-20">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className={`${!isEven ? 'lg:order-2' : 'lg:order-1'} relative`}
                    >
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-[450px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-transparent to-slate-950/60"></div>
                      </div>
                    </motion.div>
                    <div className={`${!isEven ? 'lg:order-1' : 'lg:order-2'} space-y-8`}>
                          <h3 className="text-4xl font-extrabold text-white">{service.name}</h3>
                      <p className="text-2xl text-gray-300 leading-relaxed text-justify">{service.desc}</p>
                      <div>
                        <h4 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3 uppercase tracking-wider">
                          <FaCircleCheck className="w-8 h-8" />
                          Our Process
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {service.process.map((step, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                                <span className="text-lg font-extrabold text-cyan-400">{i + 1}</span>
                              </div>
                              <p className="text-white/90 text-sm">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-8 pt-4 border-t border-white/10">
                        <div>
                          <h4 className="text-lg font-bold text-emerald-400 mb-4 uppercase tracking-wider">Benefits</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <FaCircleCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span className="text-white/90">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-blue-400 mb-4 uppercase tracking-wider">Industries</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.industries.map((ind, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 text-sm font-semibold text-white/80 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-xl"
                              >
                                {ind}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="pt-4">
                        <Link to="/contact">
                          <Button variant="primary" icon={FaArrowRight} className="text-lg py-5 px-10 shadow-2xl shadow-cyan-500/30">
                            Get Started
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
