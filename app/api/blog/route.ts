import { NextRequest, NextResponse } from 'next/server';
import { fakeReadBlogFromDb } from '@/app/utils/fake-read-blog-from-db';
import { Blog } from '@/app/models/types/blog';
import { ResponseBlog } from '@/app/models/types/reponse';
import { Category } from '@/app/models/types/category';

export async function GET(request: NextRequest) {
  const blog = await fakeReadBlogFromDb();

  const searchValue = request.nextUrl.searchParams.get('searchValue') ?? '';
  const limit = Number(request.nextUrl.searchParams.get('limit')) ?? 4;
  const pageNumber = Number(request.nextUrl.searchParams.get('pageNumber')) ?? 1;
  const categorySlugs = request.nextUrl.searchParams.getAll('categorySlugs[]');

  const filteredBlog: Blog = { posts: [...blog.posts], categories: [...blog.categories] };

  if (searchValue) {
    filteredBlog.posts = filteredBlog.posts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }

  if (categorySlugs.length > 0) {
    filteredBlog.posts = filteredBlog.posts.filter((filteredPost) => {
      const postMappedCategorySlugs: string[] = [];

      filteredPost.categories.forEach((postCategoryId) => {
        filteredBlog.categories.forEach((blogCategory) => {
          if (postCategoryId === blogCategory.id) {
            postMappedCategorySlugs.push(blogCategory.slug);
          }
        });
      });

      return categorySlugs.every((categorySlug) => postMappedCategorySlugs.includes(categorySlug));
    });
  }

  const numberOfTotalPages = Math.ceil(filteredBlog.posts.length / limit);

  if (pageNumber) {
    const startIndex = (pageNumber - 1) * limit;
    const endIndex = pageNumber * limit;
    filteredBlog.posts = filteredBlog.posts.slice(startIndex, endIndex);
  }

  const response: ResponseBlog = {
    blog: filteredBlog,
    numberOfTotalPages,
    pageNumber,
  };

  return NextResponse.json(response);
}
