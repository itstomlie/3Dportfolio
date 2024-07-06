import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={`h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
      <div className={`${styles.bigPaddingXY} flex gap-5 absolute`}>
        <div className="flex flex-col justify-center items-center">
          <div className="w-4 h-4 rounded-full bg-[#804dee]"></div>
          <div className="w-1 h-80 violet-gradient"></div>
        </div>
        <div className="text-start">
          <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m Tommy</h1>
          <p className={`${styles.heroSubText}`}>
            Full-Stack Developer Specializing in Backend Solutions
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute bottom-20 md:-bottom-20 left-[48%] z-50">
        <div className="w-7 h-14 border-2 border-secondary rounded-full flex justify-center">
          <motion.div
            className="w-2.5 h-2.5 bg-secondary rounded-full"
            animate={{ y: [0, 38, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
