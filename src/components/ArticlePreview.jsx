import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { ModalDef } from "@ebay/nice-modal-react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ArticleModal from "./ArticleModal";
import ArticlePreviewCard from "./ArticlePreviewCard";
import { textVariant } from "../utils/motion";
import { gists } from "../constants";
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
          <p className={styles.sectionSubText}>Small sharings</p>
          <h2 className={styles.sectionHeadText}>Articles.</h2>
        </motion.div>

        <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here, you will find a couple of articles that I have written. I thought documenting 
          some of my work struggles and approaches could help others and myself in the future 😊 Read more writeups
          <a className="text-white font-bold" target="_blank" href="https://gist.github.com/tjtanjin"> here</a>!
        </motion.p>
      </div>
      </div>
      
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {gists.slice(0, 3).map((gist, index) => (
          <ArticlePreviewCard setShowModal={setShowModal} {...gist} key={index} index={index}/>
        ))}
      </div>
    </div>
    <ModalDef id="my-antd-modal" component={ArticleModal} />
    </>
  );
};

export default SectionWrapper(ArticlePreview, "articles");
