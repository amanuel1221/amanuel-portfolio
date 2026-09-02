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
  "⚡ Core Skills & Tech Stack",
  "💼 Featured Projects",
  "📬 How to Contact Him",
  "🎓 Education & Background",
];

function AssistantMarkdown({ content }) {
  return (
    <div className="chat-markdown text-sm leading-7 sm:text-[15px]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <p className="mb-3 leading-7 text-zinc-200 last:mb-0">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-white">{children}</strong>
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
            <h2 className="mb-2 mt-4 text-base font-bold text-white">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-2 mt-3 text-sm font-semibold text-violet-300">
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
          li: ({ children }) => (
            <li className="pl-1 leading-6">{children}</li>
          ),
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
                className="font-medium text-violet-400 underline decoration-violet-400/50 underline-offset-2 transition hover:text-violet-300 hover:decoration-violet-300"
              >
                {children}
              </a>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="my-3 rounded-r-lg border-l-2 border-violet-500 bg-violet-500/10 px-3 py-2 text-zinc-300">
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
            <thead className="bg-white/[0.06] text-white">{children}</thead>
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
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/20">
        <Bot className="h-5 w-5 text-violet-300" />
      </div>

      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-none border border-white/10 bg-zinc-900/90 px-4 py-3.5">
        {[0, 0.15, 0.3].map((delay) => (
          <motion.span
            key={delay}
            animate={{
              y: [0, -5, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              delay,
            }}
            className="h-2 w-2 rounded-full bg-violet-400"
          />
        ))}
      </div>
    </motion.div>
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
        "Selam! 👋 I'm Redat (ረዳት), Amanuel's AI helper. Ask me anything about his skills, projects, experience, or education.",
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 300);

    return () => clearTimeout(timer);
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
              msg.id === assistantId ? { ...msg, content: fullText } : msg
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
        content: "Chat cleared! How else can Redat help you today?",
      },
    ]);

    setMessage("");

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed bottom-12 right-12 z-40 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="fixed bottom-24 right-4 z-50 flex h-[min(720px,calc(100vh-120px))] w-[calc(100vw-2rem)] max-w-[520px] flex-col overflow-hidden rounded-3xl border border-violet-500/30 bg-zinc-950/95 shadow-[0_0_45px_rgba(139,92,246,0.25)] backdrop-blur-2xl"
          >
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-80" />

            <div className="pointer-events-none absolute left-1/2 top-0 h-28 w-full -translate-x-1/2 bg-gradient-to-b from-violet-500/15 to-transparent" />

            <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-md">
              <div className="flex items-center gap-3.5">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-500 shadow-lg shadow-violet-500/40 ring-1 ring-white/30">
                  <Bot className="h-6 w-6 text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-zinc-950 bg-emerald-400" />
                </div>

                <div>
                  <h3 className="flex items-center gap-1.5 text-base font-semibold tracking-wide text-white">
                    Redat
                    <span className="text-xs font-normal text-violet-400">
                      (ረዳት)
                    </span>
                  </h3>

                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    <span className="text-xs font-medium text-zinc-400">
                      Amanuel's AI Assistant • Online
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={resetChat}
                  disabled={isLoading}
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                  title="Reset Chat"
                >
                  <RefreshCw className="h-4.5 w-4.5" />
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close Redat assistant"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-3 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/20 shadow-inner">
                      <Bot className="h-5 w-5 text-violet-300" />
                    </div>
                  )}

                  <div
                    className={`rounded-2xl px-4 py-3.5 shadow-md ${
                      msg.role === "user"
                        ? "max-w-[82%] rounded-br-none bg-gradient-to-r from-violet-600 to-indigo-600 font-medium text-white"
                        : "max-w-[92%] rounded-bl-none border border-white/10 bg-zinc-900/90 text-zinc-100 backdrop-blur-md"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      msg.content ? (
                        <AssistantMarkdown content={msg.content} />
                      ) : isLoading ? (
                        <TypingIndicator />
                      ) : null
                    ) : (
                      <div className="whitespace-pre-wrap text-sm leading-6 sm:text-base">
                        {msg.content}
                      </div>
                    )}

                    {msg.role === "assistant" &&
                      isStreaming &&
                      msg.id === messages[messages.length - 1]?.id && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="ml-1 inline-block h-4 w-[2px] translate-y-1 rounded-full bg-violet-400"
                        />
                      )}
                  </div>

                  {msg.role === "user" && (
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                      <User className="h-5 w-5 text-zinc-200" />
                    </div>
                  )}
                </motion.div>
              ))}

              <div ref={messagesEndRef} />
            </div>

            {!isLoading && (
              <div className="border-t border-white/[0.08] bg-white/[0.02] px-4 py-3">
                <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-zinc-300">
                  <Sparkles className="h-3.5 w-3.5 text-violet-400" />
                  Suggested Prompts
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleSendMessage(question)}
                      className="flex items-center justify-center rounded-xl border border-white/15 bg-zinc-900/90 px-3 py-2.5 text-xs font-medium text-zinc-200 shadow-sm transition-all hover:border-violet-500/50 hover:bg-violet-500/20 hover:text-white active:scale-95"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-white/10 bg-zinc-950/95 p-4 backdrop-blur-md">
              <div className="flex items-end gap-2 rounded-2xl border border-white/15 bg-zinc-900/95 p-2 shadow-inner transition-all focus-within:border-violet-500/60 focus-within:ring-2 focus-within:ring-violet-500/20">
                <textarea
                  ref={inputRef}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Redat about Amanuel..."
                  disabled={isLoading}
                  rows={1}
                  className="max-h-32 min-h-[48px] min-w-0 flex-1 resize-none overflow-y-auto bg-transparent px-3 py-3 text-sm leading-6 text-white outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed sm:text-[15px]"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessage()}
                  disabled={!message.trim() || isLoading}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send className="h-4.5 w-4.5" />
                </motion.button>
              </div>

              <div className="mt-2 flex items-center justify-between px-1">
                <p className="text-[11px] font-medium text-zinc-600">
                  Shift + Enter for new line
                </p>
                <p className="text-[11px] font-medium text-zinc-500">
                  Redat (ረዳት)
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-600 text-white shadow-[0_0_25px_rgba(139,92,246,0.5)] ring-2 ring-white/30"
        aria-label="Open Redat assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-7 w-7" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-7 w-7" />
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-zinc-950 bg-emerald-400" />
          </span>
        )}
      </motion.button>
    </>
  );
}

export default ChatAssistant;