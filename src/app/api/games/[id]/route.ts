import {NextResponse} from 'next/server';
import {gameInfo} from '~shared/config/games';

export async function GET(request: Request, {params}: {params: {id: string}}) {
  const id = params.id;
  return NextResponse.json({...gameInfo, id});
}
