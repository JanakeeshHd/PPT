import { motion } from 'framer-motion';
import { company } from '../data/data';
import { WhatsAppIcon } from './Common';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-[#25D366] shadow-2xl shadow-[#25D366]/40 flex items-center justify-center"
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />
    </motion.a>
  );
}
