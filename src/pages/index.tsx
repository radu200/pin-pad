import PinPad from "../container/PinPad";
import style from "../style/PagePinPad.module.scss";

function PagePinPad() {
	return (
		<div className={style.root}>
			<PinPad />
		</div>
	);
}
export default PagePinPad;
