const { askGeminiStream } = require("../services/geminiService");

const {
  getLocalPortfolioAnswer,
} = require("../services/localPortfolioService");

const {
  getCachedResponse,
  setCachedResponse,
} = require("../utils/aiCache");

const sanitizeHistory = (history) => {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .filter(
      (item) =>
        item &&
        (item.role === "user" ||
          item.role === "assistant") &&
        typeof item.content === "string" &&
        item.content.trim()
    )
    .slice(-6)
    .map((item) => ({
      role: item.role,
      content: item.content.trim().slice(0, 1000),
    }));
};

const chat = async (req, res) => {
  try {
    const {
      message,
      history,
    } = req.body;

    if (
      !message ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return res.status(400).json({
        reply: "Please provide a valid message.",
      });
    }

    const cleanMessage = message.trim();


    if (cleanMessage.length > 1000) {
      return res.status(400).json({
        reply:
          "Please keep your message under 1000 characters.",
      });
    }


    const cleanHistory =
      sanitizeHistory(history);


    res.status(200);

    res.setHeader(
      "Content-Type",
      "text/plain; charset=utf-8"
    );

    res.setHeader(
      "Cache-Control",
      "no-cache, no-transform"
    );

    res.setHeader(
      "Connection",
      "keep-alive"
    );

    res.setHeader(
      "X-Accel-Buffering",
      "no"
    );


    const localAnswer =
      getLocalPortfolioAnswer(
        cleanMessage
      );

    if (localAnswer) {
      res.write(localAnswer);
      res.end();

      return;
    }

    const cachedResponse =
      getCachedResponse(
        cleanMessage
      );

    if (cachedResponse) {
      res.write(cachedResponse);
      res.end();

      return;
    }
    const fullResponse =
      await askGeminiStream(
        cleanMessage,
        cleanHistory,
        (chunk) => {
          if (!res.writableEnded) {
            res.write(chunk);
          }
        }
      );

   
    if (
      fullResponse &&
      typeof fullResponse === "string" &&
      fullResponse.trim()
    ) {
      setCachedResponse(
        cleanMessage,
        fullResponse
      );
    }

    if (!res.writableEnded) {
      res.end();
    }
  } catch (error) {
    console.error(
      "AI chat controller error:",
      error
    );

    if (res.headersSent) {
      if (!res.writableEnded) {
        res.write(
          "\n\nSorry, something went wrong while generating the response. Please try again. 👋"
        );

        res.end();
      }

      return;
    }
    return res.status(500).json({
      reply:
        "Sorry, I couldn't answer that right now. Please try again in a moment.",
    });
  }
};

module.exports = {
  chat,
};