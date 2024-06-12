import { motion } from "framer-motion";
import { styles } from "../styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";

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

const Experience = () => (
  <>
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={`${styles.bigPaddingXY} bg-primary`}
    >
      <motion.div variants={itemVariants}>
        <h2 className={`${styles.sectionSubText}`}>What I have done so far</h2>
      </motion.div>
      <motion.div variants={itemVariants}>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
      </motion.div>

      <VerticalTimeline>
        {experiences.map((experience, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "rgb(29, 24, 54)",
                paddingTop: "20px",
                paddingLeft: "32px",
                paddingRight: "32px",
                paddingBottom: "20px",
              }}
              date={`${experience.date}`}
              iconStyle={{ background: "gray" }}
              icon={<img src={`${experience.icon}`} />}
              contentArrowStyle={{ borderRight: "7px solid rgb(35, 38, 49)" }}
            >
              <div className="mb-5">
                <h3 className="vertical-timeline-element-title font-bold text-3xl">
                  {experience.title}
                </h3>

                <h4 className="vertical-timeline-element-subtitle text-sm text-secondary">
                  {experience.company_name}
                </h4>
              </div>
              <div className="px-4">
                <ul className="list-disc space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={index} className="mb-2 text-white-100">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </motion.section>
  </>
);

export default Experience;
