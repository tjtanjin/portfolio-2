import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { email, github_2, linkedin, earth } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const notify = (text) => toast(text, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }

    if (form.name == "") {
      notify("Oops! You forgot your name!");
      return;
    }
    
    if (form.email == "") {
      notify("Oops! I can't get back to you without your email!");
      return;
    }
    
    if (form.message == "") {
      notify("Oops! Did you forget your message?");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "default_service",
        "template_noopuqu",
        {
          from_name: form.name,
          to_name: "Tan Jin",
          from_email: form.email,
          to_email: "cjtanjin@gmail.com",
          message: form.message,
        },
        "3EjzFK61yedsedApI"
      )
      .then(
        () => {
          setLoading(false);
          notify("Thank you for reaching out! I will get back to you as soon as possible :)");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          notify("Oh no something broke :( Please try again later!");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex flex-row">
          <img className="hover:animate-bounce cursor-pointer m-h-8 w-8 mr-5" src={email} alt="email" onClick={() => window.open("mailto:cjtanjin@gmail.com")}></img>
          <img className="hover:animate-bounce cursor-pointer m-h-8 w-8 mr-5" src={github_2} alt="github" onClick={() => window.open("https://github.com/tjtanjin/")}></img>
          <img className="hover:animate-bounce cursor-pointer m-h-8 w-8" src={linkedin} alt="linkedin" onClick={() => window.open("https://www.linkedin.com/in/cjtanjin/")}></img>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {window.innerWidth > 768
        ?
          <EarthCanvas />
        :
          <img className="m-auto block object-cover h-[300px] w-[300px]" src={earth} />
        }
      </motion.div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
