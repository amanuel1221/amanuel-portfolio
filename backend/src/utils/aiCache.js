const cache = new Map();

const CACHE_TTL = 1000 * 60 * 30; // 30 minutes

const normalizeText = (text = "") => {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
};
const createCacheKey = (
  message,
  history = []
) => {
  const normalizedMessage =
    normalizeText(message);

  
  if (
    !Array.isArray(history) ||
    history.length === 0
  ) {
    return normalizedMessage;
  }

  const recentHistory = history
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
      content: normalizeText(
        item.content
      ),
    }));

  return JSON.stringify({
    history: recentHistory,
    message: normalizedMessage,
  });
};


const getCachedResponse = (
  message,
  history = []
) => {
  const key = createCacheKey(
    message,
    history
  );

  const cached = cache.get(key);

  if (!cached) {
    return null;
  }

  
  if (
    Date.now() - cached.createdAt >
    CACHE_TTL
  ) {
    cache.delete(key);

    return null;
  }

  return cached.response;
};

const setCachedResponse = (
  message,
  response,
  history = []
) => {
  const key = createCacheKey(
    message,
    history
  );

  cache.set(key, {
    response,
    createdAt: Date.now(),
  });
};


module.exports = {
  getCachedResponse,
  setCachedResponse,
};