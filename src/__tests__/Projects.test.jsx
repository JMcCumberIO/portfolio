import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';

describe('Projects Component', () => {
  test('renders Featured Projects heading', () => {
    render(<Projects />);
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
  });

  test('renders all project cards', () => {
    render(<Projects />);
    
    // Check for project titles
    expect(screen.getByText(/Portfolio Website/i)).toBeInTheDocument();
    expect(screen.getByText(/Flashforge Adventurer 5M Scripts/i)).toBeInTheDocument();
    expect(screen.getByText(/Enterprise Automation Framework/i)).toBeInTheDocument();
    
    // Check for project descriptions (partial matches)
    expect(screen.getByText(/This very site!/i)).toBeInTheDocument();
    expect(screen.getByText(/Python scripts and resources/i)).toBeInTheDocument();
    expect(screen.getByText(/modular framework/i)).toBeInTheDocument();
    
    // Check for technology tags
    expect(screen.getByText(/React/i)).toBeInTheDocument();
    expect(screen.getByText(/Python/i)).toBeInTheDocument();
    expect(screen.getByText(/PowerShell/i)).toBeInTheDocument();
    expect(screen.getByText(/Azure/i)).toBeInTheDocument();
  });
  
  test('projects have GitHub links', () => {
    render(<Projects />);
    
    // Check for GitHub links (there should be 3 links - one for each project)
    const githubLinks = screen.getAllByRole('link');
    expect(githubLinks).toHaveLength(3);
    
    // Each link should have appropriate ARIA label
    expect(githubLinks[0]).toHaveAttribute('aria-label', expect.stringContaining('Portfolio Website'));
    expect(githubLinks[1]).toHaveAttribute('aria-label', expect.stringContaining('Flashforge Adventurer 5M Scripts'));
    expect(githubLinks[2]).toHaveAttribute('aria-label', expect.stringContaining('Enterprise Automation Framework'));
  });
});