'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';
import CountUp from 'react-countup';

export default function HeroSection() {
  return (
    <section
      id="/"
      role="banner"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* ================= LEFT SIDE (BRAND CONTENT) ================= */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-12 lg:py-20">
          {/* Logo and University Branding */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8"
            {...fadeInUp({ duration: 0.8, initialY: 40 })}
          >
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.jpg"
                alt="My Logo"
                className="w-16 h-16 sm:w-20 sm:h-20"
                width={80}
                height={80}
                priority
              />
            </div>
          </motion.div>

          {/* Main Brand Title */}
          <motion.div className="mb-6" {...fadeInUp({ delay: 0.1, duration: 0.8, initialY: 40 })}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight mb-2 text-center md:text-left">
              <span className="block uppercase">Haikal&nbsp;
                <span className="text-green-600">Rafif</span>
              </span>
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <div className="h-1 bg-green-600 flex-1 max-w-20"></div>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 tracking-wide text-center md:text-left">
                Software Engineer & Full-Stack Developer
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            {...fadeInUp({ delay: 0.4, duration: 0.8, initialY: 40 })}
          >
            <a
              href="#/about"
              aria-label="Get to know more about me"
              className="group inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>About Me</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#/contact"
              aria-label="Contact me for collaboration"
              className="group inline-flex items-center justify-center bg-white hover:bg-gray-50 text-green-600 font-bold py-4 px-8 rounded-xl border-2 border-green-600 hover:border-green-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Contact Me</span>
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.471L3 21l1.471-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
              </svg>
            </a>
          </motion.div>

          {/* Key Features/Stats */}
          <motion.div
            className="flex flex-wrap gap-5 md:gap-6 mt-12 border-t border-gray-200"
            {...fadeInUp({ delay: 0.5, duration: 0.8, initialY: 40 })}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                <CountUp end={10} duration={5} suffix="+" />
              </div>
              <div className="text-sm text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                <CountUp end={15} duration={5} suffix="+"  />
              </div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                <CountUp end={3} duration={5} suffix="+" />
              </div>
              <div className="text-sm text-gray-600">Years of Experience</div>
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative flex-1 h-[50vh] sm:h-[60vh] lg:h-auto overflow-hidden hidden md:block">
          <div className="absolute inset-0 w-full h-full flex justify-center items-center">
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative w-70 h-70 mx-auto rounded-full border-1 border-gray-400 overflow-hidden"
              {...fadeInUp({ delay: 0.1, duration: 0.8, initialY: 40 })}
            >
              <Image
                src="/images/person.png"
                alt="Personal Branding Image"
                className="object-cover w-full h-full"
                width={200}
                height={200}
                priority
              />
            </motion.div>
            {/* Gradient overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20 lg:from-black/50 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
