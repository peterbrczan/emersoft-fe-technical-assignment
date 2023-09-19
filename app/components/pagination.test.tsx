import { render } from '@/app/utils/test-renderer';
import { Pagination, PaginationProps } from '@/app/components/pagination';

describe('[component]: pagination', () => {
  let defaultProps: PaginationProps;

  beforeEach(() => {
    defaultProps = {
      pageNumber: 1,
      numberOfTotalPages: 4,
      handlePageNumber: jest.fn(),
    };
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Pagination {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should with disabled previous button match snapshot', () => {
    defaultProps.numberOfTotalPages = 1;
    const { asFragment } = render(<Pagination {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should with disabled next button match snapshot', () => {
    defaultProps.numberOfTotalPages = 4;
    const { asFragment } = render(<Pagination {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
