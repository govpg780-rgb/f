
export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  bgColor: string;
  textColor: string;
  isDarkMode: boolean;
  borderRadius: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
