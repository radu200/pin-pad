import { validateCode, generatePinPadNums, reverseArray } from '../';
import { PIN_PAD_MAX_ROWS, PIN_PAD_MAX_COLUMNS, PIN_PAD_MAX_NUMBERS } from '../../constants/index';

describe("Code validation tests", () => {
    test('expect to be falsy when no param is passed', () => {
        expect(validateCode()).toBeFalsy();
    });
    test('expect to be falsy when empty array is passed', () => {
        expect(validateCode([])).toBeFalsy();
    });
    test('expect to be falsy when wrong code is passed', () => {
        const code = [{ value: 2 }, { value: 4 }, { value: 5 }, { value: 1 }];
        expect(validateCode(code)).toBeFalsy();
    });

    test('expect to truthy when right code is passed', () => {
        const code = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 5 }];
        expect(validateCode(code)).toBeTruthy();
    });
});


describe("Generate pin pads tests", () => {
    test('expect to be falsy when no param is passed', () => {
        expect(generatePinPadNums()).toBeFalsy();
    });
    test('expect 2D array of objects with proprities: value, and visible - and size 4x3', () => {
        const output = [
            [{ value: 9, visible: false }, { value: 8, visible: false }, { value: 7, visible: false }],
            [{ value: 6, visible: false }, { value: 5, visible: false }, { value: 4, visible: false }],
            [{ value: 3, visible: false }, { value: 2, visible: false }, { value: 1, visible: false }],
            [{ value: 0, visible: false }]
        ];
        expect(generatePinPadNums(PIN_PAD_MAX_ROWS, PIN_PAD_MAX_COLUMNS, PIN_PAD_MAX_NUMBERS)).toEqual(output);
    });
});

describe("Reverse 2D array", () => {
    test('expect to be falsy when no param is passed', () => {
        expect(reverseArray()).toBeFalsy();
    });

    test('expect to be falsy when empty array is passed', () => {
        expect(reverseArray([])).toBeFalsy();
    });

    const input = [
        [{ value: 9, visible: false }, { value: 8, visible: false }, { value: 7, visible: false }],
        [{ value: 6, visible: false }, { value: 5, visible: false }, { value: 4, visible: false }],
        [{ value: 3, visible: false }, { value: 2, visible: false }, { value: 1, visible: false }],
        [{ value: 0, visible: false }]
    ];
    test('expect reversed array', () => {

        const output = [
            [{ value: 7, visible: false }, { value: 8, visible: false }, { value: 9, visible: false }],
            [{ value: 4, visible: false }, { value: 5, visible: false }, { value: 6, visible: false }],
            [{ value: 1, visible: false }, { value: 2, visible: false }, { value: 3, visible: false }],
            [{ value: 0, visible: false }]
        ];
        expect(reverseArray(input)).toEqual(output);
    });

    test('reversed array should not equal to wrong output', () => {

        const wrongOutput = [
            [{ value: 9, visible: false }, { value: 8, visible: false }, { value: 7, visible: false }],
            [{ value: 4, visible: false }, { value: 5, visible: false }, { value: 6, visible: false }],
            [{ value: 1, visible: false }, { value: 2, visible: false }, { value: 3, visible: false }],
            [{ value: 0, visible: false }]
        ];
        expect(reverseArray(input)).not.toEqual(wrongOutput);
    });

});
