import { motion } from "framer-motion";
import { styles } from "../styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { containerVariants, experiences, itemVariants } from "../constants";

const Experience = () => (
  <div id="experience" className="scroll-mt-14 md:scroll-mt-10">
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

      <VerticalTimeline animate={false} className="pt-16">
        {experiences.map((experience, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "rgb(29, 24, 54)",
                padding: "20px 32px",
              }}
              date={`${experience.date}`}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>
              }
              contentArrowStyle={{ borderRight: "7px solid rgb(35, 38, 49)" }}
            >
              <div className="mb-5">
                <h3 className="vertical-timeline-element-title font-bold text-lg md:text-3xl">
                  {experience.title}
                </h3>

                <h4 className="vertical-timeline-element-subtitle text-xs md:text-sm text-secondary">
                  {experience.company_name}
                </h4>
              </div>
              <div className="px-4">
                <ul className="list-disc space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={index}
                      className="text-xs md:text-base mb-2 text-white-100"
                    >
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
  </div>
);

export default Experience;
