import { useQuery, useQueryClient } from '@tanstack/react-query';
import { HttpClient } from '@/app/utils/http-client';
import queryString from 'query-string';
import { SearchParams } from '@/app/models/types/search-params';
import { ResponseBlog } from '@/app/models/types/reponse';

export function useGetBlog(searchParams: SearchParams = {}) {
  const queryClient = useQueryClient();
  const defaultSearchParams: SearchParams = { pageNumber: 1, limit: 4, ...searchParams };
  const search = queryString.stringify(defaultSearchParams, { arrayFormat: 'bracket' });

  return useQuery({
    queryKey: ['get-blog', searchParams],
    queryFn: async () => HttpClient.get<ResponseBlog>(`/api/blog?${search}`),
    onSuccess: (data) => {
      queryClient.setQueryData(['get-blog', {}], data);
    },
  });
}
