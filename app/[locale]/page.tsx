'use client';

import { useGetBlog } from '@/app/hooks/use-get-blog';
import { PostPreviewCard } from '@/app/components/post-preview-card';
import { PostPreviewCardSkeleton } from '@/app/components/post-preview-card-skeleton';
import { Controls } from '@/app/components/controls';
import { useTranslations } from 'use-intl';
import { ErrorState } from '@/app/components/error-state';
import React from 'react';
import { EmptyState } from '@/app/components/empty-state';

export default function Home() {
  const getBlog = useGetBlog();
  const textCommon = useTranslations('Common');

  const isEmpty = !getBlog.isLoading && !getBlog.isError && !getBlog.data.blog.posts.length;

  return (
    <div>
      <div className="mb-4">
        <Controls />
      </div>
      {!isEmpty && (
        <h1 className="mb-4 font-bold">
          {textCommon('{pageNumber} page / {numberOfTotalPages} pages', {
            pageNumber: getBlog.data?.pageNumber ?? 0,
            numberOfTotalPages: getBlog.data?.numberOfTotalPages ?? 0,
          })}
        </h1>
      )}
      {getBlog.isError && (
        <ErrorState>
          <p className="text-gray-600 text-sm">{textCommon('Something went wrong!')}</p>
        </ErrorState>
      )}
      {isEmpty && (
        <EmptyState>
          <p className="text-gray-600 text-sm">{textCommon("Looks like we don't have any posts to show")}</p>
        </EmptyState>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getBlog.isLoading && new Array(4).fill('').map((_, index) => <PostPreviewCardSkeleton key={index} />)}
        {getBlog.data?.blog.posts.map((post) => (
          <PostPreviewCard key={post.id} post={post} categories={getBlog.data?.blog.categories ?? []} />
        ))}
      </div>
    </div>
  );
}
