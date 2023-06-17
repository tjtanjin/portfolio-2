import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import { styles } from "../styles";
import { rocket } from "../assets";

const Hero = () => {
  const [showingLoader, setShowingLoader] = useState(true);
  const [rocketGif, setRocketGif] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setRocketGif(rocket);
    setTimeout(() => {
      setShowingLoader(false);
    }, 3800);
  }, []);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  }

  return (
    <>
    {showingLoader 
      ?
        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{ opacity: 0 }}
          transition={{
            ease: "easeInOut",
            delay: 3,
            duration: 0.8
          }}
        >
          <div className="h-screen w-screen bg-black over">
          <div className="flex flex-col items-center justify-center h-screen">
            {rocketGif &&
              <img src={rocketGif} alt="Loading..." className="max-h-[450px] max-w-[450px] block" onLoad={handleImageLoaded}/>
            }
            {imageLoaded &&
              <div className="block text-center loader" >Engaging Warp Drive...</div>
            }
          </div>
          </div>
          
        </motion.div>
      :
      <motion.div initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.2
      }}>
      <section className={`relative w-full h-screen mx-auto`}>
          <div
            className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Tan Jin</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop cool, intuitive <br className="sm:block hidden" />
                and convenient applications
              </p>
            </div>
          </div>
          <div className="landscape"></div>
          <div className="filter"></div>
          <canvas id="canvas"></canvas>
          <Helmet>
            <script type="text/javascript" src="./public/stars.js"></script>
          </Helmet>


          <div className="cursor-pointer absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a onClick={() => document.getElementById("about").scrollIntoView({ behavior: 'smooth' })}>
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>
      </section>
      </motion.div>
    }
    </>
  );
};

export default Hero;
