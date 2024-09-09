import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Chetan Ukani",
  title: "Hi all, I'm Chetan",
  description: "I am a passionate Full Stack web developer with expertise in designing and implementing backend logic using Node.js, Express.js, and MongoDB. On the client side, I specialize in React.js and Redux, which allows me to translate complex concepts into functional, high-performance code and seamless user interfaces. I am known for effective communication and collaborative problem-solving within cross-functional teams.",
  resumeLink: "https://drive.google.com/file/d/1I8M14yWw_BhyivjPArXY_zaI-4uCDbvM/view?usp=sharing",
};

export const openSource = {
  githubUserName: "chetanukani",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:ukanichetan007@gmail.com",
  linkedin: "https://www.linkedin.com/in/chetan-ukani/",
  github: "https://github.com/chetanukani",
  stackoverflow: "https://stackoverflow.com/users/19022239/chetan-ukani"
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "ADVENTUROUS FULL STACK DEVELOPER WITH A PASSION FOR EXPLORING DIVERSE TECH STACKS",
  data: [
    {
      title: "Backend Development",
      lottieAnimationFile: "", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building RESTful APIs in Node.js & Express.js REST Framework"),
        emoji("⚡ Crafting high-performance RESTful APIs with Express.js."),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "NodeJs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "ExpressJs",
          iconifyTag: "skill-icons:expressjs-dark"
        },
        {
          skillName: "MongoDB",
          iconifyTag: "skill-icons:mongodb",
        },
        {
          skillName: "Redis",
          iconifyTag: "logos:redis",
        },
        {
          skillName: "MySql",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "Socketio",
          iconifyTag: "devicon:socketio",
        },
        {
          skillName: "Nestjs",
          iconifyTag: "logos:nestjs",
        },
      ],
    },
    {
      title: "Frontend Development",
      lottieAnimationFile: "", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive static websites using React.js"),
        emoji("⚡ Making development easy with Redux and Bootstrap"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Typescript",
          iconifyTag: "devicon:typescript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
        },
        {
          skillName: "HTML",
          iconifyTag: "skill-icons:html",
        },
        {
          skillName: "CSS",
          iconifyTag: "skill-icons:css",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        }
      ],
    },
    {
      title: "Tools",
      lottieAnimationFile: "/lottie/skills/tools.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Version control using Git & Unit testing using Mocha and Jest"),
        emoji("⚡ Cloud messaging using firebase push notifications"),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          iconifyTag: "logos:aws"
        },
        {
          skillName: "Git",
          iconifyTag: "logos:git",
        },
        {
          skillName: "GitHub",
          iconifyTag: "icon-park:github",
        },
        {
          skillName: "GitLab",
          iconifyTag: "devicon:gitlab",
        },
        {
          skillName: "BitBucket",
          iconifyTag: "logos:bitbucket",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Kubernetes",
          iconifyTag: "logos:kubernetes",
        },
        {
          skillName: "Jest",
          iconifyTag: "logos:jest",
        },
        {
          skillName: "Mocha",
          iconifyTag: "logos:mocha",
        },
        {
          skillName: "Firebase",
          iconifyTag: "logos:firebase",
        },
      ],
    },
  ]
};

export const educationInfo: EducationType[] = [
  {
    schoolName: "Government Engineering College, Gandhinagar",
    subHeader: "Bachelor of Engineering in Information Technology",
    duration: "June 2018 - April 2022",
    desc: "Completed graduation in information technology containing web development, data structure, database, etc subjects.",
    grade: "CGPA - 8.94",
    descBullets: [], // Array of Strings
  }
];

export const experience: ExperienceType[] = [
  {
    role: "Software Engineer",
    company: "Impero It Services",
    companyLogo: "/img/icons/common/impero_logo.jpg",
    date: "Sept 2023 - Present",
    desc: "Built scalable RESTful APIs with Node.js, Express.js and MongoDB, implemented real-time data processing with Socket.io, and optimized backend performance through caching and asynchronous programming. Managed databases like MongoDB, developed microservices architectures, and automated testing and deployment with CI/CD pipelines.",
    link: 'https://imperoit.com/'
  },
  {
    role: "Blockchain Developer",
    company: "Yudiz Solutions Limited",
    companyLogo: "/img/icons/common/yudiz-logo.png",
    date: "Jan 2022 - August 2023",
    desc: "Developed and deployed smart contracts on Ethereum using Solidity, created decentralized applications with web3.js, and integrated blockchain solutions to enhance data security. Conducted security audits to identify vulnerabilities and optimized blockchain performance to reduce transaction costs. And implements RESTful APIs with Node.js and Express.js and MongoDB",
    link: 'https://yudiz.com/'
  }
];

export const projects: ProjectType[] = [
  {
    name: "UMart",
    desc: "UMart is an online grocery shopping platform where users can easily browse a wide range of grocery items, place orders, and make secure purchases. The platform supports real-time inventory updates, allowing users to view and select available products, and offers a streamlined checkout process with various payment options. Features include order tracking and a responsive design to ensure a smooth shopping experience across all devices.",
    github: "",
    link: "https://umart.tz",
    img: '/img/projects/umart.png',
    skills: [
      {
        name: "JavaScript",
        iconifyTag: "logos:javascript",
      },
      {
        name: "Typescript",
        iconifyTag: "devicon:typescript",
      },
      {
        name: "Reactjs",
        iconifyTag: "vscode-icons:file-type-reactjs",
      },
      {
        name: "Nodejs",
        iconifyTag: "logos:nodejs",
      },
      {
        name: "Expressjs",
        iconifyTag: "skill-icons:expressjs-dark",
      },
      {
        name: "MongoDB",
        iconifyTag: "skill-icons:mongodb",
      },
      {
        name: "Redis",
        iconifyTag: "logos:redis",
      },
      {
        name: "Socketio",
        iconifyTag: "devicon:socketio",
      },
    ]
  },
  {
    name: "ULearn",
    desc: "Ulearn is school management system where school and admin can add students, and parents and teacher can access this platform via parents app and teacher app. Parents can track the activity of their child and can do necessary steps. And teacher interface can do all teacher related stuff like attendance, activities, reports. There is one more web interface is vendor. They can do extra sports, music, art etc activities.",
    github: "",
    link: "http://ulearn.tz",
    img: '/img/projects/ulearn.png',
    skills: [
      {
        name: "JavaScript",
        iconifyTag: "logos:javascript",
      },
      {
        name: "Typescript",
        iconifyTag: "devicon:typescript",
      },
      {
        name: "Reactjs",
        iconifyTag: "vscode-icons:file-type-reactjs",
      },
      {
        name: "Nodejs",
        iconifyTag: "logos:nodejs",
      },
      {
        name: "Expressjs",
        iconifyTag: "skill-icons:expressjs-dark",
      },
      {
        name: "MongoDB",
        iconifyTag: "skill-icons:mongodb",
      },
      {
        name: "Redis",
        iconifyTag: "logos:redis",
      },
      {
        name: "Socketio",
        iconifyTag: "devicon:socketio",
      },
    ]
  },
  {
    name: "PhoneAwayBox",
    desc: "PhoneAwayBox is platform where students can put their phone using NFC tag system, and attend their class. This system is doing track of student's phone away hours during school times, gives necessary sms to their parents. In this platform student can access this platform via student App to do clock-in and clock-out.",
    github: "",
    link: "https://www.phoneawaybox.com/",
    img: '/img/projects/phoneawaybox.png',
    skills: [
      {
        name: "JavaScript",
        iconifyTag: "logos:javascript",
      },
      {
        name: "Typescript",
        iconifyTag: "devicon:typescript",
      },
      {
        name: "Reactjs",
        iconifyTag: "vscode-icons:file-type-reactjs",
      },
      {
        name: "Nodejs",
        iconifyTag: "logos:nodejs",
      },
      {
        name: "Expressjs",
        iconifyTag: "skill-icons:expressjs-dark",
      },
      {
        name: "MongoDB",
        iconifyTag: "skill-icons:mongodb",
      },
      {
        name: "Redis",
        iconifyTag: "logos:redis",
      },
      {
        name: "Socketio",
        iconifyTag: "devicon:socketio",
      },
    ]
  },
  {
    name: "NFT Talent",
    desc: "NFT Talent is NFT marketplace platform where user can upload their art on blockchain and can put on sale, on auction. So, other user can buy those art or can bid on it. Basically art is uploaded on ipfs which provide secure storage support ans then smart contract's function is called passed those details on blockchain via smart contract which we have developed in solidity.",
    github: "",
    img: '/img/projects/nfttalent.png',
    skills: [
      {
        name: "JavaScript",
        iconifyTag: "logos:javascript",
      },
      {
        name: "Solidity",
        iconifyTag: "logos:solidity",
      },
      {
        name: "Nodejs",
        iconifyTag: "logos:nodejs",
      },
      {
        name: "Expressjs",
        iconifyTag: "skill-icons:expressjs-dark",
      },
      {
        name: "MongoDB",
        iconifyTag: "skill-icons:mongodb",
      },
      {
        name: "Ethereum",
        iconifyTag: "logos:ethereum",
      }
    ]
  }
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Chetan Ukani",
  description: greetings.description,
  author: "Chetan Ukani",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Chetan",
    "chetan",
    "chetan ukani",
    "Chetan Patel",
    "Chetan Ukani",
    "chetan-ukani",
    "Portfolio",
    "chetanukani",
    "Chetan Ukani Portfolio",
  ],
};
