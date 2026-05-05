import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App component', () => {
  it('renders the main name Brandon Clements', () => {
    render(<App />);
    const nameElement = screen.getByText(/Brandon/i);
    const lastNameElement = screen.getByText(/Clements/i);
    expect(nameElement).toBeInTheDocument();
    expect(lastNameElement).toBeInTheDocument();
  });

  it('renders the experience heading', () => {
    render(<App />);
    // There are multiple instances of "experience" in the text, so we target the heading specifically
    const experienceHeading = screen.getByText('Experience');
    expect(experienceHeading).toBeInTheDocument();
  });

  it('toggles skills when clicked', () => {
    render(<App />);
    
    // "JavaScript" is NOT in the initial selectedSkills state ['Java', 'HTML', 'Python', 'Agile', '.NET Framework']
    const jsButton = screen.getByRole('button', { name: /JavaScript/i });
    
    // Initial state: not selected (white background/gray border as per CSS in App.jsx)
    expect(jsButton).toHaveStyle('background: rgb(255, 255, 255)');
    
    // Click to select
    fireEvent.click(jsButton);
    expect(jsButton).toHaveStyle('background: rgb(239, 246, 255)'); // #eff6ff
    
    // Click again to deselect
    fireEvent.click(jsButton);
    expect(jsButton).toHaveStyle('background: rgb(255, 255, 255)');
  });

  it('contains correct social links with security attributes', () => {
    render(<App />);
    
    const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/brandon-clements-519785211/');
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');

    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/clementsb');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders all experience entries', () => {
    render(<App />);
    
    expect(screen.getByText('Integrated Solutions For Systems')).toBeInTheDocument();
    expect(screen.getByText('ThreadKore')).toBeInTheDocument();
    
    // There are multiple "Auburn University" entries (one in Experience, one in Education)
    const auburnEntries = screen.getAllByText('Auburn University');
    expect(auburnEntries.length).toBeGreaterThanOrEqual(2);
    
    // Check for specific roles
    // "Software Engineer" appears twice (Header and Experience)
    const softwareEngineerRoles = screen.getAllByText('Software Engineer');
    expect(softwareEngineerRoles.length).toBeGreaterThanOrEqual(2);
    
    expect(screen.getByText('Junior Full-Stack Developer')).toBeInTheDocument();
    expect(screen.getByText('Student Full-Stack Developer')).toBeInTheDocument();
  });

  it('renders education details correctly', () => {
    render(<App />);
    
    expect(screen.getByText('B.S. Software Engineering')).toBeInTheDocument();
    expect(screen.getByText('Class of 2023')).toBeInTheDocument();
  });
});