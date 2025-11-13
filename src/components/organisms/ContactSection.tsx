'use client';

import { motion } from 'framer-motion';
import ContactUsButton from '@/components/atoms/ContactUsButton';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="/contact" className="relative py-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-block mb-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring', delay: 0.2 }}
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.471L3 21l1.471-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
            </svg>
          </div>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Get in Touch!
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Have questions or want to collaborate?
          Don't hesitate to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.instagram.com/haikalrafif.as?utm_source=contact_section&utm_medium=referral&utm_campaign=button&utm_content=instagram&utm_id=haikalrafifas&utm_term=follow_instagram&utm_placement=website&utm_traffic=organic&utm_expid=.HaikalRafifAs-_-&utm_referrer=https%3A%2F%2Fgokal.my.id%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-white text-green-600 font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaInstagram className="text-green-600 text-2xl" />
            <span>Follow Instagram</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/haikalrafifas?utm_source=contact_button&utm_medium=referral&utm_campaign=button&utm_content=profile&utm_id=haikalrafifas&utm_term=get_in_touch&utm_placement=website&utm_traffic=organic&utm_expid=.HaikalRafifAs-_-&utm_referrer=https%3A%2F%2Fgokal.my.id%2F"
            className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-green-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaLinkedin className="text-white text-2xl" />
            <span>Send Message</span>
          </a>
        </div>

        {/* Additional info */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/80 text-sm">
            
          </p>
        </div>
      </motion.div>

      <ContactUsButton />
    </section>
  );
}
