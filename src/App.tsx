import Navbar from "@/components/Navbar";
import About from "./components/About";
import useScrollReveal from "./hooks/useScrollReveal";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Hero2 from "./components/Hero2";
import ProjectsSection from "@/components/projects/ProjectsSection";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { trackPageView } from "./analytics/analytics";
import { trackTimeOnSite } from "./analytics/events";

function App() {
  useScrollReveal();

  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  useEffect(() => {
    const startTime = Date.now();

    const sendTimeOnSite = () => {
      const seconds = Math.round((Date.now() - startTime) / 1000);

      if (seconds >= 3) {
        trackTimeOnSite({
          language: "fr",
          seconds,
        });
      }
    };

    window.addEventListener("pagehide", sendTimeOnSite);

    return () => {
      window.removeEventListener("pagehide", sendTimeOnSite);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero2 />
        <About />
        <Skills />
        <Experience />
        <Education />
        <ProjectsSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
