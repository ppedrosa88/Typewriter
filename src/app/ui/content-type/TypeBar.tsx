import { usePathname } from "next/navigation";

import clsx from "clsx";
import { Blog } from "../components/Blog";
import { News } from "../components/News";
import { Facebook } from "../components/Facebook";
import { LinkedIn } from "../components/LinkedIn";
import { Twitter } from "../components/Twitter";

export default function TypeBar({ handleContentType, contentType }) {
  const pathname = usePathname();

  return (
    <div className="mx-2 mt-2 pt-3 border-b border-gray-200 flex">
      <button
        onClick={() => handleContentType("blog")}
        className={clsx([
          "px-4 py-2 flex gap-2",
          { active: contentType === "blog" },
        ])}
      >
        <Blog />
        <span>Blog</span>
      </button>
      <button
        onClick={() => handleContentType("news")}
        className={clsx([
          "px-4 py-2  flex gap-2",
          { active: contentType === "news" },
        ])}
      >
        <News />
        <span>News</span>
      </button>
      <button
        onClick={() => handleContentType("facebook")}
        className={clsx([
          "px-4 py-2 flex gap-2",
          { active: contentType === "facebook" },
        ])}
      >
        <Facebook />
        <span>Facebook</span>
      </button>
      <button
        onClick={() => handleContentType("linkedIn")}
        className={clsx([
          "px-4 py-2 flex gap-2",
          { active: contentType === "linkedIn" },
        ])}
      >
        <LinkedIn />
        <span>LinkedIn</span>
      </button>
      <button
        onClick={() => handleContentType("twitter")}
        className={clsx([
          "px-4 py-2 flex gap-2",
          { active: contentType === "twitter" },
        ])}
      >
        <Twitter />
        <span>X</span>
      </button>
    </div>
  );
}
