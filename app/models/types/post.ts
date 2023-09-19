import { Category } from '@/app/models/types/category';

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: number[];
};

export type StandalonePost = Omit<Post, 'categories'> & { categories: Category[] };
