"use client";
import { postAutomation } from "@/app/lib/automation/fetch";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { createApiKey } from "@/app/lib/apiKey/fetch";

export const CreateApiKeyModal = ({ token, closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apikey, setApiKey] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { target } = event;
    const name = target[0].value;

    try {
      const response = await createApiKey(token, { name });
      if (response) {
        toast("API Key creado satisfactoriamente", {
          position: "top-right",
          duration: 1500,
          icon: "🎉",
        });
        setIsLoading(false);
        const { data } = response;
        setApiKey(data.apiKey);
      }
    } catch (error) {
      toast("Error creating automation", {
        position: "top-right",
        duration: 1500,
        icon: "❌",
      });
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleCopyApiKey = () => {
    // Obtener el texto del párrafo
    const apiKeyField = document.getElementById("apiKeyField");
    const apiKeyText = apiKeyField.textContent;

    // Crear un rango de selección
    const range = document.createRange();
    range.selectNodeContents(apiKeyField);

    // Seleccionar el rango
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Deseleccionar el texto
    selection.removeAllRanges();

    toast("Copiado al portapapeles", {
      position: "top-right",
      duration: 1500,
      icon: "👏",
    });
  };

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 after:bg-[#151515] after:content[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:opacity-50 flex justify-center items-center">
      <div className="bg-white w-1/2 h-96 text-black z-10 p-6 rounded-xl shadow-2xl flex flex-col justify-between">
        <div className="w-full text-4xl h-8 font-bold text-[#D98471] flex justify-center items-center">
          <h2>Nueva API key</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mb-4 w-full flex flex-col justify-between gap-6 font-bold"
        >
          <div className="w-full">
            <input
              type="text"
              id="name"
              className="w-full bg-gray-50 border-2 border-gray-300 rounded-md p-2 outline-none focus:border-[#D98471] placeholder:text-black"
              placeholder="Nombre de la API key"
            />
          </div>
          <div className="w-full h-8">
            {apikey && (
              <div>
                <div className="w-full flex justify-between items-center p-2 border rounded-md bg-red-100 px-4">
                  <p id="apiKeyField">{apikey}</p>
                  <button type="button" onClick={handleCopyApiKey}>
                    Copiar
                  </button>
                </div>
                <p className="p-2 text-sm">
                  Copia la API key, sólo se generará una vez.
                </p>
              </div>
            )}
          </div>
          <div className="flex gap-6 justify-center font-bold pt-12">
            <button
              className="px-4 py-2 bg-[#70FFD9] rounded-lg hover:scale-95 active:scale-90"
              type="submit"
            >
              {isLoading ? "Generando..." : "Generar API key"}
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
