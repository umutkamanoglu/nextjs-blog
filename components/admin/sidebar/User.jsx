import React from 'react'
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub } from '@/components/ui/sidebar'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'

import {
    List,
    Plus,
    UserCog,
    ChevronRight,
} from "lucide-react";

function User() {

    const items = [
        {
            title: "List All User's",
            url: "#",
            icon: List
        },
        {
            title: "Add New User",
            url: "#",
            icon: Plus
        }
    ];


    return (
        <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild className="cursor-pointer">
                        <SidebarMenuButton >
                            <UserCog className='mr-2' />
                            Users
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    )
}

export default User