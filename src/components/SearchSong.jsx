import React from "react";

function SearchSong({ song, handleSearch }) {
  return (
    <li
      onClick={handleSearch}
      className="transition border-b-2 border-gray-300 hover:bg-gray-color cursor-pointer relative"
      data-song={song.name}
    >
      <div className="p-4 ps-7 relative" data-song={song.name}>
        <h3 className="text-lg font-bold" data-song={song.name}>{song.name}</h3>
        <span data-song={song.name}>{song.author}</span>
      </div>
    </li>
  );
}

export default SearchSong;
