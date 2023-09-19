import blog from '../data/blog.json';
import { Blog } from '@/app/models/types/blog';

export function fakeReadBlogFromDb() {
  return new Promise<Blog>((resolve) => {
    setTimeout(() => {
      resolve(blog);
    }, getRandomDivisibleBy500());
  });
}
