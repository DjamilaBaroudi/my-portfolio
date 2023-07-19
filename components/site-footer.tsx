"use client"

import Link from "next/link"
import { Typography } from "@material-tailwind/react";
import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

interface MainNavProps {
    items?: NavItem[]
}
export function SiteFooter({ items }: MainNavProps) {
    return (
        <footer className="border-blue-gray-50 container flex max-w-[76rem] flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t p-6 text-center md:justify-between lg:px-8">
            <Typography color="blue-gray" className="font-normal">
                &copy; 2023 Djamila BAROUDI
            </Typography>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 lg:px-8">
                {items?.map((item, idx) =>
                    item.href && (
                        <Link
                            key={idx}
                            href={item.href}
                            className={cn(
                                "flex items-start text-sm font-medium text-muted-foreground",
                                item.disabled && "cursor-not-allowed opacity-80"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
        </div>
        </footer >
    )
}
