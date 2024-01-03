import React, { createContext, useContext, useState, ReactNode } from "react";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import Image from "next/image";

interface SidebarContextProps {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps): JSX.Element {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image
            src="/img/LogoStarDash.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-12" : "w-12"
            }`}
            width={20}
            height={20}
            alt="Picture of the author"
          />
          <p
            className={`text-black overflow-hidden transition-all ${
              expanded ? "w-full" : "w-0"
            }`}
          >
            Estrellas
          </p>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <Image
                src="/img/expand.svg"
                className="rotate-180"
                width={20}
                height={20}
                alt="Picture of the author"
              />
            ) : (
              <Image
                src="/img/expand.svg"
                width={20}
                height={20}
                alt="Picture of the author"
              />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">            
              {children}
          </ul>
        </SidebarContext.Provider>

        <div className={`border-t flex p-3 bg-[#C6C7DD] m-4 rounded-md ${expanded ? "h-[46px]" : "h-[46px] w-14"}`}>
          <Image
            src="/img/ClientService.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-10" : "w-full"
            }`}
            width={20}
            height={20}
            alt="Picture of the author"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <span className="text-xs text-white">Servicio Al Cliente</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

export function SidebarItem({
  icon,
  text,
  active,
  alert,
}: SidebarItemProps): JSX.Element {
  const { expanded } = useContext(SidebarContext) || { expanded: true };

  return (
    <div className={`
    ${
      active
        ? "bg-[#42E184] rounded-md "
        : "hover:bg-indigo-50 text-gray-600"
    }
    ${
      expanded ? "w-full" : "max-w-[54px]"
    }
`} >
      <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group justify-center
        
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all  ${
          expanded ? "w-52 ml-3 " : "w-0"
        } ${
          active
            ? "text-white"
            : "text-black"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
    </div>
  );
}
