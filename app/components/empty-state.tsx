import type { FC, PropsWithChildren } from 'react';
import React from 'react';

export const EmptyState: FC<PropsWithChildren> = ({ children }) => {
  return <div className="bg-gray-200 h-32 p-2 flex items-center justify-center rounded-[4px]">{children}</div>;
};
