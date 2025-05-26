import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

interface DemoItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  category: string;
}

const Demos: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoItems: DemoItem[] = [
    {
      id: '1',
      title: 'Real-time EEG Signal Visualization',
      description: 'Live demonstration of our EEG signal processing pipeline with real-time visualization.',
      videoUrl: '#',
      thumbnail: '/thumbnails/eeg-demo.jpg',
      category: 'Signal Processing',
    },
    {
      id: '2',
      title: 'BCI Control Interface',
      description: 'Demonstration of our brain-computer interface controlling a virtual environment.',
      videoUrl: '#',
      thumbnail: '/thumbnails/bci-control.jpg',
      category: 'Control Systems',
    },
    {
      id: '3',
      title: 'Neural Network Training',
      description: 'Visualization of neural network training process for BCI applications.',
      videoUrl: '#',
      thumbnail: '/thumbnails/nn-training.jpg',
      category: 'Machine Learning',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Interactive Demos
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Experience our research through interactive demonstrations and visualizations
            </p>
          </div>

          {/* Demo Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {demoItems.map((demo) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative aspect-video bg-gray-200">
                  <img
                    src={demo.thumbnail}
                    alt={demo.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => {
                      setSelectedDemo(demo.id);
                      setIsPlaying(true);
                    }}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition-opacity"
                  >
                    <PlayIcon className="h-16 w-16 text-white" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {demo.category}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{demo.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{demo.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video Modal */}
          {selectedDemo && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="relative w-full max-w-4xl mx-4">
                <div className="relative aspect-video bg-black">
                  {/* Video player placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {isPlaying ? (
                        <PauseIcon className="h-16 w-16" />
                      ) : (
                        <PlayIcon className="h-16 w-16" />
                      )}
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedDemo(null);
                    setIsPlaying(false);
                  }}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demos; 