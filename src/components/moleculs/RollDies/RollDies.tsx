import React from "react";
import { IFaceDie } from "../../../types";
import { Die } from "../../atoms/Die";
import s from "./RollDies.module.css";
interface IRollDice {
	faceDC: IFaceDie;
	faceMarvel: IFaceDie;
	rolling: boolean;
}

export const RollDies = ({ faceDC, faceMarvel, rolling }: IRollDice) => {
	return (
		<div className={s.dies__wrapper}>
			<Die face={faceDC?.string} rolling={rolling} />
			<Die face={faceMarvel?.string} rolling={rolling} />
		</div>
	);
};
