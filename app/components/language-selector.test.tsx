import { render } from '@/app/utils/test-renderer';
import { LanguageSelector } from '@/app/components/language-selector';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockReturnValue('/en'),
}));

describe('[component]: language-selector', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<LanguageSelector />);

    expect(asFragment()).toMatchSnapshot();
  });
});
