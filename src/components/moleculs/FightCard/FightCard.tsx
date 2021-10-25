import React from "react";
import s from "./FightCard.module.css";
import cn from "classnames";
import { gameState } from "../../../core/selectors/heroesSelector";
import { useSelector } from "react-redux";

interface IFightCard {
	fighter: any;
	valuesFight: any;

	result: any;
}

export const FightCard = ({ fighter, valuesFight, result }: IFightCard) => {
	const { kikCount } = useSelector(gameState);
	return (
		<div
			className={cn(s.fighter, {
				[s.winner]: result.win && kikCount === 6,
				[s.looser]: !result.win && kikCount === 6,
				[s.drown]: result.drown && kikCount === 6,
			})}
		>
			<div
				style={{
					width: `
					  ${valuesFight && valuesFight[fighter?.biography.publisher]}%`,
				}}
				className={cn(s.name__wrapper, {
					[s.looser]: !result.win && kikCount === 6 && !result.drown,
				})}
			>
				<span className={s.name}>{fighter?.name}</span>
				<span className={cn(s.sector, s.sector1)}></span>
				<span className={cn(s.sector, s.sector2)}></span>
				<span className={cn(s.sector, s.sector3)}></span>
				<span className={cn(s.sector, s.sector4)}></span>
				<span className={cn(s.sector, s.sector5)}></span>
			</div>
			<img
				src={fighter?.images.lg}
				alt="avatar"
				className={cn(s.imgFighter, {
					[s.looser__img]:
						!result.win && kikCount === 6 && !result.drown,
				})}
			/>
		</div>
	);
};
