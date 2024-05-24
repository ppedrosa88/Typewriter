"use client";
import React from "react";
import QuillEditor from "react-quill";

import "react-quill/dist/quill.snow.css";

export default function Editor({ value, setValue }) {
  const onChange = (content) => {
    setValue(content);
  };

  return (
    <div className="w-full h-full font-mono flex flex-col rounded-md overflow-hidden">
      <QuillEditor
        className="grow bg-gray-50 text-black rounded-md overflow-hidden ql-snow min-h-[46vh]"
        theme="snow"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
