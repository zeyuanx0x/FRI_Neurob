import React from "react";

interface BeamPulseProps {
  path: string;
  index: number;
  width?: number;
  colorScheme?: "cyan" | "fuchsia" | "lime";
}

export const BeamPulse: React.FC<BeamPulseProps> = ({
  path,
  index,
  width = 20,
  colorScheme = "cyan",
}) => {
  // Color schemes
  const colors = {
    cyan: {
      from: "rgb(34,211,238)", // cyan-300
      to: "rgb(255,255,255)", // white
    },
    fuchsia: {
      from: "rgb(232,121,249)", // fuchsia-400
      to: "rgb(249,168,212)", // pink-300
    },
    lime: {
      from: "rgb(132,204,22)", // lime-500
      to: "rgb(236,252,203)", // lime-100
    },
  };

  const selectedColors = colors[colorScheme];
  const gradientId = `pulse-gradient-${index}`;

  return (
    <>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="20%" stopColor={selectedColors.from} />
          <stop offset="50%" stopColor={selectedColors.to} />
          <stop offset="80%" stopColor={selectedColors.from} />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <filter id={`glow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 18 -7"
            result="glow"
          />
          <feBlend in="SourceGraphic" in2="glow" mode="screen" />
        </filter>
      </defs>
      <path
        d={path}
        stroke={`url(#${gradientId})`}
        strokeWidth={width}
        strokeLinecap="round"
        fill="none"
        filter={`url(#glow-${index})`}
        opacity="0.8"
      />
    </>
  );
}; 