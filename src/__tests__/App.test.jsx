import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { ThemeContext } from '../context/ThemeContext';

// Mock the lazy-loaded components
jest.mock('../components/Experience', () => () => <div data-testid="mock-experience">Experience Component</div>);
jest.mock('../components/Education', () => () => <div data-testid="mock-education">Education Component</div>);
jest.mock('../components/Skills', () => () => <div data-testid="mock-skills">Skills Component</div>);
jest.mock('../components/Projects', () => () => <div data-testid="mock-projects">Projects Component</div>);
jest.mock('../components/Contact', () => () => <div data-testid="mock-contact">Contact Component</div>);

// Mock ThemeContext
const mockTheme = {
  theme: 'light',
  toggleTheme: jest.fn()
};

// Create a custom render function that includes router and theme context
const renderWithProviders = (ui) => {
  return render(
    <ThemeContext.Provider value={mockTheme}>
      <MemoryRouter>
        {ui}
      </MemoryRouter>
    </ThemeContext.Provider>
  );
};

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
});
window.IntersectionObserver = mockIntersectionObserver;

describe('App Component', () => {
  test('renders without crashing', () => {
    renderWithProviders(<App />);
    expect(screen.getByText(/Jonathan McCumber/i)).toBeInTheDocument();
  });

  test('renders navbar', async () => {
    renderWithProviders(<App />);
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Skills/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  test('renders footer', () => {
    renderWithProviders(<App />);
    // Look for content that should be in the footer
    expect(screen.getByText(/Jonathan McCumber. All rights reserved/i)).toBeInTheDocument();
    expect(screen.getByText(/Built with React \+ Tailwind CSS/i)).toBeInTheDocument();
  });

  // Since we're mocking the lazy-loaded components, we need to test their presence indirectly
  test('includes all main sections via suspense', async () => {
    renderWithProviders(<App />);
    
    // We have to wait for suspense boundary to resolve
    // In a real app, we would use await screen.findByTestId, but our mocks are synchronous
    expect(screen.getByTestId('mock-experience')).toBeInTheDocument();
    expect(screen.getByTestId('mock-education')).toBeInTheDocument();
    expect(screen.getByTestId('mock-skills')).toBeInTheDocument();
    expect(screen.getByTestId('mock-projects')).toBeInTheDocument();
    expect(screen.getByTestId('mock-contact')).toBeInTheDocument();
  });
});
