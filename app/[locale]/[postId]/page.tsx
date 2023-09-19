'use client';

import { useParams } from 'next/navigation';
import { useGetPost } from '@/app/hooks/use-get-post';
import Link from 'next/link';
import { useTranslations } from 'use-intl';
import React from 'react';

export default function Post() {
  const params = useParams() as { postId: string };
  const getPost = useGetPost(+params.postId);
  const textLabel = useTranslations('Label');
  const textCategory = useTranslations('Category');

  if (getPost.isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div className="mb-8">
        <Link href="/">
          <p className="text-pink-700 text-sm">{textLabel('Back')}</p>
        </Link>
      </div>
      <div>
        <img className="w-full h-[250px] object-cover mb-8" src={getPost.data?.imageUrl} alt={getPost.data?.title} />
        <h1 className="text-3xl mb-2 max-w-[450px]">{getPost.data?.title}</h1>
        <div className="flex flex-wrap gap-1 mb-8">
          {getPost.data?.categories.map((category) => (
            <span key={category.slug} className="bg-pink-700 rounded-[4px] px-1 py-1 text-sm font-semibold text-white">
              <p className="text-sm">{textCategory(category.name)}</p>
            </span>
          ))}
        </div>
        <p>{getPost.data?.excerpt}</p>
      </div>
    </div>
  );
}
