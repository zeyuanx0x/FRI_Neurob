// File: pages/Home.tsx
import React from 'react';
import ChatInterface from '../components/ChatInterface';
import HighlightCard from '../components/HighlightCard';

const IndexPage: React.FC = () => (
  <main style={{ fontFamily: 'serif', background: '#fff', color: '#222', minHeight: '100vh' }}>
    {/* Header/Navbar */}
    <header className="border-b border-gray-200 py-6 mb-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <img src="/ICON.svg" alt="FRI Logo" className="h-10 mr-3" />
          <span className="font-bold text-xl">Fly Robot Interface (Neural)</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4">
          <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#abstract" className="text-gray-700 hover:text-blue-600">Abstract</a>
          <a href="#overview" className="text-gray-700 hover:text-blue-600">Project</a>
          <a href="#highlights" className="text-gray-700 hover:text-blue-600">Highlights</a>
          <a href="#team" className="text-gray-700 hover:text-blue-600">Team</a>
        </nav>
      </div>
    </header>

    {/* Hero Section */}
    <section id="home" className="text-center py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Fly Robot Interface (Neural)</h1>
      <p className="text-blue-600 text-lg sm:text-xl mb-6">NeuRob · Department of Bioengineering, Imperial College London</p>
      <a 
        href="https://github.com/zeyuanx0x/FRI_Neurob/blob/master/Neurob_Final_Report_02225375.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        View Our Final Report
      </a>
    </section>

    {/* Abstract Section */}
    <section id="abstract" className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">Abstract</h2>
      <p className="text-gray-700 leading-relaxed">
        We have developed a bio-inspired brain-computer interface system that uses visual neurons from blowflies (Calliphora vicina) to control wheeled robots in real time. This system converts H1 neuron optical flow signals into motion commands, mimicking how insects avoid obstacles.
      </p>
    </section>

    {/* Project Overview Section */}
    <section id="overview" className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
      <p className="text-gray-700 leading-relaxed">
        This project applies insect visual systems—specifically H1 neurons—toward robot control. We used real-time neural recordings to steer robots with more than 90% obstacle avoidance accuracy.
      </p>
    </section>

    {/* Technical Highlights Section */}
    <section id="highlights" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-12">Technical Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <HighlightCard
          title="Real-time Control"
          description="Using live H1 neuron recordings for immediate robot response"
        />
        <HighlightCard
          title="Dual H1 Integration"
          description="Mimicking binocular vision for enhanced perception"
        />
        <HighlightCard
          title="Custom Platform"
          description="3D-printed robot platform for optimal performance"
        />
        <HighlightCard
          title="Low-power System"
          description="Efficient optic-flow based collision avoidance"
        />
      </div>
    </section>

    {/* Team Section */}
    <section id="team" className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
      <p className="text-gray-700 leading-relaxed">
        Our interdisciplinary team combines expertise in neuroscience, robotics, and computer science to push the boundaries of bio-inspired control systems.
      </p>
    </section>

    {/* Chat Interface */}
    <ChatInterface />
  </main>
);

export default IndexPage;
