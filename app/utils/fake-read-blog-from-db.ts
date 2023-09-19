import blog from '../data/blog.json';
import { Blog } from '@/app/models/types/blog';
import { getRandomDivisibleBy500 } from '@/app/utils/get-random-divisible-by-500';

export function fakeReadBlogFromDb() {
  const timeout = getRandomDivisibleBy500();

  return new Promise<Blog>((resolve) => {
    setTimeout(() => {
      resolve(blog);
    }, timeout);
  });
}
