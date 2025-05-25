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
  // {
  //   title: "AI XO Game",
  //   description:
  //     "Simple XO game, where you can play against the computer (Simple AI) or your friend locally",
  //   images: ["/images/xo-1.png", "/images/xo-2.png", "/images/xo-3.png"],
  //   link: "https://ahmedmohamed05.github.io/xo/",
  //   repo: "https://github.com/ahmedmohamed05/xo",
  //   technologies: [
  //     {
  //       name: "HTML",
  //       icon: "/icons/html.svg",
  //     },
  //     {
  //       name: "CSS",
  //       icon: "/icons/css.svg",
  //     },
  //     {
  //       name: "Javascript",
  //       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  //     },
  //   ],
  // },
  {
    title: "Watches E-Commerce",
    description: "Watches store",
    images: [
      "/images/watches-1.png",
      "/images/watches-2.png",
      "/images/watches-3.png",
      "/images/watches-4.png",
    ],
    link: "https://ahmedmohamed05.github.io/e-commerce/",
    repo: "https://github.com/ahmedmohamed05/e-commerce",
    technologies: [
      {
        name: "React",
        icon: "/icons/react.svg",
      },
      {
        name: "Ts",
        icon: "/icons/ts.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/icons/tailwind.svg",
      },
    ],
  },

  {
    title: "Sudoku",
    description: "Sudoku puzzle with 4 different difficulty levels",
    images: [
      "/images/sudoku-1.png",
      "/images/sudoku-2.png",
      "/images/sudoku-3.png",
      "/images/sudoku-4.png",
    ],
    link: "https://ahmedmohamed05.github.io/sudoku/",
    repo: "https://github.com/ahmedmohamed05/sudoku",
    technologies: [
      {
        name: "React",
        icon: "/icons/react.svg",
      },
      {
        name: "Ts",
        icon: "/icons/ts.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/icons/tailwind.svg",
      },
    ],
  },

  {
    title: "True Footballer",
    description:
      "A Football quiz desktop app with simple data-base for the accounts and scores",
    images: [
      "/images/true-footballer-1.png",
      "/images/true-footballer-2.png",
      "/images/true-footballer-3.png",
      "/images/true-footballer-4.png",
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

  // {
  //   title: "Google Clone",
  //   description: "Google homepage clone with html css",
  //   images: [
  //     "/images/true-footballer-1.png",
  //     "/images/true-footballer-2.png",
  //     "/images/true-footballer-3.png",
  //     "/images/true-footballer-4.png",
  //   ],
  //   repo: "https://github.com/ahmedmohamed05/clone-google ",
  //   technologies: [
  //     {
  //       name: "C++",
  //       icon: "/icons/cpp.svg",
  //     },
  //     { name: ".NET", icon: "/icons/dotnet.svg" },
  //   ],
  // },
];
