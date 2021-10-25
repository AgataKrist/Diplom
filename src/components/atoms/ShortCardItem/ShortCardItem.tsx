import s from "./ShortCardItem.module.css";
import { useState } from "react";
import { BarItem } from "../BarItem/BarItem";
import { IHero } from "../../../types/index";
import {
	Power,
	Strength,
	Speed,
	Durability,
	Combat,
	Intell,
} from "../../../assets/PowerstatsIcons";

interface IShortCardItem {
	hero: IHero;
	onChoicedHero: (hero: IHero, publisher: string) => void;
}

export const ShortCardItem = ({ hero, onChoicedHero }: IShortCardItem) => {
	const powerstatsDefault = {
		intelligence: 0,
		strength: 0,
		speed: 0,
		durability: 0,
		power: 0,
		combat: 0,
	};
	const cardBackInfo = {
		Name: hero.biography.fullName,
		Height: hero.appearance.height[1],
		Weight: hero.appearance.weight[1],
		Gender: hero.appearance.gender,
		Rrace: hero.appearance.race,
		PlaceOfBirth: hero.biography.placeOfBirth,
	};
	const [powerStats, setPowerStats] = useState(powerstatsDefault);
	const [isHover, setIsHover] = useState(false);
	const [isRotate, setIsRotate] = useState(false);

	const mouseEnterHandler = () => {
		setPowerStats({ ...hero.powerstats });
		setIsHover(true);
	};
	const mouseLeaveHandler = () => {
		setPowerStats({ ...powerstatsDefault });
		setIsHover(false);
		setIsRotate(false);
	};
	const onClickShowInfo = () => {
		setIsHover(false);
		setIsRotate(true);
	};

	return (
		<div
			onClick={onClickShowInfo}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
			style={
				isRotate
					? {
							transform: "rotateY(180deg) translateY(-20px) ",
							transition: " 0.3s linear 0.3s",
							position: "relative",
					  }
					: {}
			}
			className={isHover ? `${s.card} ${s.hover} ` : s.card}
		>
			<div className={s.card__front}>
				<h3 className={s.title}>{hero.name}</h3>
				<div className={s.bar}>
					<BarItem
						Icon={Intell}
						isHover={isHover}
						width={powerStats.intelligence}
					/>
					<BarItem
						Icon={Strength}
						isHover={isHover}
						width={powerStats.strength}
					/>
					<BarItem
						Icon={Speed}
						isHover={isHover}
						width={powerStats.speed}
					/>
					<BarItem
						Icon={Durability}
						isHover={isHover}
						width={powerStats.durability}
					/>
					<BarItem
						Icon={Combat}
						isHover={isHover}
						width={powerStats.power}
					/>
					<BarItem
						Icon={Power}
						isHover={isHover}
						width={powerStats.combat}
					/>
				</div>
				<div className={s.ava__circle}>
					<img src={hero.images.sm} alt="img" />
				</div>
			</div>
			<div className={s.card__back}>
				<div className={s.card__title}>Info</div>
				<div className={s.card__text}>
					<ul style={{ width: "100%", flex: "1" }}>
						{Object.entries(cardBackInfo).map(listItem => {
							return (
								<li
									key={listItem[0]}
									style={{
										width: "100%",
										display: "flex",
										justifyContent: "space-between",
										maxHeight: "50px",
										overflow: "clip",
										textOverflow: "ellipsis",
										whiteSpace: "nowrap",
									}}
								>
									<span
										style={{
											width: "50%",
											fontSize: "13px",
											color: "#fff",
										}}
									>
										{listItem[0]}
									</span>
									<span
										style={{
											width: "50%",
											fontSize: "13px",
											color: "#fff",
										}}
									>
										{listItem[1]}
									</span>
								</li>
							);
						})}
					</ul>
					<button
						onClick={() =>
							onChoicedHero(hero, hero.biography.publisher)
						}
						className={s.atuinBtn}
					>
						Fight
					</button>
				</div>
			</div>
		</div>
	);
};
