import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { fadeIn } from "../utils/motion";

const ArticlePreviewCard = ({
  id,
  index,
  url,
  title,
  image,
  author,
  tags,
}) => {
  const tipId = String(id); // ✅ minimal fix

  return (
    <>
      <motion.div
        data-event="click"
        data-tip
        data-tooltip-id={tipId}
        onClick={() => {
          window.open(url, "_blank");
        }}
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full cursor-pointer"
      >
        <p className="text-white font-black text-[48px]">"</p>

        <div className="mt-1">
          <p className="text-white tracking-wider max- text-[18px] line-clamp-3">
            {title}
          </p>

          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">@</span>
                {author}
              </p>
              <p className="mt-1 text-secondary text-[12px]">{tags}</p>
            </div>

            <img
              src={image}
              alt={`by-${author}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <Tooltip id={tipId} place="left" effect="solid" key={"tip-" + tipId}>
        Read Me!
      </Tooltip>
    </>
  );
};

export default ArticlePreviewCard;
