import { motion } from 'framer-motion';
import Card from './Card';

export default function ProductCard({ product, index = 0, variant = 'preview' }) {
  const Icon = product.icon;
  const description = variant === 'preview' ? product.shortDesc : product.desc;

  if (variant === 'preview') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -8 }}
      >
        <Card variant="glassDark" className="h-full">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}>
            <Icon className="w-8 h-8 text-brand-white" />
          </div>
          <h3 className="text-xl font-bold text-brand-white mb-4">{product.name}</h3>
          <p className="text-brand-grey">{description}</p>
        </Card>
      </motion.div>
    );
  }

  return null;
}
