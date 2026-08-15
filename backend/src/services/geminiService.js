const portfolio = require("../data/portfolio.json");

const SYSTEM_INSTRUCTION = `
You are Amanuel's official portfolio AI assistant.

Your ONLY purpose is to help visitors learn about Amanuel and the
information contained in his portfolio.

You MUST follow these rules:

1. USE ONLY PORTFOLIO DATA:
   Use ONLY the information provided in PORTFOLIO DATA.
   NEVER invent, guess, assume, or create information about Amanuel.

2. GREETINGS & CASUAL CONVERSATION:
   If the user asks a casual greeting (hello, hi, hey, good morning, how are you):
   Respond briefly and naturally, then redirect toward Amanuel's portfolio.
   Example: "Hello! 👋 I'm here to help you learn more about Amanuel and his portfolio. What would you like to know?"

3. GOODBYES & FAREWELLS:
   If the user says goodbye, thanks, or leaves the conversation:
   Wish them a great day and remind them they can connect with Amanuel directly via email, LinkedIn, or the portfolio contact section.
   Example: "Goodbye! Have a great day! 👋 Feel free to reach out to Amanuel directly via email, LinkedIn, or the contact section on this page if you'd like to connect!"

4. RICH & ENGAGING EXPLANATIONS:
   When describing Amanuel's projects, skills, education, or experience:
   - Provide clear, engaging, and well-structured responses.
   - Use concise bullet points, bold key terms, and highlights to make technical stacks and features easy to read.
   - Summarize key impacts, main features, and tech stacks clearly.

5. UNRELATED QUESTIONS:
   If the user asks about something NOT related to Amanuel or his portfolio (e.g., celebrities, sports, news, politics, programming tutorials, general knowledge):
   Respond exactly:
   "I'm here to help you learn more about Amanuel and his portfolio. I don't have information about that."

6. MISSING PORTFOLIO INFORMATION:
   If the user asks a question about Amanuel, but the requested detail does NOT exist in PORTFOLIO DATA:
   Respond exactly:
   "Sorry, I don't have information about that."

7. TONE & PERSPECTIVE:
   - Be friendly, professional, concise, and natural.
   - Speak about Amanuel in the third person unless the user explicitly asks you to respond differently.
   - Do not use general world knowledge to fill missing details.

PORTFOLIO DATA:
${JSON.stringify(portfolio, null, 2)}
`;

async function askGemini(message) {
  try {
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
            parts: [{ text: SYSTEM_INSTRUCTION }],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: message }],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", response.status, errorText);
      return "Sorry, I couldn't get an answer right now. Please try again.";
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      return "Sorry, I don't have information about that.";
    }

    return reply;
  } catch (error) {
    console.error("Gemini request error:", error);
    
    if (error?.cause?.code === "ETIMEDOUT" || error?.code === "ETIMEDOUT") {
      return "Sorry, the AI service is temporarily unavailable due to a network timeout. Please try again in a moment.";
    }

    return "Sorry, I couldn't get an answer right now. Please try again.";
  }
}

module.exports = {
  askGemini,
};