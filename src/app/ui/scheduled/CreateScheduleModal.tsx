import { getAllContent } from "@/app/lib/content/fetch";
import { getScheduledContent, postScheduled } from "@/app/lib/schedule/fetch";
import { formatDate } from "@/app/lib/utils/time";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const CreateScheduleModal = ({ token, closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState([]);

  const loadContent = async () => {
    try {
      const { data } = await getAllContent(token);
      data.rows = await data.rows.filter((item) => item.status === "draft");
      setContent(data.rows);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadContent();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const blogId = target[0].value;
    const date = target[1].value;
    const time = target[2].value;
    const scheduledTime = formatDate({ date, time });
    try {
      const response = await postScheduled(token, { blogId, scheduledTime });
      if (response) {
        toast("Programación creada", {
          icon: "✅",
          position: "top-right",
          duration: 1500,
        });

        setTimeout(() => {
          setIsLoading(false);
          closeModal(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      toast("Error al crear la programación", {
        icon: "❌",
        position: "top-right",
        duration: 1500,
      });

      setIsLoading(false);
    }
  };

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 after:bg-[#151515] after:content[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:opacity-50 flex justify-center items-center">
      <div className="bg-white w-1/2 h-[75vh]  text-black z-10 p-6 rounded-xl shadow-2xl flex flex-col justify-between">
        <div className="w-full text-4xl h-8 font-bold text-[#D98471] flex justify-center items-center">
          <h2>New Schedule</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mb-4 w-full flex flex-col justify-between gap-6 font-bold"
        >
          <select
            id="contentName"
            className="w-full p-2 bg-gray-50 border-2 border-gray-300 rounded-md outline-none"
          >
            <option value="">Select post</option>
            {content.map((con) => (
              <option value={con.id} key={con.id}>
                {con.title}
              </option>
            ))}
          </select>
          <input
            type="date"
            id="date"
            className="w-full p-2 bg-gray-50 border-2 border-gray-300 rounded-md outline-none"
          />
          <input
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
              onClick={() => closeModal(false)}
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
