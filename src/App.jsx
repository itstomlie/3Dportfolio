import "./App.css";
import {
  Hero,
  Navbar,
  About,
  Experience,
  Tech,
  Projects,
  Contact,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Projects />
      <div className="bg-primary relative">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
}

export default App;
