export type Tech = { icon: string; name: string };

export type Skill = { category: string; items: Tech[] };

export const skills: Skill[] = [
  {
    category: "Languages",
    items: [
      {
        name: "HTML",
        icon: "/icons/html.svg",
      },
      {
        name: "CSS",
        icon: "/icons/css.svg",
      },
      {
        name: "Javascript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      { name: "Typescript", icon: "/icons/ts.svg" },
      { name: "C++", icon: "/icons/cpp.svg" },
      {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      },
      {
        name: "Bash (small scripts)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-plain.svg",
      },
    ],
  },
  {
    category: "Technologies",
    items: [
      {
        name: "React",
        icon: "/icons/react.svg",
      },
      { name: ".NET", icon: "/icons/dotnet.svg" },
      {
        name: "Tailwind CSS",
        icon: "/icons/tailwind.svg",
      },
      { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      {
        name: "Astro",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      },
    ],
  },
];
