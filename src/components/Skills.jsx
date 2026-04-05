"use client";
import { RevealHeading, FadeUp, SlideLeft } from "./Animations";

const row1 = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
];

const row2 = [
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", invert: true },
];

function SkillCard({ name, icon, invert }) {
  return (
    <div className="group flex items-center gap-4 border border-white/10 bg-[#0a0a0a] px-6 py-4 mx-3 shrink-0 hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-none">
      <img
        src={icon}
        alt={name}
        className={`w-8 h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:scale-110 ${
          invert
            ? "filter invert brightness-0 group-hover:invert group-hover:brightness-100"
            : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
        }`}
      />
      <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ skills, reverse = false, speed = 30 }) {
  // Duplicate for infinite loop
  const doubled = [...skills, ...skills, ...skills];
  return (
    <div className="relative flex overflow-hidden w-full py-1">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

      <div
        className="flex items-center"
        style={{
          animation: `marquee${reverse ? "Reverse" : ""} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-24 md:py-48 px-0 shrink-0 bg-[#030303] border-t border-white/10 relative overflow-hidden flex flex-col"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-16 md:mb-24 px-6 md:px-16 w-full max-w-[1400px] mx-auto z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div>
          <SlideLeft>
            <h2 className="text-[#ff3333] font-mono text-xs md:text-sm tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#ff3333] inline-block animate-pulse"></span>
              Tech Stack
            </h2>
          </SlideLeft>
          <RevealHeading>
            <h3 className="text-[14vw] sm:text-[10vw] md:text-8xl lg:text-[100px] font-black tracking-tighter uppercase leading-[0.9] text-white font-(family-name:--font-space-grotesk) ml-0 md:-ml-1">
              SKILLS.
            </h3>
          </RevealHeading>
        </div>

        <FadeUp delay={0.2}>
          <p className="text-gray-400 font-sans font-light max-w-sm text-sm md:text-base leading-relaxed">
            I don&apos;t just learn frameworks; I dissect them. Every tool in my stack is weaponized to build high-performance, agency-tier digital experiences.
          </p>
        </FadeUp>
      </div>

      {/* Marquee Rows */}
      <div className="flex flex-col gap-4 w-full overflow-hidden">
        <MarqueeRow skills={row1} reverse={false} speed={25} />
        <MarqueeRow skills={row2} reverse={true} speed={20} />
      </div>
    </section>
  );
}
