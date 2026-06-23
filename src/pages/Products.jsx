import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Container from '../components/Container';
import TextReveal from '../components/TextReveal';
import { products, pageHeroes } from '../data/websiteData';

function PageHero({ badge, title, highlight, subtitle }) {
  return (
    <section className="pt-32 pb-20 bg-brand-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-3xl" />
      </div>
      <Container className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-dark border border-white/10 mb-8">
          <span className="w-3 h-3 bg-brand-primary rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-brand-primary letter-spacing-wider">{badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-brand-white mb-6 leading-tight">
          {title}
          <span className="text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary block mt-2">
            {highlight}
          </span>
        </h1>
        <p className="text-xl text-brand-grey max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      </Container>
    </section>
  );
}

export default function Products() {
  const hero = pageHeroes.products;

  return (
    <>
      <PageHero {...hero} />

      <section className="py-20 bg-brand-surface relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-brand-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-brand-secondary/5 rounded-full blur-3xl" />
        </div>
        <Container>
          <div className="relative z-10 grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-full glass-dark border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-glow transition-all duration-500 group">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-brand-white mb-4">
                      <TextReveal>{product.name}</TextReveal>
                    </h3>

                    <p className="text-brand-grey mb-6 leading-relaxed">{product.desc}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-brand-primary mb-3 tracking-wider uppercase">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 w-2 h-2 rounded-full bg-brand-primary flex-shrink-0" />
                            <span className="text-sm text-brand-white/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-brand-secondary mb-3 tracking-wider uppercase">
                        Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 text-xs font-medium text-brand-white/70 bg-white/5 rounded-full"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-brand-accent mb-3 tracking-wider uppercase">
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 w-2 h-2 rounded-full bg-brand-accent flex-shrink-0" />
                            <span className="text-sm text-brand-white/80">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/contact">
                      <Button variant="accent" icon={ArrowRight} className="w-full">
                        Enquire Now
                      </Button>
                    </Link>
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
