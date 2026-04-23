export type StackItem = {
  name: string;
  icon: string;
};

export type StackCategory = {
  category: string;
  items: StackItem[];
};

export const stack: StackCategory[] = [
  {
    category: "Backend",
    items: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "Spring Security", icon: "springsecurity" },
      { name: "REST API", icon: "fastapi" },
      { name: "JWT", icon: "jwt" },
      { name: "Symfony", icon: "symfony" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "Framer Motion", icon: "framermotion" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "ClickHouse", icon: "clickhouse" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Nginx", icon: "nginx" },
      { name: "Git", icon: "git" },
      { name: "GitFlow", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Postman", icon: "postman" },
      { name: "Swagger UI", icon: "swagger" },
      { name: "SonarQube", icon: "sonarqube" },
      { name: "Figma", icon: "figma" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];
