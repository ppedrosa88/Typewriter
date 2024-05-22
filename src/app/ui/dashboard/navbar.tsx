"use client";
import { useState } from "react";
import { LogOut } from "../components/LogOut";
import { LogOutModal } from "../components/LogOutModal";
import { Settings } from "../components/Settings";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogOut = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      localStorage.removeItem("accessToken");
      router.push("/login");
    }, 2000);
  };

  const handleUpdateUser = () => {
    router.push("/dashboard/settings");
  };

  return (
    <div className="w-full">
      <div className="sidenav__item mx-2 p-4 rounded-lg flex justify-between">
        <a className="text-xl font-bold" href="/dashboard">
          TypeWriter
        </a>
        <div className="flex items-center gap-4 pr-2">
          <Link
            href="/api-docs"
            target="_blank"
            className="text-white font-semibold hover:scale-105 cursor-pointer"
          >
            Api Docs
          </Link>
          <button onClick={handleUpdateUser}>
            <Settings />
          </button>
          <button onClick={handleLogOut}>
            <LogOut />
          </button>
        </div>
      </div>
      {open && <LogOutModal />}
    </div>
  );
}
