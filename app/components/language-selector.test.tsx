import { render } from '@/app/utils/test-renderer';
import { LanguageSelector } from '@/app/components/language-selector';

describe('[component]: language-selector', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<LanguageSelector />);

    expect(asFragment()).toMatchSnapshot();
  });
});
