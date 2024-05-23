"use client";
import { getContentById } from "@/app/lib/content/fetch";
import { Content } from "@/app/ui/details/Content";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostDetail({ params }: { params: { postId: string } }) {
  const router = useRouter();
  const { postId } = params;

  const [content, setContent] = useState();
  const [contentByMe, setContentByMe] = useState({});
  const [contentByIa, setContentByIa] = useState({});

  const accessToken = localStorage.getItem("accessToken");
  const cleanAccessToken = accessToken.replace(/^"|"$/g, "");

  async function loadContent() {
    const { data } = await getContentById(cleanAccessToken, postId);
    setContent(data);
    if (data.createdByIa === 0) {
      const byMeContent = data.content.map((item) => {
        return { tag: item.tag, text: item.text };
      });

      const byMe = {
        title: data.title,
        url: data.reference,
        content: byMeContent,
      };
      if (byMe) {
        setContentByMe(byMe);
      }
    }

    if (data.createdByIa === 1) {
      const byIaContent = data.content.map((item) => {
        return { tag: item.tag, text: item.iaData };
      });

      const byIa = {
        title: data.iaTitle,
        url: data.reference,
        content: byIaContent,
      };
      setContentByIa(byIa);
    }
    setContent(data);
  }

  useEffect(() => {
    loadContent();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-full font-mono flex flex-col bg-[#151515] rounded-md overflow-hidden">
        {contentByMe.content && (
          <Content data={contentByMe} isIa={content.createdByIa} />
        )}
        {contentByIa.content && (
          <Content data={contentByIa} isIa={content.createdByIa} />
        )}
      </div>
    </div>
  );
}
