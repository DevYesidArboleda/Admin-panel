"use client";

import Header from "@/components/Header";
import Sidebar, { SidebarItem } from "@/components/Sidebar";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <Header mainContent={children}>
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
        </Header>        
      </div>
    </div>
  );
}
