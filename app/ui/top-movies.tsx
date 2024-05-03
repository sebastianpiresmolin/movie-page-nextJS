import React from 'react';
import { getMovies } from '../lib/data';


export async function TopMovies() {
    const movies = await getMovies();
  return (
    <div>
      <h1>Top Movies</h1>
      <ul>
        {movies.map((movie: any) => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
