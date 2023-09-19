import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export const Skeleton: FC<SkeletonProps> = ({ children, ...restOfProps }) => {
  return (
    <div {...restOfProps} className={`animate-pulse  bg-gray-100 rounded-md dark:bg-gray-300 ${restOfProps.className}`}>
      {children}
    </div>
  );
};
