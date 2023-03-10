import React, { useState } from "react";
import "../App.css";
import searchIcon from "../search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=1e3a033e";

const Movieland = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <p>
        A movie is an electronic signal of moving graphics, pictures, or text
        used to combine a steady stream of images used for entertainment,
        education, or other uses. This term describes content that's longer than
        ten minutes, or something you would watch on your TV or at the theater.
        Whereas video describes short clips or files on the Internet, see the
        video definition for further information and online example. To play a
        movie file on your computer, you must have a movie player program that
        supports the video file you're trying to play. For example, movie
        players that work with Windows are Windows Media Player (included with
        Windows) and VLC (that also works on other platforms).
      </p>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="SearchIcon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Movieland;
