import { redirect } from 'next/navigation';
import { usersList } from '../../data/data';
import {NextResponse} from 'next/server';

export async function GET(request: Request) {
    // const data = await request.json();
    // console.log('GET Request', data);

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    console.log('Id ==>', id);

    redirect('https://nextjs.org/');

}

export async function POST(request: Request) {
    const data = await request.json();

    console.log('POST Request', data);
    
    usersList.push(data);
    
    return new Response(JSON.stringify(data));
}