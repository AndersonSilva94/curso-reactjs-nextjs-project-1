import { render, screen } from '@testing-library/react';
import postCardsPropsMock from './mock';
import PostCard from './index';

const propsMock = postCardsPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard post={propsMock} />);

    expect(screen.getByRole('img', { name: /title 1/i })).toBeInTheDocument();
    expect(screen.getByAltText(/title 1/i)).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard post={propsMock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
