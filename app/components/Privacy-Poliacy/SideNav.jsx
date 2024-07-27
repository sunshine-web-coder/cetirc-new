"use client";

import Link from "next/link";
import React from "react";
import { sideLinks } from "./sideLink";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex scrollbar-hide self-stretch flex-row md:flex-col overflow-x-auto md:overflow-x-visible w-full h-full">
      {sideLinks.map((link, index) => (
        <Link
          href={link.url}
          key={index}
          className={`p-2.5 w-full whitespace-nowrap md:whitespace-normal text-sm border-b-[3px] md:border-b-0 md:border-l-[3px] 
            ${pathname === link.url
              ? "text-[#2F2825] font-bold border-[#2F2825]"
              : "text-[#222] border-[#f2f2f2]"
            }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
