'use client';

import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import { Post } from '@/app/models/types/post';
import { Category } from '@/app/models/types/category';

export type PostPreviewCardProps = {
  post: Post;
  categories: Category[];
};

export const PostPreviewCard: FC<PostPreviewCardProps> = (props) => {
  const [isImageError, setIsImageError] = useState(false);

  function onImageError() {
    setIsImageError(true);
  }

  function getSrc() {
    return isImageError
      ? 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ='
      : props.post.imageUrl;
  }

  const mappedCategories: Category[] = useMemo(() => {
    let categories: Category[] = [];

    props.post.categories.forEach((postCategoryId) => {
      props.categories.forEach((category) => {
        if (postCategoryId === category.id) {
          categories.push(category);
        }
      });
    });

    return categories;
  }, [props.categories, props.post]);

  return (
    <div className="max-w-xs w-[100%] h-[100%] bg-white shadow-md rounded-[4px] overflow-hidden">
      <img className="w-full h-48 object-cover" src={getSrc()} alt={props.post.title} onError={onImageError} />
      <div className="px-2 py-2">
        <div className="flex flex-wrap gap-1 mb-2">
          {mappedCategories.map((category) => (
            <span key={category.slug} className="bg-pink-700 rounded-[4px] px-1 py-1 text-sm font-semibold text-white">
              <p className="text-sm">{category.name}</p>
            </span>
          ))}
        </div>
        <div className="font-bold text-xl mb-2">
          <h3 className="text-lg">{props.post.title}</h3>
        </div>
      </div>
    </div>
  );
};
