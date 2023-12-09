import React, { useState, useEffect } from "react";
import SongCard from "../components/SongCard";
import songs from "../../data/songs.min.json";
import { Fade } from "react-awesome-reveal";

function AllSongs() {
  const [limit, setLimit] = useState(10);
  const [visibleList, setVisibleList] = useState(songs.songs.slice(0, limit));

  const showMore = () => {
    setLimit(limit + 10);
  };

  useEffect(() => {
    setVisibleList(songs.songs.slice(0, limit));
  }, [limit]);

  return (
    <Fade triggerOnce>
      <section className="w-full flex flex-col gap-y-12 h-full">
        <h2 className="text-7xl text-center font-sans font-medium text-white-color">
          All Songs
        </h2>
        <p className="text-xl text-center text-white-color">
          Take a look at the 926 songs in our database. Most of them are in the
          videogame soundtrack.
        </p>
        <ul className="grid grid-cols-3 gap-6 w-full mx-auto mt-12 px-6">
          {visibleList.map((song, index) => (
            <SongCard key={index} song={song} />
          ))}
        </ul>
        <button
          onClick={showMore}
          className="transition px-4 py-2 mb-12 border-2 rounded-lg text-white-color border-white-color leading-normal hover:bg-accent-color w-40 hover:border-accent-color font-medium mx-auto"
        >
          See more
        </button>
      </section>
    </Fade>
  );
}

export default AllSongs;
