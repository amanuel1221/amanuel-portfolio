const API_URL = `${import.meta.env.VITE_API_URL}/api/chat`;

export const sendChatMessage = async (
  message,
  history = [],
  onChunk,
  onDone
) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/plain",
      },
      body: JSON.stringify({
        message: message.trim(),
        history,
      }),
    });

    if (!response.ok) {
      let errorMessage = "Something went wrong.";

      try {
        const data = await response.json();

        errorMessage =
          data.reply ||
          data.message ||
          errorMessage;
      } catch {
        // Response was not JSON.
      }

      throw new Error(errorMessage);
    }

    if (!response.body) {
      throw new Error(
        "Streaming is not supported by this browser."
      );
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let fullText = "";

    while (true) {
      const { value, done } = await reader.read();

      if (done) {
        break;
      }

      const chunk = decoder.decode(value, {
        stream: true,
      });

      if (!chunk) continue;

      fullText += chunk;

      if (typeof onChunk === "function") {
        onChunk(chunk, fullText);
      }
    }

    // Flush any remaining decoder data.
    const remaining = decoder.decode();

    if (remaining) {
      fullText += remaining;

      if (typeof onChunk === "function") {
        onChunk(remaining, fullText);
      }
    }

    if (typeof onDone === "function") {
      onDone(fullText);
    }

    return {
      reply: fullText.trim(),
    };
  } catch (error) {
    console.error("Chat API Error:", error);
    throw error;
  }
};