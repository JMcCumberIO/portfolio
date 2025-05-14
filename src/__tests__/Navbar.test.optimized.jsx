import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeContext } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import { MemoryRouter } from 'react-router-dom';

// Mock ThemeContext
const renderWithProviders = (ui, { theme = 'light', toggleTheme = jest.fn() } = {}) => {
  return render(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MemoryRouter>{ui}</MemoryRouter>
    </ThemeContext.Provider>
  );
};

// Mock window.matchMedia for testing
window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

describe('Navbar Component', () => {
  // Test 1: Renders the navbar with all navigation items
  test('renders navigation items correctly', () => {
    renderWithProviders(<Navbar />);
    
    // Test logo/brand name
    expect(screen.getByText('Jonathan McCumber')).toBeInTheDocument();
    
    // Test all nav links 
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  // Test 2: Theme toggle switch works
  test('toggles theme when theme button is clicked', () => {
    const toggleTheme = jest.fn();
    renderWithProviders(<Navbar />, { toggleTheme });
    
    // Find the theme toggle button (aria-label is set based on current theme)
    const themeToggle = screen.getByLabelText('Switch to dark mode');
    fireEvent.click(themeToggle);
    
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
  
  // Test 3: Mobile menu opens and closes
  test('mobile menu toggles when button is clicked', () => {
    renderWithProviders(<Navbar />);
    
    // Mobile menu should be closed initially
    expect(screen.getByRole('navigation').querySelector('div[aria-hidden="true"]')).toBeInTheDocument();
    
    // Click mobile menu button
    const menuButton = screen.getByLabelText('Toggle mobile menu');
    fireEvent.click(menuButton);
    
    // Mobile menu should be open now
    expect(screen.getByRole('navigation').querySelector('div[aria-hidden="false"]')).toBeInTheDocument();
    
    // Click again to close
    fireEvent.click(menuButton);
    
    // Mobile menu should be closed again
    expect(screen.getByRole('navigation').querySelector('div[aria-hidden="true"]')).toBeInTheDocument();
  });
  
  // Test 4: Keyboard navigation works
  test('supports keyboard navigation', () => {
    const toggleTheme = jest.fn();
    renderWithProviders(<Navbar />, { toggleTheme });
    
    // Find theme toggle button and test keyboard event
    const themeToggle = screen.getByLabelText('Switch to dark mode');
    fireEvent.keyDown(themeToggle, { key: 'Enter' });
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
});
