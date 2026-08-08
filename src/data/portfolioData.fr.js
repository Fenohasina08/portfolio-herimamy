export const portfolioDataFr = {
  personal: {
    name: "Herimamy Fenohasina",
    shortName: "Herimamy",
    role: "Développeur Web Full Stack",
    tagline: "Étudiant en informatique, développeur full stack. Je construis des interfaces rapides et propres en React/Next.js, connectées à des API robustes en Java Spring Boot.",
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
    title: "À propos de moi",
    description:
      "Étudiant en 2ème année Informatique à la Haute École de l'Informatique d'Ivandry, je conçois des applications web complètes : interfaces en React, Next.js et TypeScript côté frontend, API sécurisées en Java Spring Boot et PostgreSQL côté backend, avec Docker et CI/CD pour le déploiement. Mon approche : itérer vite, apprendre en faisant, livrer du concret.",
    qualities: [
      { label: "Curiosité",        icon: "Search",   desc: "Toujours en veille sur les nouvelles technos" },
      { label: "Autonomie",        icon: "Terminal", desc: "Capacité à avancer seul sur un projet" },
      { label: "Travail d'équipe", icon: "Users",    desc: "Collaboration active sur des projets partagés" },
    ],
    image: "/feno.png",
  },

  experiences: [
    {
      id: "exp-1",
      title: "Stage Développeur Web",
      company: "MNDPT — Ministère du Numérique, du Développement Postal et des Télécommunications",
      period: "Oct 2024",
      description:
        "Reproduction du site vitrine institutionnel du ministère en HTML, CSS et JavaScript. Intégration web et structuration de pages dans un environnement institutionnel réel. Initiation aux processus et au fonctionnement d'un service informatique.",
      type: "stage",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "exp-2",
      title: "Année Préparatoire Informatique",
      company: "ONG Passerelles Numériques Madagasikara",
      period: "Jan 2024 – Nov 2024",
      description:
        "Développement de projets web en HTML, CSS et JavaScript. Participation à la gestion de projet et à la conception d'interfaces utilisateur fonctionnelles.",
      type: "stage",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "exp-3",
      title: "2ème année Informatique",
      company: "Haute École de l'Informatique d'Ivandry",
      period: "Nov 2024 – Présent",
      description:
        "Formation en développement logiciel, structures de données, algorithmique et développement web full stack. Projets approfondis en Spring Boot (API sécurisées, tests, CI/CD) et en architectures multi-services (Next.js, Express, React Admin).",
      type: "formation",
      tags: ["Algorithmique", "Java", "Spring Boot", "React"],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "cine-app — Réservation de cinéma",
      description:
        "API REST sécurisée en Spring Boot avec authentification JWT et gestion des rôles (RBAC). Conteneurisation Docker et pipeline CI/CD via GitHub Actions. Génération et téléchargement de billets de réservation.",
      stack: ["Java", "Spring Boot", "Docker", "GitHub Actions", "JWT"],
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
      deployed: true,
      demoLink: "#",
      status: "deployed",
      version: "v1.0",
    },
    {
      id: "proj-2",
      title: "EventSync 2026 — Gestion d'événements",
      description:
        "Plateforme multi-services : backend Express/Prisma avec PostgreSQL (Neon), frontend public en Next.js avec recherche et filtres dynamiques, back-office React Admin pour la gestion des salles et intervenants (CRUD complet).",
      stack: ["Next.js", "Express", "Prisma", "PostgreSQL", "React Admin"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      deployed: false,
      demoLink: "#",
      status: "inprogress",
      version: "v0.9",
    },
    {
      id: "proj-3",
      title: "exodocker — API testée et monitorée",
      description:
        "API Spring Boot avec tests d'intégration Testcontainers, supervision des erreurs en production via Sentry, et déploiement Docker avec pipeline CI/CD complet via GitHub Actions.",
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
        title: "Langages",
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
        title: "Outils",
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
    emailCardTitle: "Envoyez-moi un email",
    emailText:
      "Disponible pour une alternance, un stage ou une collaboration. Écrivez-moi directement.",
    emailButtonLabel: "Écrire un email",
    emailAutoOpen: "Votre client email s'ouvrira automatiquement.",
    coordLabel: "> whoami --contact",
    coordTitle: "Mes coordonnées",
    socialTitle: "Retrouvez-moi sur",
    socialLinks: [
      { platform: "GitHub",   url: "https://github.com/Fenohasina08",                                               icon: "Github"   },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/herimamy-fenohasina-ra-fanomezana-40370a386/",     icon: "Linkedin" },
      { platform: "Facebook", url: "https://www.facebook.com/feno.hasi.na.55017",                                   icon: "Facebook" },
    ],
  },

  certifications: [
    {
      id: "cert-1",
      title: "Initiation au développement web",
      issuer: "Orange Digital Center Madagascar",
      date: "2025",
      status: "obtained",
      tags: ["HTML", "CSS", "JS", "Python"],
      url: "#",
    },
    {
      id: "cert-2",
      title: "Année Préparatoire Informatique",
      issuer: "ONG Passerelles Numériques Madagasikara",
      date: "2024",
      status: "obtained",
      tags: ["JavaScript", "HTML", "CSS", "Algorithmique", "Git", "GitHub", "Gestion de projet"],
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
    title: "Mes Certifications",
    obtained: "obtenues",
    inprogress: "en cours",
    filters: [
      { key: "all",        label: "Toutes"   },
      { key: "obtained",   label: "Obtenues" },
      { key: "inprogress", label: "En cours" },
    ],
    badgeObtained: "Obtenu",
    badgeInprogress: "En cours",
    verified: "✓ Vérifié",
    eta: "ETA →",
    see: "Voir",
  },

  about_ui: {
    sectionLabel: "// À propos",
  },

  experience_ui: {
    sectionLabel: "// Parcours",
    title: "Mon Parcours",
  },

  projects_ui: {
    sectionLabel: "// Projets",
    title: "Mes Projets",
    filters: [
      { key: "all",        label: "Tous"      },
      { key: "deployed",   label: "Déployés"  },
      { key: "inprogress", label: "En cours"  },
    ],
    searchPlaceholder: "Rechercher...",
    badgeDeployed: "Déployé",
    badgeInprogress: "En cours",
    seesite: "Voir le site",
    deploying: "En cours de déploiement",
  },

  skills_ui: {
    sectionLabel: "// Compétences",
    title: "Mes Compétences",
  },

  hero_ui: {
    available: "Disponible pour une alternance",
    stats: [
      { key: "projects",       label: "Projets"      },
      { key: "technologies",   label: "Technos"      },
      { key: "experiences",    label: "Expériences"  },
      { key: "certifications", label: "Certifications" },
    ],
  },

  chatbot: {
    greeting:
      "Salut ! Je suis l'assistant de ce portfolio. Que voulez-vous savoir sur Herimamy ?",
    welcomeButtons: ["Mes projets", "Mes compétences", "Mon parcours", "À propos", "Contact", "Télécharger CV"],
    openingDelay: 3500,
  },

  "seo": {
  "title": "Herimamy Fenohasina RA-FANOMEZANA — Développeur Full Stack Web | Madagascar",
  "description": "Herimamy Fenohasina, étudiant en informatique à HEI Ivandry (Madagascar), développeur web full stack (React, Next.js, Java Spring Boot, Docker, CI/CD). À la recherche d'une alternance en développement web pour 2026."
}
};