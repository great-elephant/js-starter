
import { NextResponse } from 'next/server';


// To handle a POST request to /api
export async function POST() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(1), 3000);
  });

  return NextResponse.json(
    {
      data: { message: 'Hello World' },
    },
    { status: 200 }
  );
}