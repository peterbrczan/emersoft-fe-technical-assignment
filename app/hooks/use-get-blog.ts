import { useQuery } from '@tanstack/react-query';
import { HttpClient } from '@/app/utils/http-client';

export function useGetBlog() {
  return useQuery(['get-blog'], {
    queryFn: async () => HttpClient.get('/api/blog'),
  });
}
