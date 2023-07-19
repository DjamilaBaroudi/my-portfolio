import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import AvatarC from "@/components/ui/avatar"
import ProjectsCarousel from "@/components/projects"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <section className="container relative -mt-32 grid items-center gap-6 pb-8 md:py-10 ">
      <div className="ml-20 mt-3 flex max-w-4xl flex-col items-start gap-5  p-6 lg:px-8">
        <div>
          <AvatarC />
        </div>
        <div>
          <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
              {siteConfig.content.title}</span>{siteConfig.content.subtitle}</h1>
        </div>
        <div>
          <p className="text-md font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
            {siteConfig.content.description}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.linkedin className="h-5 w-5 fill-current" />
              <span className="sr-only">LinkedIn</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.twitter className="h-5 w-5 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="abdolute inset-0 grid">
        <ProjectsCarousel />
      </div>

    </section>
  )
}
