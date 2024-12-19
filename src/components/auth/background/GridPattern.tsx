import React from 'react';

export function GridPattern() {
  return (
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
        maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
      }}
    />
  );
}