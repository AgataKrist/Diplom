import React from "react";
import s from "./InputRadioControl.module.css";

interface IInputRadioControl {
	id: string;
	param: string;
	sortByParams: (param: string) => void;
	checkedValue: string;
}
export const InputRadioControl = ({
	id,
	param,
	sortByParams,
	checkedValue,
}: IInputRadioControl) => {
	return (
		<>
			<input
				checked={checkedValue === param}
				type="radio"
				id={id}
				value={param}
				name="contact"
				onChange={() => sortByParams(param)}
			/>
			<label htmlFor={id}>{param.toUpperCase()}</label>
		</>
	);
};
