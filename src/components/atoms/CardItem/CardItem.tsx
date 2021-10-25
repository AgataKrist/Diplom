import React from "react";
import s from "./CardItem.module.css";
import cn from "classnames";
import { IHero } from "../../../types";
import { Link } from "react-router-dom";

interface ICardItem {
	hero: IHero;
}

export const CardItem = ({ hero }: ICardItem) => {
	return (
		<div className={s.card_item}>
			<div className={s.card_inner}>
				<div className={s.card_img}>
					<img src={hero.images.md} alt="ava" />
				</div>
				<div className={s.card_text}>
					<Link className={s.link} to={`/${hero.id}`}>
						<span>Learn more</span>
					</Link>
				</div>
			</div>
			<div className={cn(s.card_name, s.card_info)}>
				<h2>{hero.name}</h2>
			</div>
		</div>
	);
};
