// app/movies/[id]/page.tsx
import { notFound } from 'next/navigation';
import mongoose from 'mongoose';
import Movie, { MovieDocument } from '../../lib/schemas';
import { connect } from '../../lib/DbConnect';
import StarRating from '../../components/StarRating';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface MoviePageProps {
  params: {
    id: string;
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = params;

  await connect();

  const movie: MovieDocument | null = await Movie.findOne({ id: parseInt(id) }).lean();

  if (!movie) {
    notFound();
  }

  return (
    <main className="min-w-screen min-h-screen flex justify-start items-start p-4 bg-gray-100">
      <div className="flex flex-col items-start justify-start h-auto w-[375px] 2xl:w-[500px] 2xl:h-auto drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gray-300 rounded-lg p-4">
        <h1 className="text-3xl 2xl:text-5xl font-bold mb-4">{movie.title}</h1>
        <div className="flex items-start">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-40 2xl:w-60 mb-4"
          />
<span className="text-red-900 font-bold ml-4 text-lg 2xl:text-xl animate-upDownSize">Watch it now in Tidaholm Bio</span>
        </div>
        <p className="text-lg 2xl:text-xl"><strong>Genre:</strong> {movie.genre}</p>
        <p className="text-lg 2xl:text-xl"><strong>Release Date:</strong> {new Date(movie.date).toLocaleDateString()}</p>
        <p className="text-lg 2xl:text-xl"><strong>Ticket Price:</strong> {movie.ticketPrice} SEK</p>
        <p className="text-lg 2xl:text-xl"><strong>Premier Date:</strong> {new Date(movie.premierDate).toLocaleDateString()}</p>
        <div className="text-lg 2xl:text-xl"><strong>Rating:</strong> <StarRating rating={movie.rating} /></div>

        <div className="mt-4">
          <h2 className="text-xl 2xl:text-2xl font-bold mb-2">Reviews</h2>
          {movie.reviews.map((review: any, index: number) => (
            <div key={index} className="mb-2">
              <p className="text-lg 2xl:text-xl"><strong>Comment:</strong> {review.comment}</p>
              <div className="text-lg 2xl:text-xl"><strong>Rating:</strong> <StarRating rating={review.rating} /></div>
            </div>
          ))}
        </div>
        <div className="movie-story">
  <h2 className="text-2xl font-bold mt-8">Movie Story</h2>
  <p className="text-gray-800 mt-4">{movie.story}
   ----here  if i have time i will add the movie story for all movies
  </p>
</div>
<form  className="mt-4"> 
  <h2 className="text-xl 2xl:text-2xl font-bold mb-2">Leave a Comment</h2>
  <textarea 
  
    placeholder="Write your comment here..."
    className="w-full p-2 border border-gray-400 rounded"
  ></textarea>
  <div className="mt-2">
    <label className="block text-lg 2xl:text-xl font-semibold">Rating:</label>
    <select 
     
      className="p-2 border border-gray-400 rounded"
    >
      <option value={0}>Select rating</option>
      <option value={1}>1 Star</option>
      <option value={2}>2 Stars</option>
      <option value={3}>3 Stars</option>
      <option value={4}>4 Stars</option>
      <option value={5}>5 Stars</option>
    </select>
  </div>
  <button type="submit" className="mt-2 bg-red-900 text-white px-4 py-2 rounded hover:bg-yellow-900">Submit</button>
</form>
      </div>
    </main>
    
  );
}
