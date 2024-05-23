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
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

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
          <div className="w-full md:w-2/3 md:p-12 pt-12 md:pt-12">
            <div className="w-full">
              <div className="w-full flex  items-center">
                <h1 className="flex text-[48px] md:text-[60px] text-transparent bg-clip-text bg-gradient-to-br to-[#D98471] via-[#D98471] from-slate-300 font-bold w-full leading-[60px] pl-4 mb-12">
                  TypeWriter
                </h1>
              </div>
              <div className="mb-0 md:mb-24 flex flex-col">
                <p className="text-gray-50 md:text-[50px] text-4xl mb-4 md:leading-[52px] text-center font-bold">
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
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-1/3 h-full overflow-hidden hidden md:block">
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
      {/* ¿Qué es TypeWriter? */}
      {/* Libere el potencial de la IA para cautivar a cualquier audiencia */}
      {/* Acelere su impacto de meses a minutos con nuestra plataforma líder en contenido componible */}

      {/* Para quién? */}
      {/* Título: ¿Cuál es tu papel en la creación de contenido? */}
      {/* Dev: Accede a nuestra API y aprovecha todo el potencial del contenido generado por TypeWriter */}
      {/* Content editors: Simplifica tu flujo de trabajo y enfócate en el estilo, mientras automatizamos el resto */}
      {/* Marketing: Impulsa tu presencia en línea con contenido de alta calidad y alto impacto */}

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

      {/* faq's */}
      <div className="pt-20"></div>
      <div className="pt-20"></div>

      <section className="p-2">
        <div className="">
          <h2 className="text-[60px] leading-[60px] font-bold text-center">
            Eleva tu presencia y relevancia en tu mercado
          </h2>
          <h3 className="text-[60px] leading-[60px] font-bold text-center">
            con un click
          </h3>
          <p className="text-center text-lg">
            Descubre cómo potenciar tu presencia en línea y destacar entre la
            competencia con una estrategia inteligente y eficaz para todas tus
            publicaciones.
          </p>
          <div className="w-full flex justify-evenly mt-20">
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

      <div className="pt-20"></div>

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

      {/* ¿Cómo funciona? */}
      {/* Título: Descubre cómo funciona */}
      {/* Introduce tu URL */}
      {/* Escoge tu plataforma */}
      {/* Crea tu contenido */}
      {/* O bien */}
      {/* Automatiza la creación a partir de una URL base */}

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
