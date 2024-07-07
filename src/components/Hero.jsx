import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className={`h-[90svh] md:h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center`}
    >
      <div
        className={`${styles.bigPaddingX} flex gap-5 sm:py-12 md:py-8 py-10 sm:pb-8`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-4 h-4 rounded-full bg-[#804dee]"></div>
          <div className="w-1 h-52 sm:h-36 md:h-60 violet-gradient"></div>
        </div>
        <div className="text-start">
          <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m Tommy</h1>
          <p className={`${styles.heroSubText}`}>
            Full-Stack Developer Specializing in Backend Solutions
          </p>
        </div>
      </div>

      <div className="md:w-full md:h-full md:absolute md:top-72">
        <ComputersCanvas />
      </div>

      <div className="xl:mt-80 lg:mt-28 mt-20 sm:mt-2 md:mt-14 flex flex-col items-center z-20">
        <div className="w-7 h-14 border-2 border-secondary rounded-full flex justify-center z-20">
          <motion.div
            className="w-2.5 h-2.5 bg-secondary rounded-full z-20"
            animate={{ y: [0, 38, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
        <p className="text-secondary text-sm mt-2 z-30">Scroll down</p>
      </div>
    </div>
  );
};

export default Hero;
