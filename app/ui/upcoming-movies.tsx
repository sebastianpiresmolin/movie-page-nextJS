import React from "react";
import { getUpcomingMovies } from "../lib/data";

export async function UpcomingMovies() {
    const movies = await getUpcomingMovies();

    return (
        <div>
            <h1 className="text-xl text-black font-bold mb-4 text-center">Upcoming movies</h1>
            <ul className="flex flex-wrap gap-4">
                {movies.map((movie: any) => (
                    <li key={movie._id} className="w-0/3">
                        <div className="bg-gray-50 shadow-md p-4 rounded-lg">
                            <h2 className="text-lg text-black font-semibold mb-2 text-center">{movie.title}</h2>
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="w-40 h-auto rounded-md"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


