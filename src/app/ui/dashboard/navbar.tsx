"use client";
import { LogOut } from "../components/LogOut";
import { Settings } from "../components/Settings";

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="sidenav__item mx-2 p-4 rounded-lg flex justify-between">
        <a className="text-xl font-bold" href="/dashboard">
          TypeWriter
        </a>
        <div className="flex items-center gap-4 pr-2">
          <Settings />
          <LogOut />
        </div>
      </div>
    </div>
  );
}
