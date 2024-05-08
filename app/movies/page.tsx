'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function Movies() {
  const [movies, setMovies] = React.useState([]);
  const [kids, setKids] = React.useState({
    genre: '',
  });

  const loadMovies = async () => {
    try {
      const response = await axios.get('/api/movies/movie-page', {
        params: kids,
      });
      setMovies(response.data.movies);
      console.log(response.data);
    } catch (error: any) {
      console.log('Failed to load movies', error.message);
    }
  };

  const handleOnClick = () => {
    if (kids.genre === 'Children') {
      setKids({ genre: '' });
    } else {
      setKids({ genre: 'Children' });
    }
  };

  useEffect(() => {
    loadMovies();
  }, [kids]);

  return (
    <main className="h-full w-full max-w-screen flex-grow min-h-screen">
      <div className="flex flex-col justify-center max-w-screen items-center">
        <div className="flex w-full max-w-[1000px] justify-between mt-20">
          <h1 className="text-4xl text-black font-bold mb-4 antialiased ">
            Movies
          </h1>
          <button
            onClick={handleOnClick}
            className={`text-black text-2xl rounded-xl h-10 w-16 ${kids.genre === '' ? 'bg-transparent' : 'bg-gradient-to-r from-amber-500 to-pink-500'}`}
          >
            Kids
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-[1100px] flex flex-col bg-neutral-600 bg-opacity-30 rounded-lg justify-center items-center mt-5 mb-24 p-6">
            <ul className="flex w-11/12 max-w-[1000px] flex-wrap justify-evenly items-center gap-5">
              {movies.map((movie: any) => (
                <Link href={`/movies/${movie.id}`} key={movie.id}>
                  <li
                    className="flex flex-col justify-center items-center h-[375px] min-w-[150px] md:min-w-[200px] lg:max-w-[300px]
               bg-gray-50 shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:scale-95"
                  >
                    <h3 className="text-black text-xl antialiased mb-3 max-w-[200px] ">
                      {movie.title}
                    </h3>
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-[200px]"
                    />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 w-screen"></footer>
    </main>
  );
}
