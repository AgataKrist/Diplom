export interface IHero {
	id: number;
	name: string;
	slug: string;
	powerstats: any;
	appearance: IAppearance;
	biography: IBiography;
	work: IWork;
	connections: IConnections;
	images: IImage;
}

export interface IImage {
	xs: string;
	sm: string;
	md: string;
	lg: string;
}

export interface IPowerstats {
	intelligence: number;
	strength: number;
	speed: number;
	durability: number;
	power: number;
	combat: number;
	powerItem: any;
}
export interface IAppearance {
	gender: string;
	race: string;
	height: string[];
	weight: string[];
	eyeColor: string;
	hairColor: string;
}

export interface IBiography {
	fullName: string;
	alterEgos: string;
	aliases: string[];
	placeOfBirth: string;
	firstAppearance: string;
	publisher: string;
	alignment: string;
}
export interface IWork {
	occupation: string;
	base: string;
}
export interface IConnections {
	groupAffiliation: string;
	relatives: string;
}
export interface IHeroes {
	heroes: IHero[] | null;
	slider: ISlider;
	choicedHero: IHero | null;
}
export interface ISlider {
	prev: number;
	next: number;
}
export interface IFaceDie {
	string: string;
	number: number;
}
export interface IPagination {
	loading: boolean;
	currentPage: number;
	perPage: number;
}
