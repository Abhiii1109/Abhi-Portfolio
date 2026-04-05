"use client";
import { motion } from "framer-motion";

const skills = [
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "hover:bg-[#61DAFB] hover:text-black",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    color: "hover:bg-white hover:text-black",
    invert: true,
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    color: "hover:bg-[#339933] hover:text-white",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    color: "hover:bg-white hover:text-black",
    invert: true,
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    color: "hover:bg-[#47A248] hover:text-white",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    color: "hover:bg-[#06B6D4] hover:text-black",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    color: "hover:bg-[#3178C6] hover:text-white",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    color: "hover:bg-[#F7DF1E] hover:text-black",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    color: "hover:bg-[#F05032] hover:text-white",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    color: "hover:bg-white hover:text-black",
    invert: true,
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    color: "hover:bg-[#FFCA28] hover:text-black",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    color: "hover:bg-white hover:text-black",
    invert: true,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-24 md:py-48 px-0 shrink-0 bg-[#030303] border-t border-white/10 relative overflow-hidden flex flex-col"
    >
      {/* Background visual element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Massive Brutalist Header */}
      <div className="mb-20 md:mb-32 px-6 md:px-16 w-full max-w-[1400px] mx-auto z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
        <div>
          <h2 className="text-[#ff3333] font-mono text-xs md:text-sm tracking-widest uppercase mb-4 flex items-center gap-3">
             <span className="w-2 h-2 bg-[#ff3333] inline-block animate-pulse"></span>
             Tech Stack
          </h2>
          <h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black tracking-tighter uppercase leading-[0.9] text-white font-[family-name:var(--font-space-grotesk)] -ml-1">
            SKILLS.
          </h3>
        </div>
        
        <p className="text-gray-400 font-sans font-light max-w-sm text-sm md:text-base leading-relaxed">
          I don't just learn frameworks; I dissect them. Every tool in my stack is weaponized to build high-performance, agency-tier digital experiences.
        </p>
      </div>

      {/* Insane Brutalist Grid */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 z-10">
         <div className="w-full border-t border-l border-white/10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className={`group flex flex-col items-center justify-center p-6 md:p-8 lg:p-10 aspect-square border-r border-b border-white/10 transition-colors duration-300 relative cursor-none bg-[#0a0a0a] ${skill.color}`}
              >
                 {/* Numbering */}
                 <span className="absolute top-3 left-3 font-mono text-[9px] text-gray-500 group-hover:text-current transition-colors opacity-50 font-bold tracking-widest">
                   {String(index + 1).padStart(2, "0")}
                 </span>

                 {/* Tech Icon */}
                 <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110 drop-shadow-xl ${skill.invert ? "filter invert brightness-0 group-hover:invert-0 group-hover:brightness-0" : "grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"}`}
                 />

                 {/* Tech Name */}
                 <h4 className="font-mono text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-current transition-colors text-center w-full">
                    {skill.name}
                 </h4>

                 {/* Diagonal Line Hover effect */}
                 <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
         </div>
      </div>
      
    </section>
  );
}
