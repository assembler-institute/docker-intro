import React from "react";

export const ButtonForm = ({ onClick }) => {
  return (
    <button onClick={onClick} className="w-10/12 h-7 mt-4 bg-icon py-[0.09rem]">
      Submit
    </button>
  );
};
