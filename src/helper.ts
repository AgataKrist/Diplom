import { IHero } from "./types";

export const randomface = () => {
	const rand = 1 - 0.5 + Math.random() * 6;
	switch (Math.round(rand)) {
		case 1:
			return { string: "one", number: 1 };
		case 2:
			return { string: "two", number: 2 };
		case 3:
			return { string: "three", number: 3 };
		case 4:
			return { string: "four", number: 4 };
		case 5:
			return { string: "five", number: 5 };
		case 6:
			return { string: "six", number: 6 };
	}
};

export const sliderNext = (prev: number, next: number, stepSize: number) => {
	return {
		prev: prev + stepSize,
		next: next + stepSize,
	};
};
export const sliderPrev = (prev: number, next: number, stepSize: number) => {
	return {
		prev: prev - stepSize,
		next: next - stepSize,
	};
};

export const scrollEvent = (e: any, callBack: (value: number) => void) => {
	const target = e.target as HTMLTextAreaElement;
	callBack(target.scrollTop);
};

export const sorting = (heroes: IHero[] | null, param: string) => {
	if (heroes) {
		return [...heroes]?.sort((a: any, b: any) => {
			if (b.powerstats[param] - a.powerstats[param] === 0) {
				return a.id - b.id;
			}
			return b.powerstats[param] - a.powerstats[param];
		});
	}
};

export const filter = (heroes: IHero[] | null, value: string) => {
	return heroes?.filter(hero => {
		return hero.name.toLowerCase().includes(value.toLowerCase());
	});
};
