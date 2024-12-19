import React from 'react';
import { Coins } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Coins className="h-12 w-12 text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          {subtitle && <p className="text-gray-400">{subtitle}</p>}
        </div>
        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}