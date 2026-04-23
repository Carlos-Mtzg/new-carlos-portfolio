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
