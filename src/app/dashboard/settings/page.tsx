"use client";

import { getApiKeys } from "@/app/lib/apiKey/fetch";
import { useAccessToken } from "@/app/lib/auth/customHooks/useAccessToken";
import { getUserById } from "@/app/lib/auth/fetch";
import { CreateApiKeyModal } from "@/app/ui/apiKey/CreateApiKeyModal";
import { RemoveApiKeyModal } from "@/app/ui/apiKey/RemoveApiKeyModal";
import { Settings } from "@/app/ui/components/Settings";

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

  return (
    <div className=" flex flex-col h-full ">
      <div className="w-full h-full font-mono flex flex-col bg-[#151515] rounded-md overflow-hidden ">
        <nav className="sticky top-0 px-4 py-2 bg-[#313131] w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Settings />
            <p className="font-bold text-lg py-2">Settings</p>
          </div>
        </nav>
        <div className="w-full flex justify-center pt-4">
          {user && (
            <div className="m-4 p-4 w-4/6 bg-gray-50 text-black rounded-xl">
              <p className="font-bold mb-2">
                Nombre:{" "}
                <span className="font-normal capitalize">{user.name}</span>
              </p>
              <p className="font-bold mb-2">
                Apellidos:{" "}
                <span className="font-normal capitalize">{user.surname}</span>
              </p>
              <p className="font-bold">
                Email: <span className="font-normal ">{user.email}</span>
              </p>
            </div>
          )}
        </div>

        <div className="w-full flex justify-center pt-6">
          <div className="w-4/6  flex flex-col bg-gray-50 text-black justify-between rounded-xl">
            <div className="p-4 flex justify-between items-center ">
              <p className="font-bold">API keys</p>
              <button
                onClick={() => setOpenNewApiKey(true)}
                className="px-4 py-2 bg-[#D98471] rounded-md font-bold hover:scale-105"
              >
                Nueva API key
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
