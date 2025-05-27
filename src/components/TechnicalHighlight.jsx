import React from 'react';
import '../styles/checkbox.css';

const TechnicalHighlight = ({ title, description }) => {
  return (
    <div className="technical-highlight">
      <div className="checkbox-container">
        <div className="checkbox-wrapper">
          <input type="checkbox" id={`cbx-${title}`} className="hidden" />
          <label htmlFor={`cbx-${title}`}>
            <div className="tick_mark"></div>
          </label>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TechnicalHighlight; 