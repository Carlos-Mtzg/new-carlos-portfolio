export type Achievement = {
  text: string;
};

export type ExperienceEntry = {
  company: string;
  companyUrl: string;
  role: string;
  type: "Full-time" | "Co-founder" | "Freelance" | "Internship";
  location: string;
  locationType: "On-site" | "Remote" | "Hybrid";
  startDate: string;
  endDate: string | "Present";
  current: boolean;
  description: string;
  achievements: Achievement[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "A3E Ingenieros Especialistas en Energía Eléctrica",
    companyUrl: "https://www.a3eingenieros.com",
    role: "Software Developer",
    type: "Full-time",
    location: "Cuernavaca, México",
    locationType: "On-site",
    startDate: "Apr 2024",
    endDate: "Present",
    current: true,
    description:
      "Full-stack developer on the internal product team of an electrical engineering firm. Responsible for designing, building, and maintaining web platforms for energy monitoring, corporate presence, and internal operations.",
    achievements: [
      {
        text: "Built Monitor I3, a real-time electrical monitoring platform using SSE and ClickHouse, including a drag-and-drop single-line diagram editor with Konva.",
      },
      {
        text: "Developed GECOM, an internal purchasing management system with complete JWT authentication flows, email-based account activation, and role-based access control.",
      },
      {
        text: "Built the A3E corporate website and 3 responsive landing pages (SISMEDIA RT, GEVENSI, Monitor I3) sharing a centralized Spring Boot backend with an admin panel.",
      },
      {
        text: "Implemented stateless JWT authentication with HttpOnly cookie refresh tokens, rate limiting via Bucket4j, and Spring Security across multiple production systems.",
      },
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "TypeScript",
      "TailwindCSS",
      "MySQL",
      "ClickHouse",
      "Docker",
      "Nginx",
    ],
  },
  {
    company: "NGC Software Solutions",
    companyUrl: "https://ngcsoftwaresolutions.com",
    role: "Co-founder & Backend Architect",
    type: "Co-founder",
    location: "Cuernavaca, México",
    locationType: "Remote",
    startDate: "2026",
    endDate: "Present",
    current: true,
    description:
      "Co-founded a custom software development company with two engineers. Responsible for backend architecture, API design, security implementation, and frontend development across client projects.",
    achievements: [
      {
        text: "Developed a clinical records management system (On-Premise) for Clínica San Juan with RBAC for three user roles, dynamic Excel/PDF report generation, and full intranet deployment.",
      },
      {
        text: "Built the NGC corporate website from scratch using Next.js 15, TypeScript, TailwindCSS v4, and an animated WebGL Aurora shader with OGL.",
      },
      {
        text: "Designed backend architecture for client projects including REST API design, JWT authentication flows, and role-based access control.",
      },
      {
        text: "Scaled to 2 active clients across energy, healthcare, and agroindustrial sectors within the first months of operation.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "Docker",
      "TailwindCSS",
    ],
  },
];

export const experienceEs: ExperienceEntry[] = [
  {
    ...experience[0],
    description:
      "Desarrollador full-stack en el equipo de producto interno de una firma de ingeniería eléctrica. Responsable del diseño, construcción y mantenimiento de plataformas web para monitoreo energético, presencia corporativa y operaciones internas.",
    achievements: [
      { text: "Construí Monitor I3, una plataforma de monitoreo eléctrico en tiempo real usando SSE y ClickHouse, incluyendo un editor de diagrama unifilar drag-and-drop con Konva." },
      { text: "Desarrollé GECOM, un sistema interno de gestión de compras con flujos completos de autenticación JWT, activación de cuenta por email y control de acceso basado en roles." },
      { text: "Construí el sitio corporativo de A3E y 3 landing pages responsivas (SISMEDIA RT, GEVENSI, Monitor I3) compartiendo un backend centralizado en Spring Boot con panel de administración." },
      { text: "Implementé autenticación JWT sin estado con refresh tokens en cookies HttpOnly, rate limiting con Bucket4j y Spring Security en múltiples sistemas de producción." },
    ],
  },
  {
    ...experience[1],
    description:
      "Co-fundé una empresa de desarrollo de software personalizado con dos ingenieros. Responsable de la arquitectura backend, diseño de APIs, implementación de seguridad y desarrollo frontend en proyectos de clientes.",
    achievements: [
      { text: "Desarrollé un sistema de gestión de expedientes clínicos (On-Premise) para Clínica San Juan con RBAC para tres roles de usuario, generación dinámica de reportes Excel/PDF y despliegue completo en intranet." },
      { text: "Construí el sitio corporativo de NGC desde cero usando Next.js 15, TypeScript, TailwindCSS v4 y un shader WebGL Aurora animado con OGL." },
      { text: "Diseñé la arquitectura backend para proyectos de clientes incluyendo diseño de APIs REST, flujos de autenticación JWT y control de acceso basado en roles." },
      { text: "Escalamos a 2 clientes activos en los sectores energético, de salud y agroindustrial en los primeros meses de operación." },
    ],
  },
];
