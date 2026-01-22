
import React from 'react';
import { Product, ThemeConfig } from '../types';
import { Plus, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  theme: ThemeConfig;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, theme, onAddToCart }) => {
  return (
    <div 
      className="group bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-3 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      style={{ borderRadius: theme.borderRadius }}
    >
      <div className="relative overflow-hidden aspect-square mb-3 rounded-lg bg-gray-50 dark:bg-zinc-800">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button className="absolute top-2 left-2 p-1.5 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-full text-gray-600 dark:text-zinc-300 hover:text-red-500 transition-colors">
          <Heart size={18} />
        </button>
        {product.isFeatured && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded text-zinc-900">
            جديد
          </span>
        )}
      </div>

      <div className="flex-1">
        <span className="text-xs text-gray-500 dark:text-zinc-500 mb-1 block">{product.category}</span>
        <h3 className="font-bold dark:text-white text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 dark:text-zinc-400 text-xs line-clamp-2 mb-2">
          {product.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50 dark:border-zinc-800">
        <span className="font-black text-lg" style={{ color: theme.primaryColor }}>
          {product.price} <span className="text-xs font-normal opacity-70">ر.س</span>
        </span>
        <button 
          onClick={() => onAddToCart(product)}
          className="p-2 text-white shadow-md active:scale-90 transition-all hover:brightness-110"
          style={{ backgroundColor: theme.primaryColor, borderRadius: '50%' }}
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
