"use client";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-16 pt-32">
      <div className="w-full max-w-[1800px] mx-auto z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex-1"
        >
          <h1 className="text-[18vw] sm:text-[15vw] md:text-[10vw] leading-[0.85] tracking-tighter font-black uppercase mb-4 md:mb-0 font-(family-name:--font-space-grotesk)">
            Abhi
            <br />
            Prajapati<span className="text-red-600">.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full md:max-w-sm flex flex-col gap-6 md:pb-4 mt-8 md:mt-0"
        >
          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            <div>
              <p className="text-white text-xs md:text-sm font-mono tracking-widest uppercase mb-2">
                Role
              </p>
              <p className="text-gray-400 text-sm md:text-lg w-[max-content]">
                Full Stack Developer
              </p>
            </div>
            <div className="hidden md:block h-[1px] w-full bg-white/20"></div>
            <div>
              <p className="text-white text-xs md:text-sm font-mono tracking-widest uppercase mb-2">
                Location
              </p>
              <p className="text-gray-400 text-sm md:text-lg">Dakor, Gujarat</p>
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/20"></div>

          <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
            I craft incredibly smooth, aesthetic, and fully functional digital
            experiences. Currently pursuing BCA (2028), driven by a massive
            ambition to build the future of the web.
          </p>

          <Magnetic className="mt-4 md:mt-6 w-fit inline-block">
            <a
              href="https://drive.google.com/file/d/1q37MFjS6XA7d2e0g3lzvSFyjNk_Zifud/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 w-fit px-6 md:px-8 py-3 md:py-4 rounded-full text-[10px] md:text-xs tracking-widest uppercase font-mono hover:bg-white hover:text-black transition-colors flex items-center gap-3 cursor-none group bg-white/5"
            >
              Get My Resume
              <svg 
                className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
