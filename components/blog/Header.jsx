"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
    const { setTheme } = useTheme();
    return (
        <header
            className='bg-sidebar h-20 flex items-center justify-between px-[10%] sticky top-0 z-50'
        >
            <h2 className="font-semibold text-lg">Blog Title</h2>

            <NavigationMenu>
                <NavigationMenuList className="gap-5">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon" className="cursor-pointer">
                                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}

export default Header