"use client";

import Link from "next/link";

export default function Page() {
  const example1 = {
    ok: true,
    status: 200,
    data: {
      count: 10,
      rows: [
        {
          id: 1,
          title: "Blog Title 1",
          content: {},
          createdAt: "2023-01-01T00:00:00.000Z",
          updatedAt: "2023-01-01T00:00:00.000Z",
        },
        {
          id: 2,
          title: "Blog Title 2",
          content: {},
          createdAt: "2023-01-02T00:00:00.000Z",
          updatedAt: "2023-01-02T00:00:00.000Z",
        },
      ],
    },
  };

  const example2 = {
    ok: true,
    status: 200,
    data: {
      id: 1,
      title: "Blog Title 1",
      content: {},
      createdAt: "2023-01-01T00:00:00.000Z",
      updatedAt: "2023-01-01T00:00:00.000Z",
    },
  };

  const example3 = {
    ok: true,
    status: 200,
    msg: "Blog moved to trash",
  };

  const example4 = {
    ok: true,
    status: 200,
    msg: "Blog permanently deleted",
  };

  return (
    <main className="mt-0 transition-all duration-200 ease-soft-in-out ps min-h-screen text-lg">
      <section className=" ">
        <div className=" flex items-start pt-6 pb-6 m-4 overflow-hidden bg-center bg-contain min-h-50-screen rounded-xl bg-image-register">
          <div className="w-full flex justify-center bg-[#151515]">
            <div className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
              <h1 className=" text-slate-50 text-3xl mb-6 ">
                <span className="relative z-10 font-semibold text-transparent bg-gradient-to-bl from-[#D98471] via-[#D98471] to-slate-300 bg-clip-text text-[40px] before:content-[''] before:absolute before:-z-10 before:bg-white before:rounded-2xl px-4 before:top-0 before:right-0 before:bottom-0 before:left-0">
                  <Link href={"/"}>TYPEWRITER!</Link>
                </span>
              </h1>
              <h2 className="mb-4">API Documentation for developers</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="text-slate-50 p-12">
        <article className="text-white p-12">
          La API de Typewriter proporciona una interfaz programática para
          interactuar con la plataforma de blogs Typewriter. Esta documentación
          detalla los endpoints disponibles, cómo autenticarse y cómo usar cada
          endpoint para realizar operaciones comunes, como obtener blogs,
          eliminarlos y más.
        </article>

        <h3 className="text-[#D98471] font-bold text-2xl mb-2">
          Obtener el token de acceso:
        </h3>
        <article className="text-white py-6 px-12">
          Para acceder a los endpoints de la API de Typewriter, primero
          necesitas obtener un token de acceso. Este token se encuentra en la
          sección de settings dentro de la aplicación Typewriter.
        </article>

        <div className="my-6">
          <h3 className="text-[#D98471] font-bold text-2xl mb-2">Url base:</h3>
          <div className="py-6 px-12">
            <div className="bg-[#313131] w-full py-4 px-10 rounded-lg flex justify-between items-center">
              <code className="text-white ">http://localhost:3006/api</code>
              <button className="bg-slate-50 text-black px-4 py-2 rounded-md font-bold">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-slate-50 px-12 my-6">
        <div className="my-6">
          <h3 className="text-[#D98471] font-bold text-2xl mb-12">
            Endpoints:
          </h3>
          <div className="w-full">
            <h4 className="text-xl mb-4">1. Obtener todas las publicaciones</h4>
            <div className="py-6 px-12">
              <div className="bg-[#313131] w-full py-4 px-10 rounded-lg flex justify-between items-center">
                <code className="text-white ">
                  <span className="text-[#70FFD9]">GET</span>{" "}
                  /&#123;token&#125;/blogs
                </code>
                <button className="bg-slate-50 text-black px-4 py-2 rounded-md font-bold">
                  Copy
                </button>
              </div>
            </div>
            <div className="py-6 px-12">
              <p className="text-xl mb-4">Descripción:</p>
              <p className="mb-6 pl-4">
                Este endpoint recupera una lista de todos los blogs.
              </p>
              <p className="text-xl mb-4">Parámetros de URL:</p>
              <p className="mb-6 pl-4">
                <span className="text-[#70FFD9]">token &#40;string&#41;: </span>
                Token de autenticación del usuario.
              </p>
              <p className="text-xl mb-4">Respuesta exitosa:</p>
              <div className="py-6 px-12">
                <div className="bg-[#313131] w-full py-4 px-10 rounded-lg flex justify-between items-center">
                  <pre>
                    <code className="text-white ">
                      {JSON.stringify(example1, null, 2)}
                    </code>
                  </pre>
                </div>
              </div>
              <p className="text-xl mb-4">Errores:</p>
              <ul className="mb-6 pl-4">
                <li>
                  <span className="text-[#D98471]">- Error 401: </span>
                  Unauthorized &#40;Token faltante&#41;
                </li>
                <li>
                  <span className="text-[#D98471]">- Error 401: </span>
                  Unauthorized &#40;Token inválido&#41;
                </li>
                <li>
                  <span className="text-[#D98471]">- Error 401: </span>
                  Unauthorized &#40;Usuario no autorizado&#41;
                </li>
                <li>
                  <span className="text-[#D98471]">- Error 500: </span>Internal
                  Server Error
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="text-slate-50 px-12 my-6">
        <div className="mt-6">
          <div className="w-full">
            <h4 className="text-xl mb-4">2. Obtener un blog por ID</h4>
            <div className="py-6 px-12">
              <div className="bg-[#313131] w-full py-4 px-10 rounded-lg flex justify-between items-center">
                <code className="text-white ">
                  <span className="text-[#70FFD9]">GET</span>{" "}
                  /&#123;token&#125;/blog/&#123;id&#125;
                </code>
                <button className="bg-slate-50 text-black px-4 py-2 rounded-md font-bold">
                  Copy
                </button>
              </div>
            </div>
            <div className="py-6 px-12">
              <p className="text-xl mb-4">Descripción:</p>
              <p className="mb-6 pl-4">
                Este endpoint recupera los detalles de un blog específico por su
                ID.
              </p>
              <p className="text-xl mb-4">Parámetros de URL:</p>
              <p className="mb-6 pl-4">
                <span className="text-[#70FFD9]">token &#40;string&#41;: </span>
                Token de autenticación del usuario.
              </p>
              <p className="mb-6 pl-4">
                <span className="text-[#70FFD9]">id &#40;integer&#41;: </span>
                ID del blog.
              </p>
              <p className="text-xl mb-4">Respuesta exitosa:</p>
              <div className="py-6 px-12">
                <div className="bg-[#313131] w-full py-4 px-10 rounded-lg flex justify-between items-center">
                  <pre>
                    <code className="text-white ">
                      {JSON.stringify(example2, null, 2)}
                    </code>
                  </pre>
                </div>
              </div>
              <p className="text-xl mb-4">Errores:</p>
              <ul className="mb-6 pl-4">
                <li>
                  <span className="text-[#D98471]">- Error 400: </span>
                  Bad Request &#40;ID faltante&#41;
                </li>
                <li>
                  <span className="text-[#D98471]">- Error 401: </span>
                  Unauthorized &#40;Token faltante&#41;
                </li>

                <li>
                  <span className="text-[#D98471]">- Error 401: </span>
                  Not Found &#40;Publicación no existente&#41;
                </li>
                <li>
                  <span className="text-[#D98471]">- Error 404: </span>
                  Unauthorized &#40;Usuario no autorizado&#41;
                </li>
                <li>
                  <span className="text-[#D98471]">- Error 500: </span>Internal
                  Server Error
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="text-slate-50 px-12 my-6">
        <div className="mt-6">
          <div className="w-full">
            <h4 className="text-xl mb-4">3. Mover un blog a la papelera</h4>
            <div className="py-6 px-12">
              <div className="bg-[#313131] w-full py-4 px-10 rounded-lg flex justify-between items-center">
                <code className="text-white ">
                  <span className="text-[#70FFD9]">PATCH</span>{" "}
                  /&#123;token&#125;/trash/&#123;id&#125;
                </code>
                <button className="bg-slate-50 text-black px-4 py-2 rounded-md font-bold">
                  Copy
                </button>
              </div>
            </div>
            <div className="py-6 px-12">
              <p className="text-xl mb-4">Descripción:</p>
              <p className="mb-6 pl-4">
                Este endpoint elimina un blog de forma permanente de la base de
                datos.
              </p>
              <p className="text-xl mb-4">Parámetros de URL:</p>
              <p className="mb-6 pl-4">
                <span className="text-[#70FFD9]">token &#40;string&#41;: </span>
                Token de autenticación del usuario.
              </p>
              <p className="mb-6 pl-4">
                <span className="text-[#70FFD9]">id &#40;integer&#41;: </span>
                ID del blog.
              </p>
              <p className="text-xl mb-4">Respuesta exitosa:</p>
              <div className="py-6 px-12">
                <div className="bg-[#313131] w-full py-4 px-10 rounded-lg flex justify-between items-center">
                  <pre>
                    <code className="text-white ">
                      {JSON.stringify(example4, null, 2)}
                    </code>
                  </pre>
                </div>
              </div>
              <p className="text-xl mb-4">Errores:</p>
              <ul className="mb-6 pl-4">
                <li>
                  <span className="text-[#D98471]">- Error 400: </span>
                  Bad Request &#40;ID faltante&#41;
                </li>
                <li>
                  <span className="text-[#D98471]">- Error 401: </span>
                  Unauthorized &#40;Token faltante&#41;
                </li>

                <li>
                  <span className="text-[#D98471]">- Error 401: </span>
                  Unauthorized &#40;Usuario no autorizado&#41;
                </li>
                <li>
                  <span className="text-[#D98471]">- Error 401: </span>
                  Not Found &#40;Publicación no existente&#41;
                </li>
                <li>
                  <span className="text-[#D98471]">- Error 500: </span>Internal
                  Server Error
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="text-slate-50 px-12 my-6">
        <div className="mt-6">
          <div className="w-full">
            <h4 className="text-xl mb-4">
              4. Eliminar un blog de forma permanente
            </h4>
            <div className="py-6 px-12">
              <div className="bg-[#313131] w-full py-4 px-10 rounded-lg flex justify-between items-center">
                <code className="text-white ">
                  <span className="text-[#70FFD9]">DELETE</span>{" "}
                  /&#123;token&#125;/trash/&#123;id&#125;
                </code>
                <button className="bg-slate-50 text-black px-4 py-2 rounded-md font-bold">
                  Copy
                </button>
              </div>
            </div>
            <div className="py-6 px-12">
              <p className="text-xl mb-4">Descripción:</p>
              <p className="mb-6 pl-4">
                Este endpoint mueve un blog a la papelera, marcándolo como
                eliminado.
              </p>
              <p className="text-xl mb-4">Parámetros de URL:</p>
              <p className="mb-6 pl-4">
                <span className="text-[#70FFD9]">token &#40;string&#41;: </span>
                Token de autenticación del usuario.
              </p>
              <p className="mb-6 pl-4">
                <span className="text-[#70FFD9]">id &#40;integer&#41;: </span>
                ID del blog.
              </p>
              <p className="text-xl mb-4">Respuesta exitosa:</p>
              <div className="py-6 px-12">
                <div className="bg-[#313131] w-full py-4 px-10 rounded-lg flex justify-between items-center">
                  <pre>
                    <code className="text-white ">
                      {JSON.stringify(example3, null, 2)}
                    </code>
                  </pre>
                </div>
              </div>
              <p className="text-xl mb-4">Errores:</p>
              <ul className="mb-6 pl-4">
                <li>
                  <span className="text-[#D98471]">- Error 400: </span>
                  Bad Request &#40;ID faltante&#41;
                </li>
                <li>
                  <span className="text-[#D98471]">- Error 401: </span>
                  Unauthorized &#40;Token faltante&#41;
                </li>

                <li>
                  <span className="text-[#D98471]">- Error 401: </span>
                  Unauthorized &#40;Usuario no autorizado&#41;
                </li>
                <li>
                  <span className="text-[#D98471]">- Error 401: </span>
                  Not Found &#40;Publicación no existente&#41;
                </li>
                <li>
                  <span className="text-[#D98471]">- Error 500: </span>Internal
                  Server Error
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="text-slate-50 px-12 my-6">
        <div className="mt-6">
          <div className="w-full">
            <h3 className="text-[#D98471] font-bold text-2xl mb-2">
              Ejemplo de solicitud con cURL
            </h3>
            <p className="text-xl mt-6 mb-2">Obtener todos los blogs:</p>

            <div className="py-6 px-12">
              <div className="bg-[#313131] w-full py-4 px-10 rounded-lg flex justify-between items-center">
                <code className="text-white ">
                  <span className="text-[#70FFD9]">curl</span> -X GET
                  http://localhost:3006/api/&#123;token&#125;/blogs;
                </code>
                <button className="bg-slate-50 text-black px-4 py-2 rounded-md font-bold">
                  Copy
                </button>
              </div>
            </div>
            <p className="text-xl mt-6 mb-2">Obtener una publicación por ID:</p>

            <div className="py-6 px-12">
              <div className="bg-[#313131] w-full py-4 px-10 rounded-lg flex justify-between items-center">
                <code className="text-white ">
                  <span className="text-[#70FFD9]">curl</span> -X GET
                  http://localhost:3006/api/&#123;token&#125;/trash/&#123;id&#125;
                </code>
                <button className="bg-slate-50 text-black px-4 py-2 rounded-md font-bold">
                  Copy
                </button>
              </div>
            </div>
            <p className="text-xl mt-6 mb-2">
              Mover una publicación a la papelera:
            </p>

            <div className="py-6 px-12">
              <div className="bg-[#313131] w-full py-4 px-10 rounded-lg flex justify-between items-center">
                <code className="text-white ">
                  <span className="text-[#70FFD9]">curl</span> -X PATCH
                  http://localhost:3006/api/&#123;token&#125;/trash/&#123;id&#125;
                </code>
                <button className="bg-slate-50 text-black px-4 py-2 rounded-md font-bold">
                  Copy
                </button>
              </div>
            </div>
            <p className="text-xl mt-6 mb-2">
              Eliminar un blog de forma permanente:
            </p>

            <div className="py-6 px-12">
              <div className="bg-[#313131] w-full py-4 px-10 rounded-lg flex justify-between items-center">
                <code className="text-white ">
                  <span className="text-[#70FFD9]">curl</span> -X DELETE
                  http://localhost:3006/api/&#123;token&#125;/trash/&#123;id&#125;
                </code>
                <button className="bg-slate-50 text-black px-4 py-2 rounded-md font-bold">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8">
        <div className="flex justify-center items-center gap-4 mb-2">
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
        <div className="flex flex-wrap ">
          <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
            <p className="mb-0 text-slate-400">
              Copyright © 2024 Soft by Pablo Pedrosa.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
