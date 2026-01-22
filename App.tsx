
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import ThemeCustomizer from './components/ThemeCustomizer';
import { INITIAL_THEME, MOCK_PRODUCTS } from './constants';
import { ThemeConfig, Product, CartItem } from './types';
import { generateProductDescription } from './services/geminiService';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeConfig>(INITIAL_THEME);
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (theme.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme.isDarkMode]);

  const toggleDarkMode = () => {
    setTheme(prev => ({ ...prev, isDarkMode: !prev.isDarkMode }));
  };

  const handleThemeChange = (updates: Partial<ThemeConfig>) => {
    setTheme(prev => ({ ...prev, ...updates }));
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Visual feedback
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleAIGenerate = async () => {
    setIsGenerating(true);
    // Generate description for the first featured product as a demo
    const featured = products.find(p => p.isFeatured);
    if (featured) {
      const desc = await generateProductDescription(featured.name);
      setProducts(prev => prev.map(p => p.id === featured.id ? { ...p, description: desc || p.description } : p));
    }
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen transition-colors bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 pb-20">
      <Navbar 
        theme={theme} 
        toggleDarkMode={toggleDarkMode} 
        cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)}
        openCart={() => setIsCartOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero theme={theme} />

        {/* Categories Fast Filters */}
        <div className="flex gap-4 mt-12 mb-8 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
          {['الكل', 'إلكترونيات', 'عطور', 'إكسسوارات', 'عناية'].map((cat, idx) => (
            <button 
              key={cat}
              className={`px-6 py-2 whitespace-nowrap font-bold transition-all text-sm border-2 ${idx === 0 ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900' : 'bg-transparent border-gray-100 dark:border-zinc-800'}`}
              style={{ borderRadius: theme.borderRadius, borderColor: idx === 0 ? theme.primaryColor : undefined, backgroundColor: idx === 0 ? theme.primaryColor : undefined }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black">المنتجات المختارة</h2>
            <div className="h-1 w-12 mt-1 rounded-full" style={{ backgroundColor: theme.primaryColor }}></div>
          </div>
          <button className="text-sm font-bold underline" style={{ color: theme.primaryColor }}>عرض الكل</button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              theme={theme} 
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Promotional Section */}
        <section className="mt-20 p-10 bg-zinc-900 dark:bg-zinc-900 rounded-3xl text-white relative overflow-hidden flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4 z-10">اشترك في نشرتنا البريدية</h2>
            <p className="text-zinc-400 mb-8 max-w-md z-10">احصل على خصومات حصرية وتنبيهات بآخر المنتجات التي تصل متجرنا.</p>
            <div className="flex w-full max-w-md gap-2 z-10">
               <input 
                 type="email" 
                 placeholder="البريد الإلكتروني"
                 className="flex-1 px-4 py-3 rounded-xl bg-zinc-800 border-none focus:ring-2" 
                 style={{ '--tw-ring-color': theme.primaryColor } as any}
               />
               <button 
                 className="px-6 py-3 font-bold rounded-xl"
                 style={{ backgroundColor: theme.primaryColor }}
               >
                 اشتراك
               </button>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
        </section>
      </main>

      <footer className="mt-20 py-12 border-t dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: theme.primaryColor }}>S</div>
                  <span className="text-xl font-bold dark:text-white">متجري - منصة سلة</span>
              </div>
              <div className="flex gap-8 text-sm font-medium text-gray-500 dark:text-zinc-400">
                  <a href="#" className="hover:text-black dark:hover:text-white">الرئيسية</a>
                  <a href="#" className="hover:text-black dark:hover:text-white">من نحن</a>
                  <a href="#" className="hover:text-black dark:hover:text-white">تواصل معنا</a>
                  <a href="#" className="hover:text-black dark:hover:text-white">سياسة الخصوصية</a>
              </div>
              <div className="text-xs text-gray-400">
                  © 2024 جميع الحقوق محفوظة - تم التطوير بحب لمنصة سلة
              </div>
          </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        theme={theme}
        onRemove={removeFromCart}
      />

      <ThemeCustomizer 
        theme={theme} 
        onChange={handleThemeChange} 
        onGenerateAI={handleAIGenerate}
        isGenerating={isGenerating}
      />
    </div>
  );
};

export default App;
