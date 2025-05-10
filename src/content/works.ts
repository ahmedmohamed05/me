import { type Tech } from "./skills";

export interface Work {
  title: string;
  description: string;
  images: string[];
  link?: string;
  repo: string;
  technologies: Tech[];
}

export const works: Work[] = [
  {
    title: "AI XO Game",
    description:
      "Simple XO game, where you can play against the computer (Simple AI) or your friend locally",
    images: [
      "/src/images/xo-1.png",
      "/src/images/xo-2.png",
      "/src/images/xo-3.png",
    ],
    link: "https://ahmedmohamed05.github.io/xo/",
    repo: "https://github.com/ahmedmohamed05/xo",
    technologies: [
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
    ],
  },
  {
    title: "True Footballer",
    description:
      "A Football quiz desktop app with simple data-base for the accounts and scores",
    images: [
      "/src/images/true-footballer-1.png",
      "/src/images/true-footballer-2.png",
      "/src/images/true-footballer-3.png",
      "/src/images/true-footballer-4.png",
    ],
    repo: "https://github.com/ahmedmohamed05/true-footballer",
    technologies: [
      {
        name: "C++",
        icon: "/icons/cpp.svg",
      },
      { name: ".NET", icon: "/icons/dotnet.svg" },
    ],
  },
];
