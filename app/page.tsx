import { GridBackground } from "@/components/grid-background";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import ProgressBar from "@/components/ProgressBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";

export default function Home() {
  return (
    <>
      <GridBackground />
      <ProgressBar />
      <BackToTop />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Career />
      <Contact />
      <Popup />
      <Footer />
      {/* Hidden audio element for success sound */}
      <audio id="successSound" src="/success.mp3" preload="auto" />
    </>
  );
}
