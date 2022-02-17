import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import MainContent from './MainContent';

// const testProduct = {
//   id: 1,
//   title: 'John',
//   image: 'Doe',
// };
// const testCategory = {
//   category: 'electronics',
// };

const server = setupServer(
  rest.get('https://fakestoreapi.com/products/', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  // rest.get('https://fakestoreapi.com/products/categories', (req, res, ctx) => {
  //   return res(ctx.status(200).json({ category: [testCategory] }));
  // }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('MainContent', () => {
  it('Test that the data the API gives is shown on the screen', async () => {
    render(<MainContent url="productURL" />);

    await waitFor(() => expect(screen.status.toBe(200)));
    // await waitFor(() =>
    //   expect(screen.getByText(`${testCategory.category}`).toBeInTheDocument()),
    // );
  });

  it('Test that the app is loading initially', async () => {
    render(<MainContent />);
    const element = screen.getByText(/Loading.../i);
    // screen.debug();
    // TODO!!!!!
    expect(element).toBeInTheDocument();
  });
});
