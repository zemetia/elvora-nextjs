import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    const model = "gemini-2.0-flash-exp";

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
              text: `Analyze this facial skin image for a clinical skincare brand 'ELVORA'. 
              
              Provide the following metrics on a scale of 0-100 (where 100 is perfect/best condition):
              - Brightness (radiance/glow)
              - Texture Score (smoothness)
              - Pore Score (minimization of pores)
              - Spot Score (evenness of tone, lack of dark spots)
              - Wrinkle Score (firmness, lack of fine lines)
              
              Calculate an overall 'Skin Vitality Index' (score) based on these metrics.

              Identify the skin type (Oily, Dry, Combination, Normal).
              Identify primary concerns (Acne, Redness, Dullness, Aging, etc.).
              
              Recommend one of these ELVORA systems: 
              - 'Acne Recovery System'
              - 'Brightening & Barrier System'
              - 'Sensitive Skin System'
              - 'Age Defense System'

              Suggest 3 specific ELVORA product names.
              
              Provide the response in English in JSON format.`,
            },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER, description: "Overall Skin Vitality Index (0-100)" },
            brightness: { type: Type.NUMBER, description: "Brightness score (0-100)" },
            textureScore: { type: Type.NUMBER, description: "Texture score (0-100)" },
            poreScore: { type: Type.NUMBER, description: "Pore score (0-100)" },
            spotScore: { type: Type.NUMBER, description: "Spot score (0-100)" },
            wrinkleScore: { type: Type.NUMBER, description: "Wrinkle score (0-100)" },
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
          required: [
            "score", "brightness", "textureScore", "poreScore", "spotScore", "wrinkleScore",
            "type", "concerns", "recommendation", "systemName", "timeline", "products"
          ]
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
