import React, { useState } from "react";
import SearchList from "./SearchList";
import { Fade } from "react-awesome-reveal";

function SearchInput() {
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState(null);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = () => {
    setTimeout(() => setActive(false), 200);
  };

  const handleListClick = () => {
    setActive(true);
  };

  return (
    <div className="w-full mt-5 flex flex-col items-center mx-auto relative">
      <input
        type="text"
        placeholder="How it was, Lady hear my tonight, Ali Bomaye..."
        className={`p-3 w-1/2 md:w-3/6  ${
          active ? "rounded-t-md" : "rounded-md"
        } focus:outline-none text-center text-black mx-auto text-lg lg:text-xl bg-white-color`}
        onChange={handleQuery}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div
        className={`w-1/2 md:w-3/6 mx-auto rounded-b-xl ${
          active ? "block" : "hidden"
        } bg-white-color absolute top-full h-44 overflow-y-scroll`}
        onClick={handleListClick}
      >
        <Fade>
          <SearchList query={query} />
        </Fade>
      </div>
    </div>
  );
}

export default SearchInput;
