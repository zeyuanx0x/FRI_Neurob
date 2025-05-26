import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  researchAreas: string[];
  email: string;
}

interface Collaborator {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Jane Smith',
      role: 'Principal Investigator',
      bio: 'Leading research in neural signal processing and BCI applications.',
      image: '/team/jane-smith.jpg',
      researchAreas: ['Neural Signal Processing', 'Machine Learning', 'BCI Applications'],
      email: 'jane.smith@example.com',
    },
    {
      id: '2',
      name: 'Dr. John Doe',
      role: 'Research Scientist',
      bio: 'Specializing in hardware development and signal acquisition systems.',
      image: '/team/john-doe.jpg',
      researchAreas: ['Hardware Development', 'Signal Acquisition', 'System Integration'],
      email: 'john.doe@example.com',
    },
    // Add more team members as needed
  ];

  const collaborators: Collaborator[] = [
    {
      id: '1',
      name: 'Neural Tech Institute',
      logo: '/logos/neural-tech.png',
      description: 'Leading research institute in neural engineering and brain-computer interfaces.',
      website: 'https://example.com',
    },
    {
      id: '2',
      name: 'AI Research Lab',
      logo: '/logos/ai-lab.png',
      description: 'Pioneering research in artificial intelligence and machine learning.',
      website: 'https://example.com',
    },
    // Add more collaborators as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Section */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Team
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Meet the researchers and scientists behind our innovative work
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                    <AcademicCapIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <p className="mt-1 text-sm text-primary-600">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">Research Areas</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.researchAreas.map((area) => (
                        <span
                          key={area}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm text-primary-600 hover:text-primary-700"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Collaborators Section */}
          <div className="mt-20">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Collaborators
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
                Working together with leading institutions and research labs
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {collaborators.map((collaborator) => (
                <motion.div
                  key={collaborator.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <img
                        src={collaborator.logo}
                        alt={collaborator.name}
                        className="h-12 w-auto"
                      />
                      <BuildingOfficeIcon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      {collaborator.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {collaborator.description}
                    </p>
                    <div className="mt-4">
                      <a
                        href={collaborator.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700"
                      >
                        Visit Website →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team; 