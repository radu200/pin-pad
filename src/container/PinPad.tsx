import { useEffect, useState, useMemo } from "react";
import PinPad from "../components/PinPad";
import {
    PIN_PAD_MAX_ROWS,
    PIN_PAD_MAX_COLUMNS,
    PIN_PAD_MAX_NUMBERS,
    MAX_CODE_LENGTH,
    MAX_WRONG_ATTEMPTS,
    LOCKED_TIMEOUT,
} from "../constants";
import { validateCode, generatePinPadNums, reverseArray } from "../helpers";

interface state {
    code: Array<{ value: number; visible: boolean; }>;
    locked: boolean;
    error: boolean;
    success: boolean;
    wrongAttempts: number;
}

const initialState: state = {
    code: [],
    locked: false,
    error: false,
    success: false,
    wrongAttempts: 0,
};

function PinPadContainer() {
    const pads = useMemo(
        () =>
            reverseArray(
                generatePinPadNums(
                    PIN_PAD_MAX_ROWS,
                    PIN_PAD_MAX_COLUMNS,
                    PIN_PAD_MAX_NUMBERS,
                ),
            ),
        [],
    );

    const [state, setState] = useState({
        ...initialState,
    });

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null = null;
        if (state.wrongAttempts === MAX_WRONG_ATTEMPTS) {
            setState((state) => ({ ...state, locked: true }));
            timer = setTimeout(() => {
                const { locked, ...rest } = initialState;
                setState((state) => ({ ...state, locked: false, ...rest }));
            }, LOCKED_TIMEOUT);
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [state.wrongAttempts]);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null = null;
        if (state.code.length === MAX_CODE_LENGTH && !state.locked) {
            timer = setTimeout(() => {
            const valid: boolean | null = validateCode(state.code);
            if (!valid) {
                const { error, wrongAttempts, ...rest } = initialState;
                setState((state) => ({
                    ...state,
                    error: true,
                    wrongAttempts: state.wrongAttempts + 1,
                    ...rest,
                }));
            } else {
                const { success, ...rest } = initialState;
                setState((state) => ({ ...state, success: true, ...rest }));
            }
          }, 800);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [state.code, state.locked]);

    const getButtonValue = (newNum: { visible: boolean; value: number; }) => {
        let code = [...state.code, newNum];
        if (state.code.length === MAX_CODE_LENGTH - 1) {
            const { visible, ...rest } = newNum;
            code = [...state.code, { visible: true, ...rest }];
        }

        if (state.code.length <= MAX_CODE_LENGTH - 1) {
            setState((state) => ({ ...state, code: code }));
        }
    };

    return (
        <PinPad getButtonValue={getButtonValue} {...state} pinPadNumbers={pads} />
    );
}

export default PinPadContainer;
