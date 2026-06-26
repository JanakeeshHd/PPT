import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageSquare, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Container from '../components/Container';
import TextReveal from '../components/TextReveal';
import { company, pageHeroes } from '../data/websiteData';

function PageHero({ badge, title, highlight, subtitle }) {
  return (
    <section className="pt-24 pb-16 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-dark border border-sky-500/20 mb-8">
          <span className="w-3 h-3 bg-sky-500 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-sky-400 letter-spacing-wider">{badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
          {title}
          <span className="text-gradient bg-gradient-to-r from-sky-500 to-cyan-500 block mt-2">
            {highlight}
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}

export default function Contact() {
  const hero = pageHeroes.contact;

  return (
    <>
      <PageHero {...hero} />

      <section className="py-12 sm:py-16 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-sky-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>
        <Container>
          <div className="relative z-10 grid lg:grid-cols-3 gap-10">
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

              <div className="glass-dark border border-sky-500/20 rounded-3xl overflow-hidden shadow-2xl h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.211999905253!2d77.56100607420136!3d13.02204491411516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e13541333b%3A0x6591f8632678695!2sPavana%20Powers%20Technologies!5e0!3m2!1sen!2sin!4v1719376053344!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map of Pavana Powers Technologies"
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
