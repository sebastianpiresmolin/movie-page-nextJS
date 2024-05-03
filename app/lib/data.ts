import { connect } from './DbConnect';
import mongoose from 'mongoose';
import { UserSchema, MovieSchema } from './schemas';

connect();

export let User: any;
export let Movie: any;

if (mongoose.models.Movie) {
  Movie = mongoose.model('Movie');
} else {
  Movie = mongoose.model('Movie', MovieSchema);
}

if (mongoose.models.User) {
  User = mongoose.model('User');
} else {
  User = mongoose.model('User', UserSchema);
}

export async function getMovies() {
  const movies = await Movie.find().limit(3);
  return movies;
}
