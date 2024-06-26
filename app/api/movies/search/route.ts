import { connect } from '@/app/lib/DbConnect';
import { Movie } from '@/app/lib/data';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    let title = searchParams.get('title');
    // this regex flag makes the query case insensitive when trying to match the title
    const mongoQuery = title
      ? { title: { $regex: new RegExp(title, 'i') } }
      : {};

    const movies = await Movie.findOne(mongoQuery);
    console.log(movies);
    if (movies) {
      return NextResponse.json({ id: movies.id });
    } else {
      return NextResponse.json({ id: ' ' });
    }
  } catch (error: any) {
    return NextResponse.error();
  }
}
