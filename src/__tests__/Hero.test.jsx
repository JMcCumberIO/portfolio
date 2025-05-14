import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero Component', () => {
  test('renders hero section with name', () => {
    render(<Hero />);
    expect(screen.getByText('Jonathan McCumber')).toBeInTheDocument();
  });

  test('renders title and location', () => {
    render(<Hero />);
    expect(screen.getByText('IT Professional & Developer')).toBeInTheDocument();
    expect(screen.getByText('Coralville, Iowa, United States')).toBeInTheDocument();
  });

  test('renders call-to-action buttons', () => {
    render(<Hero />);
    
    const contactButton = screen.getByText('Contact Me');
    expect(contactButton).toBeInTheDocument();
    expect(contactButton.tagName).toBe('A');
    expect(contactButton).toHaveAttribute('href', '#contact');
    
    const experienceButton = screen.getByText('View Experience');
    expect(experienceButton).toBeInTheDocument();
    expect(experienceButton).toHaveAttribute('href', '#experience');
  });

  test('renders professional summary', () => {
    render(<Hero />);
    
    const summary = screen.getByText(/Versatile IT Professional/i);
    expect(summary).toBeInTheDocument();
    expect(summary.textContent).toContain('SPS Commerce');
    expect(summary.textContent).toContain('Net Source One');
    expect(summary.textContent).toContain('Zoll Data');
  });
});
