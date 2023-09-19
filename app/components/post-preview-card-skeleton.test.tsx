import { render } from '@/app/utils/test-renderer';
import { PostPreviewCardSkeleton } from '@/app/components/post-preview-card-skeleton';

describe('[component]: post-preview-card-skeleton', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<PostPreviewCardSkeleton />);

    expect(asFragment()).toMatchSnapshot();
  });
});
