import { useQuery } from '@tanstack/react-query';
import { HttpClient } from '@/app/utils/http-client';
import { Blog } from '@/app/models/types/blog';

export function useGetBlog() {
  return useQuery(['get-blog'], {
    queryFn: async () => HttpClient.get<Blog>('/api/blog'),
  });
}
