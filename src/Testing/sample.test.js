import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

function SampleComponent() {
  return <h1>Hello, world!</h1>;
}

test('renders the sample component', () => {
  render(<SampleComponent />);
  expect(screen.getByText('Hello, world!')).toBeInTheDocument();
});