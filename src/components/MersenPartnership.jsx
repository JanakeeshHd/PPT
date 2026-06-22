import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CheckCircle, Zap, Award, Target, Shield } from 'lucide-react';

import { mersenAchievements, mersenBenefits } from '../data/data';

const achievements = mersenAchievements;
const benefits = mersenBenefits;

export default function MersenPartnership() {
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

  return (
    <section className="py-32 bg-brand-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Glow Orbs */}
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
        
        {/* Floating Elements */}
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
          {/* Left: 3D Badge */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); x.set(0); y.set(0); }}
            className="flex justify-center"
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative"
            >
              {/* Outer Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 opacity-30 blur-xl"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Main Badge */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Badge Circle */}
                <div className="absolute inset-0 rounded-full glass-dark border-2 border-white/20 shadow-2xl flex flex-col items-center justify-center">
                  {/* Inner Gradient */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30" />
                  
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center"
                      animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Award className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </motion.div>
                    
                    {/* Years */}
                    <motion.p
                      className="text-6xl md:text-8xl font-bold text-white"
                      style={{ textShadow: '0 0 30px rgba(14, 165, 233, 0.5)' }}
                    >
                      10
                    </motion.p>
                    <p className="text-xl md:text-2xl text-white/80 mt-2 font-semibold">Years of Partnership</p>
                    
                    {/* Mersen & Pavana Text */}
                    <div className="mt-6 flex items-center justify-center gap-3">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-400" />
                      <p className="text-primary-400 font-semibold tracking-widest text-sm">MERSEN & PAVANA</p>
                      <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-400" />
                    </div>
                  </div>
                </div>
                
                {/* Rotating Ring */}
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

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Header */}
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

            {/* Benefits */}
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

            {/* Achievements */}
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
