import { connect } from '@/app/lib/DbConnect';
import { Movie } from '@/app/lib/data';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    let genre = searchParams.get('genre');
    const mongoQuery = genre ? { genre } : {};

    const movies = await Movie.find(mongoQuery).sort({ rating: -1 });
    return NextResponse.json({ movies });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
