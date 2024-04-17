import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo text/i);
  expect(linkElement).toBeInTheDocument();
});
