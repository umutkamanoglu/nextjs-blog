"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'

function PanelBreadCrumb() {
    const pathname = usePathname()
    const segments = pathname.split("/").filter(Boolean)

    const labelMap = {
        admin: "Dashboard",
        posts: "Blog Post's",
        users: "Users",
        settings: "Settings",
        edit: "Edit",
        new: "New Post",
    }

    if (segments.length === 0) return null

    return (
        <Breadcrumb>
            <BreadcrumbList suppressHydrationWarning>
                {segments.map((segment, index) => {
                    const href = "/" + segments.slice(0, index + 1).join("/")
                    const isLast = index === segments.length - 1
                    const label = labelMap[segment] || decodeURIComponent(segment)

                    return (
                        <BreadcrumbItem key={href}>
                            {!isLast ? (
                                <>
                                    <BreadcrumbLink asChild>
                                        <Link href={href} className="capitalize">
                                            {label}
                                        </Link>
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator />
                                </>
                            ) : (
                                <BreadcrumbPage className="capitalize">
                                    {label}
                                </BreadcrumbPage>
                            )}
                        </BreadcrumbItem>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default PanelBreadCrumb