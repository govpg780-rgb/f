
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateProductDescription = async (productName: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `اكتب وصفاً تسويقياً جذاباً ومختصراً جداً لمنتج اسمه "${productName}" باللغة العربية. اجعل الأسلوب يحفز الشراء.`,
      config: {
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "نعتذر، حدث خطأ أثناء توليد الوصف.";
  }
};
