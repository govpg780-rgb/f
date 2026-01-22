
import React from 'react';
import { ThemeConfig } from '../types';

interface HeroProps {
  theme: ThemeConfig;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl mt-6">
      <div 
        className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 relative z-10"
        style={{ backgroundColor: theme.primaryColor + '15' }} // Semi-transparent primary
      >
        <div className="md:w-1/2 text-center md:text-right">
          <h1 className="text-3xl md:text-5xl font-black mb-4 dark:text-white leading-tight">
            عالم من <span style={{ color: theme.primaryColor }}>التسوق</span> بين يديك
          </h1>
          <p className="text-gray-600 dark:text-zinc-400 mb-8 text-lg">
            اكتشف أفضل المنتجات المختارة بعناية لتناسب ذوقك الرفيع، مع سرعة فائقة في التوصيل.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button 
              className="px-8 py-3 font-bold text-white transition-transform active:scale-95 shadow-lg"
              style={{ backgroundColor: theme.primaryColor, borderRadius: theme.borderRadius }}
            >
              تسوق الآن
            </button>
            <button 
              className="px-8 py-3 font-bold bg-white dark:bg-zinc-800 border-2 dark:border-zinc-700 transition-transform active:scale-95 dark:text-white"
              style={{ borderColor: theme.primaryColor, borderRadius: theme.borderRadius, color: theme.primaryColor }}
            >
              احدث العروض
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img 
            src="https://picsum.photos/seed/salla/600/400" 
            alt="Hero Banner" 
            className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>
      
      {/* Decorative blobs */}
      <div 
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: theme.secondaryColor }}
      ></div>
      <div 
        className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: theme.primaryColor }}
      ></div>
    </div>
  );
};

export default Hero;
