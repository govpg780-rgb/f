
import React, { useState } from 'react';
import { Settings, Palette, Layout, Sparkles } from 'lucide-react';
import { ThemeConfig } from '../types';

interface ThemeCustomizerProps {
  theme: ThemeConfig;
  onChange: (updates: Partial<ThemeConfig>) => void;
  onGenerateAI: () => void;
  isGenerating: boolean;
}

const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ theme, onChange, onGenerateAI, isGenerating }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[60] bg-white dark:bg-zinc-900 shadow-2xl border dark:border-zinc-800 transition-all duration-500 overflow-hidden ${isExpanded ? 'w-80 max-h-[500px] p-6 rounded-2xl' : 'w-14 h-14 rounded-full flex items-center justify-center p-0 cursor-pointer'}`}
      onClick={() => !isExpanded && setIsExpanded(true)}
    >
      {!isExpanded ? (
        <Settings className="text-gray-600 dark:text-zinc-300 animate-spin-slow" />
      ) : (
        <div className="w-full space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold flex items-center gap-2 dark:text-white">
              <Palette size={20} style={{ color: theme.primaryColor }} /> تخصيص الثيم
            </h3>
            <button onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }} className="text-gray-400 hover:text-black dark:hover:text-white">&times;</button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-500 dark:text-zinc-400 mb-2 block">اللون الأساسي</label>
              <div className="flex gap-2">
                {['#004d56', '#7c3aed', '#db2777', '#2563eb', '#059669'].map(color => (
                  <button 
                    key={color}
                    onClick={() => onChange({ primaryColor: color })}
                    className={`w-8 h-8 rounded-full border-2 ${theme.primaryColor === color ? 'border-zinc-800 scale-110 shadow-md' : 'border-transparent'}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
                <input 
                  type="color" 
                  value={theme.primaryColor}
                  onChange={(e) => onChange({ primaryColor: e.target.value })}
                  className="w-8 h-8 rounded-full cursor-pointer bg-transparent border-none overflow-hidden"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 dark:text-zinc-400 mb-2 block">الحواف (Border Radius)</label>
              <input 
                type="range" 
                min="0" 
                max="30" 
                step="2"
                value={parseInt(theme.borderRadius)}
                onChange={(e) => onChange({ borderRadius: `${e.target.value}px` })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <button 
              onClick={onGenerateAI}
              disabled={isGenerating}
              className="w-full py-3 px-4 flex items-center justify-center gap-2 rounded-xl text-white font-bold transition-all disabled:opacity-50 hover:brightness-110"
              style={{ backgroundColor: theme.primaryColor }}
            >
              <Sparkles size={18} className={isGenerating ? 'animate-pulse' : ''} />
              {isGenerating ? 'جاري التوليد...' : 'وصف ذكي بالذكاء الاصطناعي'}
            </button>

            <div className="pt-4 border-t dark:border-zinc-800">
               <p className="text-[10px] text-gray-400 text-center">ثيم سلة لايت - مرن، سريع، خفيف</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeCustomizer;
