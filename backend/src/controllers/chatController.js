const { askGemini } = require("../services/geminiService");

const chat = async (req, res) => {
  try {
    const { message } = req.body;

    // 1. Validate incoming input
    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        reply: "Please provide a valid message.",
      });
    }

    // 2. Fetch AI response from service
    const reply = await askGemini(message.trim());

    // 3. Return successful response
    return res.status(200).json({
      reply,
    });
  } catch (error) {
    console.error("AI chat controller error:", error);

    // 4. Return 500 error code for server/unhandled exceptions
    return res.status(500).json({
      reply: "Sorry, I couldn't answer that right now. Please try again.",
    });
  }
};

module.exports = {
  chat,
};