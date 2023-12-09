import React from "react";
import SongCard from "../components/SongCard";
import songs from "../../data/songs.json";
import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function Results() {
  const findSong = () => {
    const { songName } = useParams();

    const decodedSongName = decodeURIComponent(songName);
    const song = songs.songs.find(({ name }) => name === decodedSongName);

    return song;
  };

  return (
    <section
      className="flex flex-col gap-y-14 justify-center items-center "
      style={{ height: "calc(100vh - 9rem)" }}
    >
      <h2 className="text-6xl text-center text-white-color font-bold">
        Search results
      </h2>
      <Fade>
        <ul className="text-main-color w-1/3 mx-auto text-left flex flex-col">
          <SongCard song={findSong()} />
        </ul>
      </Fade>
    </section>
  );
}

export default Results;
