import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getHeroAction } from "../../../core";
import { heroState } from "../../../core/selectors/heroesSelector";
import { BigCard } from "../../moleculs/BigCard";
import { MainTemplate } from "../../Templates/MainTemplate";

export const HeroPage = () => {
	const { id } = useParams() as any;
	const dispatch = useDispatch();

	const { hero } = useSelector(heroState);
	useEffect(() => {
		console.log(`id`, id);
		dispatch(getHeroAction(id));
	}, [dispatch, id]);

	return <MainTemplate fight main={<BigCard hero={hero} />} />;
};
