import React from 'react';

export function GlowingOrbs() {
  return (
    <>
      {/* Top left orb */}
      <div className="absolute -top-40 -left-40 w-96 h-96">
        <div className="absolute inset-0 bg-accent-blue/30 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute inset-10 bg-accent-purple/20 rounded-full blur-[96px] animate-pulse-slow delay-1000" />
      </div>

      {/* Bottom right orb */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96">
        <div className="absolute inset-0 bg-accent-purple/30 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute inset-10 bg-accent-pink/20 rounded-full blur-[96px] animate-pulse-slow delay-1000" />
      </div>
    </>
  );
}