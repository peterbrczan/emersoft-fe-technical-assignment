'use client';

import { useParams } from 'next/navigation';
import { useGetPost } from '@/app/hooks/use-get-post';
import Link from 'next/link';
import { useTranslations } from 'use-intl';
import React from 'react';
import { EmptyState } from '@/app/components/empty-state';
import { ErrorState } from '@/app/components/error-state';

export default function Post() {
  const params = useParams() as { postId: string };
  const getPost = useGetPost(+params.postId);
  const textLabel = useTranslations('Label');
  const textCategory = useTranslations('Category');
  const textCommon = useTranslations('Common');

  return (
    <div>
      <div className="mb-8">
        <Link href="/">
          <p className="text-pink-700 text-sm">{textLabel('Back')}</p>
        </Link>
      </div>
      <div>
        {getPost.isLoading && <p className="text-sm">{textLabel('Loading')}</p>}
        {getPost.isError && (
          <ErrorState>
            <p className="text-gray-600 text-sm">{textCommon('Something went wrong!')}</p>
          </ErrorState>
        )}
        {!getPost.isLoading && !getPost.isError && !getPost.data && (
          <EmptyState>
            <p className="text-gray-600 text-sm">
              {textCommon.rich('We found no post with the given {postId} post id', {
                postId: params.postId,
                strong: (text) => <span className="font-extrabold">{text}</span>,
              })}
            </p>
          </EmptyState>
        )}
        {!getPost.isLoading && getPost.data && (
          <>
            <img
              className="w-full h-[250px] object-cover mb-8"
              src={getPost.data?.imageUrl}
              alt={getPost.data?.title}
            />
            <h1 className="text-3xl mb-2 max-w-[450px]">{getPost.data?.title}</h1>
            <div className="flex flex-wrap gap-1 mb-8">
              {getPost.data?.categories.map((category) => (
                <span
                  key={category.slug}
                  className="bg-pink-700 rounded-[4px] px-1 py-1 text-sm font-semibold text-white"
                >
                  <p className="text-sm">{textCategory(category.name)}</p>
                </span>
              ))}
            </div>
            <p>{getPost.data?.excerpt}</p>
          </>
        )}
      </div>
    </div>
  );
}
