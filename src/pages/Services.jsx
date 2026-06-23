import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import Container from '../components/Container';
import TextReveal from '../components/TextReveal';
import { services, pageHeroes } from '../data/websiteData';

function PageHero({ badge, title, highlight, subtitle }) {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-dark border border-cyan-500/30 mb-10 shadow-2xl"
        >
          <span className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></span>
          <span className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">{badge}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-white mb-8 leading-tight"
        >
          <TextReveal>{title}</TextReveal>
          <span className="block mt-3 text-gradient bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400">
            <TextReveal delay={0.3}>{highlight}</TextReveal>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </Container>
    </section>
  );
}

export default function Services() {
  const hero = pageHeroes.services;

  return (
    <>
      <PageHero {...hero} />

      <section className="py-20 md:py-28 bg-slate-900 relative">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="relative"
                    >
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-transparent to-slate-950/60"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-10">
                          <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-2xl group-hover:rotate-12 transition-transform duration-400`}>
                            <Icon className="w-12 h-12 text-white" />
                          </div>
                          <h3 className="text-4xl font-extrabold text-white">{service.name}</h3>
                        </div>
                      </div>
                    </motion.div>
                    <div className="space-y-8">
                      <p className="text-2xl text-gray-300 leading-relaxed">{service.desc}</p>
                      <div>
                        <h4 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3 uppercase tracking-wider">
                          <CheckCircle2 className="w-8 h-8" />
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
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
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
                          <Button variant="primary" icon={ArrowRight} className="text-lg py-5 px-10 shadow-2xl shadow-cyan-500/30">
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
