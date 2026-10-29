import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  SkillBarsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Chetan Ukani",
  title: "Hi all, I'm Chetan",
  description:
    "I am a passionate Full Stack & Web3 / Blockchain Engineer with proven expertise in building secure EVM Smart Contracts, decentralized applications (dApps), and high-performance backend architectures. Experienced in developing Solidity smart contracts on Ethereum, connecting seamless Web3 frontends (Ethers.js, Web3.js), and architecting scalable backend microservices (Node.js, Express, MongoDB, Redis). Dedicated to clean code, gas optimization, contract security, and intuitive user experiences for real-world Web3 solutions.",
  resumeLink: "https://drive.google.com/file/d/1BqZndGwnL0Xo9PSIh9jf9QTLrQuTvMXn/view?usp=sharing",
};

export const openSource = {
  githubUserName: "chetanukani",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:ukanichetan007@gmail.com",
  linkedin: "https://www.linkedin.com/in/chetan-ukani/",
  github: "https://github.com/chetanukani",
  stackoverflow: "https://stackoverflow.com/users/19022239/chetan-ukani",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "FULL STACK & WEB3 ENGINEER SPECIALIZING IN SMART CONTRACTS, DAPPS, AND SCALABLE CLOUD ARCHITECTURE",
  data: [
    {
      title: "Blockchain & Web3 Development",
      lottieAnimationFile: "/lottie/skills/ethereum.json",
      skills: [
        emoji("⚡ Designing, testing, and deploying secure EVM Smart Contracts (ERC-20, ERC-721, ERC-1155) with Solidity & Hardhat"),
        emoji("⚡ Implementing gas optimization techniques, reentrancy guards, and contract security best practices"),
        emoji("⚡ Developing interactive dApp frontends integrating Web3.js, Ethers.js, MetaMask, and WalletConnect"),
        emoji("⚡ Utilizing decentralized storage and metadata solutions including IPFS and Pinata"),
      ],
      softwareSkills: [
        {
          skillName: "Solidity",
          iconifyTag: "logos:solidity",
        },
        {
          skillName: "Ethereum",
          iconifyTag: "logos:ethereum",
        },
        {
          skillName: "Polygon",
          iconifyTag: "token-branded:matic",
        },
        {
          skillName: "Web3.js",
          iconifyTag: "logos:web3js",
        },
        {
          skillName: "Ethers.js",
          iconifyTag: "thesvg-color:ethers",
        },
        {
          skillName: "Hardhat",
          iconifyTag: "devicon:hardhat",
        },
        {
          skillName: "OpenZeppelin",
          iconifyTag: "simple-icons:openzeppelin",
        },
        {
          skillName: "IPFS",
          iconifyTag: "thesvg-color:ipfs",
        },
        {
          skillName: "MetaMask",
          iconifyTag: "logos:metamask-icon",
        },
        {
          skillName: "The Graph",
          iconifyTag: "token-branded:grt",
        },
        {
          skillName: "Chainlink",
          iconifyTag: "token-branded:link",
        },
        {
          skillName: "Truffle",
          iconifyTag: "logos:truffle-icon",
        },
      ],
    },
    {
      title: "Full Stack & dApp Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Building responsive, high-performance web applications and dApp user interfaces with React.js, Next.js, and TypeScript"),
        emoji("⚡ Managing complex client-side state, reactive UI flows, and real-time transaction lifecycle feedback using Redux"),
        emoji("⚡ Bridging on-chain blockchain event streams with off-chain RESTful APIs for fluid user experiences"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "devicon:typescript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "logos:nextjs-icon",
        },
        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
        },
        {
          skillName: "HTML5",
          iconifyTag: "skill-icons:html",
        },
        {
          skillName: "CSS3",
          iconifyTag: "skill-icons:css",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
      ],
    },
    {
      title: "Backend & Cloud Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json",
      skills: [
        emoji("⚡ Designing resilient RESTful & GraphQL microservices using Node.js, Express.js, and Nest.js"),
        emoji("⚡ Real-time blockchain event streaming, transaction indexing, and WebSockets with Socket.io & Redis Pub/Sub"),
        emoji("⚡ Database schema design and high-volume indexing with MongoDB, MySQL, and Redis caching"),
        emoji("⚡ Containerization and CI/CD automated deployment pipelines with Docker, Kubernetes, and AWS"),
      ],
      softwareSkills: [
        {
          skillName: "NodeJs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "ExpressJs",
          iconifyTag: "skill-icons:expressjs-dark",
        },
        {
          skillName: "Nestjs",
          iconifyTag: "logos:nestjs",
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
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "Socketio",
          iconifyTag: "devicon:socketio",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
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
          skillName: "Git",
          iconifyTag: "logos:git",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Smart Contracts & Solidity (ERC-20, ERC-721, ERC-1155)",
    progressPercentage: "92",
  },
  {
    Stack: "Web3 Integration & dApps (Ethers.js, Web3.js, IPFS)",
    progressPercentage: "90",
  },
  {
    Stack: "Backend Architecture (Node.js, Express, Nest.js, REST/GraphQL)",
    progressPercentage: "95",
  },
  {
    Stack: "Frontend Engineering (React.js, Next.js, TypeScript)",
    progressPercentage: "88",
  },
  {
    Stack: "Database & Caching (MongoDB, Redis, MySQL)",
    progressPercentage: "90",
  },
  {
    Stack: "Smart Contract Security & Gas Optimization",
    progressPercentage: "85",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Government Engineering College, Gandhinagar",
    subHeader: "Bachelor of Engineering in Information Technology",
    duration: "June 2018 - April 2022",
    desc: "Graduated with honors in Information Technology, focusing on software engineering, distributed systems, data structures, algorithms, and database management systems.",
    grade: "CGPA - 8.94",
    descBullets: [
      "Completed comprehensive coursework in Advanced Data Structures, Operating Systems, Database Management Systems, and Software Engineering.",
      "Achieved high academic standing with a CGPA of 8.94 / 10.0.",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Engineer",
    company: "Impero It Services",
    companyLogo: "/img/icons/common/impero_logo.jpg",
    date: "Sept 2023 - Present",
    desc: "Spearheading backend and full-stack engineering for high-throughput enterprise web applications, microservices, and real-time distributed systems.",
    descBullets: [
      "Engineered high-performance RESTful APIs and backend services using Node.js, Express.js, and Nest.js serving high-concurrency traffic.",
      "Implemented real-time bidirectional messaging and state synchronization using Socket.io and Redis Pub/Sub.",
      "Designed and optimized complex MongoDB and MySQL database architectures with Redis caching, cutting query response times by over 40%.",
      "Streamlined CI/CD deployment pipelines using Docker, Git, and AWS cloud services to ensure zero-downtime production releases.",
    ],
    link: "https://imperoit.com/",
  },
  {
    role: "Blockchain Developer",
    company: "Yudiz Solutions Limited",
    companyLogo: "/img/icons/common/yudiz-logo.jpg",
    date: "Jan 2022 - August 2023",
    desc: "Engineered decentralized applications (dApps), custom EVM smart contracts, and Web3 integration layers for NFT marketplaces and DeFi solutions.",
    descBullets: [
      "Developed, tested, and deployed secure Solidity smart contracts (ERC-20, ERC-721, ERC-1155, marketplace bidding, escrow) on Ethereum and EVM-compatible chains.",
      "Built responsive dApp interfaces and Web3 wallet connection workflows using Web3.js, Ethers.js, and MetaMask.",
      "Integrated decentralized storage via IPFS (Pinata) for immutable metadata pinning and secure asset management.",
      "Conducted thorough smart contract security audits and implemented reentrancy guards, access controls, and EVM gas optimization techniques.",
      "Architected backend microservices in Node.js and MongoDB to listen for on-chain events, index transactions, and synchronize off-chain state.",
    ],
    link: "https://yudiz.com/",
  },
];

export const projects: ProjectType[] = [
  {
    name: "UMart",
    desc: "UMart is an online grocery shopping platform where users can easily browse a wide range of grocery items, place orders, and make secure purchases. The platform supports real-time inventory updates, allowing users to view and select available products, and offers a streamlined checkout process with various payment options. Features include order tracking and a responsive design to ensure a smooth shopping experience across all devices.",
    github: "",
    link: "https://umart.tz",
    img: "/img/projects/umart.png",
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
    ],
  },
  {
    name: "ULearn",
    desc: "Ulearn is school management system where school and admin can add students, and parents and teacher can access this platform via parents app and teacher app. Parents can track the activity of their child and can do necessary steps. And teacher interface can do all teacher related stuff like attendance, activities, reports. There is one more web interface is vendor. They can do extra sports, music, art etc activities.",
    github: "",
    link: "http://ulearn.tz",
    img: "/img/projects/ulearn.png",
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
    ],
  },
  {
    name: "PhoneAwayBox",
    desc: "PhoneAwayBox is platform where students can put their phone using NFC tag system, and attend their class. This system is doing track of student's phone away hours during school times, gives necessary sms to their parents. In this platform student can access this platform via student App to do clock-in and clock-out.",
    github: "",
    link: "https://www.phoneawaybox.com/",
    img: "/img/projects/phoneawaybox.png",
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
    ],
  },
  {
    name: "NFT Talent",
    desc: "NFT Talent is an NFT marketplace platform where creators upload digital artwork to IPFS and mint/trade via EVM smart contracts. Users can list digital collectibles for direct purchase or auction with real-time bidding. Smart contracts developed in Solidity handle minting, escrow, royalty enforcement, and decentralized transactions with high security and gas efficiency.",
    github: "",
    link: "",
    img: "/img/projects/nfttalent.png",
    skills: [
      {
        name: "Solidity",
        iconifyTag: "logos:solidity",
      },
      {
        name: "Ethereum",
        iconifyTag: "logos:ethereum",
      },
      {
        name: "Web3.js",
        iconifyTag: "logos:web3js",
      },
      {
        name: "IPFS",
        iconifyTag: "thesvg-color:ipfs",
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
    ],
  },
];

export const seoData: SEODataType = {
  title: "Chetan Ukani | Full Stack & Web3 / Blockchain Developer",
  description:
    "Portfolio of Chetan Ukani - Full Stack & Web3 / Blockchain Developer specializing in Solidity, EVM Smart Contracts, dApps, Node.js, React, and Scalable Backend Architecture.",
  author: "Chetan Ukani",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://github.com/chetanukani",
  keywords: [
    "Chetan Ukani",
    "Chetan",
    "Blockchain Developer",
    "Web3 Developer",
    "Solidity Developer",
    "Smart Contracts",
    "Ethereum",
    "dApps",
    "Full Stack Developer",
    "Node.js",
    "React.js",
    "DeFi",
    "NFT",
    "Web3 Engineer",
  ],
};
