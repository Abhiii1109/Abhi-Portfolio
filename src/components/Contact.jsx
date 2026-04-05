"use client";
import { Send } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#030303] relative flex flex-col justify-between overflow-hidden pt-24 pb-8 px-6 md:px-16 border-t border-white/10"
    >
      <div className="flex-1 flex flex-col xl:flex-row justify-center md:items-center z-10 gap-12 md:gap-32 w-full max-w-[1800px] mx-auto font-(family-name:--font-space-grotesk)">
        <div className="flex flex-col w-full xl:w-1/2 shrink-0">
          <p className="font-mono text-xs tracking-widest text-red-500 uppercase mb-6 md:mb-8 border-l-2 border-red-500 pl-4">
            Let's Connect
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abhiprajapati1106@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13vw] xl:text-[10vw] font-black leading-[0.85] uppercase tracking-tighter hover:text-white/70 transition-colors block text-white"
          >
            SAY
            <br />
            HELLO.
          </a>
        </div>

        <div className="flex flex-col gap-8 md:mb-4 max-w-lg mt-8 xl:mt-0 font-sans w-full xl:w-1/2">
          <p className="text-gray-400 font-light leading-relaxed text-lg md:text-2xl">
            I am actively looking for new opportunities and freelance projects.
            If you have an exciting vision, don't hesitate to reach out. We can
            build something completely insane.
          </p>
          <Magnetic className="mb-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abhiprajapati1106@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 w-fit px-8 py-5 rounded-full text-sm md:text-base tracking-widest uppercase font-mono hover:bg-white hover:text-black transition-colors md:cursor-none flex items-center gap-4 group"
            >
              Write an Email
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="relative z-50 w-full flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs tracking-widest font-mono text-gray-500 uppercase py-8 border-t border-white/10 gap-6 md:gap-0 max-w-[1800px] mx-auto text-center md:text-left">
        <p>© {new Date().getFullYear()} ABHI PRAJAPATI.</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-4 md:mt-0">
          <Magnetic>
            <a
              href="https://github.com/Abhiii1109"
              target="_blank"
              className="hover:text-white transition-colors cursor-none flex items-center gap-2"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
              </svg>{" "}
              GitHub
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/abhi-prajapati-249bb5311/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-none flex items-center gap-2"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>{" "}
              LinkedIn
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#"
              className="hover:text-white transition-colors cursor-none flex items-center gap-2"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>{" "}
              Twitter
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
