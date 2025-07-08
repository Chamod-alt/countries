import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CountryCard from '../CountryCard';
import { useAuthState } from 'react-firebase-hooks/auth';
import { set, push } from 'firebase/database';

// 🔧 Mock Firebase functions
jest.mock('firebase/database', () => ({
  getDatabase: jest.fn(),
  ref: jest.fn(),
  push: jest.fn(() => ({ key: 'mocked-key' })),
  set: jest.fn(() => Promise.resolve()),
  onValue: jest.fn((ref, callback) => {
    callback(null); // Simulate no favorites initially
  }),
}));

// 🔧 Mock Firebase auth hook
jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: jest.fn(),
}));

// 🔧 Mock Firebase auth object
jest.mock('../../firebase', () => ({
  auth: {},
}));

const sampleCountry = {
  name: { common: 'Japan' },
  flags: { png: 'https://flagcdn.com/w320/jp.png' },
  capital: ['Tokyo'],
  region: 'Asia',
  population: 126300000,
  languages: { jpn: 'Japanese' },
};

describe('CountryCard Component', () => {
  beforeEach(() => {
    // mock a logged-in user
    useAuthState.mockReturnValue([{ uid: 'test-user' }, false, null]);
  });

  it('renders country details correctly', () => {
    render(<CountryCard country={sampleCountry} />);
    expect(screen.getByText('Japan')).toBeInTheDocument();
    expect(screen.getByText(/Capital:/)).toBeInTheDocument();
    expect(screen.getByText(/Region:/)).toBeInTheDocument();
    expect(screen.getByText(/Population:/)).toBeInTheDocument();
    expect(screen.getByText(/Languages:/)).toBeInTheDocument();
  });

  it('shows Favorite button if not already favorited', () => {
    render(<CountryCard country={sampleCountry} />);
    expect(screen.getByRole('button', { name: /favorite/i })).toBeInTheDocument();
  });

  it('adds to favorites when clicking the button', async () => {
    render(<CountryCard country={sampleCountry} />);
    const button = screen.getByRole('button', { name: /favorite/i });

    fireEvent.click(button);

    await waitFor(() => {
      expect(set).toHaveBeenCalled(); // Make sure set() is called
    });
  });
});
