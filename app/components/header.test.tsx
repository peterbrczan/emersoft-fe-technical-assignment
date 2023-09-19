import { Header } from '@/app/components/header';
import { render } from '@/app/utils/test-renderer';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockReturnValue('/en'),
}));

describe('[component]: header', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
