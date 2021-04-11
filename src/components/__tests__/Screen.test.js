import { render, screen } from '@testing-library/react';
import ScreenPinPad from '../Screen';

describe("Screen tests", () => {
    test('should render Enter code with no props passed', () => {
        render(<ScreenPinPad />);
        const element = screen.getByTestId("screen-value-container");
        expect(element).toHaveTextContent('ENTER CODE');
    });

    test('should render CODE  when array with numbers is passed', () => {
        const code = [{ value: 1, visible: false }, { value: 2, visible: false }, { value: 3, visible: false }, { value: 4, visible: true }];
        render(<ScreenPinPad code={code} />);
        const element = screen.getByTestId("screen-value-container");
        expect(element).toHaveTextContent('1234');
    });

    test('should render ERROR when locked is true', () => {
        render(<ScreenPinPad locked={true} />);
        const element = screen.getByTestId("screen-locked");
        expect(element).toHaveTextContent('LOCKED');
    });

    test('should render OK when success is true', () => {
        render(<ScreenPinPad success={true} />);
        const element = screen.getByTestId("screen-ok");
        expect(element).toHaveTextContent('OK');
    });


    test('should render ERROR when error is true', () => {
        render(<ScreenPinPad error={true} />);
        const element = screen.getByTestId("screen-error");
        expect(element).toHaveTextContent('ERROR');
    });
});







