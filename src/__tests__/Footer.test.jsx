import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

// Mock current date for consistent year in tests
const mockDate = new Date('2025-05-14');
global.Date = class extends Date {
  constructor() {
    return mockDate;
  }
};

describe('Footer Component', () => {
  test('renders footer with copyright and current year', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Jonathan McCumber/i)).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(<Footer />);
    
    // Check for GitHub link
    const githubLink = screen.getByLabelText('GitHub Profile');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/JMcCumberIO');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    // Check for LinkedIn link
    const linkedinLink = screen.getByLabelText('LinkedIn Profile');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/jonathan-mccumber');
    
    // Check for Email link
    const emailLink = screen.getByLabelText('Email');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:contact@jmccumber.io');
  });
  
  test('renders technology information', () => {
    render(<Footer />);
    expect(screen.getByText(/Built with React \+ Tailwind CSS/i)).toBeInTheDocument();
  });
});
