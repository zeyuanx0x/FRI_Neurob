import React from 'react';
import Navbar from '../components/Navbar';
import ChatInterface from '../components/ChatInterface';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';

const techHighlights = [
  'Real-time insect neuron signals for robot control',
  'Optical flow response simulating natural obstacle avoidance',
  'Dual H1 neuron fusion for expanded perception',
  'Custom 3D-printed platform for enhanced stability',
  'Scalable to complex obstacle avoidance systems',
];

const supervisors = [
  'Prof. Holger Krapp',
  'Dr. Jiaqi Huang',
];
const members = [
  'Zeyuan Xin',
  'Yuichiro Minamikawa',
  'Yi Zhang',
  'Changyu Hu',
  'Shuchang Zhang',
  'Wenjun Jiao',
  'Badriyah Islam',
];

const ICON = (
  <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <path d="M518.456494 504.897856m-193.694829 0a193.69483 193.69483 0 1 0 387.389659 0 193.69483 193.69483 0 1 0-387.389659 0Z" fill="#E9EAEB"></path>
    <path d="M666.955864 453.245902h-32.282472v-25.825978h19.369483l52.943254-77.477932h82.643127v25.825978h-69.730139zM660.499369 491.984868h142.042876v25.825977h-142.042876z" fill="#2c2c2c" className="selected"></path>
    <path d="M789.629256 362.854981m-38.738966 0a38.738966 38.738966 0 1 0 77.477932 0 38.738966 38.738966 0 1 0-77.477932 0Z" fill="#ffffff" className=""></path>
    <path d="M789.629256 414.506936c-28.408575 0-51.651955-23.24338-51.651955-51.651955s23.24338-51.651955 51.651955-51.651955 51.651955 23.24338 51.651955 51.651955-23.24338 51.651955-51.651955 51.651955z m0-77.477932c-14.204288 0-25.825977 11.62169-25.825977 25.825977s11.62169 25.825977 25.825977 25.825977 25.825977-11.62169 25.825977-25.825977-11.62169-25.825977-25.825977-25.825977zM789.629256 659.85372h-82.643127l-51.651955-77.477932h-20.660782v-25.825977h34.86507l50.360655 77.477932h69.730139z" fill="#2c2c2c" className="selected"></path>
    <path d="M789.629256 646.940731m-38.738966 0a38.738966 38.738966 0 1 0 77.477932 0 38.738966 38.738966 0 1 0-77.477932 0Z" fill="#ffffff" className=""></path>
    <path d="M789.629256 698.592686c-28.408575 0-51.651955-23.24338-51.651955-51.651955s23.24338-51.651955 51.651955-51.651954 51.651955 23.24338 51.651955 51.651954-23.24338 51.651955-51.651955 51.651955z m0-77.477932c-14.204288 0-25.825977 11.62169-25.825977 25.825977s11.62169 25.825977 25.825978 25.825978 25.825977-11.62169 25.825977-25.825978-11.62169-25.825977-25.825977-25.825977z" fill="#2c2c2c" className="selected"></path>
    <path d="M802.542245 504.897856m-38.738966 0a38.738966 38.738966 0 1 0 77.477932 0 38.738966 38.738966 0 1 0-77.477932 0Z" fill="#ffffff" className=""></path>
    <path d="M802.542245 556.549811c-28.408575 0-51.651955-23.24338-51.651955-51.651955s23.24338-51.651955 51.651955-51.651954 51.651955 23.24338 51.651954 51.651954-23.24338 51.651955-51.651954 51.651955z m0-77.477932c-14.204288 0-25.825977 11.62169-25.825978 25.825977s11.62169 25.825977 25.825978 25.825978 25.825977-11.62169 25.825977-25.825978-11.62169-25.825977-25.825977-25.825977zM673.412358 770.905422l-82.643127-123.964691h-7.747793v-25.825977h20.660781l91.68222 135.586381z" fill="#2c2c2c" className="selected"></path>
    <path d="M686.325347 763.157629m-38.738966 0a38.738966 38.738966 0 1 0 77.477932 0 38.738966 38.738966 0 1 0-77.477932 0Z" fill="#ffffff" className=""></path>
    <path d="M686.325347 814.809584c-28.408575 0-51.651955-23.24338-51.651955-51.651955s23.24338-51.651955 51.651955-51.651954 51.651955 23.24338 51.651954 51.651954-23.24338 51.651955-51.651954 51.651955z m0-77.477932c-14.204288 0-25.825977 11.62169-25.825978 25.825977s11.62169 25.825977 25.825978 25.825978 25.825977-11.62169 25.825977-25.825978-11.62169-25.825977-25.825977-25.825977z" fill="#2c2c2c" className="selected"></path>
    <path d="M428.065574 207.899117c-41.321564 0-76.186633 27.117276-86.517024 64.564944-51.651955 1.291299-94.264817 50.360656-94.264817 109.760403 0 5.165195 0 9.039092 1.291299 14.204288-37.447667 18.078184-65.856242 65.856242-65.856243 121.382093 0 36.156368 11.62169 68.43884 28.408575 91.682219-2.582598 12.912989-3.873897 27.117276-2.582597 41.321564 6.456494 60.691047 55.525851 103.303909 108.469104 98.138714 14.204288 37.447667 52.943253 65.856242 98.138714 65.856242 56.81715 0 103.303909-43.904161 103.303909-96.847415V298.290038c0-49.069357-40.030265-90.390921-90.39092-90.390921z" fill="#ffffff" className=""></path>
    <path d="M415.152585 827.722573c-46.486759 0-87.808323-25.825977-105.886507-64.564944-55.525851 1.291299-105.886507-46.486759-112.343001-109.760403-1.291299-12.912989-1.291299-27.117276 1.291299-40.030265-18.078184-25.825977-28.408575-59.399748-28.408575-94.264817 0-56.81715 25.825977-107.177806 64.564943-129.129887v-6.456494c0-63.273644 42.612863-114.925599 98.138714-121.382093 15.495586-38.738966 54.234552-65.856242 95.556116-65.856243 56.81715 0 103.303909 46.486759 103.303909 103.30391v419.672131c0 59.399748-51.651955 108.469105-116.216898 108.469105zM326.052963 736.040353l3.873897 9.039092c12.912989 33.57377 46.486759 56.81715 85.225725 56.81715 50.360656 0 90.390921-37.447667 90.390921-83.934426V298.290038c0-42.612863-34.865069-77.477932-77.477932-77.477932-33.57377 0-64.564943 23.24338-74.895334 55.525851l-2.582598 9.039092h-9.039092c-45.19546 1.291299-81.351828 45.19546-81.351829 96.847415 0 3.873897 0 7.747793 1.291299 11.62169l1.291299 9.039092-9.039092 3.873896c-34.865069 15.495586-58.108449 60.691047-58.108449 109.760404 0 32.282472 9.039092 61.982346 25.825977 83.934426l3.873897 5.165196-1.291299 6.456494c-2.582598 11.62169-3.873897 24.534678-2.582598 37.447667 6.456494 52.943253 49.069357 91.682219 94.264818 86.517024h10.33039z" fill="#2c2c2c" className="selected"></path>
    <path d="M428.065574 401.593947c-56.81715 0-103.303909-46.486759-103.303909-103.303909 0-10.330391 1.291299-19.369483 3.873896-29.699874l24.534679 7.747793c-2.582598 7.747793-2.582598 14.204288-2.582598 21.952081 0 42.612863 34.865069 77.477932 77.477932 77.477932v25.825977zM337.674653 533.306431c-11.62169 0-21.952081-2.582598-32.282471-9.039092l12.912988-21.95208c23.24338 14.204288 50.360656-2.582598 68.43884-23.24338 20.660782-24.534678 49.069357-38.738966 74.895334-38.738966 20.660782 0 38.738966 9.039092 52.943254 24.534678 6.456494 7.747793 11.62169 15.495586 15.495586 23.24338l-23.243379 10.330391c-2.582598-6.456494-6.456494-12.912989-11.62169-18.078184-9.039092-10.330391-20.660782-15.495586-33.573771-15.495587-19.369483 0-40.030265 11.62169-55.525851 29.699874-20.660782 25.825977-45.19546 38.738966-68.43884 38.738966zM501.669609 351.233291c-37.447667 0-71.021438-23.24338-85.225725-61.982345l24.534678-9.039092c11.62169 32.282472 42.612863 50.360656 74.895335 42.612862l5.165195 25.825978c-7.747793 2.582598-12.912989 2.582598-19.369483 2.582597zM439.687264 717.962169l-24.534679-9.039092c15.495586-43.904161 59.399748-68.43884 104.595208-59.399748l-5.165195 25.825977c-32.282472-7.747793-61.982346 10.330391-74.895334 42.612863z" fill="#2c2c2c" className="selected"></path>
    <path d="M324.761665 414.506936h-25.825978c0-33.57377 30.991173-56.81715 61.982346-64.564944l6.456494 24.534679c-20.660782 6.456494-42.612863 20.660782-42.612862 40.030265zM322.179067 672.766709c-30.991173-7.747793-61.982346-30.991173-61.982346-64.564944h25.825978c0 19.369483 21.952081 33.57377 41.321563 38.738966l-5.165195 25.825978z" fill="#2c2c2c" className="selected"></path>
    <path d="M313.139975 772.196721c-9.039092-16.786885-14.204288-34.865069-14.204288-52.943253 0-56.81715 45.19546-103.303909 103.303909-108.469105v-1.291299c0-30.991173 37.447667-64.564943 64.564944-64.564943v25.825977c-12.912989 0-38.738966 23.24338-38.738966 38.738966v25.825978h-12.912989c-50.360656 0-90.390921 37.447667-90.39092 83.934426 0 14.204288 3.873897 28.408575 11.621689 40.030265l-23.243379 12.912988zM260.196721 569.462799v-25.825977c18.078184 0 32.282472-14.204288 32.282472-32.282471s-14.204288-32.282472-32.282472-32.282472v-25.825977c32.282472 0 58.108449 25.825977 58.108449 58.108449s-25.825977 58.108449-58.108449 58.108448zM518.456494 427.419924h38.738966v25.825978h-38.738966zM583.021438 427.419924h25.825977v25.825978h-25.825977zM583.021438 556.549811h25.825977v25.825977h-25.825977zM518.456494 556.549811h38.738966v25.825977h-38.738966zM518.456494 621.114754h38.738966v25.825977h-38.738966zM518.456494 491.984868h64.564944v25.825977h-64.564944zM608.847415 491.984868h25.825977v25.825977h-25.825977z" fill="#2c2c2c" className="selected"></path>
  </svg>
);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollProgress />
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="pt-28 pb-16 bg-gradient-to-b from-white to-gray-50 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-serif">Fly Robot Interface (Neural)</h1>
        <p className="text-xl md:text-2xl text-blue-700 font-medium mb-8">NeuRob · Department of Bioengineering, Imperial College London</p>
        <a href="https://github.com/zeyuanx0x/FRI_Neurob/blob/master/Neurob_Final_Report_02225375.pdf" target="_blank" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
          View Our Final Report
          <span className="ml-2 -mr-1">{ICON}</span>
        </a>
      </section>
      {/* Abstract Section */}
      <section id="abstract" className="max-w-3xl mx-auto py-12 px-4 bg-white rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><span className="w-1 h-8 bg-blue-600 mr-3 rounded-full"></span>Abstract</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          We have developed a bio-inspired brain-computer interface system that utilizes visual neurons from blowflies (Calliphora vicina) to control wheeled robots for real-time obstacle avoidance. The system leverages the H1 neuron's sensitivity to optical flow, converting neural signals into robot motion commands to simulate insect flight navigation capabilities.
        </p>
      </section>
      {/* Project Overview Section */}
      <section id="overview" className="max-w-3xl mx-auto py-12 px-4 bg-gray-50 rounded-xl shadow mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><span className="w-1 h-8 bg-blue-600 mr-3 rounded-full"></span>Project Overview</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          This project explores the application of insect visual mechanisms, particularly the motion encoding capabilities of H1 neurons, in robot control. By recording live neuron signals and converting them into control commands in real-time, we have constructed a brain-computer interface platform achieving over 90% obstacle avoidance accuracy.
        </p>
      </section>
      {/* Technical Highlights Section */}
      <section id="highlights" className="max-w-5xl mx-auto py-12 px-4 bg-white rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center"><span className="w-1 h-8 bg-blue-600 mr-3 rounded-full"></span>Technical Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techHighlights.map((highlight, idx) => (
            <div key={idx} className="card flex items-center">
              <span className="h-6 w-6 text-blue-600 mr-3">{ICON}</span>
              {highlight}
            </div>
          ))}
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="max-w-5xl mx-auto py-12 px-4 bg-gray-50 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center"><span className="w-1 h-8 bg-blue-600 mr-3 rounded-full"></span>Team Members</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Supervisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supervisors.map((name, idx) => (
              <div key={idx} className="card border-2 border-blue-600 text-center"><div className="text-lg font-bold text-gray-900">{name}</div></div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Members</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {members.map((name, idx) => (
              <div key={idx} className="card text-center"><div className="text-gray-900 font-medium">{name}</div></div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="text-center text-gray-500 py-8 border-t border-gray-200 mt-12 text-sm">
        © 2025 NeuRob Project, Imperial College London. All rights reserved.
      </footer>
      {/* Floating Chat Box */}
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