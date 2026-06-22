import { motion } from 'framer-motion';

export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  className = 'text-center mb-16',
  titleClassName = 'text-4xl md:text-5xl font-bold text-brand-white mb-6',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={className}
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-6">
        <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
        <span className="text-sm font-medium text-brand-primary">{badge}</span>
      </div>
      <h2 className={titleClassName}>
        {title}
        {highlight && (
          <span className="text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary">
            {' '}{highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="text-xl text-brand-grey max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
