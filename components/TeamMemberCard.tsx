import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, cardHover, iconHover } from './animations';
import { AcademicCapIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  researchAreas: string[];
  email: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  bio,
  image,
  researchAreas,
  email,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
      whileHover="hover"
      className="card card-team overflow-hidden"
    >
      <motion.div
        variants={cardHover}
        className="h-full flex flex-col"
      >
        <div className="relative aspect-w-3 aspect-h-2 mb-4">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="flex items-center justify-between mb-2">
          <motion.h3
            variants={textHover}
            className="text-lg font-medium text-gray-900"
          >
            {name}
          </motion.h3>
          <motion.div variants={iconHover}>
            <AcademicCapIcon className="h-6 w-6 text-blue-600" />
          </motion.div>
        </div>

        <motion.p
          variants={fadeInUp}
          className="text-sm text-blue-600 font-medium mb-2"
        >
          {role}
        </motion.p>

        <p className="text-sm text-gray-500 mb-4 flex-grow">{bio}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Research Areas</h4>
          <div className="flex flex-wrap gap-2">
            {researchAreas.map((area) => (
              <motion.span
                key={area}
                variants={iconHover}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.a
          href={`mailto:${email}`}
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <EnvelopeIcon className="h-4 w-4 mr-1" />
          {email}
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default TeamMemberCard; 