import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
const Works = () => {
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
    <div className={`${styles.bigPaddingXY} bg-primary`}>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className={`${styles.sectionSubText}`}>My Work</h2>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>
        <motion.div variants={itemVariants}>
          <p className={`text-secondary`}>
            The following projects showcases my skills and experience through
            real world examples of my work.
          </p>
        </motion.div>
      </motion.section>
      <div className="flex flex-wrap gap-12 mt-10">
        {projects.map((project, index) => (
          <Tilt key={index} className="rounded-2xl" style={{ width: 300 }}>
            <div className="h-full w-full bg-tertiary rounded-xl p-4 space-y-5">
              <img
                src={`./${project.image}`}
                alt={project.name}
                className="rounded-lg"
              />
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white-100 ">
                  {project.name}
                </p>
                <p className="text-secondary text-sm">{project.description}</p>

                <div className="flex space-x-2">
                  {project.tags.map((tag, index) => (
                    <p key={index} className={`${tag.color} text-sm`}>
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Works;
