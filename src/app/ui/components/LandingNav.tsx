import Link from "next/link";
import React from "react";

export default function LandingNav() {
  return (
    <div className="sidenav__item hidden h-12 w-full grow md:block font-thin ">
      <div className="w-full h-full flex justify-between items-center gap-6 px-4">
        <Link className="font-bold text-lg" href="/">
          TypeWriter.
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/api-docs">Api Docs</Link>
          <Link className="text-[#D98471]" href="/login">
            SignIn
          </Link>
          <Link className="text-[#70FFD9] font-semibold" href="/register">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
}
