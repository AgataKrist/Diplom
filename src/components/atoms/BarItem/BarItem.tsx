import React from "react";
import s from "./BarItem.module.css";

interface IBarItem {
	width: number;
	isHover: boolean;
	Icon: any;
}

export const BarItem = ({ width, isHover, Icon }: IBarItem) => {
	const style = {
		width: "10",
		height: "13",
		fill: isHover ? "#ff4656" : "#F8F8F8",
	};
	return (
		<div className={s.bar}>
			<div className={s.emptybar}>
				<div className={s.powerstats__img}>
					<Icon isHover={isHover} style={style} />
				</div>
			</div>
			<div style={{ width: width + "px" }} className={s.filledbar}></div>
		</div>
	);
};
