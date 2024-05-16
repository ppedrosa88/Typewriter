"use client";
import { ContentType } from "@/app/ui/components/ContentType";
import { Edit } from "@/app/ui/components/Edit";
import { Remove } from "@/app/ui/components/Remove";
import { useEffect, useState } from "react";
import { RemoveModal } from "@/app/ui/dashboard/RemoveModal";
import TypeBar from "@/app/ui/content-type/TypeBar";
import { deleteContentById, getAllContent } from "@/app/lib/content/fetch";
import { format } from "date-fns";
import clsx from "clsx";

export default function Page() {
  const [contentType, setContentType] = useState("blog");

  const handleContentType = (page) => {
    setContentType(page);
  };

  const [remove, setRemove] = useState("");
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState([]);
  const loadContent = async (type) => {
    console.log(contentType);
    const { data } = await getAllContent();
    data.rows = data.rows.filter(
      (item) => item.status !== "deleted" && item.category === type
    );
    setContent(data.rows);
  };

  useEffect(() => {
    loadContent(contentType);
  }, [contentType]);

  const handleEdit = (id: string) => {
    console.log(id);
  };
  const handleRemove = (id: string) => {
    setRemove(id);
  };
  const handleDelete = async (id: string) => {
    await deleteContentById(id);
    content.map((item) => {
      if (item.id === id) {
        item.status = "deleted";
      }
    });
    setRemove("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-full font-mono flex flex-col bg-[#151515] rounded-md overflow-hidden">
        <nav className="sticky top-0 px-4 py-2 bg-[#313131] w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <ContentType />
            <p className="font-bold text-lg">Content type</p>
          </div>
          <button className="px-4 py-2 bg-[#D98471] rounded-md font-bold hover:scale-105">
            Add entry
          </button>
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
                <p>Name</p>
              </div>
              <div className="flex justify-between items-center w-4/6">
                <div className="w-2/12">
                  <p>Content Type</p>
                </div>
                <div className="w-2/12">
                  <p>Activity</p>
                </div>
                <div className="w-2/12">
                  <p>Created</p>
                </div>
                <div className="w-2/12">
                  <p>Status</p>
                </div>
                <div className="w-1/12"></div>
              </div>
            </div>
            {content &&
              content.map((con) => {
                return (
                  <div
                    key={con.id}
                    className="relative w-full flex justify-evenly p-2 border-b items-center border-gray-200"
                  >
                    <div className="w-2/6 pr-2">
                      <p>{con.title}</p>
                    </div>
                    <div className="w-4/6 flex justify-between items-center">
                      <div className="w-2/12">
                        <p className="capitalize">{con.category}</p>
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
                          {con.status}
                        </span>
                      </div>
                      <div className="w-1/12 flex gap-6">
                        <Edit handleEdit={handleEdit} id={con.id} />
                        <Remove handleRemove={handleRemove} id={con.id} />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {remove !== "" ? (
        <RemoveModal
          handleDelete={handleDelete}
          id={remove}
          closeModal={setRemove}
        />
      ) : null}
    </div>
  );
}
