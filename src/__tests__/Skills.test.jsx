import { render, screen } from '@testing-library/react';
import Skills from '../components/Skills';

// Mock the icon components
jest.mock('react-icons/fa', () => ({
  FaCloud: () => <span data-testid="icon-cloud" />,
  FaDesktop: () => <span data-testid="icon-desktop" />,
  FaNetworkWired: () => <span data-testid="icon-network" />,
  FaDatabase: () => <span data-testid="icon-database" />,
  FaWindows: () => <span data-testid="icon-windows" />,
  FaTerminal: () => <span data-testid="icon-terminal" />,
  FaVectorSquare: () => <span data-testid="icon-vector" />,
  FaUsers: () => <span data-testid="icon-users" />,
  FaPython: () => <span data-testid="icon-python" />,
}));

jest.mock('react-icons/vsc', () => ({
  VscAzure: () => <span data-testid="icon-azure" />,
}));

describe('Skills Component', () => {
  test('renders skills section with heading', () => {
    render(<Skills />);
    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
  });

  test('renders all skill categories', () => {
    render(<Skills />);
    
    // Check category headings
    expect(screen.getByText('Cloud & Infrastructure')).toBeInTheDocument();
    expect(screen.getByText('Systems & Network')).toBeInTheDocument();
    expect(screen.getByText('Development & Tools')).toBeInTheDocument();
  });

  test('renders specific skills', () => {
    render(<Skills />);
    
    // Check for specific skills
    expect(screen.getByText('Azure Cloud Services')).toBeInTheDocument();
    expect(screen.getByText('VMware Infrastructure')).toBeInTheDocument();
    expect(screen.getByText('Windows Server')).toBeInTheDocument();
    expect(screen.getByText('Network Systems')).toBeInTheDocument();
    expect(screen.getByText('Python Development')).toBeInTheDocument();
    expect(screen.getByText('SQL & Databases')).toBeInTheDocument();
  });
});
