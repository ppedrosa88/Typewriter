"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { Automate } from "../components/Automate";
import { Schedule } from "../components/Schedule";
import { User } from "../components/User";
import { AI } from "../components/AI";
import { Status } from "../components/Status";
import { ContentType } from "../components/ContentType";

const links = [
  { name: "Mis posts", href: "/dashboard", icon: HomeIcon },
  {
    name: "Automatización",
    href: "/dashboard/automation",
    icon: Automate,
  },
  {
    name: "Programación",
    href: "/dashboard/scheduled",
    icon: Schedule,
  },
  // {
  //   name: "Creado por mi",
  //   href: "/dashboard/created-by-me",
  //   icon: User,
  // },
  // {
  //   name: "Creado por IA",
  //   href: "/dashboard/created-by-ia",
  //   icon: AI,
  // },
  {
    name: "Tipo de contenido",
    href: "/dashboard/content-type",
    icon: ContentType,
  },
  {
    name: "Papelera",
    href: "/dashboard/status",
    icon: Status,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              " w-[240px] sidenav__item text-gray-50 flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-[#151515] hover:text-[#70FFD9] md:flex-none md:justify-start md:p-2 md:px-3",
              {
                active__sidebar: pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
