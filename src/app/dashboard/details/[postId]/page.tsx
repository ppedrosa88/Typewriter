"use client";
import { useAccessToken } from "@/app/lib/auth/customHooks/useAccessToken";
import { getContentById } from "@/app/lib/content/fetch";
import { Edit } from "@/app/ui/components/Edit";
import { Remove } from "@/app/ui/components/Remove";
import { RemoveModal } from "@/app/ui/dashboard/RemoveModal";
import { Content } from "@/app/ui/details/Content";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostDetail({ params }: { params: { postId: string } }) {
  const router = useRouter();
  const { postId } = params;

  const [remove, setRemove] = useState("");

  const [content, setContent] = useState();
  const [contentByMe, setContentByMe] = useState({});
  const [contentByIa, setContentByIa] = useState({});

  const { token, error } = useAccessToken();

  async function loadContent(token) {
    try {
      const { data } = await getContentById(token, postId);
      setContent(data);
      console.log(data);
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
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadContent(token);
  }, [token]);

  const handleEdit = () => {
    router.push(`/dashboard/edit-entry/${postId}`);
  };

  const handleRemove = () => {
    setRemove(postId);
  };

  return (
    <>
      <div className="relative flex flex-col h-full">
        <div className="w-full h-full font-mono flex flex-col bg-[#151515] rounded-md overflow-hidden pt-4">
          {contentByMe.content && (
            <Content data={contentByMe} isIa={content.createdByIa} />
          )}
          {contentByIa.content && (
            <Content data={contentByIa} isIa={content.createdByIa} />
          )}
          <div className="absolute flex gap-6 p-4 top-0 right-0">
            <Edit handleEdit={handleEdit} id={postId} />
            <Remove handleRemove={handleRemove} id={postId} />
          </div>
        </div>
      </div>
      {remove !== "" ? (
        <RemoveModal token={token} id={remove} closeModal={setRemove} />
      ) : null}
    </>
  );
}
