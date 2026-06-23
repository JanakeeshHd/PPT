import { useState } from 'react';
import { Send, ChevronRight } from 'lucide-react';
import Button from './Button';

function Input({
  label,
  className = '',
  icon: Icon,
  error,
  ...props
}) {
  const baseClasses = 'w-full px-6 py-4 rounded-2xl border border-white/10 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all duration-300 bg-white/5 text-brand-white placeholder-brand-grey/50';
  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium text-brand-white">{label}</label>}
      <div className="relative">
        {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-grey" />}
        <input
          className={`${baseClasses} ${Icon ? 'pl-12' : ''} ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [quoteFormData, setQuoteFormData] = useState({
    company: '',
    product: '',
    quantity: '',
    requirements: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your quote request! We will contact you shortly.');
  };

  return (
    <div className="space-y-10">
      <div className="glass-dark border border-white/10 rounded-3xl p-8 shadow-2xl">
        <h3 className="text-2xl font-bold text-brand-white mb-6">Send us a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Your Name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              required
            />
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
            />
            <Input
              label="Subject"
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="How can we help you?"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-white mb-2">Your Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your requirements..."
              className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-brand-white placeholder-brand-grey/50 focus:outline-none focus:border-brand-primary transition-all resize-none"
              required
            />
          </div>
          <Button type="submit" variant="accent" size="lg" icon={Send} className="w-full md:w-auto">
            Send Message
          </Button>
        </form>
      </div>

      <div className="glass-dark border border-white/10 rounded-3xl p-8 shadow-2xl">
        <h3 className="text-2xl font-bold text-brand-white mb-6">Request a Quote</h3>
        <form onSubmit={handleQuoteSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Company Name"
              type="text"
              value={quoteFormData.company}
              onChange={(e) => setQuoteFormData({ ...quoteFormData, company: e.target.value })}
              placeholder="Your Company"
              required
            />
            <Input
              label="Product / Service"
              type="text"
              value={quoteFormData.product}
              onChange={(e) => setQuoteFormData({ ...quoteFormData, product: e.target.value })}
              placeholder="e.g. Surge Protection Device"
              required
            />
          </div>
          <Input
            label="Quantity"
            type="text"
            value={quoteFormData.quantity}
            onChange={(e) => setQuoteFormData({ ...quoteFormData, quantity: e.target.value })}
            placeholder="Required quantity"
          />
          <div>
            <label className="block text-sm font-medium text-brand-white mb-2">Specific Requirements</label>
            <textarea
              value={quoteFormData.requirements}
              onChange={(e) => setQuoteFormData({ ...quoteFormData, requirements: e.target.value })}
              placeholder="Describe your specific requirements..."
              className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-brand-white placeholder-brand-grey/50 focus:outline-none focus:border-brand-primary transition-all resize-none"
            />
          </div>
          <Button type="submit" variant="primary" size="lg" icon={ChevronRight} className="w-full md:w-auto">
            Request Quote
          </Button>
        </form>
      </div>
    </div>
  );
}
