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

  const x = useSpring(0, { stiffness: 600, damping: 25 });
  const y = useSpring(0, { stiffness: 600, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const distanceX = (mouseX - centerX) / 10;
      const distanceY = (mouseY - centerY) / 10;
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

  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden tracking-tight focus:ring-offset-dark-950';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-secondary-400 hover:from-primary-600 hover:to-secondary-500 text-white focus:ring-primary-500 shadow-glow',
    secondary: 'glass text-white hover:bg-white/12 border-white/25 shadow-glow-secondary',
    outline: 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 focus:ring-primary-500 shadow-glow',
    ghost: 'text-primary-400 hover:bg-primary-500/10 focus:ring-primary-500',
    glass: 'glass text-white hover:bg-white/12 border-white/25 shadow-2xl',
    accent: 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-glow-accent'
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm rounded-2xl gap-2',
    md: 'px-7 py-3.5 text-base rounded-3xl gap-2.5',
    lg: 'px-9 py-4.5 text-lg rounded-4xl gap-3',
    xl: 'px-12 py-6 text-xl rounded-4xl gap-4'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={!disabled ? handleMouseMove : undefined}
      onMouseLeave={!disabled ? handleMouseLeave : undefined}
      style={{ x, y }}
      whileHover={!disabled ? { scale: 1.03 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className} focus-visible:ring-4 focus-visible:ring-primary-400/50 focus-visible:ring-offset-4 focus-visible:ring-offset-dark-950`}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-400/15 via-secondary-400/15 to-accent-400/15"
        style={{
          x: useTransform(x, (value) => -value * 3),
          y: useTransform(y, (value) => -value * 3),
        }}
      />
      
      <div className="relative z-10 flex items-center gap-2">
        {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" aria-hidden="true" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" aria-hidden="true" />}
      </div>
    </motion.button>
  );
}
