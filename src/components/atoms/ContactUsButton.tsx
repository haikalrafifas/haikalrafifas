'use client';

import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

export default function ContactUsButton() {
  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-[99999]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 1,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
    >
      <a
        href="https://www.linkedin.com/in/haikalrafifas?utm_source=contact_button&utm_medium=referral&utm_campaign=button&utm_content=profile&utm_id=haikalrafifas&utm_term=get_in_touch&utm_placement=website&utm_traffic=organic&utm_expid=.HaikalRafifAs-_-&utm_referrer=https%3A%2F%2Fgokal.my.id%2F"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        
        {/* Main Button */}
        <motion.div
          className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin className="text-white text-3xl" />
        </motion.div>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Get in Touch!
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900"></span>
        </span>
      </a>
    </motion.div>
  );
}
