import React, { useState } from "react";
import s from "./Control.module.css";
import sbtn from "../../pages/ChoiseHero/ChoiseHero.module.css";

import cn from "classnames";
import { InputRadioControl } from "../../atoms/InputRadioControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

interface IControl {
	sortByPowerstats: (param: string) => void;
	search: (e: string) => void;
	reset: () => void;
	value: string;
	checkedValuePowerstats: string;
}

export const Control = ({
	sortByPowerstats,
	search,
	reset,
	value,
	checkedValuePowerstats,
}: IControl) => {
	const [isOpenControl, setIsOpenControl] = useState(false);
	const inputsPowerstas = [
		{
			id: "powerChoice1",
			param: "intelligence",
		},
		{
			id: "powerChoice2",
			param: "strength",
		},
		{
			id: "powerChoice3",
			param: "speed",
		},
		{
			id: "powerChoice4",
			param: "durability",
		},
		{
			id: "powerChoice5",
			param: "power",
		},
		{
			id: "powerChoice6",
			param: "combat",
		},
	];
	const inputsGender = [
		{
			id: "genderChoice1",
			param: "male",
		},
		{
			id: "genderChoice2",
			param: "female",
		},
	];

	return (
		<div className={cn(s.control_wrapper)}>
			<FontAwesomeIcon
				onClick={() => {
					setIsOpenControl(!isOpenControl);
				}}
				icon={faAngleDoubleRight}
				className={s.btn}
			/>
			<div className={cn(s.control_contant, { [s.open]: isOpenControl })}>
				<input
					value={value}
					onChange={e => search(e.target.value)}
					type="text"
					placeholder={"search"}
				/>
				<div>
					{inputsPowerstas.map(({ id, param }) => (
						<InputRadioControl
							checkedValue={checkedValuePowerstats}
							key={id}
							id={id}
							param={param}
							sortByParams={sortByPowerstats}
						/>
					))}
				</div>

				<button
					className={sbtn.atuinBtn}
					onClick={() => {
						reset();
						setIsOpenControl(false);
					}}
				>
					reset
				</button>
			</div>
		</div>
	);
};
