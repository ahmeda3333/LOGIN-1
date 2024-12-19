import React from 'react';
import { Mail, Phone, Wallet } from 'lucide-react';

interface AuthMethodSelectorProps {
  selected: 'email' | 'phone' | 'wallet';
  onChange: (method: 'email' | 'phone' | 'wallet') => void;
}

export function AuthMethodSelector({ selected, onChange }: AuthMethodSelectorProps) {
  return (
    <div className="p-1.5 bg-zinc-900 rounded-2xl mb-6 border border-zinc-800/50">
      <div className="grid grid-cols-3 gap-2">
        {[
          { id: 'email', icon: Mail, label: 'Email' },
          { id: 'phone', icon: Phone, label: 'Phone' },
          { id: 'wallet', icon: Wallet, label: 'Wallet' }
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onChange(id as 'email' | 'phone' | 'wallet')}
            className={`
              relative group overflow-hidden
              p-3 rounded-xl
              transition-all duration-300
              ${selected === id 
                ? 'bg-zinc-800 text-white shadow-lg' 
                : 'text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800/50'}
            `}
          >
            {selected === id && (
              <div className="absolute inset-0 bg-white/5" />
            )}
            
            <div className="relative flex flex-col items-center gap-1.5">
              <Icon className={`
                w-5 h-5 transition-all duration-300
                ${selected === id ? 'scale-110' : 'group-hover:scale-110'}
              `} />
              <span className="text-sm font-medium">{label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}