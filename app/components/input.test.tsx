import { render } from '@/app/utils/test-renderer';
import { Input, InputProps } from '@/app/components/input';
import { fireEvent, waitFor } from '@testing-library/dom';

describe('[component]: input', () => {
  let defaultProps: InputProps;

  beforeEach(() => {
    defaultProps = {
      handleSearchValue: jest.fn(),
    };
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Input {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should call callback when typing something', async () => {
    const { asFragment, getByTestId } = render(<Input {...defaultProps} />);

    const inputElement = getByTestId('search-input');

    fireEvent.change(inputElement, { target: { value: 'Tom' } });

    await waitFor(() => expect(defaultProps.handleSearchValue).toHaveBeenCalledWith('Tom'));
  });
});
