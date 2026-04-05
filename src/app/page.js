import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="w-full flex-col flex select-none bg-[#030303] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Chatbot />
    </main>
  );
}
