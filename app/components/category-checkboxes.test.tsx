import { render } from '@/app/utils/test-renderer';
import { CategoryCheckboxes, CategoryCheckboxesProps } from '@/app/components/category-checkboxes';
import { fireEvent } from '@testing-library/dom';

jest.mock('next/navigation');

describe('[component]: category-checkboxes', () => {
  let defaultProps: CategoryCheckboxesProps;

  beforeEach(() => {
    defaultProps = {
      categories: [
        { id: 1, name: 'Books', slug: 'books' },
        { id: 2, name: 'Music', slug: 'music' },
        { id: 3, name: 'Toys', slug: 'toys' },
      ],
      handleCategorySlugs: jest.fn(),
    };
  });

  it('should without categories match snapshot', () => {
    defaultProps.categories = [];
    const { asFragment } = render(<CategoryCheckboxes {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should with categories match snapshot', () => {
    const { asFragment } = render(<CategoryCheckboxes {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should call callback when checking checkbox', () => {
    const { asFragment, getByTestId } = render(<CategoryCheckboxes {...defaultProps} />);

    const booksCheckbox = getByTestId('books');

    fireEvent.click(booksCheckbox);

    expect(defaultProps.handleCategorySlugs).toHaveBeenCalledWith(['books']);
  });

  it('should call callback with multiple slug when checking multiple checkboxes', () => {
    const { asFragment, getByTestId } = render(<CategoryCheckboxes {...defaultProps} />);

    const booksCheckbox = getByTestId('books');
    const toysCheckbox = getByTestId('toys');

    fireEvent.click(booksCheckbox);
    fireEvent.click(toysCheckbox);

    expect(defaultProps.handleCategorySlugs).toHaveBeenCalledWith(['books', 'toys']);
  });
});
