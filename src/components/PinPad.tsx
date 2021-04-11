import Button from "./Button";
import Screen from "./Screen";
import style from "../style/PinPad.module.scss";

interface props {
    code: Array<{ value: number; visible: boolean; }>;
    pinPadNumbers: Array<Array<{ value: number; visible: boolean; }>> | null;
    getButtonValue: any;
    locked: boolean;
    error: boolean;
    success: boolean;
}

function PinPad({
    pinPadNumbers,
    getButtonValue,
    locked,
    code,
    error,
    success,
}: props) {
    return (
        <div>
            <div className={style.pinPadBody}>
                <Screen code={code} locked={locked} error={error} success={success} />
                <div className={style.buttonsContainer}>
                    {pinPadNumbers?.map((row) =>
                        row.map((col, i) => (
                            <Button
                                key={i}
                                value={col.value}
                                onClick={() => getButtonValue(col)}
                            />
                        )),
                    )}
                </div>
            </div>
        </div>
    );
}

export default PinPad;
