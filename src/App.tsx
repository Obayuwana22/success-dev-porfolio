import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712]">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-900/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-900/10 blur-[120px]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
