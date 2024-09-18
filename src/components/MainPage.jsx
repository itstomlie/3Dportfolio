import {
  Hero,
  Navbar,
  About,
  Experience,
  Tech,
  Projects,
  Contact,
  StarsCanvas,
} from "../components";

const MainPage = () => {
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
};

export default MainPage;
