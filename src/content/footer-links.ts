import type { ProfileLink } from "./links";

export const socialLinks: ProfileLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/ahmedmohamed05",
    icon: "/icons/github.svg",
  },
  {
    name: "Linked In",
    url: "https://www.linkedin.com/in/ahmed-jassem-6b7505363/",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/amohamed.j?igsh=NjAwNTl2cnBkY2Fq",
    icon: "/icons/instagram.svg",
  },
];

export const codingLinks: ProfileLink[] = [
  {
    name: "CodeWars",
    url: "https://www.codewars.com/users/AhmedMohamed05",
    icon: "/icons/codewars.svg",
  },
  {
    name: "Frontend Mentor",
    url: "https://www.frontendmentor.io/profile/ahmedmohamed05",
    icon: "/icons/frontend-mentor.svg",
  },
  {
    name: "Leet Code",
    url: "https://leetcode.com/u/AhmedMohamed05/",
    icon: "/icons/leetcode.svg",
  },
];

export const others: ProfileLink[] = [
  { name: "My CV", url: "/cv.pdf", icon: "/icons/profile.svg" },
  { name: "Contact", url: "#contact", icon: "/icons/send.svg" },
];
