'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';
import CardCarousel from '@/components/molecules/CardCarousel';

import postsData from '@/database/mocks/posts';

export default function PostsSection() {
  const [posts] = useState(postsData);

  return (
    <section id="/posts" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 md:py-32 px-6 md:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-20"></div>
      
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
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
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
              All of
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-purple-600">Posts</span>
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {/* Short description */}
          </p>
        </div>

        {/* Carousel */}
        <CardCarousel contents={posts} />

        {/* CTA Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>See All Posts</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
