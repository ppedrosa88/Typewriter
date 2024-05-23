import { deleteApiKey } from "@/app/lib/apiKey/fetch";
import { deleteSchedule } from "@/app/lib/schedule/fetch";
import toast, { Toaster } from "react-hot-toast";

export const RemoveApiKeyModal = ({ token, closeModal, id }) => {
  const handleDelete = async () => {
    try {
      const response = await deleteApiKey(token, id);
      if (response.ok) {
        toast("API Key eliminado satisfactoriamente", {
          position: "top-right",
          duration: 1500,
          icon: "👏",
        });

        setTimeout(() => {
          window.location.href = window.location.href;
          closeModal("");
        }, 2000);
      }
    } catch (error) {
      console.error(error);

      toast("Error al eliminar la API Key", {
        position: "top-right",
        duration: 1500,
        icon: "👎",
      });

      setTimeout(() => {
        window.location.href = window.location.href;
        closeModal("");
      }, 2000);
    }
  };

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 after:bg-[#151515] after:content[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:opacity-50 flex justify-center items-center">
      <div className="bg-white  text-black z-10 p-6 rounded-xl shadow-2xl">
        <div className="w-full flex justify-center items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-red-500 icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        </div>
        <p className="mb-4 text-2xl font-bold text-center">
          Vas a eliminar este APY key.
        </p>
        <p className="text-2xl font-bold text-center mb-12">¿Estás seguro?</p>
        <div className="flex gap-6 justify-center font-bold ">
          <button
            className="px-4 py-2 hover:scale-95 hover:bg-red-500 hover:text-white rounded-lg active:scale-90"
            onClick={handleDelete}
          >
            Eliminar
          </button>
          <button
            className="px-4 py-2 bg-[#70FFD9] rounded-lg hover:scale-95 active:scale-90"
            onClick={() => closeModal("")}
          >
            Cancelar
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
