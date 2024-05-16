"use client";
import { deleteContentById, getAllContent } from "@/app/lib/content/fetch";
import { ChangeStatus } from "@/app/ui/components/ChangeStatus";
import { Edit } from "@/app/ui/components/Edit";
import { Remove } from "@/app/ui/components/Remove";
import { User } from "@/app/ui/components/User";
import { RemoveModal } from "@/app/ui/dashboard/RemoveModal";
import clsx from "clsx";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [remove, setRemove] = useState("");
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState([]);
  const loadContent = async () => {
    const { data } = await getAllContent();
    data.rows = data.rows.filter(
      (item) => item.status !== "deleted" && item.createdByIa == "0"
    );
    setContent(data.rows);
  };

  useEffect(() => {
    loadContent();
  }, []);

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
          <div className="flex gap-2">
            <User />
            <p className="font-bold text-lg">Creado por mi</p>
          </div>
          <button className="px-4 py-2 bg-[#D98471] rounded-md font-bold hover:scale-105">
            Add entry
          </button>
        </nav>
        <div className="mx-2 mt-2 px-1 py-2 rounded-lg bg-gray-50 text-black">
          <form action="" className="flex gap-2 items-center ">
            <p className=" py-2 w-[200px] text-center bg-[#D98471] rounded-md text-white font-extrabold text-nowrap">
              Content type
            </p>
            <select className="outline-none">
              <option value="">Any</option>
              <option value="blog">Blog</option>
              <option value="facebook">Facebook</option>
              <option value="linkedin">LindekIn</option>
              <option value="news">News</option>
              <option value="twitter">Twitter</option>
            </select>
            <input
              type="text"
              className="p-2 w-full h-full outline-none bg-gray-50"
              placeholder="Type to search by for entries"
            />
          </form>
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
