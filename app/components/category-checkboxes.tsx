'use client';

import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { Category } from '@/app/models/types/category';
import { useTranslations } from 'use-intl';

export type CategoryCheckboxesProps = {
  categories: Category[];
  handleCategorySlugs: (categorySlugs: string[]) => void;
};

export const CategoryCheckboxes: FC<CategoryCheckboxesProps> = (props) => {
  const [categorySlugs, setCategorySlugs] = useState<string[]>([]);
  const textCategory = useTranslations('Category');

  useEffect(() => {
    props.handleCategorySlugs(categorySlugs);
  }, [categorySlugs]);

  function toggleCheckbox(categorySlug: string) {
    let copyCategorySlugs = [...categorySlugs];

    if (categorySlugs.includes(categorySlug)) {
      copyCategorySlugs = copyCategorySlugs.filter((copyCategorySlug) => copyCategorySlug !== categorySlug);
    } else {
      copyCategorySlugs.push(categorySlug);
    }

    setCategorySlugs(copyCategorySlugs);
  }

  return (
    <div className="flex gap-4 flex-wrap">
      {props.categories.map((category) => (
        <div key={category.slug} className="flex items-center">
          <input
            id={category.slug}
            type="checkbox"
            checked={categorySlugs.includes(category.slug)}
            className="w-[16px] h-[16px] rounded-[4px] cursor-pointer"
            onChange={() => toggleCheckbox(category.slug)}
          />
          <label for={category.slug} className="ml-[8px] text-sm font-medium text-gray-900 cursor-pointer">
            {textCategory(category.name)}
          </label>
        </div>
      ))}
    </div>
  );
};
