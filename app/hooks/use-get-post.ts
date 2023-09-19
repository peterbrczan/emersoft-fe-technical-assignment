import { useQuery } from '@tanstack/react-query';
import { HttpClient } from '@/app/utils/http-client';
import { StandalonePost } from '@/app/models/types/post';

export function useGetPost(postId: number) {
  return useQuery({
    queryKey: ['get-post', postId],
    queryFn: async () => HttpClient.get<StandalonePost>(`/api/blog/${postId}`),
  });
}
