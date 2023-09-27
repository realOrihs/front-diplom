import {NextResponse} from 'next/server';
import {games} from '~shared/config/games';

export async function GET(request: Request) {
  return NextResponse.json({games: games});
}
