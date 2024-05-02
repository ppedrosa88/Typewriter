"use client";

import Link from "next/link";
import Typewriter from "../../public/typewriter1.png";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative w-full h-screen bg-image-register bg-contain flex justify-center items-center">
        <div className="absolute container w-[calc(100vw-3vw)] h-[calc(100vh-20vh)] p-6 rounded-2xl skew-y-3 bg-[#151515] shadow-2xl m-6"></div>
        <div className="absolute z-1 w-full h-[calc(100vh-64px)] p-6 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-12">
            <div className="w-full md:px-12">
              <h1 className="flex text-[48px] md:text-[60px] text-transparent bg-clip-text bg-gradient-to-br to-[#D98471] via-[#D98471] from-slate-300 font-bold w-[20ch] leading-[60px] mb-12">
                TypeWriter
              </h1>
              <div className="mb-0 md:mb-24">
                <p className="text-gray-50 text-[32px] mb-8 leading-[52px]">
                  Create, manage and{" "}
                  <span className="bg-[#D98471] text-black px-2 font-extrabold rounded-md">
                    post.
                  </span>
                </p>
                <p className="text-gray-50 text-[32px] mb-4 leading-[52px]">
                  All the{" "}
                  <span className="bg-[#D98471] text-black px-2 font-extrabold rounded-md">
                    POWER
                  </span>{" "}
                  of AI
                </p>
              </div>
            </div>
            <div className="flex justify-evenly">
              <Link
                href={"/login"}
                className="inline-block w-2/5 md:w-1/3 h-10 px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-bl from-[#D98471] via-[#D98471] to-slate-300 hover:scale-105 hover:shadow-soft-xs active:opacity-85 disabled:bg-gray-500"
              >
                Sign In
              </Link>
              <Link
                href={"/register"}
                className="w-2/5 md:w-1/3 h-10 inline-block px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-105 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-[#151515] via-[#313131] to-black hover:border-black "
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="relative w-1/2 h-full overflow-hidden hidden md:block">
            <div className="absolute w-full h-full bg-[radial-gradient(circle_closest-side,#D9847135,RGB(31,31,31,0))]"></div>
            <Image
              src={Typewriter}
              alt="Typewriter"
              className="h-full object-cover grayscale invert	drop-shadow-2xl shadow-black"
            />
          </div>
        </div>
      </section>

      <section className="mt-0 transition-all duration-200 ease-soft-in-out ps">
        <div className="min-h-screen md:min-h-96 mb-32">
          <div className="container">
            <div className="flex flex-wrap -mb-48 md:-mb-56 lg:-mb-48 mt-48">
              <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-full xl:w-full">
                <div className="relative z-10 flex justify-evenly gap-6 flex-wrap min-w-0 break-words bg-transparent border-0 shadow-soft-xl rounded-2xl ">
                  <div className="p-6 text-center bg-gray-50 border-b-0 rounded-2xl aspect-square w-3/12 shadow-xl">
                    <h5 className="text-slate-400">Caja</h5>
                  </div>
                  <div className="p-6 text-center bg-gray-50 border-b-0 rounded-2xl aspect-square w-3/12 scale-110 shadow-2xl shadow-gray-500">
                    <h5 className="text-slate-400">Caja</h5>
                  </div>
                  <div className="p-6 text-center bg-gray-50 border-b-0 rounded-2xl aspect-square w-3/12 shadow-xl">
                    <h5 className="text-slate-400">Caja</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-0 flex items-start pb-56 pt-12 m-4 overflow-hidden bg-center bg-cover min-h-96 rounded-xl bg-image-register">
            <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-30"></span>
          </div>
        </div>
      </section>

      <section className="transition-all duration-200 ease-soft-in-out p-6 w-full">
        <div className="primary container relative h-72 rounded-2xl overflow-hidden bg-gradient-to-tl from-orange-400 to-slate-300 shadow-2xl shadow-black">
          <svg
            className="w-4/6 absolute z-10 left-0 top-0"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <polygon
              points="0,0 100,0 0,100"
              className="fill-current text-[#1F1F1F]"
            ></polygon>
          </svg>
          <div className="absolute w-full h-full flex justify-around items-center bg-gradient-to-tl from-orange-400 to-slate-300">
            <div className="w-3/5 z-10 h-full flex justify-center">
              <h5 className="flex items-center h-full text-[60px] text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-slate-300 font-bold w-[20ch] leading-[60px]">
                Let&apos;s make something great together.
              </h5>
            </div>
            <div className="w-2/5 z-10 flex justify-center text-white text-lg">
              <a
                className="w-2/3 px-6 py-3 mt-6 mb-0 font-bold text-center primary uppercase align-middle transition-all bg-transparent border-2 border-black  rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in bg-gradient-to-tl from-black to-slate-950 hover:scale-105 hover:shadow-soft-xs active:opacity-85 disabled:bg-gray-500"
                href="/contact"
              >
                Let&apos;s connect
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12">
        <div className="container">
          <div className="flex flex-wrap ">
            <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
              <p className="mb-0 text-slate-400">
                Copyright © 2024 Soft by Pablo Pedrosa.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
