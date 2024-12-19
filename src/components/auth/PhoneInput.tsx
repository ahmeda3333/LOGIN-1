import React, { useState } from 'react';
import { Phone, ChevronDown } from 'lucide-react';

interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

const popularCountries: Country[] = [
  { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: '🇬🇧' },
  { name: 'Saudi Arabia', code: 'SA', dialCode: '+966', flag: '🇸🇦' },
  { name: 'United Arab Emirates', code: 'AE', dialCode: '+971', flag: '🇦🇪' },
  { name: 'Egypt', code: 'EG', dialCode: '+20', flag: '🇪🇬' },
];

export function PhoneInput() {
  const [selectedCountry, setSelectedCountry] = useState(popularCountries[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex gap-2">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="h-[50px] px-3 flex items-center gap-2 bg-[#1A1F2E] border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300 group"
          >
            <span className="text-xl">{selectedCountry.flag}</span>
            <span className="text-gray-300 group-hover:text-white transition-colors">
              {selectedCountry.dialCode}
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors" />
          </button>
          
          {isOpen && (
            <div className="absolute z-10 mt-2 w-72 rounded-xl border border-gray-800 shadow-2xl">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-xl p-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20" />
              
              {/* Content */}
              <div className="relative bg-[#1A1F2E] rounded-xl overflow-hidden">
                <div className="max-h-64 overflow-y-auto p-2">
                  {popularCountries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 text-left group/item"
                    >
                      <span className="text-xl group-hover/item:scale-110 transition-transform">
                        {country.flag}
                      </span>
                      <div>
                        <div className="text-gray-300 group-hover/item:text-white transition-colors">
                          {country.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {country.dialCode}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="relative flex-1 group">
          {/* Input glow effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
          
          {/* Input container */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-hover:text-gray-400 transition-colors" />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full h-[50px] pl-10 pr-4 bg-[#1A1F2E] border border-gray-800 rounded-xl text-gray-300 placeholder:text-gray-600 focus:outline-none focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}