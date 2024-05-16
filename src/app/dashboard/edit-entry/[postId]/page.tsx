"use client";
import { HomeIcon } from "@heroicons/react/24/outline";
import Editor from "@/app/ui/Editor";
import { useEffect, useRef, useState } from "react";
import { generateHTML, parseHTML } from "@/app/lib/content/htmlParser";
import {
  getContentById,
  postContent,
  updateContentById,
} from "@/app/lib/content/fetch";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { postId: string } }) {
  const router = useRouter();
  const { postId } = params;
  const [value, setValue] = useState("");

  const accessToken = localStorage.getItem("accessToken");
  const cleanAccessToken = accessToken.replace(/^"|"$/g, "");
  const title = useRef(null);
  const type = useRef(null);

  const loadContent = async () => {
    try {
      const { data } = await getContentById(cleanAccessToken, postId);
      console.log(data);
      if (data) {
        title.current.value = data.title;
        type.current.value = data.category;
        setValue(generateHTML(data.content));
        // setValue(data.content);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const text = parseHTML(value);
    const post = {
      title: event.target[0].value,
      category: event.target[1].value,
      content: text,
      reference: "0",
    };

    try {
      const response = await updateContentById(postId, post);
      if (response) {
        event.target[1].value = "";
        event.target[0].value = "";
        setValue("");
        toast("Post creado con exito", {
          position: "top-right",
          duration: 1500,
          icon: "🎉",
        });

        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      toast("Error al crear el post", {
        position: "top-right",
        duration: 1500,
        icon: "❌",
      });
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-full font-mono flex flex-col bg-[#151515] rounded-md overflow-hidden">
        <nav className="sticky top-0 px-4 py-2 bg-[#313131] w-full flex justify-between items-center">
          <div className="flex gap-2 py-2">
            <HomeIcon className="w-6 h-6" />
            <p className="font-bold text-lg">Editar entrada</p>
          </div>
        </nav>
        <div className="px-2">
          <div className="w-full font-mono flex flex-col rounded-md overflow-hidden">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 items-center"
            >
              <div className="w-full flex justify-evenly">
                <div className="flex flex-col text-black w-9/12 px-2 py-4">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Título
                  </label>
                  <input
                    ref={title}
                    type="text"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-600 placeholder:font-bold"
                    placeholder="Introduce el título"
                    required
                  />
                </div>
                <div className="flex flex-col text-black px-2 py-4 w-3/12">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-50"
                  >
                    Tipo de contenido
                  </label>
                  <select
                    ref={type}
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#D98471] focus:border-blue-500 block w-full p-2.5 "
                    required
                    defaultValue="Elige un tipo"
                  >
                    <option value="">Elige un tipo</option>
                    <option value="blog">Blog</option>
                    <option value="news">News</option>
                    <option value="facebook">Facebook</option>
                    <option value="linkedIn">LinkedIn</option>
                    <option value="twitter">X</option>
                  </select>
                </div>
              </div>
              <div className="w-full h-full px-2 pb-4">
                <Editor value={value} setValue={setValue} />
              </div>
              <button
                className="px-4 py-2 bg-[#D98471] rounded-md font-bold hover:scale-105"
                type="submit"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
