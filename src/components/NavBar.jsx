import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="text-white-color flex justify-between items-center h-36 text-xl">
      <ul className="flex pl-32  gap-x-11">
        <li>
          <Link to="/" className="transition hover:text-accent-color p-2">
            Home
          </Link>
        </li>
        <li>
          <Link to="/genres" className="transition hover:text-accent-color p-2">
            Genres
          </Link>
        </li>
        <li>
          <Link to="/all" className="transition hover:text-accent-color p-2">
            All songs
          </Link>
        </li>
      </ul>
      <a
        href="#"
        className="mr-32 h-max transition px-4 py-1 border-2 rounded-lg border-white-color leading-normal hover:bg-accent-color"
      >
        Donate
      </a>
    </nav>
  );
}

export default NavBar;
