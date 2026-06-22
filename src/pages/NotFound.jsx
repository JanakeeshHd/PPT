import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Zap } from 'lucide-react';
import Button from '../components/Button';
import Container from '../components/Container';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 bg-dark-950">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20 mb-10">
            <Zap className="w-20 h-20 text-primary-400" />
          </div>

          <h1 className="text-9xl font-extrabold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent mb-4">
            404
          </h1>

          <h2 className="text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>

          <p className="text-xl text-white/60 mb-10 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Link to="/">
            <Button variant="accent" size="lg" icon={Home}>
              Return Home
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
