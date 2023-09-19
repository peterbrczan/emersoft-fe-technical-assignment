import { render } from '@/app/utils/test-renderer';
import { Controls } from '@/app/components/controls';

jest.mock('query-string', () => ({
  __esModule: true,
  default: {
    parse: jest.fn(),
    stringify: jest.fn(),
  },
}));

describe('[component]: controls', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Controls />);

    expect(asFragment()).toMatchSnapshot();
  });
});
