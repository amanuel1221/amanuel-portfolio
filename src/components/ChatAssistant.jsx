import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X, Bot, User, Sparkles, MessageCircle, RefreshCw } from "lucide-react";
import { sendChatMessage } from "../api/chatApi";

const suggestedQuestions = [
  "⚡ Core Skills & Tech Stack",
  "💼 Featured Projects",
  "📬 How to Contact Him",
  "🎓 Education & Background",
];

function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content:
        "Selam! 👋 I'm Redat (ረደአት), Amanuel's AI helper. Ask me anything about his skills, projects, experience, or education.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = async (text = message) => {
    const trimmedMessage = text.trim();
    if (!trimmedMessage || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: trimmedMessage,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const data = await sendChatMessage(trimmedMessage);
      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.reply || "Sorry, I couldn't generate a response right now.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: "Sorry 😕 Redat couldn't connect to the server. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
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
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-12 right-12 z-40 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl pointer-events-none"
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
            className="
              fixed
              bottom-24
              right-4
              z-50
              flex
              h-[min(680px,calc(100vh-120px))]
              w-[calc(100vw-2rem)]
              max-w-[420px]
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-violet-500/30
              bg-zinc-950/90
              shadow-[0_0_30px_rgba(139,92,246,0.25)]
              backdrop-blur-2xl
            "
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-80" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-28 w-full bg-gradient-to-b from-violet-500/15 to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-md">
              <div className="flex items-center gap-3.5">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-500 shadow-lg shadow-violet-500/40 ring-1 ring-white/30">
                  <Bot className="h-6 w-6 text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-zinc-950 bg-emerald-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-base text-white tracking-wide flex items-center gap-1.5">
                    Redat <span className="text-xs text-violet-400 font-normal">(ረዳት)</span>
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-zinc-400 font-medium">
                      Amanuel's AI Assistant • Online
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={resetChat}
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white hover:cursor-pointer"
                  title="Reset Chat"
                >
                  <RefreshCw className="h-4.5 w-4.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white hover:cursor-pointer"
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
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-violet-500/20 border border-violet-500/30 shadow-inner">
                      <Bot className="h-5 w-5 text-violet-300" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm sm:text-base leading-relaxed tracking-wide shadow-md ${
                      msg.role === "user"
                        ? "rounded-br-none bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium"
                        : "rounded-bl-none bg-zinc-900/90 border border-white/10 text-zinc-100 backdrop-blur-md"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  </div>

                  {msg.role === "user" && (
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/15">
                      <User className="h-5 w-5 text-zinc-200" />
                    </div>
                  )}
                </motion.div>
              ))}

              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-violet-500/20 border border-violet-500/30">
                      <Bot className="h-5 w-5 text-violet-300" />
                    </div>

                    <div className="flex items-center gap-2 rounded-2xl rounded-bl-none bg-zinc-900/90 border border-white/10 px-4 py-3.5">
                      <motion.span
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                        className="h-2 w-2 rounded-full bg-violet-400"
                      />
                      <motion.span
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.15 }}
                        className="h-2 w-2 rounded-full bg-violet-400"
                      />
                      <motion.span
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
                        className="h-2 w-2 rounded-full bg-violet-400"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {!isLoading && (
              <div className="px-4 py-3 border-t border-white/[0.08] bg-white/[0.02]">
                <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-zinc-300">
                  <Sparkles className="h-3.5 w-3.5 text-violet-400 hover:cursor-pointer" />
                  Suggested Prompts
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleSendMessage(question)}
                      className="
                        flex
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/15
                        bg-zinc-900/90
                        px-3
                        py-2.5
                        text-xs
                        font-medium
                        text-zinc-200
                        transition-all
                        hover:border-violet-500/50
                        hover:bg-violet-500/20
                        hover:text-white
                        hover:cursor-pointer
                        active:scale-95
                        shadow-sm
                      "
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-white/10 bg-zinc-950/90 p-4 backdrop-blur-md">
              <div className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-zinc-900/90 p-2 transition-all focus-within:border-violet-500/60 focus-within:ring-2 focus-within:ring-violet-500/30">
                <input
                  ref={inputRef}
                  type="text"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Redat about Amanuel..."
                  disabled={isLoading}
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-3
                    py-2
                    text-sm
                    sm:text-base
                    text-white
                    outline-none
                    placeholder:text-zinc-500
                    disabled:cursor-not-allowed
                  "
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessage()}
                  disabled={!message.trim() || isLoading}
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-600
                    to-indigo-600
                    text-white
                    shadow-lg
                    shadow-violet-600/40
                    transition-all
                    hover:brightness-110
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    hover:cursor-pointer
                  "
                  aria-label="Send message"
                >
                  <Send className="h-4.5 w-4.5" />
                </motion.button>
              </div>

              <p className="mt-2 text-center text-xs text-zinc-500 font-medium">
                Redat (ረዳት) • Amanuel's AI Assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-violet-600
          via-indigo-600
          to-purple-600
          text-white
          shadow-[0_0_25px_rgba(139,92,246,0.5)]
          ring-2
          ring-white/30
        "
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
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-zinc-950" />
          </span>
        )}
      </motion.button>
    </>
  );
}

export default ChatAssistant;