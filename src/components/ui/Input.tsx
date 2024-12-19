import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function Input({ 
  label, 
  error, 
  icon,
  type = 'text',
  className = '', 
  ...props 
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative group">
        {/* Glowing border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />

        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
              {icon}
            </div>
          )}
          
          <input
            type={inputType}
            className={`
              w-full
              px-4 py-3 
              ${icon ? 'pl-10' : ''}
              ${isPassword ? 'pr-10' : ''}
              bg-zinc-900/90
              border border-zinc-800
              rounded-xl
              text-zinc-100
              placeholder:text-zinc-600
              focus:outline-none 
              focus:border-zinc-700
              focus:ring-1
              focus:ring-zinc-700/50
              transition-all duration-300
              backdrop-blur-sm
              ${error ? 'border-red-900/50 focus:border-red-800 focus:ring-red-900/50' : ''}
              ${className}
            `}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-300 transition-colors duration-300"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
          <span className="inline-block w-1 h-1 bg-red-400 rounded-full" />
          {error}
        </p>
      )}
    </div>
  );
}