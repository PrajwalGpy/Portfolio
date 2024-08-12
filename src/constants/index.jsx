import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

// import projectImage1 from "../assets/Youtubeclone.jpg";
// import projectImage2 from "../assets/NeflixGpt.jpeg";
// import projectImage3 from "../assets/food-delivery-apps-in-market.jpeg";
import projectImage1 from "../assets/Youtubeclone.jpg";
import projectImage2 from "../assets/NeflixGpt.jpg";
import projectImage3 from "../assets/food-ordering-web-application.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "PRAJWAL GOPAL POOJARY",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "YouTube Clone",
    description:
      "A YouTube clone built with React, Redux, and Tailwind CSS, featuring real-time video data from the YouTube API, a Reddit-like comment section, debounced search results, and live chat functionality.",
    image: projectImage1,
    githubLink: "https://github.com/PrajwalGpy/youtube",
    liveDemoLink: "https://youtubeclone88.netlify.app/",
  },
  {
    id: 2,
    name: "Netflix GPT Movie App",
    description:
      "A Netflix-like movie app with GPT-powered movie information and real-time data from the TMDb API, featuring full user authentication and responsive design.",
    image: projectImage2,
    githubLink: "https://github.com/PrajwalGpy/netflixGpt",
    liveDemoLink: "https://moviemane.netlify.app/",
  },
  {
    id: 3,
    name: "FoodFly - Food Ordering Web App",
    description:
      "A food ordering web app built with React and Tailwind CSS, featuring menu browsing and cart functionality.",
    image: projectImage3,
    githubLink: "https://github.com/PrajwalGpy/FoodFly",
    liveDemoLink: "https://foodfly2.netlify.app/",
  },
];

export const BIO = [
  "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
  "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <FaHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML5",
    experience: "2+ years",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS3",
    experience: "2+ years",
  },
  {
    icon: (
      <TbBrandJavascript className="text-4xl text-yellow-300 lg:text-5xl" />
    ),
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <SiRedux className="text-4xl text-purple-700 lg:text-5xl" />,
    name: "Redux",
    experience: "1+ years",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "1+ years",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Application (BCA) ",
    institution:
      "Bhandarkar’s Arts and Science college , Mangalore University , Kundapura",
    duration: "September 2021  June 2024",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an Food ordering Web app. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://discord.com/users/1079648331170582588",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/sollcriper/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/prajwalgpa",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/PrajwalGpy",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/prajwal-gopal-poojary/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
