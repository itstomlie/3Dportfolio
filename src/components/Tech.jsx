import { technologies } from "../constants";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className="bg-primary">
      <div
        className={`${styles.bigPaddingXY} flex flex-row flex-wrap justify-center gap-10`}
      >
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}></BallCanvas>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
