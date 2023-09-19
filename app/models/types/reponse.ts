import { Blog } from '@/app/models/types/blog';

export type ResponseBlog = {
  blog: Blog;
  numberOfTotalPages: number;
  pageNumber: number;
};
