import { useQuery } from '@tanstack/react-query';
import { HttpClient } from '@/app/utils/http-client';
import { Blog } from '@/app/models/types/blog';
import { SearchParams } from '@/app/models/types/search-params';
import queryString from 'query-string';

export function useGetBlog(searchParams: SearchParams = {}) {
  const search = queryString.stringify(searchParams, { arrayFormat: 'bracket' });

  return useQuery({
    queryKey: ['get-blog', searchParams],
    queryFn: async () => HttpClient.get<Blog>(`/api/blog?${search}`),
  });
}
