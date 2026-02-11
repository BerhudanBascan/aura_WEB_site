import { GoogleGenAI } from "@google/genai";
import { ImageSize } from "../types";

// Initialize Gemini Client
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables");
  }
  return new GoogleGenAI({ apiKey: apiKey || '' });
};

export const sendChatMessage = async (history: { role: string; parts: { text: string }[] }[], newMessage: string) => {
  const ai = getClient();
  
  // Using gemini-3-pro-preview for complex B2B reasoning
  const model = 'gemini-3-pro-preview';
  
  try {
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: `You are the AI Concierge for AURA, a premium B2B supplier of hospitality and healthcare amenities. 
        Your tone is professional, refined, minimalist, and helpful. 
        You assist purchasing managers from hotels and hospitals.
        We sell slippers, robes, toiletries, and hygiene kits.
        We offer custom branding and bulk discounts.
        Do not be pushy. Be elegant.
        Keep answers concise (under 100 words unless asked for detail).`,
      },
      history: history,
    });

    const response = await chat.sendMessage({ message: newMessage });
    return response.text;
  } catch (error) {
    console.error("Chat Error:", error);
    throw error;
  }
};

export const generateProductConcept = async (prompt: string, size: ImageSize) => {
  const ai = getClient();
  
  // Using Nano Banana Pro (gemini-3-pro-image-preview) as requested
  const model = 'gemini-3-pro-image-preview';

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          {
            text: `A hyper-realistic, studio photography style 3D render of a premium hospitality product. 
            Clean white background, soft lighting, elegant composition. 
            Product concept: ${prompt}`
          }
        ]
      },
      config: {
        imageConfig: {
          imageSize: size, // 1K, 2K, or 4K
          aspectRatio: "1:1"
        }
      }
    });

    // Extract image
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    throw new Error("No image generated");
  } catch (error) {
    console.error("Image Gen Error:", error);
    throw error;
  }
};
