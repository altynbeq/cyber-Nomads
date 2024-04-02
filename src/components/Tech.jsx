import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div>
        <h2 className={styles.heroHeadText}>
          Technology stack
        </h2>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-[40px]'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <h2 className="flex justify-center ">{technology.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");