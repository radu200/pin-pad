import style from "../style/Button.module.scss";

interface props {
    locked: boolean;
    value: number;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ value, locked, onClick }: props) {
    return (
        <button
            data-testid="pin-pad-btn"
            onClick={onClick}
            className={locked ? style.buttonLocked : style.button}>
            {value}
        </button>
    );
}

export default Button;
