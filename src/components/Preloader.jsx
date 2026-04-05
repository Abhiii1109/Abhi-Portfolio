"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ children }) {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1; // Slightly slower, more suspenseful
      });
    }, 45); // Adjust speed slightly for better readability of words
    return () => clearInterval(interval);
  }, []);

  // Dynamically map counter ranges to dramatic sequence words and alternating colors
  const getWordData = (c) => {
    if (c < 25) return { text: "DESIGNING", color: "text-white" };
    if (c < 55) return { text: "DEVELOPING", color: "text-[#ff3333]" };
    if (c < 85) return { text: "BUILDING", color: "text-white" };
    return { text: "DELIVERING", color: "text-[#ff3333]" };
  };

  const currentWordData = getWordData(counter);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[100000] bg-[#050505]"
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Absolute Dead Center Word Sequence - Guaranteed flawless positioning */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
              <AnimatePresence mode="popLayout">
                <motion.h1
                  key={currentWordData.text}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                  transition={{ duration: 0.25 }}
                  className={`font-(family-name:--font-space-grotesk) text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter ${currentWordData.color}`}
                >
                  {currentWordData.text}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Top borders & text */}
            <div className="absolute top-8 left-8 right-8 flex justify-between text-[10px] md:text-xs text-gray-500 font-mono uppercase tracking-widest border-b border-white/5 pb-4">
              <span>System Initialization</span>
              <span className="text-[#ff3333] animate-pulse">Running</span>
            </div>

            {/* Smaller Counter elegantly pinned to Bottom Right corner */}
            <div className="absolute bottom-10 right-8 flex items-baseline text-white font-(family-name:--font-space-grotesk)">
              <span className="text-6xl md:text-8xl font-black tracking-tighter">
                {counter > 100 ? 100 : counter}
              </span>
              <span className="text-xl md:text-2xl text-[#ff3333] font-bold ml-1">
                %
              </span>
            </div>

            {/* Modern Bottom Left textual graphics */}
            <div className="absolute bottom-10 left-8 text-[10px] md:text-xs text-gray-500 font-mono uppercase tracking-widest hidden md:block">
              <span>
                Target: Agency Level
                <br />
                Status: Synchronizing Modules
              </span>
            </div>

            {/* Smooth Progress line indicator running along the bottom viewport edge */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
              <motion.div
                className="h-full bg-[#ff3333]"
                style={{ width: `${counter > 100 ? 100 : counter}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: !isLoading ? 1 : 0, scale: !isLoading ? 1 : 0.98 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
