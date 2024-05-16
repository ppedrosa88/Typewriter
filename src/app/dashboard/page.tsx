"use client";
import clsx from "clsx";
import { Edit } from "../ui/components/Edit";
import { RemoveModal } from "../ui/dashboard/RemoveModal";
import { Remove } from "../ui/components/Remove";
import { ChangeStatus } from "../ui/components/ChangeStatus";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { deleteContentById, getAllContent } from "../lib/content/fetch";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { ChangeStatusModal } from "../ui/dashboard/ChangeStatusModal";
import { NewAiPostModal } from "../ui/dashboard/NewAiPostModal";

export default function Page() {
  const [remove, setRemove] = useState("");
  const [newAiPost, setNewAiPost] = useState(false);
  const [changeStatus, setChangeStatus] = useState("");
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState([]);
  const router = useRouter();
  const selectRef = useRef(null);

  const accessToken = localStorage.getItem("accessToken");
  const cleanAccessToken = accessToken.replace(/^"|"$/g, "");

  const loadContent = async () => {
    const response = await getAllContent(cleanAccessToken);
    if (response.data) {
      const { data } = response;
      data.rows = data.rows.filter((item) => item.status !== "deleted");
      setContent(data.rows);
      return data.rows;
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  const handleEdit = (id: string) => {
    router.push(`/dashboard/edit-entry/${id}`);
  };
  const handleRemove = (id: string) => {
    setRemove(id);
  };

  const handleDetails = (id: string) => {
    router.push(`/dashboard/details/${id}`);
  };

  const handleStatusChange = (id: string) => {
    setChangeStatus(id);
  };

  const searchType = async (event) => {
    const data = await loadContent();
    if (event.target.value !== "") {
      const search = data.filter(
        (item) => item.createdByIa === Number(event.target.value)
      );
      console.log(search);
      setContent(search);
    }
  };

  const search = async (event) => {
    setTimeout(async () => {
      let data = await loadContent();
      if (selectRef.current.value !== "") {
        data = data.filter(
          (item) => item.createdByIa === Number(selectRef.current.value)
        );
      }

      if (event.target.value !== "") {
        const search = data.filter(
          (item) =>
            item.title
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            item.iaTitle
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
        );
        setContent(search);
      } else {
        setContent(data);
      }
    }, 500);
  };

  useEffect(() => {}, [content]);
  const handleAiNewPost = () => {
    setNewAiPost(true);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-full font-mono flex flex-col bg-[#151515] rounded-md overflow-hidden">
        <nav className="sticky top-0 px-4 py-2 bg-[#313131] w-full flex justify-between items-center">
          <div className="flex gap-2">
            <HomeIcon className="w-6 h-6" />
            <p className="font-bold text-lg">Mis posts</p>
          </div>
          <div className="relative group px-6 py-2 bg-[#D98471] rounded-md font-bold hover:scale-105">
            Nueva entrada
            <div className="absolute bg-white text-black z-10 top-10 right-0 w-full h-20 hidden group-hover:flex flex-col rounded-md overflow-hidden">
              <button
                onClick={handleAiNewPost}
                className="h-10 flex justify-center items-center w-full hover:bg-[#D98471] hover:text-white rounded-md"
              >
                Generado por IA
              </button>
              <a
                href="/dashboard/new-entry"
                className="h-10 flex justify-center items-center w-full hover:bg-[#D98471] hover:text-white rounded-md"
              >
                Generado por mi
              </a>
            </div>
          </div>
        </nav>
        <div className="mx-2 mt-2 px-1 py-2 rounded-lg bg-gray-50 text-black">
          <form action="" className="flex gap-2 items-center ">
            <p className=" py-2 w-[200px] text-center bg-[#D98471] rounded-md text-white font-extrabold text-nowrap">
              Generado por:
            </p>
            <select
              ref={selectRef}
              className="outline-none"
              onChange={searchType}
            >
              <option value="">-</option>
              <option value="1">IA</option>
              <option value="0">por mi</option>
            </select>
            <input
              type="text"
              className="p-2 w-full h-full outline-none bg-gray-50"
              placeholder="Type to search by for entries"
              onChange={search}
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
                <div className="w-2/12"></div>
              </div>
            </div>
            {content &&
              content.map((con) => {
                return (
                  <div
                    key={con.id}
                    className="group relative w-full flex justify-evenly p-2 border-b items-center border-gray-200 hover:cursor-pointer"
                  >
                    <div
                      className="w-2/6 pr-2 z-10"
                      onClick={() => handleDetails(con.id)}
                    >
                      <p>{con.title}</p>
                    </div>
                    <div className="w-4/6 flex justify-between items-center">
                      <div
                        className="w-2/12 z-10"
                        onClick={() => handleDetails(con.id)}
                      >
                        <p className="capitalize">{con.category}</p>
                      </div>
                      <div
                        className="w-2/12 z-10"
                        onClick={() => handleDetails(con.id)}
                      >
                        <p>
                          {con.updatedAt
                            ? format(con.updatedAt, "dd/MM/yyyy")
                            : format(con.createdAt, "dd/MM/yyyy")}
                        </p>
                      </div>
                      <div
                        className="w-2/12 z-10"
                        onClick={() => handleDetails(con.id)}
                      >
                        <p>{format(con.createdAt, "dd/MM/yyyy")}</p>
                      </div>
                      <div
                        className="w-2/12 z-10"
                        onClick={() => handleDetails(con.id)}
                      >
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
                      <div className="w-2/12 flex gap-4 z-10 justify-center">
                        <Edit handleEdit={handleEdit} id={con.id} />
                        <Remove handleRemove={handleRemove} id={con.id} />
                        <ChangeStatus
                          handleStatusChange={handleStatusChange}
                          id={con.id}
                        />
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
        <RemoveModal id={remove} closeModal={setRemove} />
      ) : null}

      {changeStatus !== "" ? (
        <ChangeStatusModal id={changeStatus} closeModal={setChangeStatus} />
      ) : null}
      {newAiPost ? <NewAiPostModal closeModal={setNewAiPost} /> : null}
    </div>
  );
}
