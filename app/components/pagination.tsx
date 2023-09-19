'use client';

import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'use-intl';

export type PaginationProps = {
  pageNumber: number;
  numberOfTotalPages: number;
  handlePageNumber: (pageNumber: number) => void;
};

export const Pagination: FC<PaginationProps> = (props) => {
  const [pageNumber, setPageNumber] = useState(props.pageNumber);
  const textLabel = useTranslations('Label');

  useEffect(() => {
    props.handlePageNumber(pageNumber);
  }, [pageNumber]);

  const isNextButtonDisabled = pageNumber + 1 > props.numberOfTotalPages;
  const isPreviousButtonDisabled = pageNumber - 1 < 1;

  function handleNextPage() {
    if (!isNextButtonDisabled) {
      setPageNumber((previousPageNumber) => previousPageNumber + 1);
    }
  }

  function handlePreviousPage() {
    if (!isPreviousButtonDisabled) {
      setPageNumber((previousPageNumber) => previousPageNumber - 1);
    }
  }

  return (
    <div className="grid grid-cols-2 gap-1">
      <button
        className="bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4 border border-pink-700 rounded disabled:bg-pink-200 disabled:border-0"
        onClick={handlePreviousPage}
        disabled={isPreviousButtonDisabled}
      >
        <p className="text-sm">{textLabel('Previous')}</p>
      </button>
      <button
        className="bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4 border border-pink-700 rounded disabled:bg-pink-200 disabled:border-0"
        onClick={handleNextPage}
        disabled={isNextButtonDisabled}
      >
        <p className="text-sm">{textLabel('Next')}</p>
      </button>
    </div>
  );
};
