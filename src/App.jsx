import { HelmetProvider } from "react-helmet-async";
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
import Blog from "./components/Blog";

function App() {
  return (
    <HelmetProvider>
      <Navbar />
      <Blog />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Projects />
      <div className="bg-primary relative">
        <Contact />
        <StarsCanvas />
      </div>
    </HelmetProvider>
  );
}

export default App;
