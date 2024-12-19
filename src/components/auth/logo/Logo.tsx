import React from 'react';
import { Coins } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative group">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-nebula-purple/30 via-stellar-indigo/30 to-cosmic-blue/30 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
        
        {/* Logo container */}
        <div className="relative">
          {/* Background layers */}
          <div className="bg-gradient-to-b from-deep-space to-cosmic-blue p-5 rounded-full shadow-lg">
            <div className="relative z-10 bg-gradient-to-br from-nebula-purple to-stellar-indigo rounded-full p-4">
              {/* Icon with glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-md animate-pulse-slow" />
                <Coins className="w-12 h-12 text-white relative z-10" />
              </div>
            </div>
          </div>
          
          {/* Rotating border */}
          <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
          
          {/* Pulsing ring */}
          <div className="absolute -inset-2 rounded-full border border-nebula-purple/20 animate-pulse" />
        </div>
      </div>
    </div>
  );
}