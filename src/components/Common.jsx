import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

const BLOCK_TAGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div']);

export function scrollToTop() {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }
}

export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;
    window.__lenis = lenis;

    return () => {
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  return lenisRef.current;
}

export function TextReveal({
  children,
  className = '',
  once = true,
  delay = 0,
  staggerChildren = 0.1,
  as: Component = 'span',
  immediate = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: immediate ? '0px' : '-100px' });
  const mainControls = useAnimation();
  const displayClass = BLOCK_TAGS.has(Component) ? 'block w-full' : 'inline-block';

  useEffect(() => {
    if (immediate || isInView) {
      mainControls.start('visible');
    }
  }, [immediate, isInView, mainControls]);

  const words = children?.toString().split(' ') || [];

  return (
    <Component ref={ref} className={`overflow-hidden ${displayClass} ${className}`}>
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay, staggerChildren }}
        className="inline-block"
      >
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            className="inline-block mr-[0.25em]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: idx * staggerChildren }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

export function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
