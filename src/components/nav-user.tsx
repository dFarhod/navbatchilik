"use client";

import { ChevronDown, LogOut } from "lucide-react";
// import { Link as RouterLink } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavUser({
  user,
  logout,
}: {
  user: {
    name: string;
    role: string;
    avatar: string;
  };
  logout: () => void;
}) {
  return (
    <SidebarMenu className="w-auto">
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  className="object-cover"
                  src={user.avatar}
                  alt={user.name}
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium text-gray-800 dark:text-gray-100">
                  {user.name}
                </span>
                <span className="truncate text-xs text-gray-800 dark:text-gray-100">
                  {user.role}
                </span>
              </div>
              <ChevronDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-[190px] rounded-lg bg-input border-none p-0"
            // side={isMobile ? "bottom" : "right"}
            side={"bottom"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              {/* <RouterLink to={"/profile"}>
                <DropdownMenuItem className="px-4 py-2">
                  <SquareUser />
                  Mening profilim
                </DropdownMenuItem>
              </RouterLink> */}
              <DropdownMenuItem
                className="px-4 py-2 text-[#F64E62]"
                onClick={logout}
              >
                <LogOut color="#F64E62" />
                Tizimdan chiqish
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
