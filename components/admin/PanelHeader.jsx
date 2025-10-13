"use client";
import React, { useState, useEffect } from "react";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import PanelBreadCrumb from "@/components/admin/PanelBreadCrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

function PanelHeader() {
  const { isMobile } = useSidebar;
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/user/getMe",
    }).then((res) => {
      setUser(res.data);
    });
  }, []);

  const logoutHandle = () => {
    axios({
      method: "POST",
      url: "/api/auth/logout",
    }).then((res) => {
      if (res.data.status == "ok") {
        router.push("/login");
      }
    });
  };

  return (
    <header className="bg-sidebar h-12 flex items-center justify-between px-5 sticky top-0 z-50 col-start-2">
      <div className="flex items-center">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mx-2 h-4" />
        <PanelBreadCrumb />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar className="cursor-pointer">
            {user?.avatar_url && (
              <AvatarImage src="https://github.com/shadcn.png" />
            )}
            <AvatarFallback>
              {user?.username.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          side={isMobile ? "bottom" : "right"}
          align="end"
          sideOffset={4}
        >
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-lg">
                {user?.avatar_url && (
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt={user?.username}
                  />
                )}
                <AvatarFallback>
                  {user?.username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user?.username}</span>
                <span className="text-muted-foreground truncate text-xs">
                  {user?.role}
                </span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="[&_*]:cursor-pointer">
            <DropdownMenuItem>Account</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Notifications</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={logoutHandle}>
            <LogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default PanelHeader;
