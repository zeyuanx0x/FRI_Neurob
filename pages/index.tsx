import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import ChatInterface from '../components/ChatInterface';

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

  const techHighlights = [
    '使用真实昆虫神经元信号控制机器人',
    '实时光流响应，模拟自然避障反应',
    '双H1神经元融合，扩大感知视野',
    '自主设计3D打印平台，系统更轻更稳',
    '可扩展至更复杂环境下的避障系统',
  ];

  const objectives = [
    '重现以H1神经元控制机器人避障的实验',
    '提高避障准确率至90%以上',
    '设计更稳定轻便的机器人底盘',
    '集成双H1神经元信号，提升导航能力',
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <header>
        <TitleSection />
      </header>
      <main>
        <AbstractSection />
        <OverviewSection />
        <MotivationSection />
        <TechHighlightsSection />
        <ObjectivesSection />
        <ContributorsSection />
      </main>
      <footer className="text-center text-gray-500 py-8 border-t border-gray-200 mt-12 text-sm">
        © 2025 NeuRob Project, Imperial College London. All rights reserved.
      </footer>
      {/* AI Chat Box 悬浮按钮和弹窗 */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-80 h-[500px] shadow-2xl rounded-xl overflow-hidden bg-white border border-gray-200">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};

function TitleSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-10 px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2 font-serif">Fly Robot Interface (Neural) Krapp Lab</h1>
      <div className="text-lg md:text-2xl text-blue-700 font-medium">NeuRob · Department of Bioengineering, Imperial College London</div>
    </section>
  );
}

function AbstractSection() {
  return (
    <section className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-3 border-l-4 border-blue-600 pl-3 font-serif">Abstract</h2>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        我们开发了一种受生物启发的脑-机接口系统，使用吹蝇（Calliphora vicina）的视觉神经元控制轮式机器人，实现实时避障。该系统基于H1神经元对光流的敏感性，将神经信号转化为机器人运动指令，从而模拟昆虫的飞行导航能力。
      </p>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-3 border-l-4 border-blue-600 pl-3 font-serif">项目简介</h2>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        本项目探索如何将昆虫的视觉机制，尤其是H1神经元的运动编码能力，应用于机器人控制中。通过记录活体神经元信号并实时转换为控制命令，我们构建了一个避障精度达90%以上的脑-机接口平台。
      </p>
    </section>
  );
}

function MotivationSection() {
  return (
    <section className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-3 border-l-4 border-blue-600 pl-3 font-serif">研究动机</h2>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        相比传统相机或雷达系统，昆虫视觉系统更节能且更适应复杂环境。H1神经元能高效提取与碰撞相关的运动信息，是构建低功耗导航系统的理想蓝本。
      </p>
    </section>
  );
}

function TechHighlightsSection() {
  return (
    <section className="max-w-5xl mx-auto py-8 px-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3 font-serif">技术亮点</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {techHighlights.map((item, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg shadow-md p-5 flex items-center text-gray-800 hover:shadow-lg transition-all duration-200">
            <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="text-base font-medium">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ObjectivesSection() {
  return (
    <section className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-3 border-l-4 border-blue-600 pl-3 font-serif">项目目标</h2>
      <ul className="space-y-3">
        {objectives.map((obj, idx) => (
          <li key={idx} className="flex items-center text-gray-800 text-base md:text-lg">
            <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="font-medium">{obj}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContributorsSection() {
  return (
    <section className="max-w-5xl mx-auto py-8 px-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3 font-serif">团队成员</h2>
      <div className="flex flex-wrap gap-4">
        {contributors.map((c, idx) => (
          <div key={c.name} className={`bg-white border border-gray-200 rounded-lg shadow p-4 min-w-[160px] text-center ${c.role === 'Supervisor' ? 'border-blue-600' : ''}`}>
            <div className="text-lg font-bold text-gray-900 mb-1">{c.name}</div>
            <div className="text-sm text-blue-700 font-medium">{c.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home; 