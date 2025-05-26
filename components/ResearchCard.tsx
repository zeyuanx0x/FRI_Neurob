import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, cardHover, iconHover } from './animations';

interface ResearchCardProps {
  title: string;
  description: string;
  type: 'paper' | 'prototype' | 'patent';
  link: string;
  date: string;
  tags: string[];
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  description,
  type,
  link,
  date,
  tags,
}) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'paper':
        return 'from-blue-100 to-indigo-100 text-blue-800';
      case 'prototype':
        return 'from-green-100 to-emerald-100 text-green-800';
      case 'patent':
        return 'from-purple-100 to-violet-100 text-purple-800';
      default:
        return 'from-gray-100 to-slate-100 text-gray-800';
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
      whileHover="hover"
      className="card card-research"
    >
      <motion.div
        variants={cardHover}
        className="h-full flex flex-col"
      >
        <div className="flex items-center justify-between mb-4">
          <motion.span
            variants={iconHover}
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getTypeColor(type)}`}
          >
            {type}
          </motion.span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>

        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 flex-grow">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              variants={iconHover}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <motion.a
          href={link}
          className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Read more →
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ResearchCard; 