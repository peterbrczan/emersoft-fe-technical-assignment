import { Header } from '@/app/components/header';
import { render } from '@/app/utils/test-renderer';

describe('[component]: header', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
