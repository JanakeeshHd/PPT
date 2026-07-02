import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Lenis from '@studio-freight/lenis';
import { company } from './data/websiteData';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';

function useLenis() {
  const lenisRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let frameId = 0;

    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);
    lenisRef.current = lenis;
    window.__lenis = lenis;
    return () => {
      cancelAnimationFrame(frameId);
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);
  return lenisRef.current;
}

function scrollToTop() {
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(0, { immediate: true });
  else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

function ScrollProgress() {
  const scrollRef = useRef(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressRef.current) progressRef.current.style.width = `${progress}%`;
      scrollRef.current = scrollTop;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transition-all duration-150"
      />
    </div>
  );
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(0, { smooth: true });
    else window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full glass-dark border border-white/10 flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-500/50 transition-all duration-300 z-40 group"
      aria-label="Back to top"
    >
      <FaArrowUp className="w-5 h-5 text-white/70 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
    </button>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => scrollToTop(), [pathname]);
  return null;
}

function MainLayout() {
  return (
    <div className="min-h-screen bg-brand-background flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-300"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="flex-grow pt-20" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}

function AppContent() {
  useLenis();
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}
