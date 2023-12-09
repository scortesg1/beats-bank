import React from "react";
import SearchInput from "./SearchInput";
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <div
      style={{ height: "calc(100vh - 9rem)" }}
      className="flex flex-col gap-y-6 pt-10 text-center text-white-color"
    >
      <div>
        <Fade cascade damping={0.3} direction="up">
          <img
            src="/images/logoVector.svg"
            className="mx-auto w-64 drop-shadow-xl "
            alt="Beats Bank logo two B letters"
          />
          <h1 className="font-sans font-medium text-8xl">Beats Bank</h1>
          <p className="text-white mt-5 text-xl w-2/5 m-auto">
            Welcome to <strong>Beats Bank</strong>, a website to look up if the
            songs you like are in the iconic GTA V videogame.
          </p>
          <SearchInput />
        </Fade>
      </div>
    </div>
  );
}

export default Home;
