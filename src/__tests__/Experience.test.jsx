import { render, screen } from '@testing-library/react';
import Experience from '../components/Experience';

test('renders Professional Experience heading', () => {
  render(<Experience />);
  expect(screen.getByText(/Professional Experience/i)).toBeInTheDocument();
});