import { useState } from 'react';

const useGenreFilter = (initialSongs) => {
  const [filteredList, setFilteredList] = useState([]);
  const [active, setActive] = useState(false);

  const handleGenre = (e) => {
    let genre = e.target.dataset.genre;
    let filteredArray = initialSongs.filter((song) => song.genre === genre);

    setFilteredList(filteredArray);
    setActive(true);
  };

  return { filteredList, active, handleGenre };
};

export default useGenreFilter;
