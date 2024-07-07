import { motion } from "framer-motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { services } from "../constants";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="about" className="scroll-mt-14">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className={`${styles.bigPaddingXY} bg-primary`}
      >
        <motion.div variants={itemVariants}>
          <h2 className={`${styles.sectionSubText}`}>INTRODUCTION</h2>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
        </motion.div>
        <motion.div variants={itemVariants}>
          <p className={`text-secondary`}>
            A dedicated full-stack developer with a passion for crafting robust
            backend systems. Alongside my development skills, I bring a keen
            ability to manage projects effectively, ensuring seamless and
            scalable web applications.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-5 md:gap-12 md:flex md:flex-wrap mt-10">
          {services.map((service, index) => (
            <Tilt
              key={index}
              className="p-[4px] bg-gradient-to-b from-[#00cea8] to-[#bf61ff] bg-tertiary rounded-2xl flex-grow md:h-[270px] md:w-[172px] h-40 w-full"
            >
              <div className="h-full w-full bg-tertiary rounded-xl flex flex-col gap-2 md:gap-10 justify-center items-center md:p-8">
                <img
                  className="md:w-20 md:h-20 w-10 h-10"
                  src={`./${service.icon}`}
                  alt={service.title}
                />
                <p className="md:text-xl font-bold text-white-100 text-center">
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
