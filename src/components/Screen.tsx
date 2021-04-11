import style from "../style/Screen.module.scss";

interface props {
    code: Array<{ value: number; visible: boolean; }>;
    locked: boolean;
    error: boolean;
    success: boolean;
}

function Screen({ code, locked, error, success }: props) {
    const renderValue = () => {
        if (locked) {
            return (
                <span data-testid="screen-locked" className={style.screenValue}>
                    {"LOCKED"}
                </span>
            );
        } else {
            if (code?.length) {
                return code.map((c, i) => (
                    <span
                        data-testid="screen-code"
                        key={i}
                        className={
                            c.visible ? style.screenCodeVisible : style.screenCodeHidden}>
                        {c.value}
                    </span>
                ));
            } else if (success) {
                return (
                    <span data-testid="screen-ok" className={style.screenValue}>
                        {"OK"}
                    </span>
                );
            } else if (error) {
                return (
                    <span data-testid="screen-error" className={style.screenValue}>
                        {"ERROR"}
                    </span>
                );
            } else {
                return "ENTER CODE";
            }
        }
    };

    return (
        <div className={style.screenContainer}>
            <p data-testid="screen-value-container" className={style.screenValue}>
                {renderValue()}
            </p>
        </div>
    );
}

export default Screen;
