import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Navbar from '../components/Navbar';

// Mock ThemeContext to control theme state in tests
const renderWithTheme = (ui, { theme = 'light', toggleTheme = jest.fn(), ...renderOptions } = {}) => {
  return render(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MemoryRouter>{ui}</MemoryRouter>
    </ThemeContext.Provider>,
    renderOptions
  );
};

describe('Navbar Component', () => {
  test('renders brand name', () => {
    renderWithTheme(<Navbar />);
    expect(screen.getByText(/Jonathan McCumber/i)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithTheme(<Navbar />);
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Education/i)).toBeInTheDocument();
    expect(screen.getByText(/Skills/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  test('toggles theme when clicking theme button', () => {
    const toggleTheme = jest.fn();
    renderWithTheme(<Navbar />, { toggleTheme });
    
    const themeButton = screen.getByLabelText(/Switch to dark mode/i);
    fireEvent.click(themeButton);
    
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });

  test('mobile menu toggles when clicking menu button', () => {
    renderWithTheme(<Navbar />);
    
    // Menu should initially be closed
    const mobileMenu = screen.getByRole('button', { name: /Toggle mobile menu/i });
    expect(mobileMenu).toHaveAttribute('aria-expanded', 'false');
    
    // Click to open menu
    fireEvent.click(mobileMenu);
    expect(mobileMenu).toHaveAttribute('aria-expanded', 'true');
    
    // Click again to close menu
    fireEvent.click(mobileMenu);
    expect(mobileMenu).toHaveAttribute('aria-expanded', 'false');
  });
  
  test('shows correct theme icon based on current theme', () => {
    // Test light theme
    const { rerender } = renderWithTheme(<Navbar />, { theme: 'light' });
    let themeButton = screen.getByLabelText(/Switch to dark mode/i);
    expect(themeButton).toBeInTheDocument();
    
    // Test dark theme
    rerender(
      <ThemeContext.Provider value={{ theme: 'dark', toggleTheme: jest.fn() }}>
        <MemoryRouter><Navbar /></MemoryRouter>
      </ThemeContext.Provider>
    );
    themeButton = screen.getByLabelText(/Switch to light mode/i);
    expect(themeButton).toBeInTheDocument();
  });
});