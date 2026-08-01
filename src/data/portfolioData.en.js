export const portfolioDataEn = {
  personal: {
    name: "Herimamy Fenohasina",
    shortName: "Herimamy",
    role: "Web Developer",
    tagline: "Computer science student passionate about modern web development. I build fast, clean, and accessible interfaces.",
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
    { label: "React",     value: 65 },
    { label: "Backend",   value: 45 },
    { label: "UI / UX",   value: 60 },
  ],

  about: {
    title: "About Me",
    description:
      "Second-year Computer Science student at the Haute École de l'Informatique d'Ivandry, I build modern web interfaces with React, TypeScript, and TailwindCSS. My approach: iterate fast, learn by doing, deliver concrete results.",
    qualities: [
      { label: "Curiosity",  icon: "Search",   desc: "Always keeping up with the latest technologies" },
      { label: "Autonomy",   icon: "Terminal", desc: "Able to drive a project forward independently"   },
      { label: "Teamwork",   icon: "Users",    desc: "Active collaboration on shared projects"          },
    ],
    image: "/feno.png",
  },

  experiences: [
    {
      id: "exp-1",
      title: "Internship — Information Systems Department",
      company: "DSI Madagascar",
      period: "2024",
      description:
        "Development of internal web pages in HTML, CSS, and JavaScript. Contributed to improving the user interfaces of internal tools.",
      type: "stage",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "exp-2",
      title: "Preparatory Year in Computer Science",
      company: "ONG Passerelles Numériques Madagasikara",
      period: "2024",
      description:
        "Developed web projects in HTML, CSS, and JavaScript. Participated in project management and the design of functional user interfaces.",
      type: "stage",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "exp-3",
      title: "2nd Year — Computer Science",
      company: "Haute École de l'Informatique d'Ivandry",
      period: "2024 – 2025",
      description:
        "Training in software development, data structures, algorithms, and web development. Collaborative projects including a school expense management app.",
      type: "formation",
      tags: ["Algorithms", "Java", "Web", "React"],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "Sushi restaurant website",
      description:
        "Modern interface for a sushi restaurant with an interactive menu, gallery, and online ordering system.",
      stack: ["React", "TailwindCSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
      deployed: false,
      demoLink: "#",
      status: "inprogress",
      version: "v0.8",
    },
    {
      id: "proj-2",
      title: "Typing speed test",
      description:
        "Typing speed (WPM) measurement app with difficulty levels, detailed statistics, and leaderboard.",
      stack: ["JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
      deployed: true,
      demoLink: "https://hikeyboardgame.netlify.app/",
      status: "deployed",
      version: "v1.2",
    },
    {
      id: "proj-3",
      title: "Geek'sopap Portfolio",
      description:
        "Digital resource platform for the geek community — content sharing and curation with a tag system.",
      stack: ["React", "TypeScript", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      deployed: true,
      demoLink: "https://sopatek-madagascar.vercel.app/",
      status: "deployed",
      version: "v2.0",
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
          { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",           level: 70 },
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 40 },
          { name: "Java",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",             level: 60 },
          { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 45 },
          { name: "NextJs",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",         level: 60 },
          { name : "Dart",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",             level: 50 },  
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
          { name: "IntelliJ",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",             level: 70 },
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
    emailButtonLabel: "Write an email",
    emailAutoOpen: "Your email client will open automatically.",
    coordLabel: "> whoami --contact",
    coordTitle: "My contact details",
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
    title: "Preparatory Year in Computer Science",
    issuer: "Passerelles Numériques Madagascar NGO",
    date: "2024",
    status: "obtained",
    tags: ["JavaScript", "HTML", "CSS", "Algorithmics", "Git", "GitHub", "Project Management"],
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
  }
],

  certifications_ui: {
    sectionLabel: "// Certifications",
    title: "My Certifications",
    obtained: "obtained",
    inprogress: "in progress",
    filters: [
      { key: "all",        label: "All"         },
      { key: "obtained",   label: "Obtained"    },
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
    sectionLabel: "// Experience",
    title: "My Journey",
  },

  projects_ui: {
    sectionLabel: "// Projects",
    title: "My Projects",
    filters: [
      { key: "all",        label: "All"         },
      { key: "deployed",   label: "Deployed"    },
      { key: "inprogress", label: "In progress" },
    ],
    searchPlaceholder: "Search...",
    badgeDeployed: "Deployed",
    badgeInprogress: "In progress",
    seesite: "View site",
    deploying: "Deployment in progress",
  },

  skills_ui: {
    sectionLabel: "// Skills",
    title: "My Skills",
  },

  hero_ui: {
    available: "Available for an apprenticeship",
    stats: [
      { key: "projects",       label: "Projects"       },
      { key: "technologies",   label: "Technologies"   },
      { key: "experiences",    label: "Experiences"    },
      { key: "certifications", label: "Certifications" },
    ],
  },

  chatbot: {
    greeting:
      "Hi! I'm the assistant for this portfolio. What would you like to know about Herimamy?",
    welcomeButtons: ["My projects", "My skills", "My journey", "About", "Contact", "Download CV"],
    openingDelay: 3500,
  },
};