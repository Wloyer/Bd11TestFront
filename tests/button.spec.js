import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../src/components/home/Button';

describe('Button component', () => {
  it('renders with the correct href and target', () => {
    const { getByRole } = render(
      <Button href="https://example.com" target="_blank" className="test-class">
        Click me
      </Button>
    );
    
    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveClass('button custom-button test-class');
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <Button href="https://example.com" target="_blank" className="test-class">
        Click me
      </Button>
    );

    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('contains a button element inside the anchor', () => {
    const { getByRole } = render(
      <Button href="https://example.com" target="_blank" className="test-class">
        Click me
      </Button>
    );

    const linkElement = getByRole('link');
    const buttonElement = getByRole('button');

    expect(linkElement).toContainElement(buttonElement);
  });
});