import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Genres from "./pages/Genres.jsx";
import AllSongs from "./pages/AllSongs.jsx";
import Results from "./pages/Results.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <header className="h-max bg-main-color">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results/:songName" element={<Results />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/all" element={<AllSongs />} />
        </Routes>
      </main>
      <Routes>
        <Route path="/*" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
