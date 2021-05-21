import { render, screen } from '@testing-library/react';
import { postCardsPropsMock } from './mock';
import PostCard from './index';

const props = postCardsPropsMock

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    /* expect(screen.getByRole('img', { name: props.title})).toBeInTheDocument(); */
    expect(screen.getByAltText(/title 1/i)).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'title 1' })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  })
})