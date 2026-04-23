export const ui = {
  en: {
    nav: {
      Home: "Home",
      About: "About",
      Experience: "Experience",
      Projects: "Projects",
      Stack: "Stack",
      Education: "Education",
      Contact: "Contact",
    },
    hero: {
      badge: "Full-Stack Developer",
      intro: "Hi, I'm Charlie",
      description:
        "I build complete web systems — from secure REST APIs and robust backends to modern, responsive interfaces. Based in Mexico, open to remote opportunities worldwide.",
      viewWork: "View my work",
      downloadCV: "Download CV",
    },
    about: {
      currentlyAt: "Currently at",
    },
    experience: {
      badge: "Experience",
      heading: "Experience",
      present: "Present",
      types: {
        "Full-time": "Full-time",
        "Co-founder": "Co-founder",
        Freelance: "Freelance",
        Internship: "Internship",
      } as Record<string, string>,
      locationTypes: {
        "On-site": "On-site",
        Remote: "Remote",
        Hybrid: "Hybrid",
      } as Record<string, string>,
    },
    projects: {
      badge: "Projects",
      heading: "What I build",
      repo: "Repo",
      liveSite: "Live Site",
      demo: "Demo",
      statuses: {
        "In Production": "In Production",
        "In Development": "In Development",
        Live: "Live",
        "Open Source": "Open Source",
      } as Record<string, string>,
      sectors: {
        "Energy · Industrial": "Energy · Industrial",
        Healthcare: "Healthcare",
        Agroindustrial: "Agroindustrial",
        "Software Company": "Software Company",
      } as Record<string, string>,
    },
    stack: {
      badge: "Tech Stack",
      heading: "Technologies",
      categories: {
        Backend: "Backend",
        Frontend: "Frontend",
        Databases: "Databases",
        "DevOps & Tools": "DevOps & Tools",
        Tools: "Tools",
        AI: "AI",
      } as Record<string, string>,
    },
    education: {
      badge: "Education",
      heading: "Where I studied",
      statuses: {
        Graduated: "Graduated",
        "In Progress": "In Progress",
      } as Record<string, string>,
    },
    contact: {
      badge: "Contact",
      heading: "Let's work together",
      subtitle:
        "Open to full-time roles, freelance projects, and collaborations. Reach out through any of these channels or drop me a message below.",
      form: {
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        namePlaceholder: "Write your name",
        emailPlaceholder: "Write your email",
        messagePlaceholder: "Tell me about your project...",
        send: "Send message",
        sent: "Message sent",
        errors: {
          nameRequired: "Name is required",
          emailInvalid: "Invalid email",
          emailRequired: "Email is required",
          messageMin: "Message must be at least 10 characters",
          messageRequired: "Message is required",
        },
      },
    },
  },
  es: {
    nav: {
      Home: "Inicio",
      About: "Sobre mí",
      Experience: "Experiencia",
      Projects: "Proyectos",
      Stack: "Stack",
      Education: "Educación",
      Contact: "Contacto",
    },
    hero: {
      badge: "Desarrollador Full-Stack",
      intro: "Hola, soy Charlie",
      description:
        "Construyo sistemas web completos — desde APIs REST seguras y backends robustos hasta interfaces modernas y responsivas. Basado en México, abierto a oportunidades remotas en todo el mundo.",
      viewWork: "Ver mi trabajo",
      downloadCV: "Descargar CV",
    },
    about: {
      currentlyAt: "Actualmente en",
    },
    experience: {
      badge: "Experiencia",
      heading: "Experiencia",
      present: "Presente",
      types: {
        "Full-time": "Tiempo completo",
        "Co-founder": "Co-fundador",
        Freelance: "Freelance",
        Internship: "Prácticas",
      } as Record<string, string>,
      locationTypes: {
        "On-site": "Presencial",
        Remote: "Remoto",
        Hybrid: "Híbrido",
      } as Record<string, string>,
    },
    projects: {
      badge: "Proyectos",
      heading: "Lo que construyo",
      repo: "Repo",
      liveSite: "Sitio en vivo",
      demo: "Demo",
      statuses: {
        "In Production": "En producción",
        "In Development": "En desarrollo",
        Live: "En vivo",
        "Open Source": "Open Source",
      } as Record<string, string>,
      sectors: {
        "Energy · Industrial": "Energía · Industrial",
        Healthcare: "Salud",
        Agroindustrial: "Agroindustrial",
        "Software Company": "Empresa de software",
      } as Record<string, string>,
    },
    stack: {
      badge: "Stack Técnico",
      heading: "Tecnologías",
      categories: {
        Backend: "Backend",
        Frontend: "Frontend",
        Databases: "Bases de datos",
        "DevOps & Tools": "DevOps & Herramientas",
        Tools: "Herramientas",
        AI: "IA",
      } as Record<string, string>,
    },
    education: {
      badge: "Educación",
      heading: "Dónde estudié",
      statuses: {
        Graduated: "Graduado",
        "In Progress": "En progreso",
      } as Record<string, string>,
    },
    contact: {
      badge: "Contacto",
      heading: "Trabajemos juntos",
      subtitle:
        "Abierto a roles de tiempo completo, proyectos freelance y colaboraciones. Contáctame por cualquiera de estos canales o deja un mensaje.",
      form: {
        nameLabel: "Nombre",
        emailLabel: "Correo",
        messageLabel: "Mensaje",
        namePlaceholder: "Escribe tu nombre",
        emailPlaceholder: "Escribe tu correo",
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
        send: "Enviar mensaje",
        sent: "Mensaje enviado",
        errors: {
          nameRequired: "El nombre es requerido",
          emailInvalid: "Correo inválido",
          emailRequired: "El correo es requerido",
          messageMin: "El mensaje debe tener al menos 10 caracteres",
          messageRequired: "El mensaje es requerido",
        },
      },
    },
  },
};

export type UI = typeof ui.en;
