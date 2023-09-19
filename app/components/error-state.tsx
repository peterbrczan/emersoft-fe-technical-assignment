import type { FC, PropsWithChildren } from 'react';
import React from 'react';

export const ErrorState: FC<PropsWithChildren> = ({ children }) => {
  return <div className="bg-red-300 h-32 p-2 flex items-center justify-center rounded-[4px]">{children}</div>;
};
