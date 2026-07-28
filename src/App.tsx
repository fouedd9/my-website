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

function App() {
  useScrollReveal();
  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);
  return (
    <>
      <Navbar />

      <main>
        {/* <Hero /> */}

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
