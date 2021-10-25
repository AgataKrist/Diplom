import { IState } from "../../core/types";

export const getHeroesState = ({ heroes }: IState) => heroes;
export const getFightersState = ({ fighters }: IState) => fighters;
export const gameState = ({ game }: IState) => game;
export const dcState = ({ dc }: IState) => dc;
export const marvelState = ({ marvel }: IState) => marvel;
export const heroState = ({ hero }: IState) => hero;
