'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';
import CardCarousel from '@/components/molecules/CardCarousel';
import professionalExperiencesData from '@/database/mocks/professional-experiences';

export default function ProfessionalExperiencesSection() {
  const [professionalExperiences] = useState(professionalExperiencesData);

  return (
    <section id="/professional-experiences" className="bg-white py-20 md:py-32 px-6 md:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp({})}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
              Highlights of
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-green-600">Professional Experiences</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {/* Short Description */}
          </p>
        </div>

        {/* Carousel */}
        <CardCarousel contents={professionalExperiences} />
      </motion.div>
    </section>
  );
}
