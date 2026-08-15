const { askGemini } = require("../services/geminiService");

const chat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        message: "Please provide a valid message.",
      });
    }

    const reply = await askGemini(message);

    res.status(200).json({
      reply,
    });
  } catch (error) {
    console.error("AI chat error:", error);

    res.status(500).json({
      message: "Something went wrong. Please try again later.",
    });
  }
};

module.exports = {
  chat,
};