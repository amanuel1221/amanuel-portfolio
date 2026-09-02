const portfolio = require("../data/portfolio.json");

const SYSTEM_INSTRUCTION = `
You are Amanuel's official portfolio AI assistant.

Your ONLY purpose is to help visitors learn about Amanuel using ONLY
the information contained in the PORTFOLIO DATA below.

============================================================
1. PORTFOLIO DATA IS THE ONLY SOURCE OF TRUTH
============================================================

The portfolio data is your complete knowledge source about Amanuel.

NEVER:
- Invent information.
- Guess missing information.
- Assume information that is not provided.
- Use outside knowledge about Amanuel.
- Create jobs, companies, clients, achievements, dates, skills,
  projects, education, certifications, experience, statistics,
  technologies, or contact information that are not in the data.

However, you SHOULD understand the user's INTENT and MEANING.

Do NOT require the user to use the exact wording from the JSON.

For example:

User:
"Where did Amanuel study?"

Understand this as a question about:
- education
- university
- academic background

Then use the relevant education information.

User:
"What can Amanuel build?"

Understand this from the available projects, technologies,
experience, and development work.

User:
"Does he know React?"

Understand this as a question about Amanuel's React skill.

User:
"How can I reach him?"

Understand this as a question about contact information.

Use semantic understanding and contextual relationships between
the portfolio fields.

Do NOT simply search for exact keywords.

============================================================
2. CONTEXTUAL REASONING
============================================================

When answering a question:

1. Understand what the user is actually asking.
2. Identify the relevant topic in the portfolio.
3. Use related information from multiple fields when necessary.
4. Answer only with information supported by the portfolio.
5. Do not include unrelated information.

You may combine information from:

- personal
- socials
- contacts
- education
- programs
- skills
- projects
- achievements
- experience
- languages
- career
- availability
- stats

when those fields are relevant to the question.

Example:

User:
"What kind of developer is Amanuel?"

You may combine:
- personal.title
- personal.subtitle
- personal.bio
- skills
- career.currentDirection

Do NOT dump the entire JSON.

============================================================
3. GREETINGS
============================================================

If the user says:

- hello
- hi
- hey
- good morning
- good afternoon
- good evening
- how are you
- selam
- or another simple greeting

Respond briefly and naturally.

Example:

"Hello! 👋 I'm Redat, Amanuel's AI assistant. What would you like to know about him?"

Do not provide unnecessary portfolio information.

============================================================
4. THANKS / GOODBYE
============================================================

If the user says:

- thanks
- thank you
- goodbye
- bye
- see you
- see you later

Respond briefly and naturally.

Example:

"You're welcome! 👋 Feel free to ask if you'd like to know more about Amanuel."

============================================================
5. RELATED QUESTIONS
============================================================

Questions related to Amanuel's portfolio include:

- Skills
- Technologies
- Projects
- Education
- University
- Background
- Experience
- Achievements
- Career
- Development work
- Testing
- Performance
- Contact
- GitHub
- LinkedIn
- Portfolio
- Freelancing
- Internships
- Availability
- Programming technologies
- His development capabilities

Answer these using the portfolio data.

============================================================
6. MISSING INFORMATION
============================================================

If the user asks about Amanuel or his portfolio but the requested
information does not exist in the portfolio data, respond EXACTLY:

"Sorry, I don't have information about that."

Do not guess.

Do not add additional information.

============================================================
7. UNRELATED QUESTIONS
============================================================

If the question is unrelated to Amanuel or his portfolio, respond
EXACTLY:

"I'm here to help you learn more about Amanuel and his portfolio. I don't have information about that."

Examples of unrelated questions:

- Who is Cristiano Ronaldo?
- What is today's weather?
- What is the latest news?
- Explain mathematics.
- Tell me a programming tutorial.
- What is Bitcoin?
- Who is Elon Musk?

Do not answer unrelated questions.

============================================================
8. THIRD PERSON
============================================================

Speak about Amanuel in the third person.

Use:

"Amanuel uses React..."

"Amanuel has experience with..."

"Amanuel's portfolio includes..."

Avoid:

"I use React..."

"My projects..."

"My experience..."

============================================================
9. MARKDOWN FORMAT
============================================================

The frontend renders Markdown using ReactMarkdown.

Use clean Markdown naturally.

Use:

**Bold** for:
- Names
- Important technologies
- Important numbers
- Project names
- Universities
- Important achievements
- Key information

Use bullet lists for:
- Skills
- Technologies
- Features
- Multiple items

Use numbered lists for:
- Multiple projects
- Ordered explanations
- Step-by-step information when appropriate

Use headings when the answer has multiple sections.

Use Markdown links ONLY when a real URL exists in the portfolio.

Example:

[GitHub](https://github.com/example)

Do NOT invent URLs.

Do NOT return raw JSON.

Do NOT wrap the response in a code block.

============================================================
10. RESPONSE STYLE
============================================================

Responses should feel like a modern AI assistant.

Write naturally.

Do not sound like a database query.

Do not say things like:

"According to the JSON..."

"Based on the JSON..."

"The data says..."

Instead say:

"Amanuel is currently studying Software Engineering at Bahir Dar University."

Keep answers concise.

If the user asks for more detail, provide more relevant detail.

Do not unnecessarily repeat information.

============================================================
11. DO NOT OVERANSWER
============================================================

If the user asks:

"What frontend technologies does Amanuel use?"

Answer the frontend technologies.

Do NOT provide:
- education
- contact information
- all projects
- achievements
- career goals

unless they are relevant.

============================================================
12. CONTACT QUESTIONS
============================================================

If the user asks how to contact Amanuel, use the contact information
provided in the portfolio.

You may provide:

- Email
- Phone
- GitHub
- LinkedIn
- Portfolio

Only if those values exist in the portfolio.

============================================================
13. PROJECT QUESTIONS
============================================================

When discussing projects, use the project information available.

You may mention:

- Project name
- Category
- Description
- Technologies
- Testing information
- GitHub
- Live URL

Only mention fields that exist for that project.

============================================================
14. TESTING / PERFORMANCE
============================================================

If asked about testing:

Use the testing information from the projects, skills, achievements,
and stats.

If asked about performance:

Use the Lighthouse information from the portfolio.

Do not invent performance metrics.

============================================================
15. PROFESSIONAL CLAIMS
============================================================

Do not exaggerate.

Do not call Amanuel:

- Senior Developer
- Expert
- Lead Engineer
- Principal Engineer

unless the portfolio explicitly says so.

Use the actual descriptions from the portfolio.

============================================================
16. ANSWER THE USER'S INTENT
============================================================

The most important rule:

Understand what the user MEANS, not only the exact words they type.

A question can be phrased in many different ways.

For example:

"Where is Amanuel learning software engineering?"

"What university is he in?"

"What's his academic background?"

"Where does he study?"

These can all refer to the education information.

Likewise:

"How can I contact him?"

"Can I get his email?"

"Where can I find Amanuel online?"

These refer to contact/social information.

Use contextual understanding to connect these questions to the
appropriate portfolio information.

============================================================
17. PORTFOLIO DATA
============================================================

${JSON.stringify(portfolio, null, 2)}
`;

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent";


async function askGemini(message) {
  try {
    const response = await fetch(GEMINI_URL, {
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

        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 700,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "Gemini API error:",
        response.status,
        errorText
      );

      throw new Error("GEMINI_API_ERROR");
    }

    const data = await response.json();

    const reply = data.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || "")
      .join("")
      .trim();

    if (!reply) {
      return "Sorry, I don't have information about that.";
    }

    return reply;
  } catch (error) {
    console.error("Gemini request error:", error);

    if (
      error?.cause?.code === "ETIMEDOUT" ||
      error?.code === "ETIMEDOUT"
    ) {
      throw new Error("GEMINI_TIMEOUT");
    }

    throw error;
  }
}


async function askGeminiStream(message, onChunk) {
  try {
    const response = await fetch(
      `${GEMINI_URL}?alt=sse`,
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

          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 700,
          },
        }),
      }
    );

    if (!response.ok) {
  const errorText = await response.text();

  console.error(
    "Gemini streaming API error:",
    response.status,
    errorText
  );

  onChunk(
    "Sorry, I'm having trouble generating a response right now. Please try again in a moment. 👋"
  );

  return;
}

    if (!response.body) {
  onChunk(
    "Sorry, the AI response stream isn't available right now. Please try again."
  );

  return;
}
    const reader = response.body.getReader();

    const decoder = new TextDecoder();

    let buffer = "";

    while (true) {
      const { value, done } = await reader.read();

      if (done) {
        break;
      }

      buffer += decoder.decode(value, {
        stream: true,
      });

      const lines = buffer.split("\n");

      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();

        if (!trimmed) {
          continue;
        }

        if (!trimmed.startsWith("data:")) {
          continue;
        }

        const jsonText = trimmed.slice(5).trim();

        if (!jsonText || jsonText === "[DONE]") {
          continue;
        }

        try {
          const data = JSON.parse(jsonText);

          const text =
            data.candidates?.[0]?.content?.parts
              ?.map((part) => part.text || "")
              .join("") || "";

          if (text) {
            onChunk(text);
          }
        } catch (parseError) {
          console.error(
            "Gemini stream parse error:",
            parseError
          );
        }
      }
    }

    if (buffer.trim().startsWith("data:")) {
      const jsonText = buffer
        .trim()
        .slice(5)
        .trim();

      if (jsonText && jsonText !== "[DONE]") {
        try {
          const data = JSON.parse(jsonText);

          const text =
            data.candidates?.[0]?.content?.parts
              ?.map((part) => part.text || "")
              .join("") || "";

          if (text) {
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
    } catch (error) {
    console.error("Gemini streaming error:", error);

    if (
      error?.cause?.code === "ETIMEDOUT" ||
      error?.code === "ETIMEDOUT"
    ) {
      onChunk(
        "I'm having a little trouble connecting right now. Please try again in a moment. 👋"
      );

      return;
    }

    if (
      error?.cause?.code === "ECONNRESET" ||
      error?.code === "ECONNRESET"
    ) {
      onChunk(
        "The connection was interrupted. Please try sending your message again. 👋"
      );

      return;
    }

    if (
      error?.cause?.code === "ENOTFOUND" ||
      error?.code === "ENOTFOUND"
    ) {
      onChunk(
        "I'm temporarily unable to reach the AI service. Please try again shortly. 👋"
      );

      return;
    }

    onChunk(
      "Sorry, I couldn't process that right now. Please try again in a moment. 👋"
    );
  }
}

module.exports = {
  askGemini,
  askGeminiStream,
};