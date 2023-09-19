'use client';
import { useGetBlog } from '@/app/hooks/use-get-blog';
import { PostPreviewCard } from '@/app/components/post-preview-card';

export default function Home() {
  const getBlog = useGetBlog();

  if (getBlog.isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getBlog.data?.posts.map((post) => (
          <PostPreviewCard key={post.id} post={post} categories={getBlog.data?.categories ?? []} />
        ))}
      </div>
    </div>
  );
}
