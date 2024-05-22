"use client";

import { getAllAutomations } from "@/app/lib/automation/fetch";
import { NewAutomationModal } from "@/app/ui/automation/NewAutomationModal";
import { Automate } from "@/app/ui/components/Automate";
import { Edit } from "@/app/ui/components/Edit";
import { Remove } from "@/app/ui/components/Remove";
import { CancelAutomationModal } from "@/app/ui/automation/CancelAutomationModal";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { UpdateAutomationModal } from "@/app/ui/automation/UpdateAutomationModal";
import { format } from "date-fns";
import { useAccessToken } from "@/app/lib/auth/customHooks/useAccessToken";
import { error } from "console";

export default function Page() {
  const [newAutomation, setNewAutomation] = useState(false); // TODO: change to false
  const [remove, setRemove] = useState("");
  const [content, setContent] = useState([]);
  const [update, setUpdate] = useState(false);
  const { token, error } = useAccessToken();

  const loadContent = async () => {
    try {
      const response = await getAllAutomations(token);
      if (response && response.data) {
        setContent(response.data);
      }
    } catch (error) {
      console.error("Error al obtener el contenido:", error);
    }
  };

  useEffect(() => {
    if (token) {
      loadContent(token);
    }
  }, [token]);

  const handleRemove = (id: string) => {
    setRemove(id);
  };

  const handleEdit = (id: string) => {
    setUpdate(id);
  };

  const handleOpenNewAutomation = () => {
    setNewAutomation(true);
  };

  const mapReviewTime = (reviewTime) => {
    switch (reviewTime) {
      case 1:
        return "1 mes";
      case 7:
        return "1 semana";
      case 15:
        return "15 días";
      case 24:
        return "1 día";
      default:
        return reviewTime;
    }
  };

  const search = async (event) => {
    setTimeout(async () => {
      let data = await getAllAutomations(token);
      if (event.target.value === "") {
        loadContent();
      } else {
        data = data.data.filter(
          (item) =>
            item.url.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.contentType
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
        );
        setContent(data);
      }
    }, 500);
  };

  return (
    <div className="flex flex-col h-full ">
      <div className="w-full h-full font-mono flex flex-col bg-[#151515] rounded-md overflow-hidden ">
        <nav className="sticky top-0 px-4 py-4 bg-[#313131] w-full flex justify-between items-center">
          <div className="flex gap-2">
            <Automate />{" "}
            <p className="font-bold text-lg">
              Automatización de generación de posts
            </p>
          </div>
          <button
            onClick={handleOpenNewAutomation}
            className="px-4 py-2 bg-[#D98471] rounded-md font-bold hover:scale-105"
          >
            Add automation
          </button>
        </nav>
        <div className="mx-2 mt-2 px-1 py-2 rounded-lg bg-gray-50 text-black">
          <form action="" className="flex gap-2 items-center ">
            <p className=" py-2 w-[200px] text-center bg-[#D98471] rounded-md text-white font-extrabold text-nowrap">
              Automation
            </p>

            <input
              onChange={search}
              type="text"
              placeholder="Type to search by url"
              className="p-2 w-full h-full outline-none bg-gray-50"
            />
          </form>
        </div>
        <div className="px-2">
          <div className="w-full font-mono flex flex-col text-white rounded-md overflow-hidden mt-12 bg-[#313131]">
            <div className="w-full flex justify-evenly p-2 border-b border-gray-200">
              <div className="w-2/6">
                <p>Reference</p>
              </div>
              <div className="flex justify-between  items-center w-4/6">
                <div className="w-2/12">
                  <p>Content Type</p>
                </div>
                <div className="w-2/12">
                  <p>Review time</p>
                </div>
                <div className="w-3/12">
                  <p>Last review</p>
                </div>
                <div className="w-2/12">
                  <p>Status</p>
                </div>
                <div className="w-1/12"></div>
              </div>
            </div>
            {content.length > 0 &&
              content.map((con) => {
                return (
                  <div
                    key={con.id}
                    className="group relative w-full flex items-center justify-evenly p-2 border-b border-gray-200"
                  >
                    <div className="w-2/6 z-10">
                      <p className="truncate pr-4">{con.url}</p>
                    </div>
                    <div className="flex w-4/6 justify-between items-center ">
                      <div className="w-2/12  z-10">
                        <p className="capitalize">{con.contentType}</p>
                      </div>
                      <div className="w-2/12 z-10">
                        <p>{mapReviewTime(con.review_time)}</p>
                      </div>
                      <div className="w-3/12 z-10">
                        <p>
                          {con.last_review_date
                            ? format(con.last_review_date, "dd/MM/yyyy HH:mm")
                            : "-"}
                        </p>
                      </div>
                      <div className="w-2/12 z-10">
                        <span
                          className={clsx(
                            "text-center text-[#151515] rounded-md px-2 capitalize",
                            {
                              "bg-[#70FFD9]": con.status === "active",
                              "bg-red-500": con.status === "paused",
                            }
                          )}
                        >
                          {con.status}
                        </span>
                      </div>
                      <div className="w-1/12 flex gap-6 z-10">
                        <Edit handleEdit={handleEdit} id={con.id} />
                        <Remove handleRemove={handleRemove} id={con.id} />
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 bottom-0 left-0 group-hover:bg-[#D98471]"></div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {remove !== "" ? (
        <CancelAutomationModal
          token={token}
          id={remove}
          closeModal={setRemove}
        />
      ) : null}

      {newAutomation ? (
        <NewAutomationModal token={token} closeModal={setNewAutomation} />
      ) : null}
      {update ? (
        <UpdateAutomationModal
          token={token}
          id={update}
          closeModal={setUpdate}
        />
      ) : null}
    </div>
  );
}
