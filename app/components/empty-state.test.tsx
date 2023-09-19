import { EmptyState } from '@/app/components/empty-state';
import { render } from '@/app/utils/test-renderer';

describe('[component]: empty-state', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<EmptyState>Oops...there is no result</EmptyState>);

    expect(asFragment()).toMatchSnapshot();
  });
});
