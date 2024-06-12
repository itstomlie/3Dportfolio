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
    <>
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
            I&apos;m a fullstack software developer with experience in
            Typescript & Javascript.
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-12 mt-10">
          {services.map((service, index) => (
            <Tilt
              key={index}
              className="p-[4px] bg-gradient-to-b from-[#00cea8] to-[#bf61ff] bg-tertiary rounded-2xl"
              style={{ height: 300, width: 250 }}
            >
              <div className="h-full w-full bg-tertiary rounded-xl flex flex-col  gap-10 justify-center items-center p-8">
                <img
                  className="w-20 h-20"
                  src={`./${service.icon}`}
                  alt={service.title}
                />
                <p className="text-2xl font-bold text-white-100 text-center">
                  {service.title}
                </p>
              </div>
            </Tilt>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default About;
