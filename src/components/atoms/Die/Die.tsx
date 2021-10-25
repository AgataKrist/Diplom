import React from "react";
import "./Die.css";
import cn from "classnames";

interface IDie {
	face: any;
	rolling: boolean;
}

export const Die = ({ face, rolling }: IDie) => {
	return (
		<i className={`die fas fa-dice-${face} ${rolling && "shaking"}`}></i>
	);
};
