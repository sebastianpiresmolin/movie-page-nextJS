import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  name_last: {
    type: String,
    required: [true, 'Please provide your last name'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  phone: {
    type: Number,
    required: [true, 'Please provide your phone number'],
  },
  booking: {
    type: Array,
    required: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

export const MovieSchema = new Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  id: {
    type: Number,
  },
  genre: {
    type: String,
  },
  rating: {
    type: String,
  },
});



import mongoose, { Document} from 'mongoose';




export interface MovieDocument extends Document {
  id: number;
  title: string;
  genre: string;
  image: string;
  sdate: Date;
  ticketPrice: number;
  reviews: Array<object>;
  premierDate: Date;
  rating: string;
  story:string;
  bookedSeats: number[];
  seats:number;
  salon: number;
  time: string;
  date: string[];


}



const movieSchema = new Schema<MovieDocument>({
  id: { type: Number, required: true },
  title: { type: String},
  genre: { type: String  },
  sdate: { type: Date },
  ticketPrice: { type: Number},
  reviews: { type: [Object] },
  premierDate: { type: Date },
  rating: { type: String  },
  story: { type: String,},
  bookedSeats: { type: [Number], default: [] }, 
  seats: { type: Number }, 
  salon: { type: Number },
  time: { type: String, required: true },
  date: { type: [String], required: true }

     
});

const Movie = mongoose.models.Movie || mongoose.model<MovieDocument>('Movie', movieSchema);

export default Movie;
