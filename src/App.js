import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
      <div>
        <NavBar />
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </div>
  );
}

export default App;
