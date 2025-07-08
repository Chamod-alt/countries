
import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryCard from '../components/CountryCard';
import '@testing-library/jest-dom';

// Mocks
jest.mock('firebase/database', () => ({
  getDatabase: jest.fn(() => ({})),
  ref: jest.fn(),
  push: jest.fn(() => ({})),
  set: jest.fn(() => Promise.resolve()),
  onValue: jest.fn((ref, callback) => {
    callback({ val: () => null }); // simulate no favorites
    return () => {}; // mock unsubscribe
  }),
}));

jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: jest.fn(() => [{ uid: '123' }]),
}));

jest.mock('../firebase', () => ({
  auth: {},
}));

//  Test data
const mockCountry = {
  name: { common: 'Sri Lanka' },
  capital: ['Colombo'],
  region: 'Asia',
  population: 21400000,
  languages: { sin: 'Sinhala', tam: 'Tamil' },
  flags: { png: 'https://flagcdn.com/w320/lk.png' },
};

describe('CountryCard', () => {
  it('renders country information', () => {
    render(<CountryCard country={mockCountry} />);

    expect(screen.getByText('Sri Lanka')).toBeInTheDocument();
    expect(screen.getByText(/Colombo/)).toBeInTheDocument();
    expect(screen.getByText(/Asia/)).toBeInTheDocument();
    expect(screen.getByText(/21,400,000/)).toBeInTheDocument();
    expect(screen.getByText(/Sinhala, Tamil/)).toBeInTheDocument();
  });

  it('shows Favorite button if not in favorites', () => {
    render(<CountryCard country={mockCountry} />);
    expect(screen.getByRole('button', { name: /favorite/i })).toBeInTheDocument();
  });

  
});


