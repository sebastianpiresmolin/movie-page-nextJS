import React from 'react';
import Link from 'next/link';
import { getUpcomingMovies } from '../lib/data';

interface Movie {
    id: string;
    title: string;
    image: string;
}

type MovieList = Movie[];

export async function UpcomingMovies() {
    const movies: MovieList = await getUpcomingMovies();

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl text-black font-bold mb-4 text-center">Upcoming movies</h1>
            <div className="flex overflow-x-auto space-x-4 sm:justify-center">
                {movies.map((movie: Movie) => (
                    <Link href={`/movies/${movie.id}`} key={movie.id}>
                        <div className="max-w-xs sm:max-w-md lg:max-w-lg min-w-[150px] bg-gray-50 shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:scale-95">
                            <h2 className="text-lg text-black font-semibold mb-2 text-center">{movie.title}</h2>
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="rounded-md w-full h-48 sm:h-64 lg:h-80"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
