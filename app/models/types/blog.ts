import { Post } from '@/app/models/types/post';
import { Category } from '@/app/models/types/category';

export type Blog = {
  posts: Post[];
  categories: Category[];
};
