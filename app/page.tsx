import React from "react";
import { TopRatedMovies } from "./ui/toprated-movies";
import { UpcomingMovies } from "./ui/upcoming-movies";

export default function Home() {
  return (
    <main className="h-full max-w-screen">
      <div>
        <TopRatedMovies />
      </div>
      <div>
        <UpcomingMovies />
      </div>
      <footer className="absolut bottom-0 w-screen"></footer>
    </main>
  );
}
