import { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  ...props
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const x = useSpring(0, { stiffness: 700, damping: 22 });
  const y = useSpring(0, { stiffness: 700, damping: 22 });

  const handleMouseMove = (e) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const distanceX = (mouseX - centerX) / 8;
      const distanceY = (mouseY - centerY) / 8;
      x.set(distanceX);
      y.set(distanceY);
      setPosition({ x: distanceX, y: distanceY });
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden tracking-tight focus:ring-offset-slate-950';
  
  const variants = {
    primary: 'bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 hover:from-sky-600 hover:via-cyan-600 hover:to-blue-700 text-white shadow-glow border-gradient',
    secondary: 'glass text-white hover:bg-white/15 border-sky-400/30 shadow-glow-secondary border-gradient',
    outline: 'border-2 border-sky-500 text-sky-400 hover:bg-sky-500/15 shadow-glow',
    ghost: 'text-sky-400 hover:bg-sky-500/15',
    glass: 'glass text-white hover:bg-white/15 border-sky-400/30 shadow-2xl border-gradient',
    accent: 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white shadow-glow border-gradient'
  };

  const sizes = {
    sm: 'px-6 py-3 text-sm rounded-3xl gap-2',
    md: 'px-8 py-4 text-base rounded-4xl gap-3',
    lg: 'px-10 py-5 text-lg rounded-4xl gap-3.5',
    xl: 'px-14 py-7 text-xl rounded-4xl gap-4'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={!disabled ? handleMouseMove : undefined}
      onMouseLeave={!disabled ? handleMouseLeave : undefined}
      style={{ x, y }}
      whileHover={!disabled ? { scale: 1.05, boxShadow: '0 0 60px rgba(14, 165, 233, 0.4)' } : {}}
      whileTap={!disabled ? { scale: 0.96 } : {}}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className} focus-visible:ring-4 focus-visible:ring-sky-400/50 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950`}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-cyan-400/15 to-emerald-400/20"
        style={{
          x: useTransform(x, (value) => -value * 4),
          y: useTransform(y, (value) => -value * 4),
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-shimmer" />
      
      <div className="relative z-10 flex items-center gap-2">
        {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" aria-hidden="true" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" aria-hidden="true" />}
      </div>
    </motion.button>
  );
}
