'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Movies() {
    const router = useRouter();
    const [kids, setKids] = React.useState({
      genre: 'Children',
    });

  const loadMovies = async () => {
    try {
      const response = await axios.get('/api/movies/movie-page', { params: kids });
      console.log(response.data);
    } catch (error: any) {
      console.log('Failed to load movies', error.message);
    }
  }

useEffect(() => {
  loadMovies();
}, []);


  return (
    <main className="h-full w-full max-w-screen flex-grow min-h-screen">
      <div className="flex flex-col justify-center max-w-screen items-center">

      </div>
      <footer className="absolute bottom-0 w-screen"></footer>
    </main>
  );
}
