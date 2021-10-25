import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

interface IHeader {
	top: number;
}

export const Header = ({ top }: IHeader) => {
	const links = [
		{
			to: "/",
			title: "Home",
		},
		{
			to: "/dc-heroes",
			title: "DC Heroes",
		},
		{
			to: "/marvel-heroes",
			title: "Marvel Heroes",
		},
		{
			to: "/choise-hero",
			title: "Fight",
		},
	];
	return (
		<div style={{ top: `${top}px` }} className={s.header}>
			<div className={s.header__contant}>
				<ul className={s.link__list}>
					{links.map(({ to, title }) => {
						return (
							<Link key={to} className={s.header__item} to={to}>
								<span className={s.link_item}>{title}</span>
							</Link>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
