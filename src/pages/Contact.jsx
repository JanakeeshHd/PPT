import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageSquare, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Container from '../components/Container';
import TextReveal from '../components/TextReveal';
import { company, pageHeroes } from '../data/websiteData';

function PageHero({ badge, title, highlight, subtitle }) {
  return (
    <section className="pt-32 pb-20 bg-brand-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-3xl" />
      </div>
      <Container className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-dark border border-white/10 mb-8">
          <span className="w-3 h-3 bg-brand-primary rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-brand-primary letter-spacing-wider">{badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-brand-white mb-6 leading-tight">
          {title}
          <span className="text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary block mt-2">
            {highlight}
          </span>
        </h1>
        <p className="text-xl text-brand-grey max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      </Container>
    </section>
  );
}

export default function Contact() {
  const hero = pageHeroes.contact;

  return (
    <>
      <PageHero {...hero} />

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

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
