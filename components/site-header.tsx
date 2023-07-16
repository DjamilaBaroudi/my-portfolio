import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-40">
      <div className="container relative flex h-16 max-w-7xl items-center justify-center space-x-4 sm:justify-center sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="absolute right-28 flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle/>
        </div>
      </div>
    </header>
  )
}
