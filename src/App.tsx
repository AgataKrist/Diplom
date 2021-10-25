import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import { ChoiseHero } from "./components/pages/ChoiseHero";
import { DCPage } from "./components/pages/DCPage/DCPage";
import { Fight } from "./components/pages/FightPage";
import { HeroPage } from "./components/pages/HeroPage/HeroPage";
import { MainPage } from "./components/pages/MainPage";
import { MarvelPage } from "./components/pages/MavelPage";

function App() {
	return (
		<Switch>
			<Route path="/" exact component={MainPage}></Route>
			<Route path="/choise-hero" exact component={ChoiseHero}></Route>
			<Route
				path="/fight/:idCD/:idMarvel"
				exact
				component={Fight}
			></Route>
			<Route path="/dc-heroes" exact component={DCPage}></Route>
			<Route path="/marvel-heroes" exact component={MarvelPage}></Route>
			<Route path="/:id" exact component={HeroPage}></Route>
		</Switch>
	);
}

export default App;
