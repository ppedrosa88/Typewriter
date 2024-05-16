"use client";
import { getAllContent, getContentById } from "@/app/lib/content/fetch";
import { getScheduleById, updateSchedule } from "@/app/lib/schedule/fetch";
import { formatDate } from "@/app/lib/utils/time";
import { format, parseISO } from "date-fns";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const accessToken = localStorage.getItem("accessToken");
const cleanAccessToken = accessToken.replace(/^"|"$/g, "");

export const UpdateScheduleModal = ({ id, closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const dateInput = useRef(null);
  const hourInput = useRef(null);

  const loadContent = async () => {
    try {
      let { data } = await getScheduleById(cleanAccessToken, id);
      const { data: response } = await getContentById(
        cleanAccessToken,
        data[0].blogId
      );
      console.log(response);

      setTitle(response.iaTitle ? response.iaTitle : response.title);

      const { scheduledTime: time } = data[0];
      const date = parseISO(time);

      dateInput.current.value = format(date, "yyyy-MM-dd");
      hourInput.current.value = format(date, "HH:mm");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    console.dir(target);
    const date = target[0].value;
    const time = target[1].value;
    const scheduledTime = formatDate({ date, time });
    console.log(scheduledTime);
    try {
      const response = await updateSchedule(id, { scheduledTime });
      if (response) {
        toast("Programación actualizada", {
          icon: "✅",
          position: "top-right",
          duration: 1500,
        });
        setTimeout(() => {
          closeModal("");
        }, 2000);
        // Todo: Resfrescar la pagina despues de closeModal
      }
    } catch (error) {
      toast("Error al actualizar la programación", {
        icon: "❌",
        duration: 1500,
        position: "top-right",
      });
    }
    // Todo: Crear la schedule
    // Todo: debe refrescar la pagina
  };

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 after:bg-[#151515] after:content[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:opacity-50 flex justify-center items-center">
      <div className="bg-white w-1/2 h-[70vh]  text-black z-10 p-6 rounded-xl shadow-2xl flex flex-col justify-between">
        <div className="w-full text-4xl h-8 font-bold text-[#D98471] flex justify-center items-center">
          <h2>Editar programación</h2>
        </div>

        <h3 className="text-center font-semibold">{title}</h3>
        <form
          onSubmit={handleSubmit}
          className="mb-4 w-full flex flex-col justify-between gap-6 font-bold"
        >
          <input
            ref={dateInput}
            type="date"
            id="date"
            className="w-full p-2 bg-gray-50 border-2 border-gray-300 rounded-md outline-none"
          />
          <input
            ref={hourInput}
            type="time"
            id="time"
            className="w-full p-2 bg-gray-50 border-2 border-gray-300 rounded-md outline-none"
          />

          <div className="flex gap-6 justify-center font-bold pt-12">
            <button
              className="px-4 py-2 bg-[#70FFD9] rounded-lg hover:scale-95 active:scale-90"
              type="submit"
            >
              {isLoading ? "Scheduling..." : "Schedule"}
            </button>
            <button
              className="px-4 py-2 hover:scale-95 hover:bg-red-500 hover:text-white rounded-lg active:scale-90 "
              onClick={() => closeModal("")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};
