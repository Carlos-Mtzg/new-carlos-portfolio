export type EducationEntry = {
  degree: string;
  degreeShort: string;
  institution: string;
  institutionShort: string;
  institutionUrl: string;
  startDate: string;
  endDate: string;
  status: "Graduated" | "In Progress";
  description: string;
};

export const educationEs: EducationEntry[] = [
  {
    degree: "Ingeniería en Desarrollo y Gestión de Software",
    degreeShort: "Ingeniería en Software",
    institution: "Universidad Tecnológica de Emiliano Zapata",
    institutionShort: "UTEZ",
    institutionUrl: "https://www.utez.edu.mx/",
    startDate: "Sep 2024",
    endDate: "Abr 2026",
    status: "Graduated",
    description:
      "Carrera de ingeniería enfocada en arquitectura de software, gestión de proyectos y prácticas avanzadas de desarrollo.",
  },
  {
    degree: "Técnico Superior Universitario en Desarrollo de Software Multiplataforma",
    degreeShort: "Desarrollo de Software",
    institution: "Universidad Tecnológica de Emiliano Zapata",
    institutionShort: "UTEZ",
    institutionUrl: "https://www.utez.edu.mx/",
    startDate: "Sep 2022",
    endDate: "Ago 2024",
    status: "Graduated",
    description:
      "Carrera técnica que cubre desarrollo web full-stack, bases de datos y fundamentos de ingeniería de software. Graduado con certificación profesional.",
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Engineering in Software Development and Management",
    degreeShort: "Software Engineering",
    institution: "Universidad Tecnológica de Emiliano Zapata",
    institutionShort: "UTEZ",
    institutionUrl: "https://www.utez.edu.mx/",
    startDate: "Sep 2024",
    endDate: "Apr 2026",
    status: "Graduated",
    description:
      "Engineering degree focused on software architecture, project management, and advanced development practices.",
  },
  {
    degree: "Higher Technical Degree in Multiplatform Software Development",
    degreeShort: "Software Development",
    institution: "Universidad Tecnológica de Emiliano Zapata",
    institutionShort: "UTEZ",
    institutionUrl: "https://www.utez.edu.mx/",
    startDate: "Sep 2022",
    endDate: "Aug 2024",
    status: "Graduated",
    description:
      "Technical degree covering full-stack web development, databases, and software engineering fundamentals. Graduated with professional certification.",
  },
];
