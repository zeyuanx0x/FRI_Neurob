import React from 'react';
import { motion } from 'framer-motion';
import { sectionVariants, staggerContainer } from './animations';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
}) => {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
      className={`py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            variants={staggerContainer}
            className="flex items-center justify-center mb-4"
          >
            <div className="section-title-bar" />
            <motion.h2
              variants={sectionVariants}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              {title}
            </motion.h2>
          </motion.div>
          {subtitle && (
            <motion.p
              variants={sectionVariants}
              className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={className}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section; 