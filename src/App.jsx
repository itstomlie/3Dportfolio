import "./App.css";
import {
  Hero,
  Navbar,
  About,
  Experience,
  Tech,
  Works,
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
      <Works />
      <div className="bg-primary relative">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
}

export default App;
