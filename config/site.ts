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
  content: {
    title: "Frontend Developer",
    subtitle: ", PhD, and amateur artist.",
    description: "Passionate frontend developer with a keen eye for creating immersive web experiences. Skilled in JavaScript, React, and Next.js, I strive to build intuitive and visually appealing user interfaces. With a strong background in web development and a commitment to continuous learning, I&apos;m dedicated to crafting innovative solutions that make a meaningful impact. Let&apos;s collaborate and bring your ideas to life!"
  }
}
