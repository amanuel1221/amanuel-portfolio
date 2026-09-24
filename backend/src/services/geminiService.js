const portfolio = require("../data/portfolio.json");

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent";


const PORTFOLIO_CONTEXT = JSON.stringify(portfolio);


const SYSTEM_INSTRUCTION = `
You are Redat, Amanuel's official portfolio AI assistant.

Your ONLY purpose is to help visitors learn about Amanuel using ONLY
the PORTFOLIO DATA provided below.

RULES:

1. PORTFOLIO DATA IS THE ONLY SOURCE OF TRUTH
- Never invent information.
- Never guess missing information.
- Never use outside knowledge about Amanuel.
- Never create jobs, clients, companies, achievements, dates, skills,
  projects, education, certifications, experience, statistics,
  technologies, or contact information that are not present in the data.

2. UNDERSTAND USER INTENT
Understand what the user means, not only exact keywords.

For example:
"Where does Amanuel study?"
"What university is he in?"
"What's his academic background?"

These may refer to the education information.

Likewise:
"How can I contact him?"
"Can I get his email?"
"Where can I find Amanuel online?"

These may refer to contact or social information.

Use semantic understanding and relevant relationships between portfolio
fields.

3. USE CONVERSATION CONTEXT
The user may ask follow-up questions such as:

"What testing tools does he use?"
"How many?"
"Which one?"
"Tell me more about that."

Use the previous conversation messages to understand what the user
is referring to.

However, conversation history is NOT a source of new facts.

The portfolio data remains the ONLY source of truth.

If the conversation history contains information that conflicts with
the portfolio data, always follow the portfolio data.

4. ANSWER ONLY WHAT IS RELEVANT
- Do not dump the entire portfolio.
- Use information from multiple fields only when relevant.
- Keep answers concise.
- If the user asks for more detail, provide more relevant detail.

5. THIRD PERSON
Always speak about Amanuel in third person.

Use:
"Amanuel uses React."
"Amanuel has experience with..."
"Amanuel's portfolio includes..."

Avoid:
"I use React."
"My projects."
"My experience."

6. GREETINGS
For simple greetings such as:
hello, hi, hey, selam, good morning, good afternoon, good evening

Respond briefly and naturally.

Example:
"Hello! 👋 I'm Redat, Amanuel's AI assistant. What would you like to know about him?"

7. THANKS / GOODBYE
For:
thanks, thank you, goodbye, bye, see you

Respond briefly and naturally.

Example:
"You're welcome! 👋 Feel free to ask if you'd like to know more about Amanuel."

8. MISSING INFORMATION
If the user asks about Amanuel or his portfolio but the requested
information does not exist in the portfolio data, respond EXACTLY:

"Sorry, I don't have information about that."

Do not guess or add unrelated information.

9. UNRELATED QUESTIONS
If the question is unrelated to Amanuel or his portfolio, respond EXACTLY:

"I'm here to help you learn more about Amanuel and his portfolio. I don't have information about that."

Do not answer unrelated questions.

10. MARKDOWN
The frontend renders Markdown.

Use clean Markdown naturally.

Use:
- **Bold** for important information.
- Bullet lists when listing multiple items.
- Numbered lists when order matters.
- Markdown links only when the URL exists in the portfolio.

Never invent URLs.
Never return JSON.
Never wrap the response in a code block.

11. PROJECT QUESTIONS
When discussing projects, only use fields that exist in the portfolio.

Relevant fields may include:
- project name
- category
- description
- technologies
- testing
- GitHub
- live URL
- features

12. TESTING / PERFORMANCE
When asked about testing, use testing information from the portfolio.

When asked about performance, use documented performance information
from the portfolio.

Never invent metrics.

13. PROFESSIONAL CLAIMS
Do not exaggerate Amanuel's experience.

Do not call him:
- Senior Developer
- Expert
- Lead Engineer
- Principal Engineer

unless the portfolio explicitly says so.

14. MOST IMPORTANT RULE
Understand the user's intent and answer using only information supported
by the portfolio data.

PORTFOLIO DATA:
${PORTFOLIO_CONTEXT}
`;



const GENERATION_CONFIG = {
  temperature: 0.3,

  maxOutputTokens: 400,
};



const createRequestBody = (
  message,
  history = []
) => {
  const conversation = [];


  for (const item of history) {
    if (
      !item ||
      !item.role ||
      !item.content
    ) {
      continue;
    }

    conversation.push({
      role:
        item.role === "assistant"
          ? "model"
          : "user",

      parts: [
        {
          text: item.content,
        },
      ],
    });
  }



  conversation.push({
    role: "user",

    parts: [
      {
        text: message,
      },
    ],
  });


  return {
    systemInstruction: {
      parts: [
        {
          text: SYSTEM_INSTRUCTION,
        },
      ],
    },

    contents: conversation,

    generationConfig:
      GENERATION_CONFIG,
  };
};


const getErrorCode = (error) => {
  return error?.cause?.code || error?.code;
};

async function askGemini(
  message,
  history = []
) {
  const controller =
    new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 15000);

  try {
    const response = await fetch(
      GEMINI_URL,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key":
            process.env.GEMINI_API_KEY,
        },

        body: JSON.stringify(
          createRequestBody(
            message,
            history
          )
        ),

        signal: controller.signal,
      }
    );



    if (!response.ok) {
      const errorText =
        await response.text();

      console.error(
        "Gemini API error:",
        response.status,
        errorText
      );

      throw new Error(
        "GEMINI_API_ERROR"
      );
    }


    const data =
      await response.json();

    const reply =
      data.candidates?.[0]?.content?.parts
        ?.map(
          (part) =>
            part.text || ""
        )
        .join("")
        .trim();

    if (!reply) {
      return "Sorry, I don't have information about that.";
    }

    return reply;
  } catch (error) {
    console.error(
      "Gemini request error:",
      error
    );

    const errorCode =
      getErrorCode(error);

    if (
      errorCode === "ETIMEDOUT" ||
      errorCode ===
      "UND_ERR_CONNECT_TIMEOUT" ||
      error.name === "AbortError"
    ) {
      throw new Error(
        "GEMINI_TIMEOUT"
      );
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}



async function askGeminiStream(
  message,
  history = [],
  onChunk
) {
  const controller =
    new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 15000);

  let fullResponse = "";

  let streamCompleted = false;

  try {
    const response = await fetch(
      `${GEMINI_URL}?alt=sse`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key":
            process.env.GEMINI_API_KEY,
        },

        body: JSON.stringify(
          createRequestBody(
            message,
            history
          )
        ),

        signal: controller.signal,
      }
    );


    if (!response.ok) {
      const errorText =
        await response.text();

      console.error(
        "Gemini streaming API error:",
        response.status,
        errorText
      );

      onChunk(
        "Sorry, I'm having trouble generating a response right now. Please try again in a moment. 👋"
      );

      return null;
    }


    if (!response.body) {
      onChunk(
        "Sorry, the AI response stream isn't available right now. Please try again."
      );

      return null;
    }


    const reader =
      response.body.getReader();

    const decoder =
      new TextDecoder();

    let buffer = "";

    while (true) {
      const {
        value,
        done,
      } = await reader.read();

      if (done) {
        break;
      }

      buffer += decoder.decode(
        value,
        {
          stream: true,
        }
      );

      const lines =
        buffer.split("\n");

      buffer =
        lines.pop() || "";

      for (const line of lines) {
        const trimmed =
          line.trim();

        if (!trimmed) {
          continue;
        }


        if (
          !trimmed.startsWith(
            "data:"
          )
        ) {
          continue;
        }

        const jsonText =
          trimmed
            .slice(5)
            .trim();

        if (
          !jsonText ||
          jsonText === "[DONE]"
        ) {
          continue;
        }

        try {
          const data =
            JSON.parse(
              jsonText
            );

          const text =
            data.candidates?.[0]
              ?.content?.parts
              ?.map(
                (part) =>
                  part.text || ""
              )
              .join("") || "";

          if (!text) {
            continue;
          }

          fullResponse += text;


          onChunk(text);
        } catch (parseError) {
          console.error(
            "Gemini stream parse error:",
            parseError
          );
        }
      }
    }



    const remaining =
      buffer.trim();

    if (
      remaining.startsWith(
        "data:"
      )
    ) {
      const jsonText =
        remaining
          .slice(5)
          .trim();

      if (
        jsonText &&
        jsonText !== "[DONE]"
      ) {
        try {
          const data =
            JSON.parse(
              jsonText
            );

          const text =
            data.candidates?.[0]
              ?.content?.parts
              ?.map(
                (part) =>
                  part.text || ""
              )
              .join("") || "";

          if (text) {
            fullResponse += text;

            onChunk(text);
          }
        } catch (parseError) {
          console.error(
            "Gemini final stream parse error:",
            parseError
          );
        }
      }
    }

    streamCompleted = true;

    return fullResponse.trim();
  } catch (error) {
    console.error(
      "Gemini streaming error:",
      error
    );

    const errorCode =
      getErrorCode(error);

    if (
      errorCode === "ETIMEDOUT" ||
      errorCode ===
      "UND_ERR_CONNECT_TIMEOUT" ||
      error.name === "AbortError"
    ) {
      onChunk(
        "I'm having a little trouble connecting right now. Please try again in a moment. 👋"
      );

      return null;
    }

    if (
      errorCode === "ECONNRESET"
    ) {
      onChunk(
        "The connection was interrupted. Please try sending your message again. 👋"
      );

      return null;
    }

    if (
      errorCode === "ENOTFOUND"
    ) {
      onChunk(
        "I'm temporarily unable to reach the AI service. Please try again shortly. 👋"
      );

      return null;
    }

    onChunk(
      "Sorry, I couldn't process that right now. Please try again in a moment. 👋"
    );

    return null;
  } finally {
    clearTimeout(timeout);

    if (!streamCompleted) {
      fullResponse = "";
    }
  }
}

module.exports = {
  askGemini,
  askGeminiStream,
};