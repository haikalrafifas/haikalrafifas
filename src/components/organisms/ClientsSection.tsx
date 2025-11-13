'use client';

import { useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp } from './animations';
import useIsMobileView from '@/hooks/use-is-mobile-view';
import clientsData from '@/database/mocks/clients';

export default function ClientsSection() {
  const baseVelocity = 50;
  const isMobileView = useIsMobileView();

  const clientLogos = clientsData.map(client => client.image);

  const baseX = useRef(0);
  const x = useRef(0);
  const containerRef: any = useRef(null);

  // Create a continuous motion effect
  useAnimationFrame((t, delta) => {
    const velocity = isMobileView ? baseVelocity * 0.8 : baseVelocity;
    const moveBy = (velocity * delta) / 1000;
    x.current -= moveBy;
    if (containerRef.current) {
      const width = containerRef.current.scrollWidth / 2;
      if (Math.abs(x.current) >= width) {
        x.current = 0; // Reset when half of the content slides off
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <section id="/clients" className="bg-white px-6 pt-10 pb-20 md:py-20 md:px-8 overflow-hidden">
      <motion.div
        {...fadeInUp({ delay: 0.2, duration: 0.8, initialY: 30 })}
        className="text-center mb-12"
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
              Testimony
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted <span className="text-green-600">By</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Trusted By
        </h2>
        <p className="text-gray-600 mt-2">
          Organizations and companies I've collaborated with
        </p> */}
      </motion.div>

      {/* Infinite sliding logo carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-10 md:gap-16 will-change-transform"
        >
          {/* Double the logos to create seamless infinite effect */}
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div
              key={index}
              // className="flex-shrink-0 w-28 md:w-32 h-16 relative md:grayscale md:hover:grayscale-0 transition duration-300"
              className="flex-shrink-0 w-28 md:w-32 h-16 relative transition duration-300"
            >
              <Image
                src={logo}
                alt="Client logo"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
