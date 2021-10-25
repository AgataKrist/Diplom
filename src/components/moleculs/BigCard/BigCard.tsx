import React from "react";
import { useHistory } from "react-router";
import { IHero } from "../../../types";
import s from "./BigCard.module.css";
import sBTN from "../../pages/ChoiseHero/ChoiseHero.module.css";

interface IBigCard {
	hero: IHero | null;
}
export const BigCard = ({ hero }: IBigCard) => {
	const params = {
		name: hero?.name,
		slug: hero?.slug,
		intelligence: hero?.powerstats.intelligence,
		strength: hero?.powerstats.strength,
		speed: hero?.powerstats.speed,
		durability: hero?.powerstats.durability,
		power: hero?.powerstats.power,
		combat: hero?.powerstats.combat,
		gender: hero?.appearance.gender,
		race: hero?.appearance.race,
		weight: hero?.appearance.weight[1],
		height: hero?.appearance.height[1],
		eyeColor: hero?.appearance.eyeColor,
		hairColor: hero?.appearance.hairColor,
		["full Name"]: hero?.biography.fullName,
		["alter Egos"]: hero?.biography.alterEgos,
		aliases: hero?.biography.aliases,
		["place Of Birth"]: hero?.biography.placeOfBirth,
		["first Appearance"]: hero?.biography.firstAppearance,
		publisher: hero?.biography.publisher,
		alignment: hero?.biography.alignment,
		occupation: hero?.work.occupation,
		base: hero?.work.base,
		groupAffiliation: hero?.connections.groupAffiliation,
		relatives: hero?.connections.relatives,
	};
	const history = useHistory();
	const returnBack = () => {
		history.goBack();
	};
	return (
		<div className={s.card__wrapper}>
			<div className={s.card__contant}>
				<div className={s.card__img}>
					<img src={hero?.images.lg} alt="img" />
					<button className={sBTN.atuinBtn} onClick={returnBack}>
						back
					</button>
				</div>
				<ul className={s.list__params}>
					{hero &&
						Object.entries(params)?.map((param: any) => {
							return (
								<li className={s.row__table}>
									<span className={s.td}>
										{param[0].toUpperCase()}
									</span>
									<span className={s.td}>
										{typeof param[1] === "string"
											? param[1].toUpperCase()
											: param[1]}
									</span>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};
