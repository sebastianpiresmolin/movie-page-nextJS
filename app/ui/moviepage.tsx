// THIS IS OBSOLETE, DO NOT USE
// SAVING THIS TO SHOW RICHARD

import { getAllMovies } from '../lib/data';
import Link from 'next/link';


export async function MoviePage() {
  const movies = await getAllMovies();


  return (
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
  );
}
