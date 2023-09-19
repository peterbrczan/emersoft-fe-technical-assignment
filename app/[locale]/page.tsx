'use client';

import { useGetBlog } from '@/app/hooks/use-get-blog';
import { PostPreviewCard } from '@/app/components/post-preview-card';
import { PostPreviewCardSkeleton } from '@/app/components/post-preview-card-skeleton';

export default function Home() {
  const getBlog = useGetBlog();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getBlog.isLoading && new Array(4).fill('').map((_, index) => <PostPreviewCardSkeleton key={index} />)}
        {getBlog.data?.posts.map((post) => (
          <PostPreviewCard key={post.id} post={post} categories={getBlog.data?.categories ?? []} />
        ))}
      </div>
    </div>
  );
}
