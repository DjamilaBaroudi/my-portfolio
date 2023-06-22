export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Portfolio",
  description:
    "My portfolio website showcasing my projects, skills, and experience as a frontend developer.",
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Articles",
      href: "/articles",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Hobbies",
      href: "/hobbies",
  },
  ],
  links: {
    twitter: "https://twitter.com/BaroudiD7",
    github: "https://github.com/DjamilaBaroudi/next-write",
    linkedin:"https://www.linkedin.com/in/djamila-baroudi/",
    docs: "",
  },
}
