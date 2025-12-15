import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { tjabout } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="md:flex md:flex-row mt-4"
      >
        <div className="w-full md:order-2">
          <img className="object-cover lg:max-h-[350px] lg:max-w-[350px] max-h-[200px] max-w-[200px] lg:pl-28 md:pl-10 sm:text-center mt-10 mb-10 md:mt-0 md:mb-0 rounded-lg m-auto md:rounded-full" src={tjabout}/>
        </div>
        <div className="text-[17px] leading-[30px] max-w-3xl text-secondary md:order-1">
          Hey there 👋! I'm Tan Jin, a full-stack developer and open-source enthusiast based in sunny Singapore! 🚀
          I maintain <a className="text-white font-bold underline" target="_blank" href="https://react-chatbotify.com"> React ChatBotify</a>, a chatbot library enjoyed by developers worldwide.
          When I'm not crafting smooth UI flows or wiring up APIs, I'm exploring AI agents, GitOps, and sometimes pondering about life.
          I love simplifying tech through engaging tutorials on <a className="text-white font-bold underline" target="_blank" href="https://tjtanjin.medium.com/"> Medium</a> and <a className="text-white font-bold underline" target="_blank" href="https://vibe-engineers.dev"> quirky side projects</a> 😊
          If you're looking for someone who blends tech expertise, creativity, and fun, <a className="text-white font-bold underline" target="_blank" href="https://www.linkedin.com/in/cjtanjin/"> let's connect!</a> 💡✨
          <br/><br/><br/>
          Graduated with a B.Comp (Computer Science) with Honours (Distinction) from 
          <a className="text-white font-bold" target="_blank" href="https://nus.edu.sg/"> National University of Singapore</a> |
          <a className="text-white font-bold" target="_blank" href="https://drive.google.com/file/d/1mqG2V7AhDGvoajl2_nolMJr52YXQpp3Z/view?usp=sharing"> Resume</a> 
        </div>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
