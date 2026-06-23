import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import Container from '../components/Container';
import TextReveal from '../components/TextReveal';
import { products, pageHeroes } from '../data/websiteData';

function PageHero({ badge, title, highlight, subtitle }) {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-dark border border-blue-500/30 mb-10 shadow-2xl"
        >
          <span className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></span>
          <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">{badge}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-white mb-8 leading-tight"
        >
          <TextReveal>{title}</TextReveal>
          <span className="block mt-3 text-gradient bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
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

export default function Products() {
  const hero = pageHeroes.products;

  return (
    <>
      <PageHero {...hero} />

      <section className="py-20 md:py-28 bg-slate-900 relative">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="h-full glass-dark border border-blue-500/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-glow transition-all duration-500 group relative">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-3 shadow-2xl group-hover:rotate-6 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                      </div>
                    </div>
                    <div className="p-8 space-y-6">
                      <p className="text-gray-300 leading-relaxed">{product.desc}</p>
                      <div>
                        <h4 className="text-base font-bold text-blue-400 mb-4 uppercase tracking-wider">Key Features</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-white/90">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {product.applications.map((app, i) => (
                            <span
                              key={i}
                              className="px-4 py-1.5 text-xs font-semibold text-white/80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                        <Link to="/contact">
                          <Button variant="primary" icon={ArrowRight} className="w-full">
                            Enquire Now
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
