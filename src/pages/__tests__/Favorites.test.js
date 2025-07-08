// src/pages/__tests__/Favorites.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Favorites from '../Favorites';
import { BrowserRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

// ✅ Mock firebase auth
jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: jest.fn(),
}));

jest.mock('firebase/database', () => ({
  getDatabase: jest.fn(),
  ref: jest.fn(),
  onValue: jest.fn((ref, callback) => {
    callback({
      val: () => ({
        abc123: {
          countryName: 'Japan',
          flag: 'https://flagcdn.com/jp.svg',
          region: 'Asia',
          population: 126300000,
          languages: { jpn: 'Japanese' }
        }
      }),
    });
  }),
  remove: jest.fn(),
}));

test('renders favorite countries when user is logged in', () => {
  useAuthState.mockReturnValue([{ uid: 'test-user-id' }, false, null]);

  render(
    <BrowserRouter>
      <Favorites />
    </BrowserRouter>
  );

  expect(screen.getByText(/Your Favorite Countries/i)).toBeInTheDocument();
  expect(screen.getByText(/Japan/i)).toBeInTheDocument();
});
