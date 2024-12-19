import React from 'react';
import { BackgroundEffects } from './background/BackgroundEffects';
import { Logo } from './logo/Logo';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-deep-space flex items-center justify-center p-4 md:p-8 relative">
      <BackgroundEffects />
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Logo />
          <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-zinc-400 text-lg">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative group">
          {/* Outer glow effect */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-accent-blue/20 via-accent-purple/20 to-accent-pink/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />

          {/* Card border with gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-accent-pink/10 p-[1px]">
            {/* Inner shadow overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-10" />

            {/* Card content */}
            <div className="relative bg-deep-space-50/95 rounded-2xl backdrop-blur-xl p-8 shadow-inner-glow">
              {/* Subtle grid pattern */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-5"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}