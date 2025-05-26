// File: pages/Home.tsx
import React from 'react';

const IndexPage: React.FC = () => (
  <div>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img src="/ICON.svg" alt="FRI Logo" width="40" height="40" className="me-2" />
          <span className="fw-bold">Fly Robot Interface (Neural)</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#abstract">Abstract</a></li>
            <li className="nav-item"><a className="nav-link" href="#overview">Project Overview</a></li>
            <li className="nav-item"><a className="nav-link" href="#highlights">Technical Highlights</a></li>
            <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section id="home" className="hero-section d-flex align-items-center justify-content-center text-center bg-gradient py-5" style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #fff 0%, #f3f4f6 100%)' }}>
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">Fly Robot Interface (Neural)</h1>
        <p className="lead text-primary mb-4">NeuRob · Department of Bioengineering, Imperial College London</p>
        <a href="https://github.com/zeyuanx0x/FRI_Neurob/blob/master/Neurob_Final_Report_02225375.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
          View Our Final Report
        </a>
      </div>
    </section>

    {/* Abstract Section */}
    <section id="abstract" className="py-5 bg-white">
      <div className="container">
        <h2 className="mb-4 section-title">Abstract</h2>
        <p className="fs-5 text-muted">
          We have developed a bio-inspired brain-computer interface system that uses visual neurons from blowflies (Calliphora vicina) to control wheeled robots in real time. This system converts H1 neuron optical flow signals into motion commands, mimicking how insects avoid obstacles.
        </p>
      </div>
    </section>

    {/* Project Overview Section */}
    <section id="overview" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4 section-title">Project Overview</h2>
        <p className="fs-5 text-muted">
          This project applies insect visual systems—specifically H1 neurons—toward robot control. We used real-time neural recordings to steer robots with more than 90% obstacle avoidance accuracy.
        </p>
      </div>
    </section>

    {/* Technical Highlights Section */}
    <section id="highlights" className="py-5 bg-white">
      <div className="container">
        <h2 className="mb-4 section-title">Technical Highlights</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <img src="/ICON.svg" alt="icon" width="32" height="32" className="me-3" />
                Real-time insect neuron signals for robot control
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <img src="/ICON.svg" alt="icon" width="32" height="32" className="me-3" />
                Optical flow response simulating natural obstacle avoidance
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <img src="/ICON.svg" alt="icon" width="32" height="32" className="me-3" />
                Dual H1 neuron fusion for expanded perception
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <img src="/ICON.svg" alt="icon" width="32" height="32" className="me-3" />
                Custom 3D-printed platform for enhanced stability
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <img src="/ICON.svg" alt="icon" width="32" height="32" className="me-3" />
                Scalable to complex obstacle avoidance systems
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section id="team" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4 section-title">Team Members</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-primary h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-1">Prof. Holger Krapp</h5>
                <p className="card-text text-muted">Supervisor</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-primary h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-1">Dr. Jiaqi Huang</h5>
                <p className="card-text text-muted">Supervisor</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">Zeyuan Xin</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">Yuichiro Minamikawa</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">Yi Zhang</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">Changyu Hu</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">Shuchang Zhang</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">Wenjun Jiao</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">Badriyah Islam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="footer bg-white border-top py-4 mt-5">
      <div className="container text-center">
        <span className="text-muted">© 2025 NeuRob Project, Imperial College London. All rights reserved.</span>
      </div>
    </footer>
  </div>
);

export default IndexPage;
