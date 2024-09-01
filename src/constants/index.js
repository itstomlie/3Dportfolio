import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pasarnow,
  brik,
  nestjs,
  nextjs,
  sql,
  airbnbClone,
  nuerPay,
  whatsappQuick,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Project Manager",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "nestjs",
    icon: nestjs,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Product Manager + Fullstack Engineer",
    company_name: "PT. Bangun Rancang Indonesia Kita (BRIK)",
    icon: brik,
    iconBg: "#383E56",
    date: "May 2023 - Feb 2024",
    points: [
      "Led ERP implementation, streamlining processes across multiple companies.",
      "Conducted user research to improve experience and address user needs.",
      "Managed task delegation, balancing business strategy and development execution.",
    ],
  },
  {
    title: "Fullstack Engineer",
    company_name: "PT. Bangun Rancang Indonesia Kita (BRIK)",
    icon: brik,
    iconBg: "#383E56",
    date: "Dec 2022 - May 2023",
    points: [
      "Contributed to team efforts, helping raise $12 million pre-seed investment.",
      "Developed responsive websites meeting UI/UX team requirements.",
      "Actively designed and developed backend applications for the company.",
    ],
  },
  {
    title: "Backend Software Engineer",
    company_name: "PT. Usaha Pintar Pratama (Pasarnow)",
    icon: pasarnow,
    iconBg: "#383E56",
    date: "May 2022 - Dec 2022",
    points: [
      "Developed and integrated new features and APIs into software applications.",
      "Managed server maintenance and troubleshooting for optimal performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Airbnb Clone",
    description: "Created using latest Next.js combined with supabase",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: airbnbClone,
    demoUrl: "https://airbnb.itstomlie.my.id/",
    sourceCodeLink: "https://github.com/itstomlie/airbnb-clone",
  },
  {
    name: "Nuer Pay",
    description:
      "A sophisticated mobile app that focuses on the dine-in restaurant experience, allowing you to book your table, browse menus, and pay without ever having to deal with wrong orders anymore",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
    ],
    image: nuerPay,
    demoUrl:
      "https://drive.google.com/file/d/1HyQLUVKJmCxRVELrzyF0bB3vKoTE_0g3/view",
    // source_code_link: "https://github.com/",
  },
  {
    name: "Whatsapp Quick",
    description:
      "Instantly send messages to any phone number, even if it's not in your contact list.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "Google Play Store",
        color: "pink-text-gradient",
      },
    ],
    image: whatsappQuick,
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.itsTomLie.Whatsapp_Quick",
    // source_code_link: "https://github.com/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  containerVariants,
  itemVariants,
};
