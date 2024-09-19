import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Tilt } from "react-tilt";
import { containerVariants, itemVariants, services } from "../../constants";

const About = () => {
  return (
    <div id="about" className="scroll-mt-14 md:scroll-mt-10">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className={`${styles.bigPaddingXY} bg-primary`}
      >
        {/* <motion.div variants={itemVariants}>
          <h2 className={`${styles.sectionSubText}`}>INTRODUCTION</h2>
        </motion.div> */}
        <motion.div variants={itemVariants}>
          <h2
            className={`${styles.sectionHeadText} ${styles.sectionTextGradient}`}
          >
            Introduction
          </h2>
        </motion.div>
        <motion.div variants={itemVariants}>
          <p className={`text-secondary`}>
            A versatile full-stack engineer with a passion for continuous
            learning. I blend development expertise with project management
            skills to deliver effective solutions. Currently pursuing AI
            engineering to enhance my technical repertoire and application
            capabilities.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-5 md:gap-12 md:flex md:flex-wrap mt-10">
          {services.map((service, index) => (
            <Tilt
              key={index}
              className="p-[1px] bg-gradient-to-br from-white via-gray-400 to-gray-700 bg-surface rounded-2xl flex-grow md:h-[270px] md:w-[172px] h-40 w-full"
            >
              <div className="h-full w-full bg-surface rounded-2xl flex flex-col gap-2 md:gap-10 justify-center items-center md:p-8 p-3">
                <img
                  className="md:w-20 md:h-20 w-10 h-10"
                  src={`./${service.icon}`}
                  alt={service.title}
                />
                <p className="md:text-xl font-bold text-white-primary-primary text-center">
                  {service.title}
                </p>
              </div>
            </Tilt>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
