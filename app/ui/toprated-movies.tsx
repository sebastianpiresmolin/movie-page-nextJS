import React from 'react';
import Link from 'next/link';
import { getTopRatedMovies } from '../lib/data';

interface Movie {
    _id: string;
    title: string;
    image: string;
}

type MovieList = Movie[];

export async function TopRatedMovies() {
    const movies: MovieList = await getTopRatedMovies();

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-xl text-black font-bold mb-4 text-center">Popular right now</h1>
            <div className="flex overflow-x-auto space-x-4 lg:justify-center">
                {movies.map((movie: Movie) => (
                    <Link href={`/movies/${movie._id}`} key={movie._id}>
                        <div className="min-w-[150px] md:min-w-[200px] lg:max-w-[300px] bg-gray-50 shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-lg text-black font-semibold mb-2 text-center">{movie.title}</h2>
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
