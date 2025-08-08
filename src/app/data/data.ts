type NavProperties = {
  label: string;
  href: string;
};

const NavLinks: NavProperties[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const data = {
  email: "dev.binhtt@gmail.com",
  socialMedia: {
    github: "https://github.com/BevisDev",
    instagram: "https://www.instagram.com/__tuitenbinh/",
    linkedin: "https://www.linkedin.com/in/tuitenbinh/",
  },
  navLinks: NavLinks,
};
