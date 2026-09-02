const { askGeminiStream } = require("../services/geminiService");

const chat = async (req, res) => {
  try {
    const { message } = req.body;


    if (
      !message ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return res.status(400).json({
        reply: "Please provide a valid message.",
      });
    }

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

    await askGeminiStream(
      message.trim(),
      (chunk) => {
        if (!res.writableEnded) {
          res.write(chunk);
        }
      }
    );

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