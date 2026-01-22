
import React from 'react';
import { ShoppingCart, Sun, Moon, Search, User } from 'lucide-react';
import { ThemeConfig } from '../types';

interface NavbarProps {
  theme: ThemeConfig;
  toggleDarkMode: () => void;
  cartCount: number;
  openCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleDarkMode, cartCount, openCart }) => {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: theme.primaryColor }}>
              S
            </div>
            <span className="text-xl font-extrabold tracking-tight dark:text-white">متجري</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="ابحث عن منتج..."
                className="w-full bg-gray-100 dark:bg-zinc-800 border-none rounded-full py-2 px-10 focus:ring-2 transition-all dark:text-zinc-200"
                style={{ '--tw-ring-color': theme.primaryColor } as any}
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 dark:text-zinc-300 transition-colors"
            >
              {theme.isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 dark:text-zinc-300 transition-colors">
              <User size={20} />
            </button>

            <button 
              onClick={openCart}
              className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 dark:text-zinc-300 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 left-0 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-zinc-900">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
