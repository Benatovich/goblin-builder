import { render, screen } from '@testing-library/react';
import App from './App';

test('Color', () => {
  render(<App />);
  const linkElement = screen.getByText(/Color/i);
  expect(linkElement).toBeInTheDocument();
});
