import clsx from "clsx";

export default function Scheduledbar({ handleContent, content }) {
  return (
    <div className="mx-2 mt-2 pt-3 border-b border-gray-200 flex">
      <button
        onClick={() => handleContent("active")}
        className={clsx(["px-4 py-2", { active: content === "active" }])}
      >
        Programadas
      </button>
      <button
        onClick={() => handleContent("inactive")}
        className={clsx(["px-4 py-2", { active: content === "inactive" }])}
      >
        Completadas
      </button>
      <button
        onClick={() => handleContent("fail")}
        className={clsx(["px-4 py-2", { active: content === "fail" }])}
      >
        Fallidas
      </button>
    </div>
  );
}
