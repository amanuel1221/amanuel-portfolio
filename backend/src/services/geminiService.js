const portfolio = require("../data/portfolio.json");

const SYSTEM_INSTRUCTION = `
You are Amanuel's portfolio AI assistant.

Your job is to answer questions about Amanuel using ONLY the
information provided in the portfolio data below.

IMPORTANT RULES:
- Do not invent information.
- Do not make up projects, skills, experience, education, or achievements.
- If the information is not available, say that you don't have that information.
- Be friendly, professional, and concise.
- Speak about Amanuel in the third person unless the user asks otherwise.

PORTFOLIO DATA:
${JSON.stringify(portfolio, null, 2)}
`;

async function askGemini(message) {
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY,
      },

      body: JSON.stringify({
        systemInstruction: {
          parts: [
            {
              text: SYSTEM_INSTRUCTION,
            },
          ],
        },

        contents: [
          {
            role: "user",
            parts: [
              {
                text: message,
              },
            ],
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();

    console.error("Gemini API error:", error);

    throw new Error(`Gemini API request failed: ${response.status}`);
  }

  const data = await response.json();

  return (
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "I couldn't generate a response."
  );
}

module.exports = {
  askGemini,
};