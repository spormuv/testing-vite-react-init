import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import App from '../App';

describe('Renders main page correctly', async () => {
  //Resets all renders after each test
  afterEach(() => {
    cleanup();
  });

  it('Should render the page correctly', async () => {
    await render(<App />);
    const h1 = await screen.queryByText('Vite + React');

    expect(h1).toBeInTheDocument();
  });

  it('Should show the button count set to 0', async () => {
    await render(<App />);
    const button = await screen.queryByText('count is 0');

    expect(button).toBeInTheDocument();
  });

  it('Should show the button count set to 3', async () => {
    const user = userEvent.setup();
    await render(<App />);
    const button = await screen.queryByText('count is 0');

    expect(button).toBeInTheDocument();

    await user.click(button as HTMLElement);
    await user.click(button as HTMLElement);
    await user.click(button as HTMLElement);

    expect(button?.innerHTML).toBe('count is 3');
  });
});
