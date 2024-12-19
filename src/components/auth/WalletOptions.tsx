import React from 'react';

const wallets = [
  {
    name: 'MetaMask',
    icon: '/metamask.svg',
    gradient: 'from-orange-500/20 via-yellow-500/20 to-orange-600/20',
    borderGlow: 'group-hover:from-orange-500/30 group-hover:via-yellow-500/30 group-hover:to-orange-600/30',
  },
  {
    name: 'Trust Wallet',
    icon: '/trustwallet.svg',
    gradient: 'from-blue-500/20 via-cyan-500/20 to-blue-600/20',
    borderGlow: 'group-hover:from-blue-500/30 group-hover:via-cyan-500/30 group-hover:to-blue-600/30',
  },
  {
    name: 'WalletConnect',
    icon: '/walletconnect.svg',
    gradient: 'from-blue-400/20 via-indigo-500/20 to-purple-500/20',
    borderGlow: 'group-hover:from-blue-400/30 group-hover:via-indigo-500/30 group-hover:to-purple-500/30',
  },
];

export function WalletOptions() {
  return (
    <div className="space-y-4">
      {wallets.map((wallet) => (
        <button
          key={wallet.name}
          className="relative group w-full h-[72px]"
        >
          {/* Hover glow effect */}
          <div className={`absolute -inset-[1px] bg-gradient-to-r ${wallet.borderGlow} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
          
          {/* Border gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${wallet.gradient} rounded-2xl p-px`}>
            {/* Content */}
            <div className="h-full rounded-2xl bg-deep-space/95 p-4 backdrop-blur-xl flex items-center justify-between overflow-hidden">
              {/* Left side with icon and name */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  {/* Icon container with glow */}
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-b from-white/10 to-white/5 p-2 shadow-lg">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent animate-pulse-slow" />
                    <img 
                      src={wallet.icon} 
                      alt={wallet.name} 
                      className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-medium text-white group-hover:text-white transition-colors">
                    {wallet.name}
                  </span>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    Connect wallet
                  </span>
                </div>
              </div>
              
              {/* Right arrow with animation */}
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-white transform group-hover:translate-x-0.5 transition-all" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}