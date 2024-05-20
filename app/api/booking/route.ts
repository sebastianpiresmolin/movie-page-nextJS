
import { NextRequest, NextResponse } from 'next/server';
import {connect} from '../../lib/DbConnect';
import Booking from '../../lib/schemas';

export async function POST(req: NextRequest) {
  await connect();

  const { id, salon, date, time, bookedSeats } = await req.json();

  try {
    const newBooking = new Booking({
      id,
      salon,
      date,
      time,
      bookedSeats,
    });

    await newBooking.save();

    console.log('Booking data:', { id, salon, date, time, bookedSeats });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error booking seats:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
