// File: pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import ChatInterface from '../components/ChatInterface';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';
import IconFRI from '../components/IconFRI';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const techHighlights = [
  'Real-time insect neuron signals for robot control',
  'Optical flow response simulating natural obstacle avoidance',
  'Dual H1 neuron fusion for expanded perception',
  'Custom 3D-printed platform for enhanced stability',
  'Scalable to complex obstacle avoidance systems',
];

const contributors = [
  { name: 'Prof. Holger Krapp', role: 'Supervisor' },
  { name: 'Dr. Jiaqi Huang', role: 'Supervisor' },
  { name: 'Zeyuan Xin', role: 'Project Member' },
  { name: 'Yuichiro Minamikawa', role: 'Project Member' },
  { name: 'Yi Zhang', role: 'Project Member' },
  { name: 'Changyu Hu', role: 'Project Member' },
  { name: 'Shuchang Zhang', role: 'Project Member' },
  { name: 'Wenjun Jiao', role: 'Project Member' },
  { name: 'Badriyah Islam', role: 'Project Member' },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 {...fadeInUp} className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Fly Robot Interface (Neural)
          </motion.h1>
          <motion.p {...fadeInUp} className="text-xl md:text-2xl text-blue-600 font-medium mb-8">
            NeuRob · Department of Bioengineering, Imperial College London
          </motion.p>
          <motion.div {...fadeInUp}>
            <a
              href="https://github.com/zeyuanx0x/FRI_Neurob/blob/master/Neurob_Final_Report_02225375.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Our Final Report
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Abstract Section */}
      <motion.section id="abstract" {...staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="section-title">
            <span className="section-title-bar"></span>
            Abstract
          </motion.h2>
          <motion.p {...fadeInUp} className="text-gray-700 leading-relaxed text-lg">
            We have developed a bio-inspired brain-computer interface system that uses visual neurons from blowflies (Calliphora vicina) to control wheeled robots in real time. This system converts H1 neuron optical flow signals into motion commands, mimicking how insects avoid obstacles.
          </motion.p>
        </div>
      </motion.section>

      {/* Project Overview Section */}
      <motion.section id="overview" {...staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="section-title">
            <span className="section-title-bar"></span>
            Project Overview
          </motion.h2>
          <motion.p {...fadeInUp} className="text-gray-700 leading-relaxed text-lg">
            This project applies insect visual systems—specifically H1 neurons—toward robot control. We used real-time neural recordings to steer robots with more than 90% obstacle avoidance accuracy.
          </motion.p>
        </div>
      </motion.section>

      {/* Technical Highlights Section */}
      <motion.section id="highlights" {...staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="section-title">
            <span className="section-title-bar"></span>
            Technical Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techHighlights.map((highlight, idx) => (
              <motion.div key={idx} {...fadeInUp} className="card flex items-center">
                <span className="h-6 w-6 text-blue-600 mr-3">
                  <IconFRI />
                </span>
                {highlight}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section id="team" {...staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="section-title">
            <span className="section-title-bar"></span>
            Team Members
          </motion.h2>

          <motion.div {...fadeInUp} className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Supervisors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contributors.filter(c => c.role === 'Supervisor').map((s, i) => (
                <motion.div key={i} {...fadeInUp} className="card border-2 border-blue-600">
                  <h4 className="text-lg font-bold text-gray-900">{s.name}</h4>
                  <p className="text-gray-600">{s.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Project Members</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {contributors.filter(c => c.role === 'Project Member').map((m, i) => (
                <motion.div key={i} {...fadeInUp} className="card">
                  <p className="text-gray-900 font-medium">{m.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 NeuRob Project, Imperial College London. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Chat Box */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-80 h-[500px] shadow-2xl rounded-xl overflow-hidden bg-white border border-gray-200">
          <ChatInterface />
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default Home;
