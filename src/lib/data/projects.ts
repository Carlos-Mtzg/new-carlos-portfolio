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
    }
  | {
      type: "gallery";
      images: { src: string; alt: string }[];
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
  /** The project is public, but the data it handles is sensitive, so no real screens or demo video can be shown. */
  protectedData?: boolean;
};

export const projects: Project[] = [
  {
    id: "sgen-a3e",
    order: 1,
    title: "Panel SGEn — Energy Management Platform",
    shortTitle: "Panel SGEn",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3e.com.mx/",
    sector: "Energy · Industrial",
    status: ["In Production"],
    description:
      "Full stack platform for A3E with a public UPAC energy compliance calculator (CONUEE regulation) that captures each calculation as a sales lead, plus an admin panel with module-level RBAC, a tamper-proof AOP audit log, event-driven email notifications and a customizable 12-widget dashboard. Spring Boot 4 (Java 25), React 19. In production on AWS with 7 tagged releases.",
    stack: [
      "Spring Boot 4",
      "Java 25",
      "React 19",
      "TypeScript",
      "MySQL 8.4",
      "MinIO",
      "Spring AOP",
      "JWT",
      "Flyway",
      "Docker",
      "Nginx",
      "AWS EC2",
    ],
    links: {
      site: "https://www.a3e.com.mx/",
    },
    media: {
      type: "video",
      youtubeId: "p6JFWC0Ufts",
      alt: "Panel SGEn energy management platform demo",
    },
    featured: true,
  },
  {
    id: "sia-a3e",
    order: 3,
    title: "SIA — Integral Management System",
    shortTitle: "SIA",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3e.com.mx/",
    sector: "Energy · Industrial",
    status: ["In Production"],
    description:
      "Full stack internal system in production managing projects, clients and complete employee records for an engineering company. Features fine-grained permissions per data section (NONE/READ/WRITE), AOP audit logging, CV and Excel report generation including the IMSS ICSOE regulatory report, document management in MinIO and bidirectional OAuth2 integration with another internal system. Spring Boot 3.5 (Java 21), React 19.",
    stack: [
      "Spring Boot 3.5",
      "Java 21",
      "React 19",
      "TypeScript",
      "MySQL 8",
      "MinIO",
      "Gotenberg",
      "Apache POI",
      "Spring AOP",
      "OAuth2",
      "Flyway",
      "Docker",
      "Jenkins",
    ],
    links: {},
    media: {
      type: "gallery",
      images: [
        {
          src: "/images/projects/sia/01.webp",
          alt: "SIA reports module with ICSOE, contract and employee Excel reports",
        },
        {
          src: "/images/projects/sia/02.webp",
          alt: "SIA command palette for quick navigation between modules",
        },
        {
          src: "/images/projects/sia/03.webp",
          alt: "SIA access profiles with read and write permissions per data section",
        },
        {
          src: "/images/projects/sia/04.webp",
          alt: "SIA operations dashboard with active projects and pending alerts",
        },
      ],
    },
    featured: false,
    protectedData: true,
  },
  {
    id: "siscom-a3e",
    order: 4,
    title: "SISCOM — Procurement Control System",
    shortTitle: "SISCOM",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3e.com.mx/",
    sector: "Energy · Industrial",
    status: ["In Production"],
    description:
      "Internal web system covering the full procurement cycle for an engineering company: supplier catalog with fiscal data, materials, quoting with real-time Banxico USD/MXN exchange rate, requisitions and purchase orders with official PDF and Excel output. Sequential document folios protected by pessimistic locking. Bidirectional OAuth2 integration with the SIA system. Spring Boot 4 (Java 25), React 19.",
    stack: [
      "Spring Boot 4",
      "Java 25",
      "React 19",
      "TypeScript",
      "MySQL 8",
      "MinIO",
      "Apache POI",
      "openhtmltopdf",
      "Thymeleaf",
      "Spring AOP",
      "JWT",
      "Flyway",
      "Docker",
      "Jenkins",
    ],
    links: {},
    media: {
      type: "video",
      youtubeId: "o2uPbGTvi84",
      alt: "SISCOM procurement control system demo",
    },
    featured: false,
  },
  {
    id: "monitor-i3",
    order: 2,
    title: "Monitor I3 — Real-Time Electrical Monitoring Platform",
    shortTitle: "Monitor I3",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3e.com.mx/",
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
      youtubeId: "TdS_9xjhMs4",
      alt: "Monitor I3 — Real-time electrical monitoring platform demo",
    },
    featured: true,
  },
  {
    id: "medonline",
    order: 6,
    title: "MedOnline — Electronic Health Records System",
    shortTitle: "MedOnline",
    company: "NGC Software Solutions",
    companyUrl: "https://ngcsoftwaresolutions.com",
    sector: "Healthcare",
    status: ["In Production"],
    description:
      "Full-stack electronic health record system for Mexican private clinics, built to comply with NOM-004-SSA3-2012 and NOM-024-SSA3-2012. Digitizes the complete care cycle: patient registration, appointments, clinical history, progress notes, interconsultations, referrals, and service billing. Built with a team of 3 engineers.",
    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "React Query",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "MinIO",
      "AWS S3",
      "Docker",
    ],
    links: {},
    media: {
      type: "video",
      youtubeId: "F71Kk-L_1Cg",
      alt: "MedOnline — Electronic health records system demo",
    },
    featured: false,
  },
  {
    id: "clinica-san-juan",
    order: 8,
    title: "Clinical Records Management System — Clínica San Juan",
    shortTitle: "Clínica San Juan",
    company: "NGC Software Solutions",
    companyUrl: "https://ngcsoftwaresolutions.com",
    sector: "Healthcare",
    status: ["Live"],
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
    links: {
      site: "https://clinicasanjuan.net/bienvenida",
    },
    media: {
      type: "video",
      youtubeId: "IW0GanjK8fk",
      alt: "Clinical Records Management System — Clínica San Juan demo",
    },
    featured: true,
  },
  {
    id: "ngc-official-site",
    order: 9,
    title: "NGC Software Solutions — Corporate Website",
    shortTitle: "NGC Official Site",
    company: "NGC Software Solutions",
    companyUrl: "https://ngcsoftwaresolutions.com",
    sector: "Software Company",
    status: ["Live", "Open Source"],
    description:
      "Corporate website for NGC Software Solutions, the software company I co-founded. Designed and built entirely by me, from architecture to deployment.",
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
      youtubeId: "vUncnWcXuVQ",
      alt: "NGC Software Solutions corporate website walkthrough",
    },
    featured: true,
  },
  {
    id: "gecom",
    order: 7,
    title: "GECOM — Internal Purchasing Management System",
    shortTitle: "GECOM",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3e.com.mx/",
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
    order: 5,
    title: "GEVENSI — Energy Management System",
    shortTitle: "GEVENSI",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3e.com.mx/",
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
    order: 10,
    title: "A3E Ingenieros — Corporate Website",
    shortTitle: "A3E Corporate Site",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3e.com.mx/",
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
      site: "https://www.a3e.com.mx/",
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
    order: 12,
    title: "Monitor I3 — Landing Page",
    shortTitle: "Monitor I3 Landing",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3e.com.mx/",
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
    order: 13,
    title: "GEVENSI — Landing Page",
    shortTitle: "GEVENSI Landing",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3e.com.mx/",
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
    order: 14,
    title: "SISMEDIA RT — Landing Page",
    shortTitle: "SISMEDIA RT Landing",
    company: "A3E Ingenieros",
    companyUrl: "https://www.a3e.com.mx/",
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
  {
    id: "medonline-landing",
    order: 11,
    title: "MedOnline — Marketing Landing Page",
    shortTitle: "MedOnline Landing",
    company: "NGC Software Solutions",
    companyUrl: "https://ngcsoftwaresolutions.com",
    sector: "Healthcare",
    status: ["Live"],
    description:
      "Marketing landing page for MedOnline, a clinical electronic health record system built for compliance with Mexico's NOM-004-SSA3-2012. Built end-to-end as a fully static Next.js export deployed on Cloudflare Pages.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS v4",
      "GSAP",
      "shadcn",
      "pnpm",
    ],
    links: {
      site: "https://medonline.com.mx/",
    },
    media: {
      type: "video",
      youtubeId: "6azkgR9_5co",
      alt: "MedOnline landing page walkthrough",
    },
    featured: false,
  },
];

export const projectDescriptionsEs: Record<string, string> = {
  "sgen-a3e":
    "Plataforma full stack para A3E con calculadora pública de cumplimiento energético UPAC (reglamento CONUEE) que convierte cada cálculo en un prospecto comercial, panel de administración con RBAC por módulo, audit log inmutable con AOP, notificaciones por correo basadas en eventos y dashboard personalizable de 12 widgets. Spring Boot 4 (Java 25), React 19. En producción en AWS con 7 versiones etiquetadas.",
  "sia-a3e":
    "Sistema interno full stack en producción para gestionar proyectos, clientes y expedientes completos de empleados. Incluye permisos de grano fino por sección (NONE/READ/WRITE), bitácora de auditoría con AOP, generación de CV y reportes Excel (incluyendo ICSOE del IMSS), gestión documental en MinIO e integración OAuth2 bidireccional con otro sistema interno. Spring Boot 3.5 (Java 21), React 19.",
  "siscom-a3e":
    "Sistema web interno que cubre el ciclo completo de compras: catálogo de proveedores con datos fiscales, materiales, cotizador con tipo de cambio USD/MXN en tiempo real (API Banxico), requisiciones y órdenes de compra con documentos PDF y Excel oficiales. Folios consecutivos protegidos por bloqueo pesimista. Integración OAuth2 bidireccional con el sistema SIA. Spring Boot 4 (Java 25), React 19.",
  "monitor-i3":
    "Plataforma completa para monitorear parámetros de la red eléctrica y verificar el cumplimiento del Código de Red V2.0 de México. Los operadores pueden visualizar su infraestructura en tiempo real, recibir alertas automáticas antes de que los problemas se conviertan en fallas, y construir diagramas unifilares interactivos de su red.",
  "clinica-san-juan":
    "Sistema On-Premise que reemplaza procesos en papel con una plataforma digital centralizada para una clínica en Morelos, México. Cubre registro de pacientes, expedientes médicos, programación de citas y generación de reportes.",
  "ngc-official-site":
    "Sitio corporativo de NGC Software Solutions, la empresa de software que co-fundé. Diseñado y construido íntegramente por mí, desde la arquitectura hasta el despliegue.",
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
  medonline:
    "Sistema de expediente clínico electrónico full-stack para clínicas privadas en México, diseñado para cumplir con la NOM-004-SSA3-2012 y la NOM-024-SSA3-2012. Digitaliza el ciclo completo de atención: registro de pacientes, citas, historia clínica, notas de evolución, interconsultas, referencias y facturación de servicios. Desarrollado en equipo de 3 ingenieros.",
  "medonline-landing":
    "Landing page de marketing para MedOnline, un sistema de expediente clínico electrónico conforme a la NOM-004-SSA3-2012. Desarrollada de principio a fin como exportación estática de Next.js, desplegada en Cloudflare Pages.",
};

// Helpers
export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = [...projects].sort((a, b) => a.order - b.order);

export function getYouTubeEmbedUrl(id: string): string {
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&vq=hd720&playlist=${id}`;
}
