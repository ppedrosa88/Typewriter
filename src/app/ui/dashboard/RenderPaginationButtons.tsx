import { useState } from "react";

export default function RenderPaginationButtons({
  currentPage,
  totalPages,
  onPageChange,
  maxButtons = 5,
}) {
  const [startPage, setStartPage] = useState(1);

  const renderButtons = () => {
    const buttons = [];

    let endPage = startPage + maxButtons - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
    }

    const activeButtonIndex = currentPage - startPage;

    const centeredButtonIndex = Math.floor(maxButtons / 2);

    let offset = activeButtonIndex - centeredButtonIndex;
    if (offset < 0) {
      offset = 0;
    } else if (offset > totalPages - maxButtons) {
      offset = totalPages - maxButtons;
    }

    const adjustedStartPage = startPage + offset;
    let adjustedEndPage = endPage + offset;
    if (adjustedEndPage > totalPages) {
      adjustedEndPage = totalPages;
    }

    buttons.push(
      <button
        key="prev"
        onClick={() => {
          const prevStart = startPage - maxButtons;
          setStartPage(prevStart < 1 ? 1 : prevStart);
        }}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1  text-[#D98471] text-2xl"
      >
        &lt;&lt;
      </button>
    );

    buttons.push(
      <button
        key="prev-page"
        onClick={() => {
          onPageChange(currentPage - 1);
        }}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1  text-[#D98471] text-2xl"
      >
        &lt;
      </button>
    );

    for (let i = adjustedStartPage; i <= adjustedEndPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-4 py-2 mx-1 text-gray-50 ${
            currentPage === i
              ? "bg-[#D98471] text-white"
              : "bg-[#313131] text-black"
          } rounded`}
        >
          {i}
        </button>
      );
    }

    buttons.push(
      <button
        key="next-page"
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1  text-[#D98471] text-2xl"
      >
        &gt;
      </button>
    );

    buttons.push(
      <button
        key="next"
        onClick={() => {
          const nextStart = startPage + maxButtons;
          if (nextStart <= totalPages) {
            setStartPage(nextStart);
          }
        }}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1  text-[#D98471] text-2xl"
      >
        &gt;&gt;
      </button>
    );

    return buttons;
  };

  return <div className="flex justify-center mt-4">{renderButtons()}</div>;
}
