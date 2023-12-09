import React from "react";
import { useState, useEffect } from "react";
import SearchSong from "./SearchSong";
import songs from "../../data/songs.json";
import { useNavigate } from "react-router-dom";
import "./List.css";

function SearchList({ query }) {
  const [results, setResults] = useState(songs.songs);
  const navigateTo = useNavigate();

  useEffect(() => {
    let result = songs.songs.filter((song) =>
      song.name.toLowerCase().includes(query)
    );
    setResults(result);
  }, [query]);

  const handleSearch = (e) => {
    console.log(e.target)
    let songName = e.target.parentElement.dataset.song;
    navigateTo(`/results/${songName}`);
  };

  return (
    <ul className="list w-full text-main-color text-left flex flex-col">
      {results.length == 0 ? (
        <li className="p-4 ps-7">
          <h3 className="text-lg font-bold">No results</h3>
        </li>
      ) : (
        results.map((song, index) => (
          <SearchSong handleSearch={handleSearch} key={index} song={song} />
        ))
      )}
    </ul>
  );
}

export default SearchList;
