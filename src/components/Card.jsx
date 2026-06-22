import { motion } from 'framer-motion';

export default function Card({
  children,
  variant = 'default',
  className = '',
  hover = true,
  ...props
}) {
  const baseClasses = 'rounded-4xl p-8 transition-all duration-500';
  
  const variants = {
    default: 'bg-brand-surface border border-brand-border shadow-xl',
    glass: 'glass shadow-glow',
    glassDark: 'glass-dark text-white shadow-4xl',
    elevated: 'bg-brand-surface shadow-2xl hover:shadow-4xl',
    gradient: 'bg-gradient-to-br from-brand-surface to-brand-background border border-brand-border shadow-2xl'
  };

  return (
    <motion.div
      whileHover={hover ? { 
        y: -12, 
        scale: 1.015,
        boxShadow: '0 35px 80px -20px rgba(0, 0, 0, 0.5)' 
      } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
