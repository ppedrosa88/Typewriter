"use client";
import { getAllContent } from "@/app/lib/content/fetch";
import { ChangeStatus } from "@/app/ui/components/ChangeStatus";
import { Edit } from "@/app/ui/components/Edit";
import { Remove } from "@/app/ui/components/Remove";
import { Status } from "@/app/ui/components/Status";
import clsx from "clsx";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [content, setContent] = useState([]);
  const loadContent = async () => {
    const { data } = await getAllContent();
    data.rows = data.rows.filter((item) => item.status === "deleted");
    setContent(data.rows);
  };

  useEffect(() => {
    loadContent();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-full font-mono flex flex-col bg-[#151515] rounded-md overflow-hidden">
        <nav className="sticky top-0 px-4 py-2 bg-[#313131] w-full flex justify-between items-center">
          <div className="flex gap-2">
            <Status />
            <p className="font-bold text-lg">Status</p>
          </div>
          <button className="px-4 py-2 bg-[#D98471] rounded-md font-bold hover:scale-105">
            Add entry
          </button>
        </nav>
        {/* <div className="mx-2 mt-2 px-1 py-2 rounded-lg bg-gray-50 text-black">
          <form action="" className="flex gap-2 items-center ">
            <p className=" py-2 w-[200px] text-center bg-[#D98471] rounded-md text-white font-extrabold text-nowrap">
              Status
            </p>
            <select className="outline-none">
              <option value="">Any</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="deleted">deleted</option>
            </select>
            <input
              type="text"
              className="p-2 w-full h-full outline-none bg-gray-50"
              placeholder="Type to search by for entries"
            />
          </form>
        </div> */}
        <div className="px-2">
          <div className="w-full font-mono flex flex-col text-white rounded-md overflow-hidden mt-12 bg-[#313131]">
            <div className="w-full flex justify-evenly p-2 border-b border-gray-200">
              <div className="w-2/6">
                <p>Name</p>
              </div>
              <div className="w-4/6 flex justify-between">
                <div className="w-2/12">
                  <p>Content Type</p>
                </div>
                <div className="w-2/12">
                  <p>Activity</p>
                </div>
                <div className=" w-2/12">
                  <p>Created</p>
                </div>
                <div className="w-2/12">
                  <p>Status</p>
                </div>
                <div className="w-1/12"></div>
              </div>
            </div>
            {content.map((con) => {
              return (
                <div
                  key={con.id}
                  className="relative w-full flex justify-evenly items-center p-2 border-b border-gray-200"
                >
                  <div className="w-2/6">
                    <p>{con.title}</p>
                  </div>
                  <div className="w-4/6 flex justify-between items-center">
                    <div className="w-2/12">
                      <p className="capitalize">{con.category}</p>
                    </div>
                    <div className="w-2/12">
                      <p>
                        {con.updatedAt
                          ? format(con.updatedAt, "dd/mm/yyyy")
                          : format(con.createdAt, "dd/mm/yyyy")}
                      </p>
                    </div>
                    <div className="w-2/12">
                      <p>{format(con.createdAt, "dd/mm/yyyy")}</p>
                    </div>
                    <div className="w-2/12">
                      <span
                        className={clsx(
                          "text-center text-gray-50 rounded-md px-2 capitalize bg-black"
                        )}
                      >
                        {con.status}
                      </span>
                    </div>
                    <div className="w-1/12 flex justify-end pr-3">
                      <ChangeStatus id={con.id} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
