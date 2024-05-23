import mongoose, { Schema, Document } from 'mongoose';

export interface BookingDocument extends Document {
  email: string; 
  movieId: mongoose.Types.ObjectId;
  salon: number;
  date: string;
  time: string;
  seatNumbers: number[];
}

const bookingSchema = new Schema<BookingDocument>({
  email: { type: String, required: true }, 
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  salon: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  seatNumbers: { type: [Number], required: true },
});

const Booking = mongoose.models.Booking || mongoose.model<BookingDocument>('Booking', bookingSchema);

export default Booking;
