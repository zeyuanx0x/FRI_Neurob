import React from 'react';

interface HighlightCardProps {
  title: string;
  description: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ title, description }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard; 