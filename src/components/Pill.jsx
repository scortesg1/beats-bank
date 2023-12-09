import React from "react";

function Pill({ genre, handleGenre }) {
  return (
    <li
      value={genre}
      className="transition px-3 py-2 cursor-pointer text-white font-semibold rounded-xl bg-orange-600 flex max-w-max hover:bg-orange-700 hover:shadow-white hover:shadow-sm"
      data-genre={genre}
      onClick={handleGenre}
    >
      {genre}
    </li>
  );
}

export default Pill;
