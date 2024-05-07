import { KidsButton } from '../ui/kids-button';
import { MoviePage } from '../ui/moviepage';

export default function Movies() {
  return (
    <main className="h-full w-full max-w-screen flex-grow min-h-screen">
      <div className="flex flex-col justify-center max-w-screen items-center">
        <KidsButton />
        <MoviePage />
      </div>
      <footer className="absolute bottom-0 w-screen"></footer>
    </main>
  );
}
