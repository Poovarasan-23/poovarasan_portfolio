import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio My content', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /Automation Engineer/i })
  ).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /download cv/i }).length).toBeGreaterThan(0);
});