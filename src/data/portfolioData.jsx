 // src/data/portfolioData.js
// MODIFIEZ CE FICHIER SEUL → TOUT SE MET À JOUR

export const portfolioData = {
  // INFORMATIONS GÉNÉRALES
  personal: {
    name: "Herimamy",
    role: "Développeur Web",
    location: "Antananarivo, Madagascar",
    email: "fenohasinaherimamy@gmail.com",
    phone: "+261 32 87 023 38"
  },

  // SECTION À PROPOS
  about: {
    title: "À propos de moi",
    description: "Actuellement étudiant en L2 Informatique, je suis passionné par le développement web et les nouvelles technologies. Mon objectif est de devenir un développeur web full-stack compétent et de contribuer à des projets innovants.",
    qualities: ["Curiosité", "Autonomie", "Travail d'équipe"],
    image: "/feno.png"
  },

  // SECTION PARCOURS
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

  // SECTION PROJETS
  projects: [
    {
      id: "proj-1",
      title: "Site de restaurant sushi",
      description: "Site web moderne pour un restaurant de sushi avec menu interactif et système de commande en ligne.",
      stack: ["React", "TailwindCSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      deployed: false,
      demoLink: "#",
      sectionId: "projets"
    },
    {
      id: "proj-2",
      title: "Test de dactylographie",
      description: "Application de test de vitesse de frappe avec système WPM, différents niveaux de difficulté et statistiques détaillées.",
      stack: ["JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      deployed: true,
      demoLink: "https://hikeyboardgame.netlify.app/",
      sectionId: "projets"
    },
    {
      id: "proj-3",
      title: "Portfolio Geek'sopap",
      description: "Plateforme de ressources numériques pour la communauté geek avec système de partage et de curation de contenu.",
      stack: ["React", "TypeScript", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      deployed: true,
      demoLink: "https://sopatek-madagascar.vercel.app/",
      sectionId: "projets"
    }
  ],

  // SECTION COMPÉTENCES
  skills: {
    categories: [
      {
        title: "Langages",
        skills: [
          { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
          { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
        ]
      },
      {
        title: "Outils",
        skills: [
          { name: "Git/GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
          { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
          { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
        ]
      }
    ]
  },

  // SECTION CONTACT
  contact: {
    title: "Contactez-moi",
    emailText: "Cliquez sur le bouton ci-dessous pour m'envoyer un email directement. Votre client de messagerie s'ouvrira avec mon adresse pré-remplie.",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/Fenohasina08", icon: "Github" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/herimamy-fenohasina-ra-fanomezana-40370a386/", icon: "Linkedin" },
      { platform: "Facebook", url: "https://www.facebook.com/feno.hasi.na.55017", icon: "Facebook" }
    ]
  },

  // CONFIGURATION CHATBOT
  chatbot: {
    greeting: "Bonjour, je suis l'assistant de ce portfolio. Je peux vous présenter le travail et les compétences de Herimamy.",
    welcomeButtons: ["Mes projets", "Mes compétences", "Mon parcours", "À propos", "Contact"],
    openingDelay: 3000 // 3 secondes
  }
};