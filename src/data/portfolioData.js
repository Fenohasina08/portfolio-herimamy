export const portfolioData = {
  personal: {
    name: "Herimamy",
    role: "Développeur Web",
    location: "Antananarivo, Madagascar",
    email: "fenohasinaherimamy@gmail.com",
    phone: "+261 32 87 023 38"
  },

  about: {
    title: "À propos de moi",
    description: "Actuellement étudiant en L2 Informatique, je suis passionné par le développement web et les nouvelles technologies. Mon objectif est de devenir un développeur web full-stack compétent et de contribuer à des projets innovants.",
    qualities: ["Curiosité", "Autonomie", "Travail d'équipe"],
    image: "/feno.png"
  },

  experiences: [
    {
      id: "exp-1",
      title: "Stage - Direction des Systèmes d'Information",
      period: "2024",
      description: "Développement web avec HTML, CSS et JavaScript. Contribution à des projets d'amélioration des systèmes internes.",
      type: "stage",
      icon: "Briefcase"
    },
    {
      id: "exp-2",
      title: "2em année Informatique",
      period: "2023 - 2025",
      description: "Formation en développement logiciel, structures de données, algorithmique et développement web.",
      type: "formation",
      icon: "GraduationCap"
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Site de restaurant sushi",
      description: "Site web moderne pour un restaurant de sushi avec menu interactif et système de commande en ligne.",
      stack: ["React", "TailwindCSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      deployed: false,
      demoLink: "#",
      sectionId: "projets",
      status: "inprogress"           // ajouté
    },
    {
      id: "proj-2",
      title: "Test de dactylographie",
      description: "Application de test de vitesse de frappe avec système WPM, différents niveaux de difficulté et statistiques détaillées.",
      stack: ["JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      deployed: true,
      demoLink: "https://hikeyboardgame.netlify.app/",
      sectionId: "projets",
      status: "deployed"             // ajouté
    },
    {
      id: "proj-3",
      title: "Portfolio Geek'sopap",
      description: "Plateforme de ressources numériques pour la communauté geek avec système de partage et de curation de contenu.",
      stack: ["React", "TypeScript", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      deployed: true,
      demoLink: "https://sopatek-madagascar.vercel.app/",
      sectionId: "projets",
      status: "deployed"             // ajouté
    }
  ],

  skills: {
    categories: [
      {
        title: "Langages",
        skills: [
          { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 90 },
          { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 85 },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 75 },
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 70 },
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 40 },
          { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 60 },
          { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 45 }
        ]
      },
      {
        title: "Outils",
        skills: [
          { name: "Git/GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 80 },
          { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", level: 75 },
          { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 50 },
          { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 95 }
        ]
      }
    ]
  },

  contact: {
    title: "Contactez-moi",
    emailText: "Cliquez sur le bouton ci-dessous pour m'envoyer un email directement. Votre client de messagerie s'ouvrira avec mon adresse pré-remplie.",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/Fenohasina08", icon: "Github" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/herimamy-fenohasina-ra-fanomezana-40370a386/", icon: "Linkedin" },
      { platform: "Facebook", url: "https://www.facebook.com/feno.hasi.na.55017", icon: "Facebook" }
    ]
  },

  chatbot: {
    greeting: "Bonjour, je suis l'assistant de ce portfolio. Je peux vous présenter le travail et les compétences de Herimamy.",
    welcomeButtons: ["Mes projets", "Mes compétences", "Mon parcours", "À propos", "Contact", "Télécharger CV"],
    openingDelay: 3000
  }
};