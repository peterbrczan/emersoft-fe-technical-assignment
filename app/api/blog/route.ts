import { NextRequest, NextResponse } from 'next/server';
import { fakeReadBlogFromDb } from '@/app/utils/fake-read-blog-from-db';

export async function GET(request: NextRequest) {
  const blog = await fakeReadBlogFromDb();

  return NextResponse.json(blog);
}
