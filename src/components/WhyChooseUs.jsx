import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Zap } from 'lucide-react';
import Card from './Card';
import { whyChooseUsFeatures } from '../data/data';

const features = whyChooseUsFeatures;

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
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20 blur-xl`} />
        
        {/* Card */}
        <Card variant="glassDark" className="relative h-full">
          {children}
        </Card>
      </div>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-brand-surface relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Bento Grid */}
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
                    {/* Animated Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 flex-grow">
                      {feature.desc}
                    </p>

                    {/* Arrow indicator for large cards */}
                    {feature.size === 'large' && (
                      <motion.div
                        className="mt-6 flex items-center gap-2 text-primary-400"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut'
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
