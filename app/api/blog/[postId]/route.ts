import { NextRequest, NextResponse } from 'next/server';
import { fakeReadBlogFromDb } from '@/app/utils/fake-read-blog-from-db';
import { StandalonePost } from '@/app/models/types/post';

export async function GET(request: NextRequest, { params }: { params: { postId: string } }) {
  const postId = +params.postId;

  const blog = await fakeReadBlogFromDb();

  let post = blog.posts.find((post) => post.id === postId) ?? null;

  if (!post) {
    return NextResponse.json({}, { status: 404 });
  }

  const { categories, ...restOfPost } = post;

  let standalonePost: StandalonePost = {
    ...restOfPost,
    categories: [],
  };

  post.categories.forEach((postCategoryId) => {
    blog.categories.forEach((blogCategory) => {
      if (postCategoryId === blogCategory.id) {
        standalonePost.categories.push(blogCategory);
      }
    });
  });

  return NextResponse.json(standalonePost);
}
