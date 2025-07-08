

// ✅ Add fetch polyfill at the top
import 'whatwg-fetch'; // <- Polyfill fetch for Jest + Firebase

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Countries from '../pages/Countries';

// ✅ Mock axios to avoid real API calls
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [
    {
      name: { common: 'Sri Lanka' },
      capital: ['Colombo'],
      region: 'Asia',
      population: 21500000,
      languages: { sin: 'Sinhala', tam: 'Tamil' },
      flags: { png: 'https://flagcdn.com/w320/lk.png' }
    }
  ] }))
}));

describe('Countries Page', () => {
  test('renders country data after API fetch', async () => {
    render(<Countries />);

    await waitFor(() => {
      expect(screen.getByText(/Sri Lanka/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Colombo/i)).toBeInTheDocument();
  });
});
