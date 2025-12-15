import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  app_link,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full md:min-h-[200px] object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
          <div data-event="click" data-tip data-tooltip-id={name} onClick={() => window.open(app_link, "_blank")} className="cursor-pointer mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] line-clamp-4">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        <Tooltip id={name} place="left" effect="solid" key={"tip-" + name}>
          Let's Go!
        </Tooltip>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const numProjects =  window.innerWidth < 880 ? 3 : projects.length;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My open-source</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Browse the list below for some of my favourite projects! Each project comes with a
          brief description and contains links to both the application and the code repositories.
          Catch a glimpse of my skills and expertise as I tackle each project utilizing diverse technologies 😋
          Still want to probe more? There are even more projects on my
          <a className="text-white font-bold" target="_blank" href="https://github.com/tjtanjin"> github</a>!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.slice(0, numProjects).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
