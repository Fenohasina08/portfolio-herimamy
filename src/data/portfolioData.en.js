export const portfolioDataEn = {
  personal: {
    name: "Herimamy Fenohasina",
    shortName: "Herimamy",
    role: "Full Stack Web Developer",
    tagline: "Computer science student, full stack developer. I build fast and clean interfaces with React/Next.js, connected to robust Java Spring Boot APIs.",
    location: "Antananarivo, Madagascar",
    email: "fenohasinaherimamy@gmail.com",
    phone: "+261 32 87 023 38",
    github: "https://github.com/Fenohasina08",
    linkedin: "https://www.linkedin.com/in/herimamy-fenohasina-ra-fanomezana-40370a386/",
  },

  staticStats: {
    yearsStudy: 2,
    githubCommits: "150+",
  },

  xpBars: [
    { label: "Frontend",  value: 80 },
    { label: "React / Next.js", value: 70 },
    { label: "Backend (Spring Boot)", value: 65 },
    { label: "DevOps (Docker / CI-CD)", value: 55 },
  ],

  about: {
    title: "About Me",
    description:
      "2nd-year Computer Science student at Haute École de l'Informatique (HEI) Ivandry, I design full-featured web applications: React, Next.js, and TypeScript interfaces on the frontend, secure Java Spring Boot and PostgreSQL APIs on the backend, with Docker and CI/CD for deployment. My approach: iterate quickly, learn by doing, and deliver concrete results.",
    qualities: [
      { label: "Curiosity",   icon: "Search",   desc: "Always keeping up-to-date with new technologies" },
      { label: "Autonomy",    icon: "Terminal", desc: "Ability to work independently on a project" },
      { label: "Teamwork",    icon: "Users",    desc: "Active collaboration on shared projects" },
    ],
    image: "/feno.png",
  },

  experiences: [
    {
      id: "exp-1",
      title: "Web Developer Intern",
      company: "MNDPT — Ministry of Digital Development, Postal Services and Telecommunications",
      period: "Oct 2024",
      description:
        "Recreation of the ministry's institutional showcase website using HTML, CSS, and JavaScript. Web integration and page structuring in a real institutional environment. Introduction to the processes and operations of an IT department.",
      type: "internship",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "exp-2",
      title: "Computer Science Preparatory Year",
      company: "ONG Passerelles Numériques Madagasikara",
      period: "Jan 2024 – Nov 2024",
      description:
        "Development of web projects using HTML, CSS, and JavaScript. Participation in project management and the design of functional user interfaces.",
      type: "internship",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "exp-3",
      title: "2nd Year Computer Science",
      company: "Haute École de l'Informatique d'Ivandry",
      period: "Nov 2024 – Present",
      description:
        "Training in software development, data structures, algorithms, and full stack web development. In-depth projects in Spring Boot (secure APIs, testing, CI/CD) and multi-service architectures (Next.js, Express, React Admin).",
      type: "education",
      tags: ["Algorithms", "Java", "Spring Boot", "React"],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "cine-app — Cinema Booking",
      description:
        "Secure REST API built with Spring Boot featuring JWT authentication and role-based access control (RBAC). Docker containerization and CI/CD pipeline via GitHub Actions. Generation and download of booking tickets.",
      stack: ["Java", "Spring Boot", "Docker", "GitHub Actions", "JWT"],
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
      deployed: true,
      demoLink: "#",
      status: "deployed",
      version: "v1.0",
    },
    {
      id: "proj-2",
      title: "EventSync 2026 — Event Management",
      description:
        "Multi-service platform: Express/Prisma backend with PostgreSQL (Neon), public Next.js frontend with dynamic search and filters, and a React Admin back-office for managing venues and speakers (full CRUD).",
      stack: ["Next.js", "Express", "Prisma", "PostgreSQL", "React Admin"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      deployed: false,
      demoLink: "#",
      status: "inprogress",
      version: "v0.9",
    },
    {
      id: "proj-3",
      title: "exodocker — Tested and Monitored API",
      description:
        "Spring Boot API featuring Testcontainers integration tests, production error monitoring via Sentry, and Docker deployment with a complete CI/CD pipeline via GitHub Actions.",
      stack: ["Spring Boot", "Docker", "Testcontainers", "Sentry"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      deployed: true,
      demoLink: "#",
      status: "deployed",
      version: "v1.0",
    },
  ],

  skills: {
    categories: [
      {
        title: "Languages",
        icon: "Code2",
        skills: [
          { name: "HTML",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",           level: 90 },
          { name: "CSS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",             level: 85 },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 75 },
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 50 },
          { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",           level: 70 },
          { name: "NextJs",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",         level: 65 },
          { name: "Java",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",             level: 65 },
          { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 55 },
          { name: "Dart",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",             level: 50 },
          { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",         level: 25 },
        ],
      },
      {
        title: "Backend & DevOps",
        icon: "Server",
        skills: [
          { name: "Spring Boot",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",             level: 65 },
          { name: "Node.js",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",             level: 60 },
          { name: "Express",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",           level: 60 },
          { name: "Docker",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",             level: 60 },
          { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg", level: 55 },
          { name: "AWS",            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", level: 45 },
        ],
      },
      {
        title: "Tools",
        icon: "Wrench",
        skills: [
          { name: "Git/GitHub",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",       level: 80 },
          { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", level: 75 },
          { name: "Figma",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",          level: 50 },
          { name: "VS Code",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",        level: 95 },
          { name: "IntelliJ",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",    level: 70 },
        ],
      },
    ],
  },

  contact: {
    title: "Contact",
    sectionLabel: "// Contact",
    emailCardLabel: "> send_message.sh",
    emailCardTitle: "Send me an email",
    emailText:
      "Available for an apprenticeship, internship, or collaboration. Write to me directly.",
    emailButtonLabel: "Send an email",
    emailAutoOpen: "Your email client will open automatically.",
    coordLabel: "> whoami --contact",
    coordTitle: "My contact info",
    socialTitle: "Find me on",
    socialLinks: [
      { platform: "GitHub",   url: "https://github.com/Fenohasina08",                                               icon: "Github"   },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/herimamy-fenohasina-ra-fanomezana-40370a386/",     icon: "Linkedin" },
      { platform: "Facebook", url: "https://www.facebook.com/feno.hasi.na.55017",                                   icon: "Facebook" },
    ],
  },

  certifications: [
    {
      id: "cert-1",
      title: "Introduction to Web Development",
      issuer: "Orange Digital Center Madagascar",
      date: "2025",
      status: "obtained",
      tags: ["HTML", "CSS", "JS", "Python"],
      url: "#",
    },
    {
      id: "cert-2",
      title: "Computer Science Preparatory Year",
      issuer: "ONG Passerelles Numériques Madagasikara",
      date: "2024",
      status: "obtained",
      tags: ["JavaScript", "HTML", "CSS", "Algorithms", "Git", "GitHub", "Project Management"],
      url: "#",
    },
    {
      id: "cert-3",
      title: "Advanced Dart",
      issuer: "Nextflutter",
      date: "July 2026",
      status: "obtained",
      tags: ["Dart", "Flutter", "Mobile Development"],
      url: "https://nextflutter.com/certifications/verify/NF-2026-0558CA49",
    },
    {
      id: "cert-4",
      title: "FlutterFire Summer Camp — Cohort 2026",
      issuer: "FlutterFire",
      date: "2026",
      status: "inprogress",
      tags: ["Flutter", "Dart", "Firebase", "Mobile"],
      url: "#",
    },
  ],

  certifications_ui: {
    sectionLabel: "// Certifications",
    title: "My Certifications",
    obtained: "obtained",
    inprogress: "in progress",
    filters: [
      { key: "all",        label: "All"        },
      { key: "obtained",   label: "Obtained"   },
      { key: "inprogress", label: "In progress" },
    ],
    badgeObtained: "Obtained",
    badgeInprogress: "In progress",
    verified: "✓ Verified",
    eta: "ETA →",
    see: "View",
  },

  about_ui: {
    sectionLabel: "// About",
  },

  experience_ui: {
    sectionLabel: "// Journey",
    title: "My Journey",
  },

  projects_ui: {
    sectionLabel: "// Projects",
    title: "My Projects",
    filters: [
      { key: "all",        label: "All"        },
      { key: "deployed",   label: "Deployed"   },
      { key: "inprogress", label: "In progress" },
    ],
    searchPlaceholder: "Search...",
    badgeDeployed: "Deployed",
    badgeInprogress: "In progress",
    seesite: "View site",
    deploying: "Deploying",
  },

  skills_ui: {
    sectionLabel: "// Skills",
    title: "My Skills",
  },

  hero_ui: {
    available: "Available for an apprenticeship",
    stats: [
      { key: "projects",       label: "Projects"      },
      { key: "technologies",   label: "Technologies"  },
      { key: "experiences",    label: "Experiences"   },
      { key: "certifications", label: "Certifications" },
    ],
  },

  chatbot: {
    greeting:
      "Hi! I am this portfolio's assistant. What would you like to know about Herimamy?",
    welcomeButtons: ["My projects", "My skills", "My journey", "About", "Contact", "Download CV"],
    openingDelay: 3500,
  },

  seo: {
    title: "Herimamy Fenohasina RA-FANOMEZANA — Full Stack Web Developer | Madagascar",
    description: "Herimamy Fenohasina, computer science student at HEI Ivandry (Madagascar), full stack web developer (React, Next.js, Java Spring Boot, Docker, CI/CD). Looking for a web development apprenticeship for 2026."
  }
};