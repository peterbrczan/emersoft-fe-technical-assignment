import { render } from '@/app/utils/test-renderer';
import { Skeleton } from '@/app/components/skeleton';

describe('[component]: skeleton', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Skeleton />);

    expect(asFragment()).toMatchSnapshot();
  });
});
