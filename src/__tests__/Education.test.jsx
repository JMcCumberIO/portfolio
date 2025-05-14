import { render, screen } from '@testing-library/react';
import Education from '../components/Education';

describe('Education Component', () => {
  test('renders education section with heading', () => {
    render(<Education />);
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  test('renders university name', () => {
    render(<Education />);
    expect(screen.getByText('Metropolitan State University of Denver')).toBeInTheDocument();
  });

  test('renders degree and specialization', () => {
    render(<Education />);
    expect(screen.getByText('Computer Information Systems')).toBeInTheDocument();
    expect(screen.getByText('Specialization: Network Systems and Administration')).toBeInTheDocument();
  });

  test('renders education description', () => {
    render(<Education />);
    expect(
      screen.getByText(/Focused on advanced networking concepts/i)
    ).toBeInTheDocument();
  });
});
