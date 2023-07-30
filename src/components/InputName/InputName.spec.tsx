import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { InputName } from './index';

describe('InputName component', () => {
  it('should name send for the list', () => {
    render(<InputName />);

    // Digit name of input field
    const inputElement = screen.getByPlaceholderText('Enter your name...');
    fireEvent.change(inputElement, { target: { value: 'Wayne' } });

    // Click on Button
    const buttonElement = screen.getByText('Send');
    fireEvent.click(buttonElement);

    // Showed the name bottom button
    const nameElement = screen.getByText('Wayne');
    expect(nameElement).toBeInTheDocument();
  });
});
