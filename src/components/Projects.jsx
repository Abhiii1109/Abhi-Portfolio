"use client";
import { Link2 } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "MERN HRMS",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Abhiii1109/MERN-HRMS",
    demo: "#",
    textColor: "group-hover:text-[#E2FF42]",
    description:
      "A complete Human Resource Management System built using the entire MERN stack for efficient employee tracking, payroll, and corporate management.",
  },
  {
    title: "Movie Library",
    tech: ["Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Abhiii1109/Movie-uplode",
    demo: "#",
    textColor: "group-hover:text-[#FF4242]",
    description:
      "A robust backend system designed for managing, uploading, and securely querying a vast catalog of movie metadata using a REST architecture.",
  },
  {
    title: "K72 Clone",
    tech: ["React", "GSAP"],
    github: "https://github.com/Abhiii1109/K72",
    demo: "#",
    textColor: "group-hover:text-[#42A1FF]",
    description:
      "A highly-aesthetic brutalist clone of the famous K72 website, reverse-engineered with complex GSAP scrolling animations and React functionality.",
  },
  {
    title: "Architecture Web",
    tech: ["React"],
    github: "https://github.com/Abhiii1109/Architecture-website",
    demo: "#",
    textColor: "group-hover:text-[#FF9B42]",
    description:
      "A premium, minimalist frontend interface developed specifically for modern architectural firms to showcase high-fidelity 3D renderings and projects.",
  },
  {
    title: "Admin Panel",
    tech: ["Node.js", "Express.js", "MongoDB", "Nodemailer"],
    github: "https://github.com/Abhiii1109/Admin-Panel",
    demo: "#",
    textColor: "group-hover:text-[#E2FF42]",
    description:
      "A comprehensive administrative dashboard built with a powerful Express backend, automated Nodemailer workflows, and fully authenticated user roles.",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 md:py-48 px-0 w-full mx-auto border-t border-white/10 relative bg-[#030303] overflow-hidden"
    >
      <div className="mb-20 md:mb-32 px-6 md:px-16 relative z-10 max-w-[1800px] mx-auto text-center md:text-left ">
        <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white font-[family-name:var(--font-space-grotesk)] ml-0">
          SELECTED WORKS.
        </h3>
      </div>

      {/* Highly Aesthetic Floating Glassmorphism Info Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[480px] pointer-events-none z-30 hidden lg:block">
        {projects.map((proj, i) => (
          <div
            key={`info-${i}`}
            className={`absolute inset-0 h-max w-full bg-black/40 backdrop-blur-3xl border border-white/10 p-8 shadow-[0_0_80px_rgba(0,0,0,0.8)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between
              ${hoveredIndex === i ? "opacity-100 scale-100 translate-y-0 rotate-0" : "opacity-0 scale-[0.9] translate-y-12 rotate-[-2deg] pointer-events-none"}
            `}
          >
            <div className="mb-10">
              {/* Pulsing indicator */}
              <div className="flex items-center gap-3 mb-6 mix-blend-screen">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </div>
                <h4 className="text-white/60 text-[10px] font-mono tracking-widest uppercase">
                  Overview
                </h4>
              </div>

              {/* Project Details */}
              <h4 className="text-white text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4 font-[family-name:var(--font-space-grotesk)] leading-[0.9]">
                {proj.title}
              </h4>
              <p className="text-gray-300 font-light leading-relaxed text-sm lg:text-base font-sans mix-blend-screen">
                {proj.description}
              </p>
            </div>

            {/* Tech Stack Layout */}
            <div className="mt-4 pt-6 border-t border-white/10">
              <p className="text-[#ff3333] font-mono text-[10px] tracking-widest uppercase mb-4 opacity-80">
                Technology Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] lg:text-xs uppercase font-mono tracking-widest text-white/80 border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ultra-Premium Brutalist Row List */}
      <div className="flex flex-col w-full relative z-10 group/list border-t border-white/10 mt-12 md:mt-20">
        {projects.map((proj, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group mx-auto max-w-[1800px] flex flex-col lg:flex-row items-start lg:items-center justify-between w-full border-b border-white/10 py-6 md:py-8 px-6 md:px-12 transition-colors duration-300 relative cursor-none hover:bg-white/[0.02]`}
          >
            {/* Left Side: Massive Text */}
            <div className="flex items-start lg:items-center gap-6 md:gap-8 w-full lg:w-auto relative mb-4 lg:mb-0 z-10">
              <span
                className={`font-mono text-sm md:text-lg tracking-widest shrink-0 font-bold opacity-40 group-hover:opacity-100 transition-opacity duration-500  text-[#ff3333]`}
              >
                0{i + 1}
              </span>
              <a
                href={proj.demo !== "#" ? proj.demo : proj.github}
                target="_blank"
                rel="noreferrer"
                className="block relative"
              >
                <h3
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight transition-all duration-300 leading-tight origin-left text-white group-hover:translate-x-4 font-[family-name:var(--font-space-grotesk)]`}
                >
                  {proj.title}
                </h3>
              </a>
            </div>

            {/* Right Side: Clean Arrow */}
            <div
              className={`flex items-center justify-end w-full lg:w-auto pl-12 lg:pl-0 z-10 lg:ml-auto`}
            >
              {/* Awwwards Arrow Anchor */}
              <a
                href={proj.demo !== "#" ? proj.demo : proj.github}
                target="_blank"
                rel="noreferrer"
                className={`w-10 h-10 md:w-14 md:h-14 rounded-full border flex items-center justify-center shrink-0 group-hover:-rotate-45 group-hover:scale-110 transition-all duration-500 cursor-none
                   border-white/20 bg-black/50 text-white
                   group-hover:bg-white group-hover:text-black group-hover:border-transparent drop-shadow-2xl hover:!text-black
               `}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
