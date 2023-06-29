import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// Tests
describe('App component', () => {
  test('Renders main page correctly', async () => {
    const user = userEvent.setup();
    render(<App />);
    const buttonCount = await screen.findByRole('button');
    const codeCount = await screen.queryByText(/The count is now:/i);

    expect(buttonCount.innerHTML).toBe('count is 0');
    expect(codeCount).not.toBeInTheDocument();

    await user.click(buttonCount);
    await user.click(buttonCount);

    // screen.debug();
    expect(buttonCount.innerHTML).toBe('count is 2');
    expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
  });
});
