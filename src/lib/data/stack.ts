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
      { name: "Keycloak", icon: "keycloak" },
      { name: "Log4j2", icon: "log4j2" },
      { name: "PHP", icon: "php" },
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
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Nginx", icon: "nginx" },
      { name: "Git", icon: "git" },
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
      { name: "Windows", icon: "windows" },
      { name: "macOS", icon: "mac" },
    ],
  },
  {
    category: "AI",
    items: [
      { name: "Claude", icon: "claude" },
      { name: "ChatGPT", icon: "chatgpt" },
      { name: "Gemini", icon: "gemini" },
      { name: "GitHub Copilot", icon: "copilot" },
    ],
  },
];
