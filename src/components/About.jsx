"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const words = textRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { color: "rgba(255, 255, 255, 0.1)" },
      {
        color: "rgba(255, 255, 255, 1)",
        stagger: 0.02,
        ease: "power1.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          end: "bottom 50%",
          scrub: 0.2,
        },
      },
    );
  }, []);

  const paragraph =
    "I am a Full Stack Developer specialized in the modern web ecosystem. My goal isn't just to write code; it's to craft digital experiences that feel frictionless, responsive, and undeniably premium. By combining relentless attention to detail with robust backend structure, I bring scalable and beautiful ideas to life on the web.";
  const text = paragraph.split(" ");

  return (
    <section
      id="about"
      className="py-24 md:py-48 px-6 md:px-16 bg-[#030303] flex items-center border-t border-white/10 relative"
      ref={containerRef}
    >
      <div className="max-w-[1500px] mx-auto w-full flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div className="w-full md:w-3/12 pt-3">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <h2 className="text-xs font-mono tracking-widest text-[#ff3333] uppercase">
              The Engine
            </h2>
          </div>
        </div>

        <div className="w-full md:w-9/12">
          <p
            ref={textRef}
            className="text-xl md:text-3xl lg:text-4xl text-gray-300 font-light leading-[1.4] tracking-tight font-[family-name:var(--font-space-grotesk)] flex flex-wrap gap-x-[0.3em] gap-y-1.5 w-full"
          >
            {text.map((word, i) => (
              <span
                key={i}
                className="word inline-block will-change-[color] transition-colors duration-75"
              >
                {word}
              </span>
            ))}
          </p>

          <div className="mt-16 flex flex-wrap gap-6 text-sm font-mono tracking-widest text-gray-500 uppercase">
            <div className="flex flex-col gap-2 border-l border-white/10 pl-4">
              <span className="text-white">Education</span>
              <span>Bachelor of Computer Applications (2028)</span>
            </div>
            <div className="flex flex-col gap-2 border-l border-white/10 pl-4">
              <span className="text-white">Focus</span>
              <span>Frontend & Backend Development</span>
            </div>
            <div className="flex flex-col gap-2 border-l border-white/10 pl-4">
              <span className="text-white">Status</span>
              <span className="text-[#ff3333]">Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
