"use client";

import Link from "next/link";
import Typewriter from "../../public/typewriter1.png";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative">
      <Link
        href={"/login"}
        className="absolute z-10 top-0 right-4 flex justify-center items-center w-[200px] h-10 px-6 py-3 mt-6 mb-2 font-bold text-center text-black uppercase align-middle transition-all border-2 rounded-lg cursor-pointer shadow-soft-md  leading-pro text-lg ease-soft-in tracking-tight-soft bg-[#70FFD9] border-black hover:scale-105 hover:shadow-soft-xs active:opacity-85 disabled:bg-gray-500"
      >
        Sign In
      </Link>
      <section className="relative w-full h-screen bg-image-register bg-contain flex justify-center items-center">
        <div className="absolute w-[calc(100vw-3vw)] h-[calc(100vh-20vh)] p-6 rounded-2xl skew-y-3 bg-[#151515] shadow-2xl m-6"></div>
        <div className="absolute z-1 w-full h-[calc(100vh-64px)] p-6 flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 p-12">
            <div className="w-full md:px-12">
              <div className="w-full flex justify-center items-center">
                <h1 className="flex text-[48px] md:text-[60px] text-transparent bg-clip-text bg-gradient-to-br to-[#D98471] via-[#D98471] from-slate-300 font-bold w-full leading-[60px] mb-12">
                  TypeWriter
                </h1>
              </div>
              <div className="mb-0 md:mb-24">
                <p className="text-gray-50 text-[50px] mb-4 leading-[52px] text-center font-bold">
                  Libere el potencial de la{" "}
                  <span className="text-[#70FFD9]">IA</span> para cautivar a
                  cualquier audiencia
                </p>
                <p className="text-gray-50 text-lg mb-4 leading-[30px] text-center">
                  <span className="text-[#70FFD9] font-bold">
                    Acelere su impacto
                  </span>{" "}
                  de meses a minutos con nuestra plataforma líder en contenido
                  componible
                </p>
                {/* <p className="text-gray-50 text-[32px] mb-8 leading-[52px]">
                  <span className="text-4xl  text-transparent bg-clip-text bg-gradient-to-br to-[#D98471] via-[#D98471] from-slate-300 font-bold">
                    CREATE
                  </span>
                  , manage and{" "}
                  <span className="bg-[#D98471] text-black px-2 font-extrabold rounded-md">
                    POST.
                  </span>
                </p> */}
                {/* <p className="text-gray-50 text-[32px] mb-4 leading-[52px]">
                  All the{" "}
                  <span className="bg-[#D98471] text-black px-2 font-extrabold rounded-md">
                    POWER
                  </span>{" "}
                  of{" "}
                  <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br to-[#D98471] via-[#D98471] from-slate-300">
                    AI
                  </span>
                </p> */}
              </div>
            </div>
            <div className="flex justify-evenly">
              {/* <Link
                href={"/login"}
                className="inline-block w-2/5 md:w-1/3 h-10 px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-bl from-[#D98471] via-[#D98471] to-slate-300 hover:scale-105 hover:shadow-soft-xs active:opacity-85 disabled:bg-gray-500"
              >
                Sign In
              </Link> */}
              <Link
                href={"/register"}
                className="flex justify-center items-center text-lg w-2/5 md:w-1/3 h-10 px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150   ease-soft-in tracking-tight-soft bg-gradient-to-bl from-[#D98471] via-[#D98471] to-slate-300 hover:scale-105 hover:shadow-soft-xs active:opacity-85 disabled:bg-gray-500"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="relative w-1/3 h-full overflow-hidden hidden md:block">
            <div className="absolute w-full h-full bg-[radial-gradient(circle_closest-side,#D9847135,RGB(31,31,31,0))]"></div>
            <Image
              src={Typewriter}
              alt="Typewriter"
              className="h-full object-cover grayscale invert	drop-shadow-2xl shadow-black"
            />
          </div>
        </div>
      </section>
      {/* ¿Qué es TypeWriter? */}
      {/* Libere el potencial de la IA para cautivar a cualquier audiencia */}
      {/* Acelere su impacto de meses a minutos con nuestra plataforma líder en contenido componible */}

      {/* Para quién? */}
      {/* Título: ¿Cuál es tu papel en la creación de contenido? */}
      {/* Dev: Accede a nuestra API y aprovecha todo el potencial del contenido generado por TypeWriter */}
      {/* Content editors: Simplifica tu flujo de trabajo y enfócate en el estilo, mientras automatizamos el resto */}
      {/* Marketing: Impulsa tu presencia en línea con contenido de alta calidad y alto impacto */}

      <section className="w-full pt-40">
        <h2 className="text-center text-[60px] font-bold text-gray-50 leading-loose">
          ¿Cuál es tu papel en la{" "}
          <mark className="bg-[#D98471] text-[#151515] px-2 font-extrabold rounded-md">
            creación de contenido?
          </mark>
        </h2>
        <div className="w-full flex">
          <p className="text-center text-xl text-gray-300 py-4 px-24">
            Descubre cómo contribuir al contenido de alto impacto con
            TypeWriter. Desde desarrolladores que aprovechan nuestra API hasta
            editores de contenido y profesionales de marketing,{" "}
            <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-br to-[#D98471] via-[#D98471] from-slate-300 font-bold w-full leading-[60px] mb-12">
              ¡todos tienen un papel clave en nuestra plataforma!
            </span>
          </p>
        </div>

        <div className="pt-20"></div>

        <div className="w-full flex justify-evenly items-stretch">
          <div className="w-1/5 text-gray-50 bg-[#313131] px-4 py-6 rounded-xl border border-black shadow-2xl shadow-black flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-[#70FFD9] w-20 h-20 mb-4 self-center"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 8l-4 4l4 4" />
              <path d="M17 8l4 4l-4 4" />
              <path d="M14 4l-4 16" />
            </svg>
            <p className="mb-4 text-2xl font-bold text-center">Devs</p>
            <p className="text-center text-lg mb-2">
              Accede a nuestra API y aprovecha todo el potencial del contenido
              generado por TypeWriter
            </p>
          </div>
          <div className="w-1/5 text-gray-50 bg-[#313131] px-4 py-6 rounded-xl border border-black shadow-2xl shadow-black flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-[#70FFD9] w-20 h-20 mb-4 self-center"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
              <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
              <path d="M9.7 17l4.6 0" />
            </svg>
            <p className="mb-4 text-2xl font-bold text-center">
              Content editors
            </p>
            <p className="text-center text-lg mb-2">
              Simplifica tu flujo de trabajo y enfócate en el estilo, mientras
              automatizamos el resto
            </p>
          </div>
          <div className="w-1/5 text-gray-50 bg-[#313131] px-4 py-6 rounded-xl border border-black shadow-2xl shadow-black flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-[#70FFD9] w-20 h-20 mb-4 self-center"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              <path d="M4 20l14 0" />
            </svg>

            <p className="mb-4 text-2xl font-bold text-center">Marketing</p>
            <p className="text-center text-lg mb-2">
              Impulsa tu presencia en línea con contenido de alta calidad y alto
              impacto
            </p>
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona? */}
      {/* Título: Descubre cómo funciona */}
      {/* Introduce tu URL */}
      {/* Escoge tu plataforma */}
      {/* Crea tu contenido */}
      {/* O bien */}
      {/* Automatiza la creación a partir de una URL base */}

      {/* <section className="w-full p-8 mt-40">
        <h2 className="underline decoration-[#70FFD9] underline-offset-8 text-center text-[60px] font-bold text-gray-50 leading-loose">
          Descubre cómo funciona
        </h2>
        <div className="w-full flex justify-evenly items-center mt-8">
          <div className="w-1/5  flex flex-col justify-center items-center bg-[#313131] px-4 py-6 rounded-xl border border-black shadow-2xl shadow-black">
            <p className="mb-4 text-2xl font-bold text-center">
              Introduce tu URL
            </p>
            <div>
              <div className="w-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="stroke-[#70FFD9] w-20 h-20 mb-4 self-center"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3z" />
                  <path d="M15 3h-6" />
                  <path d="M15 6h-6" />
                </svg>
              </div>
              <p className="mb-4 text-2xl font-bold text-center">
                Escoge tu plataforma
              </p>
              <div className="w-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="stroke-[#70FFD9] w-20 h-20 mb-4 self-center"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3z" />
                  <path d="M15 3h-6" />
                  <path d="M15 6h-6" />
                </svg>
              </div>
              <p className="mb-4 text-2xl font-bold text-center">
                Crea tu contenido
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <p className="text-2xl font-bold text-center bg-[#D98471] px-4 py-2 rounded-xl">
              O bien
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center bg-[#313131] px-4 py-6 rounded-xl border border-black shadow-2xl shadow-black">
            <p className="mb-4 text-2xl font-bold text-center text-nowrap">
              Automatiza la creación
            </p>
            <p className="mb-4 text-2xl font-bold text-center text-nowrap">
              {" "}
              a partir de una URL base
            </p>
          </div>
        </div>
      </section> */}

      <section className="relative w-full flex justify-evenly items-stretch mt-56">
        <div className="absolute top-0 hidden w-2/5 h-full mr-40 overflow-hidden -skew-x-12 right-0 rounded-bl-xl md:block">
          <div className="absolute inset-x-0 top-0 right-20 z-0 h-full -ml-16 bg-[length:80%_auto] bg-center skew-x-12 bg-image-register"></div>
        </div>
        <div className="w-2/5 py-12">
          <h3 className="text-[80px] leading-[80px] font-bold">
            la experiencia de escritura{" "}
            <span className="bg-[#D98471] px-2 leading-[110px] rounded-xl text-[#151515] flex justify-center items-center">
              automatizada.
            </span>
          </h3>
          <p className="text-lg pt-4">
            Revolucionamos la gestión de textos online con inteligencia
            artificial. Automatiza tu trabajo y ahorra tiempo con nuestra
            plataforma. Encuentra el entorno perfecto para crecer y alcanzar
            resultados excepcionales en tiempo récord.
          </p>
        </div>
        <div className="w-1/3 relative z-10 flex flex-wrap justify-center items-center">
          <div className="w-48 m-2 h-48 bg-[#313131] shadow-xl rounded-xl flex flex-col justify-evenly items-center">
            <p className="text-[#70FFD9] text-[50px] font-bold">80%</p>
            <p className="text-xl font-bold  w-[15ch] text-center">
              ahorro de tiempo
            </p>
          </div>
          <div className="w-48 m-2 h-48 bg-[#313131] shadow-xl rounded-xl flex flex-col justify-evenly items-center">
            <p className="text-[#70FFD9] text-[50px] font-bold">15000</p>
            <p className="text-xl font-bold w-[15ch] text-center">
              textos generados al mes
            </p>
          </div>
          <div className="w-48 m-2 h-48 bg-[#313131] shadow-xl rounded-xl flex flex-col justify-evenly items-center">
            <p className="text-[#70FFD9] text-[50px] font-bold">50%</p>
            <p className="text-xl font-bold w-[15ch] text-center">
              incremento de productividad
            </p>
          </div>
          <div className="w-48 m-2 h-48 bg-[#313131] shadow-xl rounded-xl flex flex-col justify-evenly items-center">
            <p className="text-[#70FFD9] text-[50px] font-bold">95%</p>
            <p className="text-xl font-bold w-[15ch] text-center">
              optimización SEO
            </p>
          </div>
        </div>
      </section>

      {/* <section className="mt-0 transition-all duration-200 ease-soft-in-out ps">
        <div className="min-h-screen md:min-h-96 mb-32">
          <div className="container">
            <div className="flex flex-wrap -mb-48 md:-mb-56 lg:-mb-48 mt-48">
              <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-full xl:w-full">
                <div className="relative z-10 flex justify-evenly gap-6 flex-wrap min-w-0 break-words bg-transparent border-0 shadow-soft-xl rounded-2xl ">
                  <div className="p-6 text-center bg-[#151515] border-b-0 rounded-2xl aspect-square w-3/12 shadow-xl shadow-gray-600">
                    <h5 className="text-gray-50">Dev</h5>
                  </div>
                  <div className="p-6 text-center bg-[#151515] border-b-0 rounded-2xl aspect-square w-3/12 scale-110 shadow-2xl shadow-gray-00">
                    <h5 className="text-gray-50">Content editors</h5>
                  </div>
                  <div className="p-6 text-center bg-[#151515] border-b-0 rounded-2xl aspect-square w-3/12 shadow-xl shadow-gray-600">
                    <h5 className="text-gray-50">Marketing</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-0 flex items-start pb-56 pt-12 m-4 overflow-hidden bg-center bg-cover min-h-96 rounded-xl bg-image-register">
            <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-30"></span>
          </div>
        </div>
      </section> */}

      {/* faq's */}

      {/* <section className="transition-all duration-200 ease-soft-in-out p-6 w-full">
        <div className="primary container relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br to-[#D98471] via-[#D98471] from-slate-300 shadow-2xl shadow-black">
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
          <div className="absolute w-full h-full flex justify-around items-center bg-gradient-to-br to-[#D98471] via-[#D98471] from-slate-300">
            <div className="w-3/5 z-10 h-full flex justify-center">
              <h5 className="flex items-center h-full text-[60px] text-transparent bg-clip-text bg-gray-50 font-bold w-[20ch] leading-[60px]">
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
      </section> */}

      {/* ¿Qué puedo hacer? */}
      {/* Título: Explora los beneficios de TypeWriter */}
      {/* Reduce los tiempos de creación */}
      {/* Descripción: Con TypeWriter, crea contenido en minutos, no en horas */}
      {/* Basado en tus temas de interés */}
      {/* Descripción: Nuestra IA puede gestionar contenido sobre cualquier tema */}
      {/* Configura tu contenido para varias plataformas */}
      {/* Descripción: Desde Facebook y Twitter hasta tu propio blog y más */}

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
