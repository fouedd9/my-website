import Navbar from "@/components/Navbar";
import About from "./components/About";
import useScrollReveal from "./hooks/useScrollReveal";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Hero2 from "./components/Hero2";
import ProjectsSection from "@/components/projects/ProjectsSection";
function App() {
  useScrollReveal();

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
      </main>
    </>
  );
}

export default App;
