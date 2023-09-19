import { ErrorState } from '@/app/components/error-state';
import { render } from '@/app/utils/test-renderer';

describe('[component]: error-state', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<ErrorState>Oops...something went wrong</ErrorState>);

    expect(asFragment()).toMatchSnapshot();
  });
});
