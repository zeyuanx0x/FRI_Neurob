import React from 'react';
import { Checkbox } from './ui/checkbox';

interface HighlightCardProps {
  title: string;
  description: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ title, description }) => {
  return (
    <div className="card relative">
      <div className="absolute top-4 right-4">
        <Checkbox id={`highlight-${title.toLowerCase().replace(/\s+/g, '-')}`} />
      </div>
      <div className="content">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default HighlightCard; 