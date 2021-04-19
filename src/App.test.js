import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headerText = screen.getByRole('heading');
  expect(headerText).toHaveTextContent('SharpStone');
});
