import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import HowIWork from "@/components/sections/HowIWork";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Page() {
  const lang = "en";

  return (
    <>
      <Hero lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <HowIWork lang={lang} />
      <About lang={lang} />
      <Testimonials lang={lang} />
      <Contact lang={lang} />
    </>
  );
}
