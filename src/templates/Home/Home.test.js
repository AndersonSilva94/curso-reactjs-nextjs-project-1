import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Home from './index';
import userEvent from '@testing-library/user-event';

const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          albumId: 1,
          userId: 1,
          id: 1,
          title: 'title 1',
          body: 'body 1',
          url: 'img1.jpg',
          thumbnailUrl: 'thumb 1',
        },
        {
          albumId: 2,
          userId: 2,
          id: 2,
          title: 'title 2',
          body: 'body 2',
          url: 'img2.jpg',
          thumbnailUrl: 'thumb 2',
        },
        {
          albumId: 3,
          userId: 3,
          id: 3,
          title: 'title 3',
          body: 'body 3',
          url: 'img3.jpg',
          thumbnailUrl: 'thumb 3',
        },
        {
          albumId: 4,
          userId: 4,
          id: 4,
          title: 'title 4',
          body: 'body 4',
          url: 'img4.jpg',
          thumbnailUrl: 'thumb 4',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });
  it('should render search, posts and load more', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem posts! :(');

    expect.assertions(3);

    await waitForElementToBeRemoved(noMorePosts);
    // screen.debug();

    const search = screen.getByPlaceholderText(/type your search/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img', { name: /title/i });
    expect(images).toHaveLength(3);

    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should search for posts', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem posts! :(');

    expect.assertions(12);

    await waitForElementToBeRemoved(noMorePosts);
    // screen.debug();

    const search = screen.getByPlaceholderText(/type your search/i);
    // expect(search).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'title 11' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title 22' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title 33' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title 44' })).not.toBeInTheDocument();

    userEvent.type(search, 'title 1');
    expect(screen.getByRole('heading', { name: 'title 11' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title 22' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title 33' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Search value: title 1' })).toBeInTheDocument();

    userEvent.clear(search);
    expect(screen.getByRole('heading', { name: 'title 11' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title 22' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title 33' })).toBeInTheDocument();

    userEvent.type(search, 'posts does not exists');
    expect(screen.getByText('Não existem posts! :(')).toBeInTheDocument();
  });

  it('should enabled or disabled button for more posts', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem posts! :(');

    expect.assertions(2);

    await waitForElementToBeRemoved(noMorePosts);

    const button = screen.getByRole('button', { name: /load more posts/i });

    userEvent.click(button);
    expect(screen.getByRole('heading', { name: 'title 44' })).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});

/* rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title 1',
          body: 'body 1',
        },
        {
          userId: 2,
          id: 2,
          title: 'title 2',
          body: 'body 2',
        },
        {
          userId: 3,
          id: 3,
          title: 'title 3',
          body: 'body 3',
        },
      ]),
    );
  }),
  rest.get('https://jsonplaceholder.typicode.com/photos', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          albumId: 1,
          id: 1,
          title: 'title 1',
          url: 'img1.jpg',
          thumbnailUrl: 'thumb 1',
        },
        {
          albumId: 2,
          id: 2,
          title: 'title 2',
          url: 'img2.jpg',
          thumbnailUrl: 'thumb 2',
        },
        {
          albumId: 3,
          id: 3,
          title: 'title 3',
          url: 'img3.jpg',
          thumbnailUrl: 'thumb 3',
        },
      ]),
    );
  }), */
