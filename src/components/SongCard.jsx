import React from "react";
import Pill from "./Pill";
import { obtenerPortada } from "../helpers/fetching";
import { useState, useEffect } from "react";
import { RADIO_STATIONS } from "../helpers/constants";
import { Fade } from "react-awesome-reveal";

function SongCard({ song }) {
  const [imgURL, setImgURL] = useState("/images/default.svg");
  const [spotifyLink, setSpotifyLink] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [radioURL, setRadioURL] = useState("/images/default.svg");

  useEffect(() => {
    setIsLoading(true);

    obtenerPortada(song)
      .then(({ imageUrl, link }) => {
        if (imageUrl != null && link != null) {
          setImgURL(imageUrl);
          setSpotifyLink(link);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    const url = RADIO_STATIONS[song.station] || "";

    setRadioURL(url);
  }, [song]);

  console.log("Renderizado: ", song.name);

  return (
    <Fade cascade direction="up" damping={0.1} triggerOnce>
      <li className="bg-white-color flex gap-x-7 w-full p-7 rounded-2xl items-center">
        <div className="max-w-max w-full">
          {isLoading ? (
            <div className="transition rounded-2xl w-56 h-56 flex place-content-center place-items-center">
              <div className="dot-pulse"></div>
            </div>
          ) : (
            <img
              src={imgURL}
              className="transition rounded-2xl w-56 h-56"
              alt={`Cover from ${song.name}`}
            />
          )}
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <h3 className="text-2xl font-semibold">{song.name}</h3>
          <p className="text-md">{song.author}</p>
          <ul>
            <Pill genre={song.genre} />
          </ul>
          <div className="flex gap-x-2 items-center">
            <img
              src={radioURL}
              className="w-10"
              alt={`Logo from ${song.station}`}
            />
            <span className="text-md">{song.station}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">
              {song.platforms === "All"
                ? `${song.platforms} platforms`
                : song.platforms}
            </span>
            {spotifyLink && (
              <a href={spotifyLink} target="_blank" className="w-max">
                <img
                  src="/images/spotify.png"
                  className="w-8 min-w-max h-8"
                  alt="Spotify Logo"
                />
              </a>
            )}
          </div>
        </div>
      </li>
    </Fade>
  );
}

export default React.memo(SongCard);
