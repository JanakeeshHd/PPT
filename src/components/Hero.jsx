import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, PhoneCall, ChevronDown } from 'lucide-react';
import Button from './Button';
import TextReveal from './TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const orb1X = useTransform(cursorXSpring, (value) => -value / 30);
  const orb1Y = useTransform(cursorYSpring, (value) => -value / 30);
  const orb2X = useTransform(cursorXSpring, (value) => value / 40);
  const orb2Y = useTransform(cursorYSpring, (value) => value / 40);
  const orb3X = useTransform(cursorXSpring, (value) => value / 20);
  const orb3Y = useTransform(cursorYSpring, (value) => value / 20);

  const [particles] = useState(() =>
    Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 1,
      duration: Math.random() * 25 + 10,
      delay: Math.random() * 15,
      color: i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'accent',
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
        opacity: 0.4,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
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
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-brand-background flex items-center py-16 lg:py-20"
    >
      <div className="absolute inset-0 z-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="hero-bg-orb absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"
          style={{ x: orb1X, y: orb1Y }}
        />
        <motion.div
          className="hero-bg-orb absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-3xl"
          style={{ x: orb2X, y: orb2Y }}
        />
        <motion.div
          className="hero-bg-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-3xl"
          style={{ x: orb3X, y: orb3Y }}
        />

        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="grid-line absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-20"
              style={{ top: `${(i + 1) * 8}%` }}
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="grid-line absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent opacity-20"
              style={{ left: `${(i + 1) * 8}%` }}
            />
          ))}
        </div>

        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${
              particle.color === 'primary' ? 'bg-blue-400' :
              particle.color === 'secondary' ? 'bg-cyan-400' : 'bg-amber-400'
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [0, -40, 0],
              x: [0, (Math.random() - 0.5) * 30, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: 700 + i * 250,
              height: 700 + i * 250,
              borderColor: i % 2 === 0 ? 'rgba(59, 130, 246, 0.25)' : 'rgba(6, 182, 212, 0.25)',
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 5,
              delay: i * 0.6,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
        <motion.div
          className="hero-label inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark border border-white/10 mb-8"
        >
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50" />
          <span className="text-sm font-semibold text-blue-400 letter-spacing-wider">Authorised Mersen Partner</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-brand-white mb-6 leading-tight">
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

        <p className="text-lg sm:text-xl text-brand-grey max-w-3xl mx-auto leading-relaxed text-balance mb-10">
          <TextReveal as="span" immediate delay={0.6}>
            As an authorised Mersen channel partner, we deliver industry-leading surge protection, grounding & monitoring, and industrial fuses to safeguard your operations.
          </TextReveal>
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="accent" size="xl" icon={ArrowRight} className="shadow-lg shadow-amber-500/30">
            Explore Products
          </Button>
          <Button variant="glass" size="xl" icon={PhoneCall}>
            Get a Quote
          </Button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-3 text-white/50">
          <span className="text-sm tracking-widest">Scroll to explore</span>
          <ChevronDown className="w-8 h-8" />
        </div>
      </motion.div>
    </section>
  );
}
