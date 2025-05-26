import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-16">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="sm:text-center lg:text-left"
                >
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Brain-Computer</span>
                    <span className="block text-primary-600">Interface Research</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Advancing the frontier of neural engineering through innovative research
                    in brain-computer interfaces, machine learning, and neurotechnology.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-md shadow"
                    >
                      <a
                        href="#research"
                        className="btn-primary"
                      >
                        Our Research
                      </a>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-3 sm:mt-0 sm:ml-3"
                    >
                      <a
                        href="#demos"
                        className="btn-secondary"
                      >
                        View Demos
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </main>
            </div>
          </div>
          
          {/* Background Animation */}
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="h-56 w-full bg-gradient-to-r from-primary-400 to-primary-600 sm:h-72 md:h-96 lg:w-full lg:h-full">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="research" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:text-center"
          >
            <h2 className="section-title">Research Areas</h2>
            <p className="section-subtitle">
              Advancing Neural Technology
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-10"
          >
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: 'Neural Signal Processing',
                  description: 'Advanced algorithms for real-time processing and analysis of neural signals.',
                },
                {
                  title: 'Machine Learning Integration',
                  description: 'State-of-the-art ML models for improved BCI performance and adaptability.',
                },
                {
                  title: 'Hardware Development',
                  description: 'Custom hardware solutions for high-quality neural signal acquisition.',
                },
                {
                  title: 'Clinical Applications',
                  description: 'Translating research into practical applications for healthcare.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="card p-6">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {/* Icon placeholder */}
                    </div>
                    <div className="ml-16">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demos Section */}
      <section id="demos" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title">Interactive Demos</h2>
            <p className="section-subtitle">
              Experience our research through interactive demonstrations and visualizations
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: 'Real-time EEG Signal Visualization',
                description: 'Live demonstration of our EEG signal processing pipeline.',
                category: 'Signal Processing',
              },
              {
                title: 'BCI Control Interface',
                description: 'Demonstration of our brain-computer interface controlling a virtual environment.',
                category: 'Control Systems',
              },
              {
                title: 'Neural Network Training',
                description: 'Visualization of neural network training process for BCI applications.',
                category: 'Machine Learning',
              },
            ].map((demo) => (
              <motion.div
                key={demo.title}
                variants={fadeInUp}
                className="card"
              >
                <div className="p-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {demo.category}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{demo.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{demo.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">
              Meet the researchers and scientists behind our innovative work
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                name: 'Dr. Jane Smith',
                role: 'Principal Investigator',
                bio: 'Leading research in neural signal processing and BCI applications.',
                image: 'https://via.placeholder.com/150',
              },
              {
                name: 'Dr. John Doe',
                role: 'Research Scientist',
                bio: 'Specializing in hardware development and signal acquisition systems.',
                image: 'https://via.placeholder.com/150',
              },
            ].map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="card text-center"
              >
                <div className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-primary-600">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Get in touch with our research team
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 max-w-lg mx-auto"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 