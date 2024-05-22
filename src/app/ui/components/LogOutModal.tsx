import { deleteSchedule } from "@/app/lib/schedule/fetch";
import toast, { Toaster } from "react-hot-toast";

export const LogOutModal = () => {
  return (
    <div className="z-20 absolute top-0 bottom-0 right-0 left-0 after:bg-[#151515] after:content[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:opacity-50 flex justify-center items-center">
      <div className="bg-white  text-black z-10 p-6 rounded-xl shadow-2xl">
        <div className="w-full flex justify-center items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-red-500 icon icon-tabler icons-tabler-outline icon-tabler-mood-heart"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M21 12a9 9 0 1 0 -8.012 8.946" />
            <path d="M9 10h.01" />
            <path d="M15 10h.01" />
            <path d="M9.5 15a3.59 3.59 0 0 0 2.774 .99" />
            <path d="M18.994 21.5l2.518 -2.58a1.74 1.74 0 0 0 .004 -2.413a1.627 1.627 0 0 0 -2.346 -.005l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 -.004a1.74 1.74 0 0 0 -.004 2.412l2.51 2.59z" />
          </svg>
        </div>
        <p className="mb-4 text-2xl font-bold text-center">
          Estas saliendo TypeWriter
        </p>
        <p className="text-2xl font-bold text-center mb-6">
          Vuelve cuando quieras
        </p>
      </div>
      <Toaster />
    </div>
  );
};
