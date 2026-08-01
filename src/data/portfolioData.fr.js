export const portfolioDataFr = {
  personal: {
    name: "Herimamy Fenohasina",
    shortName: "Herimamy",
    role: "Développeur Web",
    tagline: "Étudiant en informatique passionné par le développement web moderne. Je construis des interfaces rapides, propres et accessibles.",
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
    title: "À propos de moi",
    description:
      "Étudiant en 2ème année Informatique à la Haute École de l'Informatique d'Ivandry, je construis des interfaces web modernes avec React, TypeScript et TailwindCSS. Mon approche : itérer vite, apprendre en faisant, livrer du concret.",
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
      title: "Stage — Direction des Systèmes d'Information",
      company: "DSI Madagascar",
      period: "2024",
      description:
        "Développement de pages web internes en HTML, CSS et JavaScript. Contribution à l'amélioration des interfaces utilisateur des outils internes.",
      type: "stage",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "exp-2",
      title: "Année Préparatoire Informatique",
      company: "ONG Passerelles Numériques Madagasikara",
      period: "2024",
      description:
        "Développement de projets web en HTML, CSS et JavaScript. Participation à la gestion de projet et à la conception d'interfaces utilisateur fonctionnelles.",
      type: "stage",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "exp-3",
      title: "2ème année Informatique",
      company: "Haute École de l'Informatique d'Ivandry",
      period: "2024 – 2025",
      description:
        "Formation en développement logiciel, structures de données, algorithmique et développement web. Projets collaboratifs dont une app de gestion des dépenses scolaires.",
      type: "formation",
      tags: ["Algorithmique", "Java", "Web", "React"],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "Site restaurant sushi",
      description:
        "Interface moderne pour un restaurant sushi avec menu interactif, galerie et système de commande en ligne.",
      stack: ["React", "TailwindCSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
      deployed: false,
      demoLink: "#",
      status: "inprogress",
      version: "v0.8",
    },
    {
      id: "proj-2",
      title: "Test de dactylographie",
      description:
        "App de mesure de vitesse de frappe (WPM) avec niveaux de difficulté, statistiques détaillées et classement.",
      stack: ["JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
      deployed: true,
      demoLink: "https://hikeyboardgame.netlify.app/",
      status: "deployed",
      version: "v1.2",
    },
    {
      id: "proj-3",
      title: "Portfolio Geek'sopap",
      description:
        "Plateforme de ressources numériques pour la communauté geek — partage et curation de contenu avec système de tags.",
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
        title: "Langages",
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
          { name: "IntelliJ",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",             level: 70 },

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
      tags: ["HTML", "CSS" , "JS", "Python"],
      url: "#",
    },
    {
      id: "cert-2",
      title: "Année Préparatoire Informatique",
      issuer: "ONG Passerelles Numériques Madagasikara",
      date: "2024",
      status: "obtained",
      tags: ["JavaScript  ", "HTML", "CSS" , "Algorithmique", "Git", "GitHub", "Gestion de projet"],
      url: "#",
    },
     { 
    id: "cert-3",
    title: "Advanced Dart",
    issuer: "Nextflutter",
    date: "July 2026",
    status: "done",
    tags: ["Dart", "Flutter", "Mobile Development"],
    url: "https://nextflutter.com/certifications/verify/NF-2026-0558CA49",
  }
    
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
};