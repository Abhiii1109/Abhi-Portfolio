"use client";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "👋 Hey there! I'm Abhi's portfolio assistant. Ask me about his work, skills, projects, or anything else!\n\nWhat's on your mind?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInputValue("");

    // Simulate AI typing response
    setTimeout(() => {
      let botResponse =
        "I'm currently a static demo representation meant to showcase premium UI interactions, but Abhi would love to chat with you! Head over to the Contact section to send an email directly.";

      const prompt = text.toLowerCase();

      if (prompt.includes("experience") || prompt.includes("work")) {
        botResponse =
          "I'm currently pursuing my BCA at Sardar Patel University (2026 - Present).\n\nRather than waiting for graduation, I'm already deep in the trenches—obsessively building full-stack applications, engineering sleek UI architectures, and turning complex ideas into functional, production-ready code through sheer hands-on execution.";
      } else if (prompt.includes("about")) {
        botResponse =
          "Abhi is a high-ambition Full Stack Developer from India who crafts digital experiences that feel frictionless and incredibly premium.";
      } else if (
        prompt.includes("tech") ||
        prompt.includes("stack") ||
        prompt.includes("skills")
      ) {
        botResponse =
          "His arsenal includes React, Next.js, Framer Motion for sleek interfaces—and Node.js, Express, and MongoDB under the hood to ensure everything runs like a well-oiled machine.";
      } else if (prompt.includes("projects") || prompt.includes("portfolio")) {
        botResponse =
          "Check out the 'SELECTED WORKS' section above! It features everything from a fully structural E-Commerce API to a massive backend MERN Human Resource Management System.";
      } else if (
        prompt.includes("contact") ||
        prompt.includes("email") ||
        prompt.includes("hire")
      ) {
        botResponse =
          "Awesome! Scroll down to the absolute bottom of the page or click 'Contact' to send him an email directly. Build something completely insane together.";
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: botResponse,
        },
      ]);
    }, 800);
  };

  const quickReplies = [
    "About Me",
    "Experience",
    "Tech Stack",
    "Projects",
    "Contact",
  ];

  return (
    <>
      <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[100] flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 w-[340px] md:w-[380px] bg-[#111] border border-white/10  shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl font-mono"
            >
              {/* Header */}
              <div className="bg-[#1a1a1a] flex items-center justify-between px-5 py-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ff3333]/10 border border-[#ff3333]/30 flex items-center justify-center shadow-[0_0_10px_rgba(255,51,51,0.2)]">
                    <Bot className="w-5 h-5 text-[#ff3333]" />
                  </div>
                  <h3 className="text-white font-bold tracking-wide text-sm uppercase">
                    Portfolio Assistant
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Area */}
              <div className="p-5 overflow-y-auto w-full h-[320px] scrollbar-hide flex flex-col gap-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col w-full ${msg.role === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl whitespace-pre-wrap text-xs md:text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[#333] text-white rounded-tr-sm"
                          : "bg-[#161616] text-gray-300 border border-white/10 rounded-tl-sm shadow-md"
                      }`}
                    >
                      {msg.content}
                    </div>
                    <span className="text-[9px] text-gray-500 mt-2 mx-1 font-medium tracking-widest uppercase">
                      Just now
                    </span>
                  </div>
                ))}

                {/* Quick Replies (Always visible at the bottom) */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleSend(reply)}
                      className="text-[10px] uppercase tracking-widest bg-transparent hover:bg-white hover:text-black transition-colors text-gray-300 font-bold px-4 py-2 rounded-full border border-white/20"
                    >
                      {reply}
                    </button>
                  ))}
                </div>

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-[#0a0a0a] border-t border-white/5">
                <div className="relative flex items-center w-full">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="ASK ME ANYTHING..."
                    className="w-full bg-[#161616] text-white text-[11px] uppercase tracking-widest rounded-full pl-5 pr-12 py-3.5 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-shadow border border-white/10"
                  />
                  <button
                    onClick={() => handleSend()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-[#333] hover:bg-[#ff3333] text-white rounded-full transition-colors"
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button + Permanent Tooltip */}
        {!isOpen && (
          <div className="flex flex-col items-end gap-3">
            {/* Periodically Popping Callout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: [0, 1, 1, 0, 0],
                y: [15, 0, 0, 15, 15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                times: [0, 0.1, 0.5, 0.6, 1],
                ease: "easeInOut",
              }}
              onClick={() => setIsOpen(true)}
              className="bg-[#0a0a0a] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] px-4 py-2.5 rounded-full flex items-center gap-3 cursor-pointer hover:border-white/30 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3333] animate-pulse"></span>
              <span className="text-white text-[10px] sm:text-xs font-mono tracking-widest uppercase">
                Let's talk about Abhi
              </span>
            </motion.div>

            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="group relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0a0a0a] flex items-center justify-center cursor-pointer shadow-2xl z-50 transition-all duration-300 border border-white/10 hover:border-white/30"
            >
              {/* Minimalist Glow Effect */}
              <div className="absolute inset-[-1px] rounded-full bg-white/0 group-hover:bg-[#ff3333]/20 transition-all duration-500 blur-md" />

              <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-[#ff3333] transition-colors relative z-10" />
            </motion.button>
          </div>
        )}
      </div>
    </>
  );
}
