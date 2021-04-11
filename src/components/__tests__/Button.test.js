import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button tests', () => {
    test('should render correctly with given value', () => {
        render(<Button value={2} />);
        const element = screen.getByTestId("pin-pad-btn");
        expect(element).toHaveTextContent('2');
    });

    test('calls onClick prop when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} />);
        fireEvent.click(screen.getByTestId("pin-pad-btn"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});