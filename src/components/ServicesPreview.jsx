import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';
import { getFeaturedServices } from '../data/data';

export default function ServicesPreview() {
  const featuredServices = getFeaturedServices();

  return (
    <section className="py-32 bg-brand-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-brand-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Services"
          title="Featured"
          highlight="Services"
          subtitle="End-to-end electrical solutions for industries."
        />

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} variant="preview" />
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="accent" size="lg" icon={ArrowRight}>
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
