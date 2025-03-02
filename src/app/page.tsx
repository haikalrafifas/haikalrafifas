'use client';

import { motion } from 'framer-motion';
import Topbar from '@/components/layout/Topbar';
import Footer from '@/components/layout/Footer';
import SocialIcon from '@/components/common/icons/SocialIcon';

export default function Home() {
  const services = [
    {
      name: 'Web Development & Maintenance',
      description: 'Ranging from landing page, to full-stack Content Management System.',
    },
    {
      name: 'Web Scraping',
      description: 'Scrapes from sites and get the data you needed.',
    },
    {
      name: 'DevOps & IoT Integration',
      description: 'Deploy and integrate your app into production.',
    },
  ];

  const latestProjects = [
    {
      name: 'UFO Veteran Jakarta',
      description: 'A web application built with Next.js and TypeScript. It features real-time data visualization.',
      image: '',
    },
    {
      name: 'BuzzerGD',
      description: 'A mobile-first e-commerce site built with React and Node.js. It handles payments and inventory.',
      image: '',
    },
    {
      name: 'NeXus Econovision',
      description: 'A portfolio website using Next.js, showcasing various front-end and back-end projects.',
      image: '',
    },
  ];

  const latestBlogPosts = [
    {
      title: 'How to Build a Scalable App with Next.js',
      snippets: 'A detailed guide on scaling your application using Next.js and best practices for performance.',
      image: '',
    },
    {
      title: 'Optimizing React Applications',
      snippets: 'Learn how to optimize your React applications to improve loading times and user experience.',
      image: '',
    },
  ];

  return (
    <div className="">
      <Topbar />

      <main className="py-16 px-8 bg-gray-800">

        {/* Introduction and About Me */}
        <section className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-4"
          >
            Hey there,
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg text-gray-300 mb-8"
          >
            I&apos;m a passionate Software Engineer. Let&apos;s build something amazing together!
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg text-gray-400"
          >
            I specialize in Full-Stack Development, DevOps, and IoT Integration, to ensure seamless user experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex space-x-8 justify-center mt-6"
          >
            <SocialIcon platform="github" href="https://github.com/haikalrafifas" />
            <SocialIcon platform="linkedin" href="https://linkedin.com/haikalrafifas" />
            <SocialIcon platform="youtube" href="https://youtube.com/@gurumbelingofficial5276" />
            <SocialIcon platform="upwork" href="https://upwork.com/freelancers/~01bcd5356eff90cb60?mp_source=share" />
          </motion.div>
        </section>

        {/* Services */}
        <section className="py-16" id="/services">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                  <div key={index} className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-xl mb-2">{service.name}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </section>

        {/* Latest Projects */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">My Latest Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-mono">
              {latestProjects.map((project, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl mb-2">{project.name}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-16 bg-gray-900">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
            <div className="space-y-4">
              {latestBlogPosts.map((blog, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl mb-2">{blog.title}</h3>
                  <p className="text-gray-300">{blog.snippets}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
