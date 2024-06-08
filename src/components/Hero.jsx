import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <div className={`h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
      <div className={`${styles.padding} flex gap-5 absolute`}>
        <div className="flex flex-col justify-center items-center">
          <div className="w-4 h-4 rounded-full bg-[#804dee]"></div>
          <div className="w-1 h-80 violet-gradient"></div>
        </div>
        <div className="text-start">
          <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m Tommy</h1>
          <p className={`${styles.heroSubText}`}>
            I Develop 3d Visuals, User <br /> Interfaces, and Web Applications
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </div>
  );
};

export default Hero;
