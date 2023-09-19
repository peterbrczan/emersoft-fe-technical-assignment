'use client';
import { useGetBlog } from '@/app/hooks/use-get-blog';

export default function Home() {
  const getBlog = useGetBlog();

  if (getBlog.isLoading) {
    return <div>loading...</div>;
  }

  return <div>home</div>;
}
