"use client";
import { postAutomation } from "@/app/lib/automation/fetch";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const NewAutomationModal = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { target } = event;
    const url = target[0].value;
    const review_time = target[1].value;
    const contentType = target[2].value;
    try {
      const response = await postAutomation({ url, review_time, contentType });
      if (response) {
        setIsLoading(false);
        closeModal(false);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 after:bg-[#151515] after:content[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:opacity-50 flex justify-center items-center">
      <div className="bg-white w-1/2 h-[75vh]  text-black z-10 p-6 rounded-xl shadow-2xl flex flex-col justify-between">
        <div className="w-full text-4xl h-8 font-bold text-[#D98471] flex justify-center items-center">
          <h2>New Automation</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mb-4 w-full flex flex-col justify-between gap-6 font-bold"
        >
          <div className="w-full">
            <label htmlFor="url" className="text-sm">
              Url *
            </label>
            <input
              type="text"
              id="url"
              className="w-full bg-gray-50 border-2 border-gray-300 rounded-md p-2 outline-none focus:border-[#D98471] placeholder:text-black"
              placeholder="Introduce a principal content page"
            />
          </div>
          <select
            id="review_time"
            className="w-full p-2 bg-gray-50 border-2 border-gray-300 rounded-md outline-none"
          >
            <option value="">Select frequency</option>
            <option value="24">24 h</option>
            <option value="7">1 week</option>
            <option value="15">15 days</option>
            <option value="1">1 month</option>
          </select>
          <select
            id="frequency"
            className="w-full p-2 bg-gray-50 border-2 border-gray-300 rounded-md outline-none"
          >
            <option value="">Select content type</option>
            <option value="blog">Blog</option>
            <option value="news">News</option>
            <option value="facebook">Facebook</option>
            <option value="linkedIn">LinkedIn</option>
            <option value="twitter">X</option>
          </select>
          <div className="flex gap-6 justify-center font-bold pt-12">
            <button
              className="px-4 py-2 bg-[#70FFD9] rounded-lg hover:scale-95 active:scale-90"
              type="submit"
            >
              {isLoading ? "Automating..." : "Automate"}
            </button>
            <button
              className="px-4 py-2 hover:scale-95 hover:bg-red-500 hover:text-white rounded-lg active:scale-90 "
              onClick={() => closeModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
