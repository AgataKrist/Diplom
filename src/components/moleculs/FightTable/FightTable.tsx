import React from "react";
import s from "./FightTable.module.css";
import cn from "classnames";
import imagFight from "../../../assets/vc.jpeg";
import { IHero } from "../../../types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

interface IFightTable {
	tableFight: any;
	fighterDC: IHero | null;
	fighterMarvel: IHero | null;
	isDisabled: boolean;

	onStartGame: () => void;
	onKik: (kikCount: number) => void;

	kikCount: number;
}

export const FightTable = ({
	fighterDC,
	fighterMarvel,
	tableFight,
	onStartGame,
	onKik,
	kikCount,
	isDisabled,
}: IFightTable) => {
	return (
		<div
			style={{
				background: `center no-repeat url(${imagFight})`,
				backgroundSize: `cover`,
			}}
			className={cn(s.fightTable)}
		>
			<div className={cn(s.table)}>
				{fighterMarvel &&
					tableFight &&
					Object.keys(tableFight as string).map(
						(powerItem: any, i) => {
							return (
								<div key={powerItem} className={s.table__row}>
									<div
										className={cn(
											s.column,
											`s.resultCD${i + 1}`
										)}
									>
										<span>
											{!tableFight[powerItem] ? (
												""
											) : tableFight[powerItem] ===
											  "DC Comics" ? (
												<FontAwesomeIcon
													className={s.win}
													icon={faCheck}
												/>
											) : (
												<FontAwesomeIcon
													className={s.lose}
													icon={faTimes}
												/>
											)}
										</span>
									</div>

									<div className={s.column2}>
										<span>{powerItem.toUpperCase()}</span>
									</div>

									<div
										className={cn(
											s.column,
											`s.resultMarvel${i + 1}`
										)}
									>
										<span>
											{!tableFight[powerItem] ? (
												""
											) : tableFight[powerItem] !==
											  "DC Comics" ? (
												<FontAwesomeIcon
													className={s.win}
													icon={faCheck}
												/>
											) : (
												<FontAwesomeIcon
													className={s.lose}
													icon={faTimes}
												/>
											)}
										</span>
									</div>
								</div>
							);
						}
					)}
			</div>
			<div className={s.button__wrapper}>
				{tableFight && Object.keys(tableFight).length ? (
					<button
						disabled={isDisabled}
						onClick={() => onKik(kikCount)}
						className={cn(s.atuinBtn, {
							[s.dn]: kikCount === 6,
							[s.disabled]: isDisabled,
						})}
					>
						Kik{kikCount + 1}
					</button>
				) : (
					<button onClick={onStartGame} className={s.atuinBtn}>
						Start
					</button>
				)}
			</div>
		</div>
	);
};
