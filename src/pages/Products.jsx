import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6';
import Button from '../components/Button';
import Container from '../components/Container';
import TextReveal from '../components/TextReveal';
import { products, pageHeroes } from '../data/websiteData';

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

export default function Products() {
  const hero = pageHeroes.products;

  return (
    <>
      <PageHero {...hero} />

      <section className="py-14 md:py-20 bg-slate-900 relative">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
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
                        <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                      </div>
                    </div>
                    <div className="p-8 space-y-6">
                      <p className="text-gray-300 leading-relaxed text-justify">{product.desc}</p>
                      <div>
                        <h4 className="text-base font-bold text-blue-400 mb-4 uppercase tracking-wider">Key Features</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <FaCircleCheck className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
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
                          <Button variant="primary" icon={FaArrowRight} className="w-full">
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
