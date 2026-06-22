import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import { useLenis, scrollToTop } from './components/Common';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

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
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
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
