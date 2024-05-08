'use client';
import { useState } from 'react';

export function KidsButton() {
  const [kidsMovies, setKidsMovies] = useState(false);

  const handleOnClick = () => {
    if (kidsMovies === false) {
      setKidsMovies(true);
    } else {
      setKidsMovies(false);
    }
    console.log(kidsMovies);
  };

  return (
    <div className="flex w-full max-w-[1100px] justify-between mt-20">
      <h1 className="text-4xl text-black font-bold mb-4 antialiased ">
        Movies
      </h1>
      <button
        onClick={handleOnClick}
        className="text-black text-2xl rounded-xl h-10 w-16 bg-gradient-to-r from-amber-500 to-pink-500"
      >
        Kids
      </button>
    </div>
  );
}
