import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/data';

export default function ProductsPreview() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-32 bg-brand-surface relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-brand-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Products"
          title="Featured"
          highlight="Products"
          subtitle="Explore our range of premium electrical protection and solution products."
        />

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} variant="preview" />
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="accent" size="lg" icon={ArrowRight}>
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
