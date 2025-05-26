// File: pages/Home.tsx
import React from 'react';

const IndexPage: React.FC = () => (
  <main style={{ fontFamily: 'serif', background: '#fff', color: '#222', minHeight: '100vh' }}>
    {/* Header/Navbar */}
    <header style={{ borderBottom: '1px solid #eee', padding: '1.5rem 0', marginBottom: '2rem', background: '#fafbfc' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/ICON.svg" alt="FRI Logo" style={{ height: 40, marginRight: 12 }} />
          <span style={{ fontWeight: 700, fontSize: 22 }}>Fly Robot Interface (Neural)</span>
        </div>
        <nav>
          <a href="#home" style={{ margin: '0 1rem', color: '#222', textDecoration: 'none' }}>Home</a>
          <a href="#abstract" style={{ margin: '0 1rem', color: '#222', textDecoration: 'none' }}>Abstract</a>
          <a href="#overview" style={{ margin: '0 1rem', color: '#222', textDecoration: 'none' }}>Project</a>
          <a href="#highlights" style={{ margin: '0 1rem', color: '#222', textDecoration: 'none' }}>Highlights</a>
          <a href="#team" style={{ margin: '0 1rem', color: '#222', textDecoration: 'none' }}>Team</a>
        </nav>
      </div>
    </header>

    {/* Hero Section */}
    <section id="home" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', padding: '2rem 1rem 2rem 1rem' }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>Fly Robot Interface (Neural)</h1>
      <p style={{ color: '#2563eb', fontSize: 20, marginBottom: 24 }}>NeuRob · Department of Bioengineering, Imperial College London</p>
      <a href="https://github.com/zeyuanx0x/FRI_Neurob/blob/master/Neurob_Final_Report_02225375.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: '#2563eb', padding: '0.75rem 1.5rem', borderRadius: 6, textDecoration: 'none', fontWeight: 500, fontSize: 16 }}>View Our Final Report</a>
    </section>

    {/* Abstract Section */}
    <section id="abstract" style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
      <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Abstract</h2>
      <p style={{ fontSize: 17, lineHeight: 1.7 }}>
        We have developed a bio-inspired brain-computer interface system that uses visual neurons from blowflies (Calliphora vicina) to control wheeled robots in real time. This system converts H1 neuron optical flow signals into motion commands, mimicking how insects avoid obstacles.
      </p>
    </section>

    {/* Project Overview Section */}
    <section id="overview" style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
      <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Project Overview</h2>
      <p style={{ fontSize: 17, lineHeight: 1.7 }}>
        This project applies insect visual systems—specifically H1 neurons—toward robot control. We used real-time neural recordings to steer robots with more than 90% obstacle avoidance accuracy.
      </p>
    </section>

    {/* Technical Highlights Section */}
    <section id="highlights" style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
      <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Technical Highlights</h2>
      <ul style={{ fontSize: 17, lineHeight: 2, paddingLeft: 24 }}>
        <li>Real-time insect neuron signals for robot control</li>
        <li>Optical flow response simulating natural obstacle avoidance</li>
        <li>Dual H1 neuron fusion for expanded perception</li>
        <li>Custom 3D-printed platform for enhanced stability</li>
        <li>Scalable to complex obstacle avoidance systems</li>
      </ul>
    </section>

    {/* Team Section */}
    <section id="team" style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
      <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Team Members</h2>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 500, fontSize: 18 }}>Supervisors</div>
        <ul style={{ fontSize: 17, lineHeight: 2, paddingLeft: 24, margin: 0 }}>
          <li>Prof. Holger Krapp</li>
          <li>Dr. Jiaqi Huang</li>
        </ul>
      </div>
      <div>
        <div style={{ fontWeight: 500, fontSize: 18 }}>Project Members</div>
        <ul style={{ fontSize: 17, lineHeight: 2, paddingLeft: 24, margin: 0 }}>
          <li>Zeyuan Xin</li>
          <li>Yuichiro Minamikawa</li>
          <li>Yi Zhang</li>
          <li>Changyu Hu</li>
          <li>Shuchang Zhang</li>
          <li>Wenjun Jiao</li>
          <li>Badriyah Islam</li>
        </ul>
      </div>
    </section>

    {/* Footer */}
    <footer style={{ borderTop: '1px solid #eee', marginTop: 40, padding: '1.5rem 0', background: '#fafbfc', textAlign: 'center', fontSize: 15, color: '#888' }}>
      © 2025 NeuRob Project, Imperial College London. All rights reserved.
    </footer>
  </main>
);

export default IndexPage;
