export type ProjectStatus =
  | "In Production"
  | "In Development"
  | "Live"
  | "Open Source";

export type ProjectSector =
  | "Energy · Industrial"
  | "Healthcare"
  | "Agroindustrial"
  | "Software Company";

export type ProjectMedia =
  | {
      type: "video";
      youtubeId: string;
      alt: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
    };

export type Project = {
  id: string;
  order: number;
  title: string;
  shortTitle: string;
  company: string;
  companyUrl: string;
  sector: ProjectSector;
  status: ProjectStatus[];
  description: string;
  stack: string[];
  links: {
    demo?: string;
    repo?: string;
    site?: string;
  };
  media: ProjectMedia;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "monitor-i3",
    order: 1,
    title: "Monitor I3 — Real-Time Electrical Monitoring Platform",
    shortTitle: "Monitor I3",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3eingenieros.com.mx/",
    sector: "Energy · Industrial",
    status: ["In Production"],
    description:
      "Full platform for monitoring electrical grid parameters and verifying compliance with Mexico's Código de Red V2.0. Operators can visualize their infrastructure in real time, receive automatic alerts before issues become failures, and build interactive single-line diagrams of their network.",
    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Konva",
      "Recharts",
      "Spring Boot",
      "Spring Security",
      "ClickHouse",
      "MySQL",
      "Docker",
      "Nginx",
    ],
    links: {},
    media: {
      type: "video",
      youtubeId: "mN6xWBGA2e0",
      alt: "Monitor I3 — Real-time electrical monitoring platform demo",
    },
    featured: true,
  },
  {
    id: "clinica-san-juan",
    order: 4,
    title: "Clinical Records Management System — Clínica San Juan",
    shortTitle: "Clínica San Juan",
    company: "NGC Software Solutions",
    companyUrl: "https://ngcsoftwaresolutions.com",
    sector: "Healthcare",
    status: ["In Development"],
    description:
      "On-premise system that replaces paper-based processes with a centralized digital platform for a clinic in Morelos, México. Covers patient registration, medical records, appointment scheduling, and report generation.",
    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Docker",
    ],
    links: {},
    media: {
      type: "video",
      youtubeId: "7mM-IL4iIsI",
      alt: "Clinical Records Management System — Clínica San Juan demo",
    },
    featured: true,
  },
  {
    id: "ngc-official-site",
    order: 5,
    title: "NGC Software Solutions — Corporate Website",
    shortTitle: "NGC Official Site",
    company: "NGC Software Solutions",
    companyUrl: "https://ngcsoftwaresolutions.com",
    sector: "Software Company",
    status: ["Live", "Open Source"],
    description:
      "Corporate website for NGC Software Solutions — the software company I co-founded. Designed and built entirely by me, from architecture to deployment.",
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS v4",
      "Framer Motion",
      "OGL",
      "React Hook Form",
      "pnpm",
    ],
    links: {
      repo: "https://github.com/ngc-software-solutions/ngc-official-site",
      site: "https://ngcsoftwaresolutions.com",
    },
    media: {
      type: "video",
      youtubeId: "A7cAgoG6G-I",
      alt: "NGC Software Solutions corporate website walkthrough",
    },
    featured: true,
  },
  {
    id: "gecom",
    order: 3,
    title: "GECOM — Internal Purchasing Management System",
    shortTitle: "GECOM",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3eingenieros.com.mx/",
    sector: "Energy · Industrial",
    status: ["In Production"],
    description:
      "Internal web platform for managing purchase requisitions, projects, and users across the organization. Includes complete authentication flows with email-based account activation and password recovery.",
    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Docker",
    ],
    links: {},
    media: {
      type: "video",
      youtubeId: "zGDKg9FvWD8",
      alt: "GECOM internal purchasing management system demo",
    },
    featured: false,
  },
  {
    id: "gevensi",
    order: 2,
    title: "GEVENSI — Energy Management System",
    shortTitle: "GEVENSI",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3eingenieros.com.mx/",
    sector: "Energy · Industrial",
    status: ["In Production"],
    description:
      "Energy data management system that allows users to input consumption data and generate interactive charts and tables. Includes a white-label customization module for resale and obtained the official 'Hecho en México' certification.",
    stack: ["Symfony", "Twig", "Bootstrap", "MySQL", "Apache ECharts"],
    links: {},
    media: {
      type: "video",
      youtubeId: "W31OyTdvhAY",
      alt: "GEVENSI energy management system demo",
    },
    featured: false,
  },
  {
    id: "a3e-corporate-site",
    order: 6,
    title: "A3E Ingenieros — Corporate Website",
    shortTitle: "A3E Corporate Site",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3eingenieros.com.mx/",
    sector: "Energy · Industrial",
    status: ["Live"],
    description:
      "Corporate website for A3E Ingenieros, an electrical engineering firm. Designed and built with a modern React stack, migrating from a legacy frontend to improve performance and user experience.",
    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
    ],
    links: {
      site: "https://www.a3eingenieros.com.mx/",
    },
    media: {
      type: "video",
      youtubeId: "J5WLkJ4yB8g",
      alt: "A3E Ingenieros corporate website walkthrough",
    },
    featured: false,
  },
  {
    id: "landing-monitor-i3",
    order: 7,
    title: "Monitor I3 — Landing Page",
    shortTitle: "Monitor I3 Landing",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3eingenieros.com.mx/",
    sector: "Energy · Industrial",
    status: ["Live"],
    description:
      "Professional landing page for the Monitor I3 electrical monitoring platform. Built with a modular component architecture and validated contact forms connected to a centralized backend.",
    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Swiper.js",
      "React Hook Form",
      "Yup",
      "Axios",
    ],
    links: {
      site: "https://a3e-monitori3.com.mx/",
    },
    media: {
      type: "video",
      youtubeId: "HkGRpXlsX7I",
      alt: "Monitor I3 landing page walkthrough",
    },
    featured: false,
  },
  {
    id: "landing-gevensi",
    order: 8,
    title: "GEVENSI — Landing Page",
    shortTitle: "GEVENSI Landing",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3eingenieros.com.mx/",
    sector: "Energy · Industrial",
    status: ["Live"],
    description:
      "Professional landing page for the GEVENSI energy management system. Showcases product features and captures leads through a validated contact form connected to a centralized backend.",
    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Swiper.js",
      "React Hook Form",
      "Yup",
      "Axios",
    ],
    links: {
      site: "https://a3e-gevensi.com.mx/",
    },
    media: {
      type: "video",
      youtubeId: "hPmufJPyKnU",
      alt: "GEVENSI landing page walkthrough",
    },
    featured: false,
  },
  {
    id: "landing-sismedia-rt",
    order: 9,
    title: "SISMEDIA RT — Landing Page",
    shortTitle: "SISMEDIA RT Landing",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3eingenieros.com.mx/",
    sector: "Energy · Industrial",
    status: ["Live"],
    description:
      "Professional landing page for SISMEDIA RT, a real-time data acquisition system. Built with a modular component architecture and validated contact forms connected to a centralized backend.",
    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Swiper.js",
      "React Hook Form",
      "Yup",
      "Axios",
    ],
    links: {
      site: "https://a3e-sismedia.com.mx/",
    },
    media: {
      type: "video",
      youtubeId: "Eui6RX98GUY",
      alt: "SISMEDIA RT landing page walkthrough",
    },
    featured: false,
  },
];

export const projectDescriptionsEs: Record<string, string> = {
  "monitor-i3":
    "Plataforma completa para monitorear parámetros de la red eléctrica y verificar el cumplimiento del Código de Red V2.0 de México. Los operadores pueden visualizar su infraestructura en tiempo real, recibir alertas automáticas antes de que los problemas se conviertan en fallas, y construir diagramas unifilares interactivos de su red.",
  "clinica-san-juan":
    "Sistema On-Premise que reemplaza procesos en papel con una plataforma digital centralizada para una clínica en Morelos, México. Cubre registro de pacientes, expedientes médicos, programación de citas y generación de reportes.",
  "ngc-official-site":
    "Sitio corporativo de NGC Software Solutions — la empresa de software que co-fundé. Diseñado y construido íntegramente por mí, desde la arquitectura hasta el despliegue.",
  gecom:
    "Plataforma web interna para gestionar requisiciones de compra, proyectos y usuarios en toda la organización. Incluye flujos completos de autenticación con activación de cuenta por email y recuperación de contraseña.",
  gevensi:
    "Sistema de gestión de datos energéticos que permite a los usuarios ingresar datos de consumo y generar gráficas y tablas interactivas. Incluye un módulo de personalización white-label para reventa y obtuvo la certificación oficial 'Hecho en México'.",
  "a3e-corporate-site":
    "Sitio corporativo para A3E Ingenieros, una firma de ingeniería eléctrica. Diseñado y construido con un stack moderno de React, migrando desde un frontend legacy para mejorar el rendimiento y la experiencia de usuario.",
  "landing-monitor-i3":
    "Landing page profesional para la plataforma de monitoreo eléctrico Monitor I3. Construida con una arquitectura de componentes modulares y formularios de contacto validados conectados a un backend centralizado.",
  "landing-gevensi":
    "Landing page profesional para el sistema de gestión energética GEVENSI. Muestra las características del producto y capta leads a través de un formulario de contacto validado conectado a un backend centralizado.",
  "landing-sismedia-rt":
    "Landing page profesional para SISMEDIA RT, un sistema de adquisición de datos en tiempo real. Construida con una arquitectura de componentes modulares y formularios de contacto validados conectados a un backend centralizado.",
};

// Helpers
export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = [...projects].sort((a, b) => a.order - b.order);

export function getYouTubeEmbedUrl(id: string): string {
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&vq=hd720&playlist=${id}`;
}
