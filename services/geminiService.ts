
import { GoogleGenAI } from "@google/genai";

// Initialize GoogleGenAI with the API key from environment variables as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askSigmaAI = async (message: string) => {
  try {
    // Call generateContent with model name and prompt
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: "Bạn là Sigma - Trợ lý AI thông minh của hệ thống Sigma Shop. Nhiệm vụ của bạn là hỗ trợ khách hàng tra cứu sản phẩm, kiểm tra đơn hàng và giải đáp các chính sách bảo hành. Hãy trả lời cực kỳ thân thiện, sử dụng icon phù hợp, và mang phong cách của một nhân viên tư vấn chuyên nghiệp. Nếu khách hàng hỏi về bảo hành, hãy nhắc đến chính sách 12 tháng 1 đổi 1 của Sigma.",
        temperature: 0.8,
      }
    });
    // Access the text property directly from response
    return response.text || "Xin lỗi, Siggy đang bận một chút. Bạn nhắn lại sau nhé!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Có lỗi kết nối. Vui lòng thử lại!";
  }
};
