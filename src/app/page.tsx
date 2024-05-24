"use client";

import Link from "next/link";
import Typewriter from "../../public/typewriter1.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import "animate.css/animate.min.css";

export default function Page() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

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
          <div className="w-full flex justify-center items-center lg:w-2/3 md:p-12 pt-12 md:pt-12">
            <div className="w-full">
              <div className="w-full flex items-center">
                <h1 className="flex text-[48px] md:text-[60px] text-transparent bg-clip-text bg-gradient-to-br to-[#D98471] via-[#D98471] from-slate-300 font-bold w-full leading-[60px] pl-4 mb-12">
                  TypeWriter
                </h1>
              </div>
              <div className="mb-0 md:mb-24 flex flex-col">
                <p className="text-gray-50 lg:text-[50px] text-4xl mb-4 :leading-[52px] text-center font-bold">
                  Libere el potencial de la{" "}
                  <span className="text-[#70FFD9]">IA</span> para cautivar a
                  cualquier audiencia
                </p>
                <p className="text-gray-50 text-lg mb-4 leading-[30px] text-center">
                  <span className="text-[#70FFD9] font-bold">
                    Acelere su impacto
                  </span>{" "}
                  de meses a minutos con nuestra plataforma
                </p>
                <div className="flex justify-evenly">
                  <Link
                    href={"/register"}
                    className="flex justify-center items-center text-lg w-2/5 md:w-1/3 h-10 px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150   ease-soft-in tracking-tight-soft bg-gradient-to-bl from-[#D98471] via-[#D98471] to-slate-300 hover:scale-105 hover:shadow-soft-xs active:opacity-85 disabled:bg-gray-500"
                  >
                    Regístrate
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-1/3 h-full overflow-hidden hidden lg:block">
            <div className="absolute w-full h-full bg-[radial-gradient(circle_closest-side,#D9847135,RGB(31,31,31,0))]"></div>
            <div
              ref={ref1}
              className={`transition-all duration-1000 ${
                inView1 ? "animate__animated animate__rotateIn" : "opacity-0"
              }`}
            >
              <Image
                src={Typewriter}
                alt="Typewriter"
                className="h-full object-cover grayscale invert	drop-shadow-2xl shadow-black"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pt-40 flex flex-col">
        <h2 className="text-center md:text-[60px] text-2xl font-bold text-gray-50 leading-loose">
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

        <div
          ref={ref2}
          className={`transition-all duration-1000 ${
            inView2 ? "animate__animated animate__backInUp" : "opacity-0"
          }`}
        >
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
                Impulsa tu presencia en línea con contenido de alta calidad y
                alto impacto
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full flex justify-evenly items-stretch mt-56 overflow-hidden">
        <div className="absolute top-0 hidden w-1/2 h-full -mr-40 overflow-hidden -skew-x-12 right-0 rounded-bl-xl md:block">
          <div className="absolute inset-x-0 top-0 right-20 z-0 h-full -ml-16 bg-[length:80%_auto] bg-center skew-x-12 bg-image-register"></div>
        </div>
        <div className="w-2/5 py-12">
          <div className="">
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
        </div>
        <div
          ref={ref3}
          className={`w-1/3 relative z-10 flex flex-wrap justify-center items-center transition-all duration-1000 ${
            inView3 ? "animate__animated animate__backInRight" : "opacity-0"
          }`}
        >
          <div className="w-48 m-2 h-48 bg-[#313131] shadow-xl rounded-xl flex flex-col justify-evenly items-center">
            <p className="text-[#70FFD9] text-[50px] font-bold">80%</p>
            <p className="text-xl font-bold  w-[15ch] text-center">
              ahorro de tiempo
            </p>
          </div>
          <div className="w-48 m-2 h-48 bg-[#313131] shadow-xl rounded-xl flex flex-col justify-evenly items-center">
            <p className="text-[#70FFD9] text-[50px] font-bold">15K</p>
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

      <div className="pt-20"></div>
      <div className="pt-20"></div>
      <div className="pt-20"></div>
      {/* faq's */}
      <section className="w-3/5 px-20">
        <h2 className="text-[60px] leading-[60px] font-bold mb-10">
          Utiliza nuestra API para{" "}
          <span className="text-[#70FFD9]">gestionar</span> tu contenido.
        </h2>
        <p className="text-lg mb-20">
          Con nuestra{" "}
          <span className="text-[#D98471] font-bold text-xl">API</span> puedes
          acceder a tu contenido y publicarlo en tu sitio de manera inmediata.
          Disponemos de una documentación sencilla que te ayudará a gestionar tu
          contenido donde quieras y cuando quieras.
        </p>
        <Link
          className="w-fit flex justify-center items-center text-lg  h-10 px-6 py-3 mt-10 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150   ease-soft-in tracking-tight-soft bg-gradient-to-bl from-[#D98471] via-[#D98471] to-slate-300 hover:scale-105 hover:shadow-soft-xs active:opacity-85 disabled:bg-gray-500"
          href={"/api-docs"}
        >
          Accede a la Documentación
        </Link>
      </section>
      <div className="pt-20"></div>
      <div className="pt-20"></div>
      <div className="pt-20"></div>

      <section className="p-2">
        <div className="">
          <h2 className="text-[60px] leading-[60px] font-bold text-center">
            Eleva tu <span className="text-[#70FFD9]">presencia</span> y{" "}
            <span className="underline decoration-[#70FFD9]">relevancia</span>
          </h2>
          <h3 className="text-[60px] leading-[60px] font-bold text-center">
            con un{" "}
            <span className="text-[65px] leading-[70px] text-transparent bg-clip-text bg-gradient-to-br to-[#D98471] via-[#D98471] from-slate-300 font-bold">
              click.
            </span>
          </h3>

          <div
            ref={ref4}
            className={`w-full flex md:flex-row flex-col justify-evenly mt-20 ${
              inView4 ? "animate__animated animate__zoomInDown" : "opacity-0"
            }`}
          >
            <div className="w-1/5  min-h-[450px] rounded-xl hero_card1 invert">
              <div className="p-5 text-black text-shadow">
                <h2 className="text-4xl font-semibold pb-5 w-[12ch]">
                  Optimiza insights
                </h2>
                <p className=" font-semibold text-lg">
                  Benefíciate de la capacidad de optimizar la presencia de tu
                  web.
                </p>
              </div>
            </div>
            <div className="w-1/5  min-h-[450px] rounded-xl hero_card2 invert">
              <div className="p-5 text-black text-shadow">
                <h2 className="text-4xl font-semibold pb-5 w-[12ch]">
                  Ajusta contenido
                </h2>
                <p className=" font-semibold text-lg">
                  Consigue contenido que se adapte a tu firma.
                </p>
              </div>
            </div>
            <div className="w-1/5 min-h-[450px] rounded-xl hero_card4 invert">
              <div className="p-5 text-black text-shadow">
                <h2 className="text-4xl font-semibold  pb-5 w-[12ch]">
                  SEO potenciado
                </h2>
                <p className="font-semibold text-lg">
                  Con TypeWriter, aumenta la visibilidad de tu marca.
                </p>
              </div>
            </div>
            <div className=" w-1/5  min-h-[450px] rounded-xl hero_card3 invert">
              <div className="p-5 text-black text-shadow">
                <h2 className="text-4xl font-semibold  pb-5 w-[12ch]">
                  Aumenta productividad
                </h2>
                <p className="font-semibold text-lg">
                  Ahorra tiempo y aumenta la productividad de tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-40"></div>

      <div className="pt-20"></div>
      <div className="px-20 py-20 flex flex-col justify-between items-center">
        <h2 className="text-[60px] leading-[60px] font-bold">
          Comienza a <span className="text-[#70FFD9]">crear</span>
        </h2>
        <Link
          href={"/register"}
          className="w-fit flex justify-center items-center text-lg  h-10 px-6 py-3 mt-10 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150   ease-soft-in tracking-tight-soft bg-gradient-to-bl from-[#D98471] via-[#D98471] to-slate-300 hover:scale-105 hover:shadow-soft-xs active:opacity-85 disabled:bg-gray-500"
        >
          Regístrate
        </Link>
      </div>

      <div className="pt-40"></div>
      <footer className="py-4 flex justify-between">
        <div className="flex justify-center items-center gap-4 px-6">
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
              <path d="M10 9l5 3l-5 3z" />
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="max-w-full px-3 mx-auto text-center flex-0 ">
            <p className="mb-0 text-slate-400 p-6">
              Copyright © 2024 Soft by Pablo Pedrosa.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
