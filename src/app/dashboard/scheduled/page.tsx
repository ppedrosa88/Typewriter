"use client";
import { getContentById } from "@/app/lib/content/fetch";
import { getScheduledContent } from "@/app/lib/schedule/fetch";
import { Edit } from "@/app/ui/components/Edit";
import { Remove } from "@/app/ui/components/Remove";
import { Schedule } from "@/app/ui/components/Schedule";
import { CancelScheduleModal } from "@/app/ui/scheduled/CancelScheduleModal";
import { CreateScheduleModal } from "@/app/ui/scheduled/CreateScheduleModal";
import { UpdateScheduleModal } from "@/app/ui/scheduled/UpdateScheduleModal";
import Scheduledbar from "@/app/ui/scheduled/scheduledbar";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function Page() {
  const accessToken = localStorage.getItem("accessToken");
  const cleanAccessToken = accessToken.replace(/^"|"$/g, "");

  const [remove, setRemove] = useState("");
  const [contentType, setContentType] = useState("active");
  const [contentScheduled, setContentScheduled] = useState([]);
  const [scheduleModal, setScheduleModal] = useState(false);
  const [editId, setEditId] = useState("");

  const loadContent = async (type) => {
    const { data: scheduledData } = await getScheduledContent();
    let response = await Promise.all(
      scheduledData.map(async (item) => {
        const { data } = await getContentById(cleanAccessToken, item.blogId);
        const { iaTitle, title, category } = data;
        return { ...item, iaTitle, title, category };
      })
    );
    const newResponse = response.filter((item) => item.status === type);
    setContentScheduled(newResponse);
  };

  useEffect(() => {
    loadContent(contentType);
  }, [contentType]);

  const handleRemove = (id: string) => {
    setRemove(id);
  };
  const handleContentType = (page) => {
    setContentType(page);
  };
  const handleEdit = (id: string) => {
    setEditId(id);
  };
  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-full font-mono flex flex-col bg-[#151515] rounded-md overflow-hidden">
        <nav className="sticky top-0 px-4 py-2 bg-[#313131] w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Schedule />
            <p className="px-2 p-2 text-lg font-bold">
              Programación de publicaciones
            </p>
          </div>
          <button
            onClick={() => setScheduleModal(true)}
            className="px-4 py-2 bg-[#D98471] rounded-md font-bold hover:scale-105"
          >
            Add Schedule
          </button>
        </nav>
        <Scheduledbar handleContent={handleContentType} content={contentType} />
        <div className="px-2">
          <div className="w-full font-mono flex flex-col text-white rounded-md overflow-hidden mt-12 bg-[#313131]">
            <div className="w-full flex justify-evenly p-2 border-b border-gray-200">
              <div className=" w-2/6">
                <p>Nombre</p>
              </div>
              <div className="w-4/6 flex justify-between">
                <div className="w-1/4">
                  <p>Tipo</p>
                </div>
                <div className="w-1/4">
                  <p>Publicación</p>
                </div>
                <div className="w-1/4">
                  <p>Creación</p>
                </div>
                <div className="w-[12%]"></div>
              </div>
            </div>
            {contentScheduled.length > 0 &&
              contentScheduled.map((schedule) => {
                return (
                  <div
                    key={schedule.id}
                    className="relative w-full flex justify-evenly p-2 border-b border-gray-200"
                  >
                    <div className="w-2/6">
                      <p>
                        {schedule.iaTitle ? schedule.iaTitle : schedule.title}
                      </p>
                    </div>
                    <div className="w-4/6 flex justify-between items-center">
                      <div className="w-1/4">
                        <p className="capitalize">{schedule.category}</p>
                      </div>
                      <div className="w-1/4">
                        <p>
                          {format(schedule.scheduledTime, "dd/MM/yyyy HH:mm")}
                        </p>
                      </div>
                      <div className="w-1/4">
                        <p>{format(schedule.createdAt, "dd/MM/yyyy")}</p>
                      </div>
                      <div className="w-[12%] flex gap-6">
                        <Edit handleEdit={handleEdit} id={schedule.id} />
                        <Remove handleRemove={handleRemove} id={schedule.id} />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {remove !== "" ? (
        <CancelScheduleModal id={remove} closeModal={setRemove} />
      ) : null}
      {scheduleModal ? (
        <CreateScheduleModal closeModal={setScheduleModal} />
      ) : null}

      {editId !== "" ? (
        <UpdateScheduleModal id={editId} closeModal={setEditId} />
      ) : null}
    </div>
  );
}
