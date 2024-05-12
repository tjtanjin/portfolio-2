import {
  mobile,
  backend,
  creator,
  web,
  python,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  java,
  cplusplus,
  bash,
  apache,
  nginx,
  mysql,
  redis,
  docker,
  csit,
  cvwo,
  fourcity,
  nus,
  saturdaykids,
  teammates,
  toffs,
  imposter,
  billboard,
  smc,
  rcb,
  quicktax
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experiences",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "articles",
    title: "Articles",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "System Administrator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS / React Native",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Bash / Shellscript",
    icon: bash,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Apache",
    icon: apache,
  },
  {
    name: "Nginx",
    icon: nginx,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Python / Web Developer (Intern)",
    company_name: "TOFFS Technologies",
    company_link: "https://www.toffstech.com",
    icon: toffs,
    iconBg: "#E6DEDD",
    date: "Nov 2018 - Jul 2019",
    points: [
      "Developed automated API and GUI tests with self-generated reports.",
      "Facilitated collaboration on machine learning projects among TOFFS, NUS, and AISG.",
      "Managed website updates and maintenance.",
      "Authored and translated documentation for internal projects.",
    ],
  },
  {
    title: "Python Teaching Assistant (Volunteer)",
    company_name: "Saturday Kids (Code In The Community)",
    company_link: "https://www.saturdaykids.com/social-mission/code-in-the-community/",
    icon: saturdaykids,
    iconBg: "#E6DEDD",
    date: "May 2019 - Jul 2019",
    points: [
      "Facilitated the learning of Python programming through weekly interactive and engaging sessions.",
    ],
  },
  {
    title: "Research Assistant (Network Threats Mitigation)",
    company_name: "National University of Singapore (NUS)",
    company_link: "https://nus.edu.sg/",
    icon: nus,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Apr 2020",
    points: [
      "Collaborated with stakeholders to streamline the collection of datasets.",
      "Conducted analysis and preparation of datasets for effective model training.",
    ],
  },
  {
    title: "Developer (Lions Befrienders)",
    company_name: "Computing for Voluntary Welfare Organisations",
    company_link: "https://www.comp.nus.edu.sg/~vwo/",
    icon: cvwo,
    iconBg: "#E6DEDD",
    date: "May 2020 - Aug 2020",
    points: [
      "Developed a user registration API as a vital module within the volunteers e-registration system.",
      "Enhanced activity forms to integrate seamlessly with the volunteer management system.",
      "Integrated new report generation capabilities into the volunteer management system.",
      "Addressed and resolved legacy bugs to improve system stability and functionality.",
    ],
  },
  {
    title: "Software Developer (Intern)",
    company_name: "Centre for Strategic Infocomm Technologies",
    company_link: "https://www.csit.gov.sg/",
    icon: csit,
    iconBg: "#E6DEDD",
    date: "May 2021 - Aug 2021",
    points: [
      "Developed and optimized plugins to classify abnormal network traffic.",
      "Implemented a build and test script to gauge the performance of the plugins.",
    ],
  },
  {
    title: "Developer",
    company_name: "(NUS-OSS – TEAMMATES)",
    company_link: "https://github.com/TEAMMATES",
    icon: teammates,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Nov 2021",
    points: [
      "Provided support in upgrading and maintaining the globally utilized peer review tool, TEAMMATES.",
    ],
  },
  {
    title: "Software Engineering Teaching Assistant (CS2103T)",
    company_name: "National University of Singapore (NUS)",
    company_link: "https://nus.edu.sg/",
    icon: nus,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Dec 2022",
    points: [
      "Conducted weekly tutorial sessions for students.",
      "Assessed student code submissions and milestone deliverables.",
    ],
  },
  {
    title: "Software Developer (Intern/Part-time)",
    company_name: "National University of Singapore (NUS)",
    company_link: "https://iconnect.comp.nus.edu.sg/public/home",
    icon: nus,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Dec 2022",
    points: [
      "Iteratively tested and fine-tuned a computer vision machine learning model to ensure optimal performance for the iConnect application.",
      "Facilitated the initial deployment of the application within the school compound, ensuring a smooth implementation."
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Four City (S) Pte Ltd",
    company_link: "http://fourcity.com.sg/",
    icon: fourcity,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Designed and implemented a robust content management system featuring comprehensive role-based functionalities.",
      "Curated the design and development of a lightweight mobile application optimized for seamless delivery and invoice management.",
      "Developed a high-performance REST-API backend, seamlessly integrating with both the content management system and the mobile application.",
      "Composed automation scripts to reduce the amount of manual work in the daily workflow of the administration team.",
      "Authored comprehensive developer and user guides to facilitate efficient utilization of the complete system."
    ],
  },
];

const gists = [
  {
    title: "How to create a minecraft server on Ubuntu (18.04/20.04)",
    id: "tjtanjin/d3f9c5e33e830a4b71f9c84e7c807f0a",
    image: "https://avatars.githubusercontent.com/u/43908963?s=400&u=9b2e762a6bd2720d2ebb44bf67df2103af6b6d9f&v=4",
    author: "tjtanjin",
    tags: "#minecraft"
  },
  {
    title: "How to host a telegram bot on Ubuntu (18.04/20.04)",
    id: "tjtanjin/29875407defe183c5147bb854f9e69ae",
    image: "https://avatars.githubusercontent.com/u/43908963?s=400&u=9b2e762a6bd2720d2ebb44bf67df2103af6b6d9f&v=4",
    author: "tjtanjin",
    tags: "#telegram-bot"
  },
  {
    title: "How to generate SSL certificate with certbot for apache2 on Ubuntu (18.04/20.04)",
    id: "tjtanjin/606cb75f921dba9c3efdfa1a00c108d1",
    image: "https://avatars.githubusercontent.com/u/43908963?s=400&u=9b2e762a6bd2720d2ebb44bf67df2103af6b6d9f&v=4",
    author: "tjtanjin",
    tags: "#server-hosting"
  },
  {
    title: "How to install XAMPP and host a simple web game on Ubuntu (18.04/20.04)",
    id: "tjtanjin/ce560069506e3b6f4d70e570120249ed",
    image: "https://avatars.githubusercontent.com/u/43908963?s=400&u=9b2e762a6bd2720d2ebb44bf67df2103af6b6d9f&v=4",
    author: "tjtanjin",
    tags: "#server-hosting"
  },
];

const projects = [
  {
    name: "React ChatBotify",
    app_link: "https://react-chatbotify.tjtanjin.com",
    description:
      "A React library for creating a flexible and extensible chatbot - supports features such as audio, voice, notifications, uploads, LLMs integrations and many more!",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: rcb,
    source_code_link: "https://github.com/tjtanjin/react-chatbotify",
  },
  {
    name: "SpaceShips",
    app_link: "https://spaceships.tjtanjin.com",
    description:
      "A classic and nostalgic arcade space game, adapted from an initial local python version! Pit yourself against enemy ships and bosses, available both on the web and mobile!",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "enchant.js",
        color: "green-text-gradient",
      },
      {
        name: "games",
        color: "pink-text-gradient",
      },
    ],
    image: "https://camo.githubusercontent.com/36c02fd79be25fe170169f7acc95265fbf0d4c7717949a7906c7b90e9a890e26/68747470733a2f2f692e696d6775722e636f6d2f4d70795a6b344e2e676966",
    source_code_link: "https://github.com/tjtanjin/spaceships_web",
  },
  {
    name: "Imposter",
    app_link: "https://imposter.tjtanjin.com/",
    description:
      "imPoster is a lite version of Postman and is implemented in a simple and minimalistic style that is easy for anyone to pick up. Latest releases are found on our main website!",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
      {
        name: "javafx",
        color: "pink-text-gradient",
      },
    ],
    image: imposter,
    source_code_link: "https://github.com/tjtanjin/tp",
  },
  {
    name: "Simple Media Converter",
    app_link: "https://t.me/simplemediaconverterbot",
    description:
      "Ever needed a quick and simple way to change the format of your files? Maybe your friend shared a funny video but you could not open it? Well, this is just what you need!",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "telegram-bot",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: smc,
    source_code_link: "https://github.com/tjtanjin/simple-media-converter",
  },
  {
    name: "Project Billboard",
    app_link: "https://project-billboard.herokuapp.com/",
    description:
      "\"Music is an undeniable part of our lives\" - The best ones end up in the Billboard top 200 chart. But is there a method to this madness that is being a chart-topper?",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "sklearn",
        color: "pink-text-gradient",
      },
    ],
    image: billboard,
    source_code_link: "https://github.com/tjtanjin/project_billboard_model/",
  },
  {
    name: "QuickTax",
    app_link: "https://www.spigotmc.org/resources/quicktax.96495/",
    description:
      "QuickTax is a tax management plugin for managing a minecraft server's economy! It is highly configurabe with plenty of filters and an in-built scheduler for timing collections!",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "minecraft",
        color: "green-text-gradient",
      },
      {
        name: "plugins",
        color: "pink-text-gradient",
      },
    ],
    image: quicktax,
    source_code_link: "https://github.com/tjtanjin/QuickTax",
  },
];

export { services, technologies, experiences, gists, projects };
