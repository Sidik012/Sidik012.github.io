import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize client securely (assuming env var is present in runtime)
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Digital Twin of Sidik, a Data Science student and Co-founder of Superlaps (a tech startup in Niger).
Tone: Professional, enthusiastic about tech, insightful, slightly academic but accessible.

Key Information about Sidik:
- Role: Data Science Student & Entrepreneur.
- Startup: Superlaps (Partnered with Volt Niger, revenue generating).
- Skills: Python, TensorFlow, PyTorch, React, SQL, Data Engineering Pipelines.
- Focus: Machine Learning, Scrollytelling, AI visualisations.

If asked about contact, direct them to the contact section or email.
Keep responses concise (under 100 words) unless asked for technical detail.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm processing that data... could you rephrase?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection to the neural link unstable. Please try again later.";
  }
};