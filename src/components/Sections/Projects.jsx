import { motion } from "framer-motion";
import { styles } from "../../styles";
import { containerVariants, itemVariants, projects } from "../../constants";
import { Tilt } from "react-tilt";
import { github } from "../../assets";
const Projects = () => {
  return (
    <div
      id="projects"
      className={`${styles.bigPaddingXY} bg-primary scroll-mt-14 md:scroll-mt-10`}
    >
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* <motion.div variants={itemVariants}>
          <h2 className={`${styles.sectionSubText}`}>My Work</h2>
        </motion.div> */}
        <motion.div variants={itemVariants}>
          <h2
            className={`${styles.sectionHeadText} ${styles.sectionTextGradient}`}
          >
            Projects
          </h2>
        </motion.div>
        <motion.div variants={itemVariants}>
          <p className={`text-secondary`}>
            The following projects showcases my skills and experience through
            real world examples of my work.
          </p>
        </motion.div>
      </motion.section>
      <div className="flex justify-center md:justify-start flex-wrap gap-12 mt-10">
        {projects.map((project, index) => (
          <a
            href={project.demoUrl}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            <Tilt className="rounded-2xl" style={{ width: 300 }}>
              <div className="h-full w-full bg-surface rounded-xl p-4 space-y-5">
                <div className="relative">
                  <img
                    src={`./${project.image}`}
                    alt={project.name}
                    className="rounded-lg h-36 w-full object-cover"
                  />
                  {project.sourceCodeLink && (
                    <a
                      href={project.sourceCodeLink}
                      className="absolute top-2 right-2"
                    >
                      <div className="github">
                        <img
                          src={github}
                          alt="github"
                          className="z-10 w-10 h-10 text-black bg-black rounded-full p-2"
                        />
                      </div>
                    </a>
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-white-primary ">
                    {project.name}
                  </p>
                  <p className="text-secondary text-sm">
                    {project.description}
                  </p>
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
