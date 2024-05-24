"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { postByAi } from "@/app/lib/content/fetch";

export const NewAiPostModal = ({ token, closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  //   const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { target } = event;
    const url = target[0].value;
    const category = target[1].value;

    try {
      const response = await postByAi(token, { url, category });

      if (response.ok) {
        toast("Post creado con exito", {
          position: "top-right",
          duration: 1500,
          icon: "🎉",
        });
        setTimeout(() => {
          setIsLoading(false);
          window.location.href = window.location.href;
          closeModal(false);
        }, 2000);
      }
    } catch (error) {
      toast("Error al crear el post", {
        position: "top-right",
        duration: 1500,
        icon: "👎",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 after:bg-[#151515] after:content[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-1/2  text-black z-10 p-6 rounded-xl shadow-2xl flex flex-col justify-between">
        <div className="w-full text-4xl h-8 font-bold text-[#D98471] flex justify-center items-center mb-20">
          <h2>Nuevo post AI</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mb-4 w-full h-full flex flex-col justify-center gap-6 font-bold"
        >
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="url" className="text-sm">
                Url *
              </label>
              <input
                type="text"
                id="url"
                className="w-full bg-gray-50 border-2 border-gray-300 rounded-md p-2 outline-none focus:border-[#D98471] placeholder:text-black"
                placeholder="Introduce la url para generar"
              />
            </div>
            <select
              id="frequency"
              className="w-full p-2 bg-gray-50 border-2 border-gray-300 rounded-md outline-none"
            >
              <option value="">Selecciona el tipo de contenido</option>
              <option value="blog">Blog</option>
              <option value="news">News</option>
              <option value="facebook">Facebook</option>
              <option value="linkedIn">LinkedIn</option>
              <option value="twitter">X</option>
            </select>
          </div>
          <div className="flex gap-6 justify-center font-bold pt-12 justify-self-end">
            <button
              className="px-4 py-2 bg-[#70FFD9] rounded-lg hover:scale-95 active:scale-90"
              type="submit"
            >
              {isLoading ? "Generando..." : "Generar"}
            </button>
            <button
              className="px-4 py-2 hover:scale-95 hover:bg-red-500 hover:text-white rounded-lg active:scale-90 "
              onClick={() => closeModal(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};
