import { Tooltip } from "react-tooltip";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={technology.name}>
          {window.innerWidth > 768
          ?
            <div data-event="click" data-tip data-tooltip-id={technology.name} className="cursor-pointer w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
          :
          <div data-event="click" data-tip data-tooltip-id={technology.name} className="w-28 h-28">
            <img src={technology.icon} />
          </div>
          }

          <Tooltip id={technology.name} place="top" effect="solid" key={"tip-" + technology.name}>
            {technology.name}
          </Tooltip>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
