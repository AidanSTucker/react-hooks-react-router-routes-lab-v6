import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie() {


  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then((response) => response.json())
    .then(data => setMovies(data))
  }, []);

  return (
    <div>
      <h1>
        <NavBar />
        Movies
      </h1>
      {movies.map((movie) => (
        <article>
          <h2>{movie.title}</h2>
          <ul>
            {movie.time}
          </ul>
          <ul>
          {movie.genres.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>

        </article>
      ))}

    </div>
  );
};

export default Movie;
