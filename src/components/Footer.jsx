import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#191B22" }}
      className="text-white text-center grid grid-cols-1 mx-auto py-16 "
    >
      <div className="flex w-4/5 mx-auto mt-10">
        <div className="w-1/3">
          <h4 className="text-xl font-bold pb-5 text-accent-color">Map</h4>
          <ul className="">
            <li>
              <Link to="/" className="transition hover:text-accent-color p-2">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/genres"
                className="transition hover:text-accent-color p-2"
              >
                Genres
              </Link>
            </li>
            <li>
              <Link
                to="/all"
                className="transition hover:text-accent-color p-2"
              >
                All songs
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/3">
          <h4 className="text-xl font-bold pb-5 text-accent-color">About</h4>
          <p>
            This is a website made for GTA V fans. You'll be able to
            discover, search, and listen to some of the music contained in the
            game. I'll aprecciate if you drop a donation in order to keep
            working on awesome projects like this!
          </p>
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <a
            href="#"
            className="transition px-5 py-2 border-2 rounded-lg text-lg border-white-color leading-normal hover:bg-accent-color hover:border-accent-color"
          >
            Donate
          </a>
        </div>
      </div>
      <span className="mt-10">
        By{" "}
        <a
          href="https://www.github.com/scortesg1/"
          target="_blank"
          className="transition text-accent-color hover:text-yellow-300"
        >
          Santiago Cortés
        </a>
      </span>
    </footer>
  );
}

export default Footer;
