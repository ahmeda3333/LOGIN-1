import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  isLoading?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md',
  fullWidth = false, 
  children,
  isLoading = false,
  className = '',
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = `
    relative
    rounded-xl
    font-medium
    transition-all
    duration-300
    flex
    items-center
    justify-center
    gap-2
    disabled:opacity-50
    overflow-hidden
  `;
  
  const variants = {
    primary: `
      bg-gradient-to-r
      from-blue-600
      via-purple-600
      to-pink-600
      text-white
      hover:from-blue-500
      hover:via-purple-500
      hover:to-pink-500
      shadow-lg
      shadow-blue-900/20
      hover:shadow-blue-900/30
      disabled:hover:from-blue-600
      disabled:hover:via-purple-600
      disabled:hover:to-pink-600
    `,
    secondary: `
      bg-zinc-800
      hover:bg-zinc-700
      text-zinc-100
      border
      border-zinc-700
      hover:border-zinc-600
    `,
    outline: `
      border
      border-zinc-700
      hover:border-zinc-600
      text-zinc-300
      hover:text-zinc-200
      hover:bg-zinc-800/50
    `
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3',
    lg: 'px-6 py-4 text-lg'
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      <span className={isLoading ? 'opacity-0' : 'relative z-10'}>
        {children}
      </span>
    </button>
  );
}