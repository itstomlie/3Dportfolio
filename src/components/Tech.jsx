import { technologies } from "../constants";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { useInView } from "react-intersection-observer";

const TechnologyBall = ({ icon, name }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
    rootMargin: "200px",
  });

  return (
    <div ref={ref} className="w-28 h-28" key={name}>
      {inView && <BallCanvas icon={icon} />}
    </div>
  );
};

const Tech = () => {
  return (
    <div className="bg-primary">
      <div
        className={`${styles.bigPaddingXY} flex flex-row flex-wrap justify-center gap-10`}
      >
        {technologies.map((tech) => (
          <TechnologyBall key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
