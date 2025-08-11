import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar'; // Adjust the import path as necessary

describe('NavigationBar', () => {
  beforeEach(() => {
    // Any setup code if needed
  });

  afterEach(() => {
    // Any teardown code if needed
  });

  it('changes languages in the navigation bar', () => {
    render(<NavigationBar />);
    fireEvent.click(screen.getByText('Change Language')); // Adjust text as necessary
    expect(screen.getByText('Language changed')).toBeInTheDocument(); // Adjust expected text as necessary
  });

  it('submits email for membership creation on Get Started click', async () => {
    const mockSubmit = jest.fn();
    render(<NavigationBar onSubmit={mockSubmit} />);
    fireEvent.click(screen.getByText('Get Started'));
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByText('Submit')); // Adjust text as necessary
    expect(mockSubmit).toHaveBeenCalledWith({ email: 'test@example.com' });
  });

  it('displays hero background image with overlaid text block', () => {
    render(<NavigationBar />);
    const backgroundImage = screen.getByRole('img', { name: /hero background/i }); // Adjust selector as necessary
    expect(backgroundImage).toBeInTheDocument();
    const overlayText = screen.getByText(/Welcome to Our Service/); // Adjust expected text as necessary
    expect(overlayText).toBeInTheDocument();
  });

  it('displays "Watch on your TV" text with device-specific image', () => {
    render(<NavigationBar />);
    const watchText = screen.getByText(/Watch on your TV/i); // Adjust selector as necessary
    expect(watchText).toBeInTheDocument();
    const deviceImage = screen.getByRole('img', { name: /device/i }); // Adjust selector as necessary
    expect(deviceImage).toBeInTheDocument();
  });
});