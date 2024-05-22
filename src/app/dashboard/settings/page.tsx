"use client";

import { deleteApiKey, getApiKeys } from "@/app/lib/apiKey/fetch";
import { useAccessToken } from "@/app/lib/auth/customHooks/useAccessToken";
import { getUserById } from "@/app/lib/auth/fetch";
import { CreateApiKeyModal } from "@/app/ui/apiKey/CreateApiKeyModal";
import { RemoveApiKeyModal } from "@/app/ui/apiKey/RemoveApiKeyModal";
import { Remove } from "@/app/ui/components/Remove";
import { TrashIcon } from "@heroicons/react/24/outline";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export default function Page() {
  const { token, error } = useAccessToken();
  const [user, setUser] = useState(null);
  const [apiKeys, setApiKeys] = useState(null);
  const [openRemove, setOpenRemove] = useState("");
  const [openNewApiKey, setOpenNewApiKey] = useState(false);

  useEffect(() => {
    if (typeof token === "string") {
      loadData(token);
      loadApiKeyData(token);
    }
  }, [token]);

  const loadData = async (token) => {
    if (typeof token === "string") {
      try {
        const decoded = jwtDecode(token);
        const { id } = decoded;
        const { data } = await getUserById(token, id);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error("Invalid token:", token);
    }
  };

  const loadApiKeyData = async (token) => {
    if (typeof token === "string") {
      try {
        const response = await getApiKeys(token);
        console.log(response);
        if (response.ok) {
          setApiKeys(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  // const handleDeleteApiKey = async (id) => {
  //     try {
  //         const response = await deleteApiKey(token, id);
  //         if (response.ok) {
  //             loadApiKeyData(token);
  //         }
  //     }

  return (
    <div className=" flex flex-col h-full ">
      <div className="w-full h-full font-mono flex flex-col bg-[#151515] rounded-md overflow-hidden ">
        {user && <div className="p-4">{JSON.stringify(user, null, 2)}</div>}
        {user && (
          <div className="p-4">
            <h2>Nombre: {user.name}</h2>
            <p>Apellidos: {user.surname}</p>
            <p>Email: {user.email}</p>
          </div>
        )}

        <div className="w-full flex justify-center pt-20">
          <div className="w-1/2 flex flex-col bg-white text-black justify-between rounded-md">
            <div className="p-4 flex justify-between items-center ">
              <p>Generacion de api key</p>
              <button
                onClick={() => setOpenNewApiKey(true)}
                className="px-4 py-2 bg-[#D98471] rounded-md font-bold hover:scale-105"
              >
                Nueva ApiKey
              </button>
            </div>

            <div className="flex flex-col w-full">
              {apiKeys &&
                apiKeys.map((item) => (
                  <div
                    className="flex justify-between gap-2 p-3 "
                    key={item._id}
                  >
                    <p>{item.apiKey}</p>
                    <button onClick={() => setOpenRemove(item.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {openRemove && (
        <RemoveApiKeyModal
          token={token}
          id={openRemove}
          closeModal={setOpenRemove}
        />
      )}
      {openNewApiKey && (
        <CreateApiKeyModal token={token} closeModal={setOpenNewApiKey} />
      )}
    </div>
  );
}
