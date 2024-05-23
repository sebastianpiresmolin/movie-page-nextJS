import { NextRequest, NextResponse } from 'next/server';
import { connect } from '../../lib/DbConnect';
import Booking from '../../lib/booking';
import Movie from '../../lib/schemas';

export async function POST(req: NextRequest) {
  await connect();

  const { movieId, salon, date,email , time, seatNumbers } = await req.json();

  try {
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return NextResponse.json({ message: 'Movie not found' }, { status: 404 });
    }

    const newBooking = new Booking({
      movieId,
      salon,
      date,
      time,
      seatNumbers,
      email,
    });

    await newBooking.save();

    console.log('Booking data:', { movieId, salon, date, time,
       seatNumbers,email });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error booking seats:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
