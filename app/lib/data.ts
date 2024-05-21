import { connect } from "./DbConnect";
import mongoose, { InferSchemaType, Model } from "mongoose";
import { UserSchema, MovieSchema } from "./schemas";


connect();

export let User: any;
/*export let Movie: any;

if (mongoose.models.Movie) {
  Movie = mongoose.model("Movie");
} else {
  Movie = mongoose.model("Movie", MovieSchema);
}*/

const Movie: Model <InferSchemaType <typeof MovieSchema>> = mongoose.models.Movie || mongoose.model("Movie", MovieSchema);

if (mongoose.models.User) {
  User = mongoose.model("User");
} else {
  User = mongoose.model("User", UserSchema);
}

export async function getTopRatedMovies() {
  const currentDate = new Date();
  const topRatedMovies = await Movie.find({
      premierDate: { $lte: currentDate }
  })
  .sort({ rating: -1 }) 
  .limit(3);

  return topRatedMovies;
}

export async function getUpcomingMovies() {
  const currentDate = new Date();
  const upcomingMovies = await Movie.find({
      premierDate: { $gt: currentDate } 
  })
  .limit(3); //

  return upcomingMovies;
}

export async function getAllMovies() {
  const movies = await Movie.find();
  return movies;
}
