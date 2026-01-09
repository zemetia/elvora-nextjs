import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    const model = "gemini-3-flash-preview";

    const response = await ai.models.generateContent({
      model,
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: image,
              },
            },
            {
              text: "Analyze this facial skin image for a clinical skincare brand 'ELVORA'. Identify the skin type (Oily, Dry, Combination, Normal), primary concerns (Acne, Redness, Dullness, Aging, etc.), and provide an overall 'Skin Vitality Index' out of 100. Recommend one of these ELVORA systems: 'Acne Recovery System', 'Brightening & Barrier System', or 'Sensitive Skin System'. Additionally, suggest 3 specific ELVORA product names that should be in their shopping cart (e.g., 'Phyto-Clinical Cleanser', 'Active Recovery Serum', 'Lipid-Replenish Cream'). Provide the response in English in JSON format.",
            },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            type: { type: Type.STRING },
            concerns: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            recommendation: { type: Type.STRING },
            systemName: { type: Type.STRING },
            timeline: { type: Type.STRING },
            products: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3 specific product names to buy."
            }
          },
          required: ["score", "type", "concerns", "recommendation", "systemName", "timeline", "products"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to analyze skin image", error);
    return NextResponse.json(
      { error: "Analysis failed. Please try again with better lighting." },
      { status: 500 }
    );
  }
}
