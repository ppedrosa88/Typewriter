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
              <code className="text-white ">http://localhost:3000/api</code>
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
                  /&#123;token&#125;/blogs;
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
                  /&#123;token&#125;/trash/&#123;id&#125;
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
                  /&#123;token&#125;/trash/&#123;id&#125;
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
                  /&#123;token&#125;/trash/&#123;id&#125;
                </code>
                <button className="bg-slate-50 text-black px-4 py-2 rounded-md font-bold">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 

2. Obtener un blog por ID
Endpoint:

ruby
Copy code
GET /:token/blog/:id
Descripción:
Este endpoint recupera los detalles de un blog específico por su ID.

Parámetros de URL:

token (string): Token de autenticación del usuario.
id (integer): ID del blog.
Respuesta Exitosa:

json
Copy code
{
  "ok": true,
  "status": 200,
  "data": {
    "id": 1,
    "title": "Blog Title 1",
    "content": "Blog content 1",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
}
Errores:

401 Unauthorized: Si el token no es válido o no se proporciona.
404 Not Found: Si el blog con el ID especificado no existe.
500 Internal Server Error: Si ocurre un error en el servidor.
3. Mover un blog a la papelera
Endpoint:

ruby
Copy code
PATCH /:token/trash/:id
Descripción:
Este endpoint mueve un blog a la papelera, marcándolo como eliminado.

Parámetros de URL:

token (string): Token de autenticación del usuario.
id (integer): ID del blog.
Respuesta Exitosa:

json
Copy code
{
  "ok": true,
  "status": 200,
  "msg": "Blog moved to trash"
}
Errores:

401 Unauthorized: Si el token no es válido o no se proporciona.
404 Not Found: Si el blog con el ID especificado no existe.
500 Internal Server Error: Si ocurre un error en el servidor.
4. Eliminar un blog de forma permanente
Endpoint:

ruby
Copy code
DELETE /:token/trash/:id
Descripción:
Este endpoint elimina un blog de forma permanente de la base de datos.

Parámetros de URL:

token (string): Token de autenticación del usuario.
id (integer): ID del blog.
Respuesta Exitosa:

json
Copy code
{
  "ok": true,
  "status": 200,
  "msg": "Blog permanently deleted"
}
Errores:

401 Unauthorized: Si el token no es válido o no se proporciona.
404 Not Found: Si el blog con el ID especificado no existe.
500 Internal Server Error: Si ocurre un error en el servidor.
Ejemplo de Solicitud con cURL
Obtener todos los blogs
sh
Copy code
curl -X GET "http://your-api-url.com/users/your-token/blogs"
Obtener un blog por ID
sh
Copy code
curl -X GET "http://your-api-url.com/users/your-token/blog/1"
Mover un blog a la papelera
sh
Copy code
curl -X PATCH "http://your-api-url.com/users/your-token/trash/1"
Eliminar un blog de forma permanente
sh
Copy code
curl -X DELETE "http://your-api-url.com/users/your-token/trash/1"
Notas
Reemplaza http://your-api-url.com con la URL de tu API real.
Asegúrate de tener el token válido antes de hacer las solicitudes.
Los endpoints requieren que el token sea incluido en la URL para la autenticación.
Esta documentación proporciona una visión completa de cómo interactuar con la API de Typewriter, incluyendo los endpoints disponibles, los parámetros requeridos y las posibles respuestas.

*/}

      <footer className="py-12">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-shrink-0 w-full max-w-full mx-auto mb-6 text-center lg:flex-0 lg:w-8/12">
              <a
                href="#"
                target="_blank"
                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"
              >
                {" "}
                Company{" "}
              </a>
              <a
                href="#"
                target="_blank"
                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"
              >
                {" "}
                About Us{" "}
              </a>
              <a
                href="#"
                target="_blank"
                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"
              >
                {" "}
                Team{" "}
              </a>
              <a
                href="#"
                target="_blank"
                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"
              >
                {" "}
                Products{" "}
              </a>
              <a
                href="#"
                target="_blank"
                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"
              >
                {" "}
                Blog{" "}
              </a>
              <a
                href="#"
                target="_blank"
                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"
              >
                {" "}
                Pricing{" "}
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
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
