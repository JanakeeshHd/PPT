import { motion } from 'framer-motion';

export default function Card({
  children,
  variant = 'default',
  className = '',
  hover = true,
  ...props
}) {
  const baseClasses = 'rounded-[40px] p-8 transition-all duration-500 relative overflow-hidden';
  
  const variants = {
    default: 'bg-slate-900/80 border border-sky-500/20 shadow-xl',
    glass: 'glass shadow-glow',
    glassDark: 'glass-dark text-white shadow-4xl',
    elevated: 'bg-slate-900/80 shadow-2xl hover:shadow-4xl',
    gradient: 'bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-sky-500/20 shadow-2xl'
  };

  return (
    <motion.div
      whileHover={hover ? { 
        y: -15, 
        scale: 1.02,
        boxShadow: '0 40px 100px -25px rgba(14, 165, 233, 0.25)' 
      } : {}}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className={`${baseClasses} ${variants[variant]} ${className} border-gradient`}
      {...props}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
