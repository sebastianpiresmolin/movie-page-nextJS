import { connect } from './DbConnect';
import mongoose from 'mongoose';
import { UserSchema, MovieSchema } from './schemas';

connect();

export let User: any;
export let Movie: any;


if (mongoose.models.User) {
  User = mongoose.model('User');
} else {
  User = mongoose.model('User', UserSchema);
}

if (mongoose.models.Movie) {
  Movie = mongoose.model('Movie');
} else {
  Movie = mongoose.model('Movie', MovieSchema);
}

export async function getAllMovies() {
  return await Movie.find().sort({ rating: -1 }).limit();
}
