"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-6 md:py-8 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5 mix-blend-normal"
            : "mix-blend-difference"
        }`}
      >
        <div className="font-bold text-lg md:text-xl tracking-tight uppercase text-white">
          ABHI. 
          <span className="block text-[8px] md:text-[10px] text-gray-400 font-mono tracking-widest mt-1">
            AVAILABLE FOR WORK
          </span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-12 text-xs font-mono tracking-widest uppercase items-center text-white">
          <a href="#about" className="hover:text-white/50 transition-colors">About</a>
          <a href="#skills" className="hover:text-white/50 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white/50 transition-colors">Work</a>
          <a href="#contact" className="hover:text-white/50 transition-colors">Contact</a>
          <a href="https://github.com/Abhiii1109" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all cursor-none">
            GITHUB <Link2 className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(true)}
          className="md:hidden flex flex-col gap-1.5 items-end justify-center w-8 h-8 transition-transform cursor-none hover:scale-105"
        >
          <span className="w-8 h-[2px] bg-white block"></span>
          <span className="w-6 h-[2px] bg-[#ff3333] block"></span>
          <span className="w-8 h-[2px] bg-white block"></span>
        </button>
      </motion.nav>

      {/* Full Screen Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100000] bg-[#050505] flex flex-col justify-center px-8"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-6 text-white hover:text-red-500 transition-colors cursor-none"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Quote pinned to absolute top of screen */}
            <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
               className="absolute top-12 left-8 md:top-16 md:left-16 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 border-l-2 border-[#ff3333] pl-4 whitespace-nowrap leading-relaxed"
            >
               "No fluff. Just excellence."
            </motion.div>

            <div className="flex flex-col gap-6 font-(family-name:--font-space-grotesk) text-3xl font-black uppercase tracking-tighter">
              {["About", "Skills", "Projects", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white hover:text-[#ff3333] transition-colors cursor-none w-fit"
                >
                  {item}<span className="text-[#ff3333]">.</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
