import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  BookOpen,
  PenTool,
  Filter,
  Truck,
  Headphones,
  CheckCircle,
} from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: 'Study & Analysis',
    icon: BookOpen,
    description: 'We conduct a thorough study and analysis of your electrical system requirements and challenges.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    id: 2,
    title: 'Design & Engineering',
    icon: PenTool,
    description: 'Our expert engineers design custom solutions tailored to your specific needs.',
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    id: 3,
    title: 'Solution Selection',
    icon: Filter,
    description: 'We help you select the optimal combination of products and technologies.',
    color: 'from-accent-500 to-accent-600',
  },
  {
    id: 4,
    title: 'Supply & Installation',
    icon: Truck,
    description: 'We deliver and install the complete solution at your facility with precision.',
    color: 'from-primary-500 to-secondary-500',
  },
  {
    id: 5,
    title: 'Ongoing Support',
    icon: Headphones,
    description: 'Our support team is available 24/7 to assist you with any needs.',
    color: 'from-secondary-500 to-accent-500',
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={containerRef} className="py-32 bg-brand-surface relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-6">
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-300">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our
            <span className="text-gradient bg-gradient-to-r from-primary-400 to-secondary-400 block">
              Process
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A systematic approach to delivering exceptional electrical protection solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 -translate-x-1/2"
            style={{
              height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
            }}
          />

          {/* Timeline Items */}
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
                  {/* Content */}
                  <div className={`flex-1 md:pr-8 md:pl-8 ${isEven ? 'md:text-right' : ''} mb-8 md:mb-0`}>
                    <div className="glass-dark rounded-3xl p-8 border border-white/10 shadow-xl">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto md:mx-0`}>
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-white/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25, delay: index * 0.1 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center border-4 border-dark-900 shadow-xl shadow-primary-500/30`}
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
