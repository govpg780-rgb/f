
import { Product, ThemeConfig } from './types';

export const INITIAL_THEME: ThemeConfig = {
  primaryColor: '#004d56',
  secondaryColor: '#b9ff66',
  bgColor: '#ffffff',
  textColor: '#1a1a1a',
  isDarkMode: false,
  borderRadius: '0.75rem',
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'عطر الفخامة الملكي',
    price: 249,
    category: 'عطور',
    image: 'https://picsum.photos/seed/perfume/400/400',
    description: 'عطر شرقي مميز بمزيج من العود والعنبر.',
    isFeatured: true
  },
  {
    id: '2',
    name: 'ساعة يد ذكية - الإصدار الثامن',
    price: 1299,
    category: 'إلكترونيات',
    image: 'https://picsum.photos/seed/watch/400/400',
    description: 'ساعة ذكية متطورة لمتابعة النشاط البدني والصحة.',
    isFeatured: true
  },
  {
    id: '3',
    name: 'كريم العناية الفائق',
    price: 85,
    category: 'عناية',
    image: 'https://picsum.photos/seed/skin/400/400',
    description: 'كريم مرطب طبيعي بخلاصة الأعشاب النادرة.'
  },
  {
    id: '4',
    name: 'حقيبة سفر جلدية',
    price: 450,
    category: 'إكسسوارات',
    image: 'https://picsum.photos/seed/bag/400/400',
    description: 'حقيبة مصنوعة من الجلد الطبيعي المقاوم للماء.'
  },
  {
    id: '5',
    name: 'سماعات لاسلكية برو',
    price: 599,
    category: 'إلكترونيات',
    image: 'https://picsum.photos/seed/buds/400/400',
    description: 'سماعات عازلة للضوضاء مع جودة صوت استثنائية.'
  },
  {
    id: '6',
    name: 'نظارات شمسية كلاسيك',
    price: 180,
    category: 'إكسسوارات',
    image: 'https://picsum.photos/seed/glass/400/400',
    description: 'نظارات شمسية بحماية 100% من الأشعة فوق البنفسجية.'
  }
];
