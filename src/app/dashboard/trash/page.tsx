"use client";
import { useAccessToken } from "@/app/lib/auth/customHooks/useAccessToken";
import { getAllContent } from "@/app/lib/content/fetch";
import { ChangeStatus } from "@/app/ui/components/ChangeStatus";
import { Edit } from "@/app/ui/components/Edit";
import { Remove } from "@/app/ui/components/Remove";
import { Status } from "@/app/ui/components/Status";
import { EditStatusModal } from "@/app/ui/trash/EditStatusModal";
import { TotallyRemoveModal } from "@/app/ui/trash/TotallyRemoveModal";
import clsx from "clsx";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [content, setContent] = useState([]);
  const [remove, setRemove] = useState("");
  const [edit, setEdit] = useState("");
  const { token, error } = useAccessToken();

  const loadContent = async (token) => {
    try {
      const response = await getAllContent(token);
      if (response && response.data) {
        const { data } = response;
        data.rows = data.rows.filter((item) => item.status === "deleted");
        setContent(data.rows);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = (id: string) => {
    setRemove(id);
  };

  useEffect(() => {
    loadContent(token);
  }, [token]);

  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-full font-mono flex flex-col bg-[#151515] rounded-md overflow-hidden">
        <nav className="sticky top-0 px-4 py-2 bg-[#313131] w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Status />
            <p className="font-bold text-lg py-2">Papelera</p>
          </div>
        </nav>

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
                    <div className="w-1/12 flex justify-center pr-3 gap-2">
                      <ChangeStatus handleStatusChange={setEdit} id={con.id} />
                      <Remove handleRemove={handleRemove} id={con.id} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {edit && <EditStatusModal token={token} closeModal={setEdit} id={edit} />}
      {remove && (
        <TotallyRemoveModal token={token} closeModal={setRemove} id={remove} />
      )}
    </div>
  );
}
