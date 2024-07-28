import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ArticlePreviewCard from "./ArticlePreviewCard";
import { textVariant } from "../utils/motion";
import { articles } from "../constants";
import { fadeIn } from "../utils/motion";

const ArticlePreview = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  return (
    <>
    <div className="bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[420px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Sharings</p>
          <h2 className={styles.sectionHeadText}>Articles.</h2>
        </motion.div>

        <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Occasionally, I write articles to document and share some of my project struggles and approaches that may help
          others (and myself) in the future 😊 If you're interested, check out my content on 
          <a className="text-white font-bold" target="_blank" href="https://tjtanjin.medium.com/"> Medium</a>,
          <a className="text-white font-bold" target="_blank" href="https://dev.to/tjtanjin"> DEV Community</a> and
          <a className="text-white font-bold" target="_blank" href="https://www.freecodecamp.org/news/author/tjtanjin/"> freeCodeCamp</a>.
        </motion.p>
      </div>
      </div>
      
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {articles.slice(0, 3).map((article, index) => (
          <ArticlePreviewCard setShowModal={setShowModal} {...article} key={index} index={index}/>
        ))}
      </div>
    </div>
    </>
  );
};

export default SectionWrapper(ArticlePreview, "articles");
