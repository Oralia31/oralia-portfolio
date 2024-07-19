import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  //FaMapMarkedAlt,
  FaPhoneAlt,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaGitlab,
  FaBootstrap,
  FaVuejs,
  FaWhatsapp,
} from "react-icons/fa";

import {
  SiStyledcomponents,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiMaterialui,
  SiScrumalliance,
} from "react-icons/si";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

export const LINKS = [
  {
    name: "Home",
    //path: "/",
    id: "#home",
  },
  {
    name: "Resume",
    //path: "/experiencia",
    id: "#resume",
  },
  {
    name: "Skills",
    //path: "/tecnologías",
    id: "#skills",
  },
  {
    name: "Portfolio",
    //path: "/proyectos",
    id: "#portfolio",
  },
  {
    name: "Contact",
    //path: "/contacto",
    id: "#contacto",
  },
];

export const SOCIALS = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Oralia31",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/oralia-rivera-vicente/",
  },
  {
    icon: <FaWhatsapp />,
    path: "https://wa.me/529221252323?text=Hola,%20estoy%20interesado%20en%20tus%20servicios",
  },
  {
    icon: <FaEnvelope />,
    path: "mailto:oralia.rivera.isc@gmail.com?subject=Consulta%20sobre%20servicios&body=Hola,%20estoy%20interesado%20en%20saber%20más%20sobre%20tus%20servicios",
  },
];

export const INFO = [
  {
    icon: <FaWhatsapp />,
    title: "Whatsapp",
    description: "Send me a message",
    link: "https://wa.me/529221252323?text=Hola,%20estoy%20interesado%20en%20tus%20servicios",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Send me email",
    link: "mailto:oralia.rivera.isc@gmail.com?subject=Consulta%20sobre%20servicios&body=Hola,%20estoy%20interesado%20en%20saber%20más%20sobre%20tus%20servicios",
  },
];

//about data
export const ABOUT = {
  title: "About me",
  description:
    "I've been dedicated to front-end development for approximately 3 years, creating intuitive and attractive user interfaces. My commitment and enthusiasm for continuous learning have allowed me to adapt to new technologies and tools, offering innovative solutions in a constantly evolving field. I'm creative, collaborative, and enjoy working in a team, contributing innovative ideas for the success of projects. I'm confident that my experience and skills will be valuable for any project.",
  info: [
    {
      fielName: "Name",
      fieldValue: "Oralia Rivera Vicente",
    },
    {
      fielName: "Phone",
      fieldValue: "(+52) 922 125 23 23",
    },
    {
      fielName: "Experience",
      fieldValue: "3",
    },
    {
      fielName: "Email",
      fieldValue: "oralia.rivera.isc@gmail.com",
    },
    {
      fielName: "Languages",
      fieldValue: "English, Spanish",
    },
  ],
};

//experience data
export const EXPERIENCE = {
  icon: "",
  title: "My experience",
  description: "",
  items: [
    {
      company: "IDS Comercial",
      position: "Front-End Developer",
      duration: "January 2023 - April 2024",
    },
    {
      company: "Zenda.la",
      position: "Front-End Developer",
      duration: "November 2021 - December 2022",
    },
    {
      company: "UNINDETEC",
      position: "Front-End Developer Junior",
      duration: "February 2021 - July 2021",
    },
  ],
};

//education data
export const EDUCATION = {
  icon: "",
  title: "My Education",
  description: "",
  items: [
    {
      institution: "Insttituto Tecnológico de Minatitlán",
      degree: "Computer System Engineer Bachelor",
      duration: "August 2016 - October 2021",
    },
  ],
};

//skils data
export const SKILLS = {
  title: "My skills",
  description: "These are technologies with which I've worked.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
      level: "Advanced",
    },
    {
      icon: <FaCss3 />,
      name: "Css3",
      level: "Intermediate",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      level: "Intermediate",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      level: "Basic",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
      level: "Intermediate",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      level: "Intermediate",
    },
    {
      icon: <FaVuejs />,
      name: "Vue.js",
      level: "Basic",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
      level: "Basic",
    },
    {
      icon: <SiStyledcomponents />,
      name: "styled-components",
      level: "Intermediate",
    },
    /*{
      icon: <SiMaterialui />,
      name: "Material UI",
    },*/
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      level: "Basic",
    },
    {
      icon: <SiScrumalliance />,
      name: "Scrum",
      level: "Intermediate",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      level: "Basic",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      level: "Advanced",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      level: "Advanced",
    },
    {
      icon: <FaGitlab />,
      name: "GitLab",
      level: "Basic",
    },
  ],
};

//certifications data
export const CERTIFICATIONS = {
  icon: "",
  title: "My certifications",
  description: "",
  items: [
    {
      title: "Scrum Developer",
      institution: "CertiProf",
      date: "January 2023",
    },
    {
      title: "Scrum Fundamentals",
      institution: "SCRUMstudy",
      date: "January 2023",
    },
    {
      title: "National Language Level Certification",
      institution: "SEP",
      date: "September 2022",
    },
    {
      title: "Scrum Fundamentals",
      institution: "Sprint Ágil",
      date: "October 2021",
    },
  ],
};

export const PROJECTS = [
  {
    num: "01",
    category: "Frontend",
    type: "Work project",
    title: "Insurance project",
    description:
      "Developed significant improvements in the user interfaces of the contracting processes of various insurance in a project for a bank in the insurance area, ensuring an intuitive and attractive experience.",
    stack: [
      { name: "Angular" },
      { name: "HTML" },
      { name: "Jade" },
      { name: "CSS" },
    ],
    image: "/assets/Projects/cotizador-seguro.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    type: "Work project",
    title: "Work project",
    description:
      "Developed improvements in the web application for a project for an airline.",
    stack: [
      { name: "Html 5" },
      { name: "JavaScript" },
      { name: "ReactJS" },
      { name: "Next.js" },
      { name: "CSS" },
      { name: "Tailwind" },
    ],
    image: "/assets/Projects/aeromexico-rewards.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    type: "Work project",
    title: "Project Zenda.la",
    description:
      "Migrated JavaScript code to TypeScript to improve code robustness and maintainability, developed and implemented new components and features with ReactJS and TypeScript based on Figma designs and connected and consumed internal and external APIs to access data and information from maps in the front-end.",
    stack: [
      { name: "Html 5" },
      { name: "ReactJS" },
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "CSS" },
      { name: "Styled-components" },
    ],
    image: "/assets/Projects/work-zendala.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Frontend",
    type: "Personal project",
    title: "Rick & Morty app",
    description: "Project developed using Rick and Morty API",
    stack: [{ name: "Html 5" }, { name: "CSS" }, { name: "CSS" }],
    image: "/assets/Projects/rick-and-morty-app.png",
    live: "https://oralia31.github.io/rick-and-morty/",
    github: "https://github.com/Oralia31/rick-and-morty",
  },
  {
    num: "05",
    category: "Frontend",
    type: "Personal project",
    title: "Movies app",
    description:
      "Project developed using a public movie API.",
    stack: [{ name: "Html 5" }, { name: "CSS" }, { name: "CSS" }],
    image: "/assets/Projects/movies-app.png",
    live: "https://movie-app-mu-ruby.vercel.app/",
    github: "https://github.com/Oralia31/movie-app",
  },
  {
    num: "06",
    category: "Frontend",
    type: "Personal project",
    title: "Calculator",
    description:
      "Project developed to practice.",
    stack: [{ name: "Html 5" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/Projects/calculator.png",
    live: "https://calculator-eta-pied.vercel.app/",
    github: "https://github.com/Oralia31/Calculator",
  },
];
export const URL ="http://api/sendEmail";

export const process= {
  env: { 
    HOST: "smtp.gmail.com",
    PORT: 587,
    EMAIL_USER: "oralia.rivera.isc@gmail.com", 
    EMAIL_PASS: "qdqjrgkjyrcbdsdg",
    RAMDOM_STRING: "cca3066ab1d1ba95bdf85b4ead15bfbc",
   }
}
