import React from "react";
import { TopRatedMovies } from "./ui/toprated-movies";
import { UpcomingMovies } from "./ui/upcoming-movies";

export default function Home() {
  return (
    <main className="h-screen max-w-screen">
      <div className="text-blue-500 text-4xl flex items-center p-10 justify-center">
        <TopRatedMovies />
      </div>
      <div className="text-blue-500 text-4xl flex items-center p-10 justify-center">
        <UpcomingMovies />
      </div>
      <footer className="absolut bottom-0 w-screen"></footer>
    </main>
  );
}
