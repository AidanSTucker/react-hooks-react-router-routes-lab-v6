// Home.js
import React from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

const Home = () => {
  // Sample movie data, replace with your own data
  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    // Add more movies here
  ];

  return (
    <div>
      <h1> 
      <NavBar />
      Home Page
      </h1>
      <div>
        {movies.map((movie) => (
          <MovieCard />
        ))}
      </div>
    </div>
  );
};

export default Home;
