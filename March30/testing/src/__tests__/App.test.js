import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders hello world paragraph', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/);
  expect(linkElement).toBeInTheDocument();
});
