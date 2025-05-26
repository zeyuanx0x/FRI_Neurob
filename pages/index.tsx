import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import ChatInterface from '../components/ChatInterface';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';

interface Contributor {
  name: string;
  role: 'Supervisor' | 'Project Member';
}

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

  const contributors: Contributor[] = [
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

  const techHighlights: string[] = [
    'Real-time insect neuron signals for robot control',
    'Optical flow response simulating natural obstacle avoidance',
    'Dual H1 neuron fusion for expanded perception',
    'Custom 3D-printed platform for enhanced stability',
    'Scalable to complex obstacle avoidance systems',
  ];

  const objectives: string[] = [
    'Replicate H1 neuron-based robot obstacle avoidance experiments',
    'Achieve obstacle avoidance accuracy above 90%',
    'Design a more stable and lightweight robot chassis',
    'Integrate dual H1 neuron signals for improved navigation',
  ];

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
          <motion.h1 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4"
          >
            Fly Robot Interface (Neural)
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-xl md:text-2xl text-blue-600 font-medium mb-8"
          >
            NeuRob · Department of Bioengineering, Imperial College London
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
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
      <motion.section 
        id="abstract"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            variants={fadeInUp}
            className="section-title"
          >
            <span className="section-title-bar"></span>
            Abstract
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-700 leading-relaxed text-lg"
          >
            We have developed a bio-inspired brain-computer interface system that utilizes visual neurons from blowflies (Calliphora vicina) to control wheeled robots for real-time obstacle avoidance. The system leverages the H1 neuron's sensitivity to optical flow, converting neural signals into robot motion commands to simulate insect flight navigation capabilities.
          </motion.p>
        </div>
      </motion.section>

      {/* Project Overview Section */}
      <motion.section 
        id="overview"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            variants={fadeInUp}
            className="section-title"
          >
            <span className="section-title-bar"></span>
            Project Overview
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-700 leading-relaxed text-lg"
          >
            This project explores the application of insect visual mechanisms, particularly the motion encoding capabilities of H1 neurons, in robot control. By recording live neuron signals and converting them into control commands in real-time, we have constructed a brain-computer interface platform achieving over 90% obstacle avoidance accuracy.
          </motion.p>
        </div>
      </motion.section>

      {/* Technical Highlights Section */}
      <motion.section 
        id="highlights"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            variants={fadeInUp}
            className="section-title"
          >
            <span className="section-title-bar"></span>
            Technical Highlights
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {techHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">{highlight}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        id="team"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            variants={fadeInUp}
            className="section-title"
          >
            <span className="section-title-bar"></span>
            Team Members
          </motion.h2>
          
          {/* Supervisors */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Supervisors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contributors.filter(c => c.role === 'Supervisor').map((supervisor, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="card border-2 border-blue-600"
                >
                  <h4 className="text-lg font-bold text-gray-900">{supervisor.name}</h4>
                  <p className="text-gray-600">{supervisor.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Members */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Project Members</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {contributors.filter(c => c.role === 'Project Member').map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="card"
                >
                  <p className="text-gray-900 font-medium">{member.name}</p>
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

      {/* AI Chat Box 悬浮按钮和弹窗 */}
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