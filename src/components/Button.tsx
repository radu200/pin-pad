import PropTypes from "prop-types";
import style from "../style/Button.module.scss";

interface props {
    value: number;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ value, onClick }: props) {
    return (
        <button
            data-testid="pin-pad-btn"
            onClick={onClick}
            className={style.button}
        >
            {value}
        </button>
    );
}

Button.propTypes = {
    value: PropTypes.number,
};

export default Button;
