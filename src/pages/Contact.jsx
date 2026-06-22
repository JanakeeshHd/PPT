import { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Clock, Send, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import Container from '../components/Container';
import Input from '../components/Input';
import { TextReveal } from '../components/Common';
import { company, pageHeroes } from '../data/data';

export default function Contact() {
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
    <>
      <PageHero {...pageHeroes.contact} />

      <section className="py-20 bg-brand-surface relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-brand-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-brand-secondary/5 rounded-full blur-3xl" />
        </div>
        <Container>
          <div className="relative z-10 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-dark border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-brand-white mb-8">
                  <TextReveal>Contact Information</TextReveal>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-brand-white mb-1">Office Address</h4>
                      <p className="text-brand-grey leading-relaxed">
                        #543, 14th Main,<br />
                        HMT Layout Mathikere, Bangalore,<br />
                        Karnataka 560054, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-secondary to-brand-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-brand-white mb-1">Phone</h4>
                      <p className="text-brand-grey leading-relaxed">{company.phone}</p>
                      <p className="text-brand-grey leading-relaxed">{company.phoneSecondary}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg font-semibold text-brand-white mb-1">Email</h4>
                      <a
                        href={company.emailHref}
                        className="text-brand-grey leading-relaxed break-all hover:text-brand-primary transition-colors duration-300"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-brand-white mb-1">WhatsApp</h4>
                      <p className="text-brand-grey leading-relaxed">{company.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-secondary to-brand-accent flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-brand-white mb-1">Business Hours</h4>
                      <p className="text-brand-grey leading-relaxed">{company.businessHoursDetailed.weekdays}</p>
                      <p className="text-brand-grey leading-relaxed">{company.businessHoursDetailed.saturday}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl h-80">
                <div className="w-full h-full bg-gradient-to-br from-brand-surface to-brand-background flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                    <p className="text-brand-grey">Google Map Integration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-10">
              <div className="glass-dark border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-brand-white mb-6">
                  <TextReveal>Send us a Message</TextReveal>
                </h3>
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
                <h3 className="text-2xl font-bold text-brand-white mb-6">
                  <TextReveal>Request a Quote</TextReveal>
                </h3>
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
          </div>
        </Container>
      </section>
    </>
  );
}
