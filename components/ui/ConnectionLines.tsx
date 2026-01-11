import React from 'react';

interface ConnectionLinesProps {
  className?: string;
}

export function ConnectionLines({ className = '' }: ConnectionLinesProps) {
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <svg
        className="w-px h-16"
        viewBox="0 0 2 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="64"
          stroke="#84a98c"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
          className="animate-dash"
        />
      </svg>
    </div>
  );
}
