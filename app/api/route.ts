import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();
    const modifiedPrompt = `
You are a friendly and concise food expert helping customers learn about Southeast Asian dishes. Answer clearly in 4-5 sentences..


${prompt}
`;
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: modifiedPrompt }],

              role: "user",
            },
          ],
        }),
      }
    );



    const data = await response.json();
    console.log("GEMINI RAW RESPONSE:", JSON.stringify(data, null, 2));

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I didn’t get that 😅";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Gemini error:", error);
    return NextResponse.json({ reply: "Sorry, something went wrong 😔" });
  }
}

