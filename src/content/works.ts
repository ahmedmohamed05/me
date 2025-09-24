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
    title: "Watches E-Commerce",
    description: "Watches store",
    images: [
      "/images/watches-1.png",
      "/images/watches-2.png",
      "/images/watches-3.png",
      "/images/watches-4.png",
    ],
    link: "https://watch-haven.netlify.app/",
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
    title: "Chess Game",
    description: "Simple Chess Game Build Pure React + Ts",
    images: [
      "/images/chess-1.png",
      "/images/chess-2.png",
      "/images/chess-3.png",
    ],
    link: "https://chess-j.netlify.app/",
    repo: "https://github.com/ahmedmohamed05/chess",
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
    link: "https://jsudoku.netlify.app/",
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
];
