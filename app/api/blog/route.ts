import { NextRequest, NextResponse } from 'next/server';
import { fakeReadBlogFromDb } from '@/app/utils/fake-read-blog-from-db';
import { Blog } from '@/app/models/types/blog';

export async function GET(request: NextRequest) {
  const blog = await fakeReadBlogFromDb();

  const searchValue = request.nextUrl.searchParams.get('searchValue') ?? '';

  const filteredBlog: Blog = { posts: [...blog.posts], categories: [...blog.categories] };

  if (searchValue) {
    filteredBlog.posts = filteredBlog.posts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }

  return NextResponse.json(filteredBlog);
}
