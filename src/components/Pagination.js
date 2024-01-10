import React from "react";

export const Pagination = ({
  page,
  totalPages,
  onPreviousClick,
  onNextClick,
}) => {
  return (
    <div className="flex gap-1">
      <button onClick={onPreviousClick}>
        <div>⬅️</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onNextClick}>
        <div>➡️</div>
      </button>
    </div>
  );
};
