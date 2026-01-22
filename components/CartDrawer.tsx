
import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem, ThemeConfig } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  theme: ThemeConfig;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, theme, onRemove }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed left-0 top-0 h-full w-full max-w-sm bg-white dark:bg-zinc-900 z-50 shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
        <div className="p-4 border-b dark:border-zinc-800 flex justify-between items-center bg-gray-50/50 dark:bg-zinc-800/50">
          <h2 className="font-bold text-lg flex items-center gap-2 dark:text-white">
            <ShoppingBag size={20} /> سلة المشتريات
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full dark:text-zinc-300">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <ShoppingBag size={64} className="mb-4 opacity-20" />
              <p>السلة فارغة حالياً</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 p-2 rounded-lg bg-gray-50 dark:bg-zinc-800">
                  <img src={item.image} className="w-16 h-16 rounded-md object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm dark:text-white truncate">{item.name}</h4>
                    <p className="text-xs text-gray-500 mb-1">{item.quantity} x {item.price} ر.س</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold" style={{ color: theme.primaryColor }}>
                        {item.price * item.quantity} ر.س
                      </span>
                      <button onClick={() => onRemove(item.id)} className="text-red-500 hover:bg-red-50 p-1 rounded">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t dark:border-zinc-800 space-y-4">
            <div className="flex justify-between text-lg font-bold dark:text-white">
              <span>الإجمالي:</span>
              <span style={{ color: theme.primaryColor }}>{total} ر.س</span>
            </div>
            <button 
              className="w-full py-3 text-white font-bold transition-transform active:scale-95 shadow-lg"
              style={{ backgroundColor: theme.primaryColor, borderRadius: theme.borderRadius }}
            >
              إتمام الطلب
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
