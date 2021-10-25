import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDCAction } from "../../../core";
import { dcState } from "../../../core/selectors/heroesSelector";
import { HeroesContent } from "../../organizm";
import { MainTemplate } from "../../Templates/MainTemplate";
import s from "./DCPage.module.css";

export const DCPage = () => {
	const { heroes, pagination, filteredHero } = useSelector(dcState);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDCAction({ path: "/all.json", pagination }));
	}, [dispatch]);
	return (
		<>
			<MainTemplate
				about={
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum vel sequi delectus excepturi quas, magni eaque! Molestias dolor unde voluptatibus ipsum quibusdam. Voluptatem ipsam tempore culpa ullam necessitatibus quidem aspernatur eum ea facilis neque. Ea aliquam dolor eius vero obcaecati eos laboriosam fugit harum, vel esse praesentium neque cupiditate voluptas recusandae exercitationem ratione dolorum nulla iure sint a ab. Nesciunt ipsam quibusdam at? Error animi ad, recusandae veritatis inventore nesciunt repellendus ipsa aut sint non explicabo delectus rerum molestiae impedit soluta eveniet labore nihil magnam iusto praesentium itaque vero veniam ex! Pariatur laudantium modi incidunt dolor ullam sapiente quis quia perferendis, animi maxime ipsa saepe. Repellendus "
				}
				text={"WELCOME TO DC"}
				main={
					<HeroesContent
						filteredHero={filteredHero}
						heroes={heroes}
						pagination={pagination}
					/>
				}
			/>
		</>
	);
};
