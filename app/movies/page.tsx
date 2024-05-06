import { MoviePage } from '../ui/moviepage';

export default function Movies() {
  return (
    <main className="h-full w-full max-w-screen flex-grow min-h-screen">
      <div className="flex justify-center max-w-screen items-center">
        <MoviePage />
      </div>
      <footer className="absolute bottom-0 w-screen"></footer>
    </main>
  );
}
