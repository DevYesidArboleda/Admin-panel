"use client";

import Sidebar, { SidebarItem } from "@/components/Sidebar";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dasborad"
          active
        />
        
        <SidebarItem
          icon={
            <div className="flex">
              <Image
              className="flex"
                src="/favicon.ico"
                width={20}
                height={20}
                alt="Picture of the author"
              />
            </div>
          }
          text="Dasborad"
        />
      </Sidebar>
      {children}
    </div>
  );
}
