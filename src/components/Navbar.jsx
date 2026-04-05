"use client";
import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 md:px-16 py-8 flex justify-between items-center mix-blend-difference"
    >
      <div className="font-bold text-lg md:text-xl tracking-tight uppercase">
        ABHI. 
        <span className="block text-[10px] text-gray-400 font-mono tracking-widest mt-1">AVAILABLE FOR WORK</span>
      </div>
      
      <div className="hidden md:flex gap-12 text-xs font-mono tracking-widest uppercase items-center">
        <a href="#about" className="hover:text-white/50 transition-colors">About</a>
        <a href="#projects" className="hover:text-white/50 transition-colors">Work</a>
        <a href="#contact" className="hover:text-white/50 transition-colors">Contact</a>
        <a href="https://github.com/Abhiii1109" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all cursor-none">
          GITHUB <Link2 className="w-3 h-3" />
        </a>
      </div>
    </motion.nav>
  );
}
