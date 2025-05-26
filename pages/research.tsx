import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface ResearchItem {
  id: string;
  title: string;
  description: string;
  type: 'paper' | 'prototype' | 'patent';
  link: string;
  date: string;
  tags: string[];
}

const Research: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const researchItems: ResearchItem[] = [
    {
      id: '1',
      title: 'Real-time EEG Signal Processing for BCI Applications',
      description: 'A novel approach to real-time EEG signal processing using deep learning techniques.',
      type: 'paper',
      link: '#',
      date: '2023-12',
      tags: ['EEG', 'Deep Learning', 'Real-time Processing'],
    },
    {
      id: '2',
      title: 'Neural Interface Prototype v2.0',
      description: 'Next-generation neural interface prototype with improved signal quality and reduced latency.',
      type: 'prototype',
      link: '#',
      date: '2023-11',
      tags: ['Hardware', 'Signal Quality', 'Low Latency'],
    },
    {
      id: '3',
      title: 'Method for Neural Signal Enhancement',
      description: 'Patent-pending method for enhancing neural signal quality in noisy environments.',
      type: 'patent',
      link: '#',
      date: '2023-10',
      tags: ['Signal Enhancement', 'Noise Reduction'],
    },
    // Add more research items as needed
  ];

  const filteredItems = researchItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Research Publications
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Explore our latest research in brain-computer interfaces and neural engineering
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search research..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex gap-2">
              {['all', 'paper', 'prototype', 'patent'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
                    selectedType === type
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Research Items Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.type === 'paper'
                        ? 'bg-blue-100 text-blue-800'
                        : item.type === 'prototype'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {item.type}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a
                      href={item.link}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research; 