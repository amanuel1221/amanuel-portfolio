import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Send,
  X,
  Bot,
  User,
  Sparkles,
  MessageCircle,
  RefreshCw,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { sendChatMessage } from "../api/chatApi";

const suggestedQuestions = [
  "What are his core skills?",
  "Tell me about his projects",
  "How does Redat work?",
  "What is his education?",
];

function AssistantMarkdown({ content }) {
  return (
    <div className="chat-markdown text-[14px] leading-6 sm:text-[15px] sm:leading-7">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <p className="mb-3 leading-6 text-zinc-200 last:mb-0 sm:leading-7">
              {children}
            </p>
          ),

          strong: ({ children }) => (
            <strong className="font-semibold text-white">{children}</strong>
          ),

          em: ({ children }) => (
            <em className="italic text-zinc-200">{children}</em>
          ),

          h1: ({ children }) => (
            <h1 className="mb-3 mt-2 text-lg font-bold text-white">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mb-2 mt-5 text-base font-bold text-white">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-2 mt-4 text-sm font-semibold text-violet-300">
              {children}
            </h3>
          ),

          ul: ({ children }) => (
            <ul className="mb-3 ml-5 list-disc space-y-1.5 text-zinc-200">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="mb-3 ml-5 list-decimal space-y-1.5 text-zinc-200">
              {children}
            </ol>
          ),

          li: ({ children }) => <li className="pl-1 leading-6">{children}</li>,

          a: ({ href, children }) => {
            const safeHref =
              href &&
              (href.startsWith("https://") ||
                href.startsWith("http://") ||
                href.startsWith("mailto:"))
                ? href
                : null;

            if (!safeHref) {
              return <span>{children}</span>;
            }

            return (
              <a
                href={safeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-violet-400 underline decoration-violet-400/40 underline-offset-2 transition hover:text-violet-300"
              >
                {children}
              </a>
            );
          },

          blockquote: ({ children }) => (
            <blockquote className="my-3 border-l-2 border-violet-500 bg-violet-500/10 px-3 py-2 text-zinc-300">
              {children}
            </blockquote>
          ),

          hr: () => <hr className="my-4 border-white/10" />,

          code: ({ children, className }) => {
            const isBlock = className?.includes("language-");

            if (isBlock) {
              return (
                <code className="block overflow-x-auto rounded-xl bg-black/50 p-3 font-mono text-xs leading-6 text-violet-200">
                  {children}
                </code>
              );
            }

            return (
              <code className="rounded-md border border-white/10 bg-white/[0.07] px-1.5 py-0.5 font-mono text-xs text-violet-300">
                {children}
              </code>
            );
          },

          pre: ({ children }) => (
            <pre className="my-3 overflow-x-auto rounded-xl border border-white/10 bg-black/40">
              {children}
            </pre>
          ),

          table: ({ children }) => (
            <div className="my-3 overflow-x-auto rounded-xl border border-white/10">
              <table className="min-w-full text-left text-xs">
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className="bg-white/[0.05] text-white">{children}</thead>
          ),

          tbody: ({ children }) => (
            <tbody className="divide-y divide-white/10">{children}</tbody>
          ),

          tr: ({ children }) => (
            <tr className="transition hover:bg-white/[0.03]">{children}</tr>
          ),

          th: ({ children }) => (
            <th className="px-3 py-2 font-semibold">{children}</th>
          ),

          td: ({ children }) => (
            <td className="px-3 py-2 text-zinc-300">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 py-1">
      {[0, 0.15, 0.3].map((delay) => (
        <motion.span
          key={delay}
          animate={{
            y: [0, -4, 0],
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            delay,
          }}
          className="h-1.5 w-1.5 rounded-full bg-zinc-400"
        />
      ))}
    </div>
  );
}

function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content:
        "Selam! 👋 I'm Redat (ረዳት), Amanuel's AI assistant. Ask me about his skills, projects, experience, education, or how he built this portfolio.",
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${Math.min(
        inputRef.current.scrollHeight,
        128
      )}px`;
    }
  }, [message]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isLoading, isStreaming]);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 250);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const navbar = document.querySelector("nav") || document.querySelector("header");

    if (isOpen) {
      if (navbar) {
        navbar.style.display = "none";
      }

      const isMobile = window.innerWidth < 640;
      if (isMobile) {
        document.body.style.overflow = "hidden";
      }
    } else {
      if (navbar) {
        navbar.style.display = "";
      }
      document.body.style.overflow = "";
    }

    return () => {
      if (navbar) {
        navbar.style.display = "";
      }
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSendMessage = async (text = message) => {
    const trimmedMessage = text.trim();

    if (!trimmedMessage || isLoading) {
      return;
    }

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: trimmedMessage,
    };

    const assistantId = Date.now() + 1;

    const assistantMessage = {
      id: assistantId,
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);

    setMessage("");
    setIsLoading(true);
    setIsStreaming(false);

    try {
      await sendChatMessage(
        trimmedMessage,

        (chunk, fullText) => {
          if (!chunk) return;

          setIsStreaming(true);

          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantId
                ? {
                    ...msg,
                    content: fullText,
                  }
                : msg
            )
          );
        },

        (fullText) => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantId
                ? {
                    ...msg,
                    content:
                      fullText?.trim() ||
                      "Sorry, I don't have information about that.",
                  }
                : msg
            )
          );

          setIsStreaming(false);
        }
      );
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content:
                  "Sorry 😕 Redat couldn't connect to the AI service. Please try again.",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
      setIsStreaming(false);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      if (message.trim() && !isLoading) {
        handleSendMessage();
      }
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: Date.now(),
        role: "assistant",
        content: "Chat cleared. 👋 What would you like to know about Amanuel?",
      },
    ]);

    setMessage("");

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const showSuggestions = !isLoading && messages.length <= 1;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="fixed inset-0 z-[100] flex h-[100dvh] flex-col overflow-hidden bg-zinc-950 sm:inset-auto sm:bottom-24 sm:right-5 sm:h-[min(680px,calc(100vh-120px))] sm:w-[420px] sm:max-w-[calc(100vw-40px)] sm:rounded-2xl sm:border sm:border-white/10 sm:shadow-2xl sm:shadow-black/50"
          >
            <header className="relative z-10 flex shrink-0 items-center justify-between border-b border-white/[0.08] bg-zinc-950 px-4 py-3 sm:px-5 sm:py-3.5">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600">
                  <Bot className="h-5 w-5 text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-zinc-950 bg-emerald-400" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h2 className="truncate text-sm font-semibold text-white">
                      Redat
                    </h2>
                    <span className="text-xs text-zinc-500">ረዳት</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] text-zinc-500">
                      Amanuel's AI assistant
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={resetChat}
                  disabled={isLoading}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-white/[0.06] hover:text-zinc-200 disabled:cursor-not-allowed disabled:opacity-30"
                  title="New chat"
                  aria-label="Start a new chat"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-white/[0.06] hover:text-white"
                  aria-label="Close Redat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </header>

            <main className="flex-1 overflow-y-auto overscroll-contain px-4 py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 sm:px-5">
              <div className="mx-auto flex max-w-3xl flex-col gap-5">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                    className={`flex gap-2.5 ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-600/20">
                        <Bot className="h-4 w-4 text-violet-300" />
                      </div>
                    )}

                    <div
                      className={`max-w-[88%] ${
                        msg.role === "user"
                          ? "rounded-2xl rounded-br-md bg-violet-600 px-4 py-2.5 text-white"
                          : "min-w-0 text-zinc-200"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        msg.content ? (
                          <AssistantMarkdown content={msg.content} />
                        ) : isLoading ? (
                          <TypingIndicator />
                        ) : null
                      ) : (
                        <p className="whitespace-pre-wrap text-[14px] leading-6 sm:text-[15px]">
                          {msg.content}
                        </p>
                      )}

                      {msg.role === "assistant" &&
                        isStreaming &&
                        msg.id === messages[messages.length - 1]?.id && (
                          <motion.span
                            animate={{
                              opacity: [1, 0, 1],
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                            }}
                            className="ml-1 inline-block h-4 w-[2px] translate-y-1 rounded-full bg-violet-400"
                          />
                        )}
                    </div>

                    {msg.role === "user" && (
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.07]">
                        <User className="h-4 w-4 text-zinc-400" />
                      </div>
                    )}
                  </motion.div>
                ))}

                <div ref={messagesEndRef} />
              </div>
            </main>

            <AnimatePresence>
              {showSuggestions && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                  }}
                  className="shrink-0 border-t border-white/[0.06] px-4 py-3 sm:px-5"
                >
                  <div className="mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-violet-400" />
                    <span className="text-[11px] font-medium text-zinc-500">
                      Try asking
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => handleSendMessage(question)}
                        className="min-h-[42px] rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-left text-[11px] font-medium leading-4 text-zinc-400 transition hover:border-violet-500/30 hover:bg-violet-500/[0.08] hover:text-zinc-200 active:scale-[0.98]"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <footer className="shrink-0 border-t border-white/[0.08] bg-zinc-950 px-3 pb-3 pt-3 sm:px-4 sm:pb-4">
              <div className="flex items-end gap-2 rounded-2xl border border-white/[0.1] bg-white/[0.035] p-1.5 transition focus-within:border-violet-500/40 focus-within:bg-white/[0.05]">
                <textarea
                  ref={inputRef}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Message Redat..."
                  disabled={isLoading}
                  rows={1}
                  className="max-h-32 min-h-[42px] min-w-0 flex-1 resize-none overflow-y-auto bg-transparent px-3 py-2.5 text-sm leading-6 text-white outline-none placeholder:text-zinc-600 disabled:cursor-not-allowed"
                />

                <motion.button
                  type="button"
                  whileTap={{ scale: 0.92 }}
                  onClick={() => handleSendMessage()}
                  disabled={!message.trim() || isLoading}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:bg-white/[0.06] disabled:text-zinc-600"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>

              <p className="mt-2 text-center text-[10px] text-zinc-700">
                Redat can answer questions about Amanuel's work, projects,
                skills and experience.
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-600/30 ring-1 ring-white/20 sm:bottom-6 sm:right-6"
        aria-label={
          isOpen ? "Close Redat assistant" : "Open Redat assistant"
        }
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{
                opacity: 0,
                rotate: -45,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                rotate: 45,
              }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <span className="absolute right-0 top-0 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-zinc-950 bg-emerald-400" />
          </span>
        )}
      </motion.button>
    </>
  );
}

export default ChatAssistant;