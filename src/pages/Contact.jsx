import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageSquare, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Container from '../components/Container';
import TextReveal from '../components/TextReveal';
import { company, pageHeroes } from '../data/websiteData';

function PageHero({ badge, title, highlight, subtitle }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-mesh">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-500/12 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/12 rounded-full blur-3xl" />
      </div>
      <Container className="relative z-10 w-full text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark border border-sky-500/30 mb-6 shadow-lg">
          <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" />
          <span className="text-sm font-semibold text-sky-300 letter-spacing-wider">{badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-5 leading-tight">
          <TextReveal as="span" immediate className="block">
            {title}
          </TextReveal>
          <TextReveal as="span" immediate delay={0.3} className="block text-gradient-hero mt-2 sm:mt-3">
            {highlight}
          </TextReveal>
        </h1>
        <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed text-balance mb-8">
          <TextReveal as="span" immediate delay={0.6}>
            {subtitle}
          </TextReveal>
        </p>
      </Container>
    </section>
  );
}

export default function Contact() {
  const hero = pageHeroes.contact;

  return (
    <>
      <PageHero {...hero} />

      <section className="py-10 sm:py-12 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-sky-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>
        <Container>
          <div className="relative z-10 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-dark border border-sky-500/20 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8">
                  <TextReveal>Contact Information</TextReveal>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Office Address</h4>
                      <a
                        href={company.addressHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 leading-relaxed hover:text-sky-400 transition-colors duration-300"
                      >
                        {company.address}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                      <a
                        href={company.phoneHref}
                        className="block text-gray-400 leading-relaxed hover:text-sky-400 transition-colors duration-300"
                      >
                        {company.phone}
                      </a>
                      <a
                        href={company.phoneSecondaryHref}
                        className="block text-gray-400 leading-relaxed hover:text-sky-400 transition-colors duration-300"
                      >
                        {company.phoneSecondary}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                      <a
                        href={company.emailHref}
                        className="text-gray-400 leading-relaxed break-all hover:text-sky-400 transition-colors duration-300"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-sky-500 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">WhatsApp</h4>
                      <a
                        href={company.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 leading-relaxed hover:text-sky-400 transition-colors duration-300"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Business Hours</h4>
                      <p className="text-gray-400 leading-relaxed">{company.businessHoursDetailed?.weekdays}</p>
                      <p className="text-gray-400 leading-relaxed">{company.businessHoursDetailed?.saturday}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-dark border border-sky-500/20 rounded-3xl overflow-hidden shadow-2xl h-80 relative group">

                <a
                  href={company.addressHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl px-4 py-2 text-sm font-medium text-white shadow-soft transition-colors duration-300 hover:text-cyan-300"
                >
                  <span>Open directions</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d515.3117696150708!2d77.55697398539216!3d13.031335091731462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d60cf514f89%3A0x24b497344ffd115b!2sPavana%20Powers%20Technologies!5e1!3m2!1sen!2sus!4v1782881051775!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Exact location of Pavana Powers Technologies"
                  className="h-full w-full"
                ></iframe>
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
