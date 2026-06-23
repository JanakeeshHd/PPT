import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, PhoneCall, ChevronDown, Zap, Shield, Lightbulb } from 'lucide-react';
import Button from './Button';
import TextReveal from './TextReveal';
import heroImage from '../assets/images/hero.png';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const orb1X = useTransform(cursorXSpring, (value) => -value / 25);
  const orb1Y = useTransform(cursorYSpring, (value) => -value / 25);
  const orb2X = useTransform(cursorXSpring, (value) => value / 35);
  const orb2Y = useTransform(cursorYSpring, (value) => value / 35);
  const orb3X = useTransform(cursorXSpring, (value) => value / 15);
  const orb3Y = useTransform(cursorYSpring, (value) => value / 15);

  const [particles] = useState(() =>
    Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 1,
      duration: Math.random() * 30 + 15,
      delay: Math.random() * 20,
      color: i % 3 === 0 ? 'sky' : i % 3 === 1 ? 'cyan' : 'emerald',
    }))
  );

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      cursorX.set(e.clientX - rect.left - rect.width / 2);
      cursorY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray('.grid-line');
      gsap.to(lines, {
        opacity: 0.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
      });

      gsap.fromTo(
        '.hero-label',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.hero-buttons',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.4 }
      );

      gsap.to('.hero-bg-orb', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden flex items-center py-16 lg:py-20 bg-mesh"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Subtle Dark Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-slate-900/50 to-slate-950/60" />
      </div>

      <div className="absolute inset-0 z-0 bg-grid-animated pointer-events-none opacity-25" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Orbs */}
        <motion.div
          className="hero-bg-orb absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-sky-500/25 rounded-full blur-3xl"
          style={{ x: orb1X, y: orb1Y }}
        />
        <motion.div
          className="hero-bg-orb absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-cyan-400/20 rounded-full blur-3xl"
          style={{ x: orb2X, y: orb2Y }}
        />
        <motion.div
          className="hero-bg-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/18 rounded-full blur-3xl"
          style={{ x: orb3X, y: orb3Y }}
        />

        {/* Grid Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="grid-line absolute w-full h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-25"
              style={{ top: `${(i + 1) * 7}%` }}
            />
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="grid-line absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent opacity-25"
              style={{ left: `${(i + 1) * 7}%` }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${
              particle.color === 'sky' ? 'bg-sky-400' :
              particle.color === 'cyan' ? 'bg-cyan-400' : 'bg-emerald-400'
            } shadow-lg`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              boxShadow: particle.color === 'sky' ? '0 0 10px rgba(56, 189, 248, 0.5)' :
                          particle.color === 'cyan' ? '0 0 10px rgba(34, 211, 238, 0.5)' :
                          '0 0 10px rgba(52, 211, 153, 0.5)'
            }}
            animate={{
              opacity: [0.15, 0.9, 0.15],
              y: [0, -50, 0],
              x: [0, (Math.random() - 0.5) * 40, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Pulsing Rings */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: 750 + i * 280,
              height: 750 + i * 280,
              borderColor: i % 2 === 0 ? 'rgba(56, 189, 248, 0.3)' : 'rgba(34, 211, 238, 0.3)',
            }}
            animate={{
              scale: [1, 1.9, 1],
              opacity: [0.35, 0, 0.35],
            }}
            transition={{
              duration: 6,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Floating Icons */}
        <motion.div
          className="absolute top-1/4 left-1/6 text-sky-400/40"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Zap size={32} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/5 text-cyan-400/40"
          animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Shield size={36} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/6 text-emerald-400/40"
          animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <Lightbulb size={28} />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
        <motion.div
          className="hero-label inline-flex items-center gap-3 px-7 py-4 rounded-full glass-dark border border-sky-500/30 mb-8"
        >
          <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" />
          <span className="text-sm font-semibold text-sky-300 letter-spacing-wider">Authorised Mersen Partner</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
          <TextReveal as="span" immediate className="block">
            Protecting Critical Infrastructure with
          </TextReveal>
          <TextReveal
            as="span"
            immediate
            delay={0.3}
            className="block text-gradient-hero mt-2 sm:mt-3"
          >
            Premium Electrical Solutions
          </TextReveal>
        </h1>

        <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed text-balance mb-12">
          <TextReveal as="span" immediate delay={0.6}>
            As an authorised Mersen channel partner, we deliver industry-leading surge protection, grounding & monitoring, and industrial fuses to safeguard your operations.
          </TextReveal>
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button variant="primary" size="xl" icon={ArrowRight}>
            Explore Products
          </Button>
          <Button variant="glass" size="xl" icon={PhoneCall}>
            Get a Quote
          </Button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-3 text-white/70">
          <span className="text-sm tracking-widest">Scroll to explore</span>
          <ChevronDown className="w-8 h-8" />
        </div>
      </motion.div>
    </section>
  );
}
