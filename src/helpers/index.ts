import { VALID_CODE } from "../constants";

export function validateCode(
  code: Array<{ value: number; visible: boolean }>,
): boolean | null {
  if (code?.length) {
    const newCodeValue: string = code.map((c) => c.value).join("");
    return VALID_CODE === newCodeValue;
  }
  return null;
}

export const generatePinPadNums = (
  maxRows: number,
  maxCols: number,
  maxNumbers: number,
): Array<Array<{ value: number; visible: boolean }>> | null => {
  if (maxRows && maxCols && maxNumbers) {
    const pad: Array<Array<{ value: number; visible: boolean }>> = [];
    let index: number = maxNumbers;
    for (let i = 0; i < maxRows; i++) {
      pad[i] = [];
      for (let j = 0; j < maxCols; j++) {
        if (index > -1) {
          pad[i][j] = {
            value: index--,
            visible: false,
          };
        } else {
          break;
        }
      }
    }

    return pad;
  }

  return null;
};

export const reverseArray = (
  data: Array<Array<{ value: number; visible: boolean }>> | null,
): Array<Array<{ value: number; visible: boolean }>> | null => {
  if (data?.length) {
    for (let i = 0; i < data.length; i++) {
      const cols: number = data[i].length / 2;
      for (let j = 0; j < cols; j++) {
        let temp = data[i][j];
        data[i][j] = data[i][data[i].length - j - 1];
        data[i][data[i].length - j - 1] = temp;
      }
    }
    return data;
  }

  return null;
};
