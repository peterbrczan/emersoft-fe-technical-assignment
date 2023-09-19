import type { FC } from 'react';
import React from 'react';
import { Skeleton } from '@/app/components/skeleton';

export const PostPreviewCardSkeleton: FC = () => {
  return (
    <div className="max-w-xs w-[100%] h-[100%] bg-white shadow-md rounded-[4px] overflow-hidden ">
      <Skeleton className="w-full h-48" />
      <div className="px-2 py-2">
        <div className="flex flex-wrap gap-1 mb-2">
          {new Array(2).fill('').map((_, index) => (
            <Skeleton key={index} className="h-[28px] w-[100px]" />
          ))}
        </div>
        <div className="mb-2">
          <Skeleton className="h-[28px] w-[200px] mb-1" />
          <Skeleton className="h-[28px] w-[150px]" />
        </div>
      </div>
    </div>
  );
};
