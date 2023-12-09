import React from "react";
import useGenreFilter from "../hooks/useGenreFilter.js";
import Pill from "../components/Pill.jsx";
import SongCard from "../components/SongCard.jsx";
import songs from "../../data/songs.json";
import { Fade } from "react-awesome-reveal";

function Genres() {
  let genres = [];

  songs.songs.map((song) => {
    if (!genres.includes(song.genre)) {
      genres.push(song.genre);
    }
  });

  const { filteredList, active, handleGenre } = useGenreFilter(songs.songs);

  return (
    <>
      <Fade delay={100} direction="up" triggerOnce>
        <section
          style={{ height: "calc(100vh - 9rem)" }}
          className="pt-5 flex flex-col gap-y-14 justify-center"
        >
          <h2 className="text-7xl text-center font-sans font-medium text-white-color">
            Search by genre
          </h2>
          <ul className="flex flex-wrap gap-4 w-full md:w-5/6 mx-auto  justify-center">
            {genres.sort().map((genre, index) => (
              <Pill key={index} handleGenre={handleGenre} genre={genre} />
            ))}
          </ul>
        </section>
      </Fade>
      <Fade delay={500} direction="up" triggerOnce>
        <section>
          {active && (
            <ul className="grid grid-cols-3 gap-6 w-full mx-auto my-12 px-6">
              {filteredList.map((song, index) => (
                <SongCard key={index} song={song} />
              ))}
            </ul>
          )}
        </section>
      </Fade>
    </>
  );
}

export default Genres;
