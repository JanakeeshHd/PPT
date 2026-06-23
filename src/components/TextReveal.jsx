import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const BLOCK_TAGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div']);

export default function TextReveal({
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
