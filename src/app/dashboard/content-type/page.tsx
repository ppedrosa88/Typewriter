"use client";
import { ContentType } from "@/app/ui/components/ContentType";

import { useEffect, useState } from "react";
import TypeBar from "@/app/ui/content-type/TypeBar";
import { getAllContent } from "@/app/lib/content/fetch";
import { format } from "date-fns";
import clsx from "clsx";
import { useAccessToken } from "@/app/lib/auth/customHooks/useAccessToken";
import RenderPaginationButtons from "@/app/ui/dashboard/RenderPaginationButtons";
import { useRouter } from "next/navigation";

export default function Page() {
  const [contentType, setContentType] = useState("blog");
  const [remove, setRemove] = useState("");
  const [content, setContent] = useState([]);
  const { token, error } = useAccessToken();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Número de elementos por página
  const totalPages = Math.ceil(content.length / itemsPerPage);
  const router = useRouter();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleContentType = (page) => {
    setContentType(page);
  };

  const loadContent = async (token, type) => {
    try {
      const { data } = await getAllContent(token);
      const filteredData = data.rows.filter(
        (item) =>
          item.status !== "deleted" &&
          item.status !== "inactive" &&
          item.category === type
      );
      setContent(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      loadContent(token, contentType);
    }
  }, [contentType]);

  useEffect(() => {
    if (token) {
      loadContent(token, contentType);
    }
  }, [token]);

  const handleEdit = (id: string) => {
    console.log(id);
  };

  const paginatedContent = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return content.slice(startIndex, endIndex);
  };
  const handleDetails = (id: string) => {
    router.push(`/dashboard/details/${id}`);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-full font-mono flex flex-col justify-between bg-[#151515] rounded-md overflow-hidden">
        <div>
          <nav className="sticky top-0 px-4 py-2 bg-[#313131] w-full flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <ContentType />
              <p className="font-bold text-lg py-2">Tipo de contenido</p>
            </div>
          </nav>
          <div className="w-full">
            <TypeBar
              handleContentType={handleContentType}
              contentType={contentType}
            />
          </div>

          <div className="px-2">
            <div className="w-full font-mono flex flex-col text-white rounded-md overflow-hidden mt-12 bg-[#313131]">
              <div className="w-full flex justify-evenly p-2 border-b border-gray-200">
                <div className="flex-1 w-2/6 pr-2">
                  <p>Título</p>
                </div>
                <div className="flex justify-between items-center w-4/6">
                  <div className="w-2/12">
                    <p>Tipo</p>
                  </div>
                  <div className="w-2/12">
                    <p>Actividad</p>
                  </div>
                  <div className="w-2/12">
                    <p>Creado</p>
                  </div>
                  <div className="w-2/12">
                    <p>Estado</p>
                  </div>
                  {/* <div className="w-1/12"></div> */}
                </div>
              </div>
              {content &&
                paginatedContent().map((con) => {
                  return (
                    <div
                      key={con.id}
                      className="group relative w-full flex justify-evenly p-2 border-b items-center border-gray-200 hover:cursor-pointer"
                      onClick={() => handleDetails(con.id)}
                    >
                      <div className="w-2/6 pr-2 z-10">
                        <p className="truncate pr-4">{con.title}</p>
                      </div>
                      <div className="w-4/6 flex justify-between items-center z-10">
                        <div className="w-2/12">
                          <p className="capitalize ">{con.category}</p>
                        </div>
                        <div className="w-2/12">
                          <p>
                            {con.updatedAt
                              ? format(con.updatedAt, "dd/MM/yyyy")
                              : format(con.createdAt, "dd/MM/yyyy")}
                          </p>
                        </div>
                        <div className="w-2/12">
                          <p>{format(con.createdAt, "dd/MM/yyyy")}</p>
                        </div>
                        <div className="w-2/12">
                          <span
                            className={clsx(
                              "text-center text-[#151515] rounded-md px-2 capitalize",
                              {
                                "bg-[#70FFD9]": con.status === "published",
                                "bg-red-500": con.status === "draft",
                              }
                            )}
                          >
                            {con.status === "published"
                              ? "Publicado"
                              : "Borrador"}
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 bottom-0 left-0 group-hover:bg-[#D98471]"></div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="pb-4">
          <RenderPaginationButtons
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
