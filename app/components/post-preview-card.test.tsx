import { render } from '@/app/utils/test-renderer';
import { PostPreviewCard, PostPreviewCardProps } from '@/app/components/post-preview-card';

jest.mock('next/navigation');

describe('[component]: post-preview-card', () => {
  let defaultProps: PostPreviewCardProps;

  beforeEach(() => {
    defaultProps = {
      post: {
        id: 113,
        slug: 'w16ObP',
        title: 'Lorem Ipsum',
        excerpt: 'Lorem ipsum dolor sit amet',
        imageUrl: '',
        categories: [],
      },
      categories: [],
    };
  });

  it('should without categories match snapshot', () => {
    const { asFragment } = render(<PostPreviewCard {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should with categories match snapshot', () => {
    defaultProps.post.categories = [1, 2, 3];
    defaultProps.categories = [
      { id: 1, name: 'Books', slug: 'books' },
      { id: 2, name: 'Music', slug: 'music' },
      { id: 3, name: 'Toys', slug: 'toys' },
    ];
    const { asFragment } = render(<PostPreviewCard {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
