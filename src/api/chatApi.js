const API_URL = `${import.meta.env.VITE_API_URL}/api/chat`;

export const sendChatMessage = async (message) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message.trim(),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.reply || data.message || "Something went wrong."
      );
    }

    return {
      reply: data.reply || "Sorry, I don't have information about that.",
    };
  } catch (error) {
    console.error("Chat API Error:", error);
    throw error;
  }
};