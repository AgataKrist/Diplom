import { BaseService } from "./baseService";
class PublicAPIService extends BaseService {
	private storage: Storage;
	constructor() {
		super();
		this.storage = localStorage;
	}

	protected async getHeaders() {
		return {
			headers: {
				Authorization: ``,
			},
		};
	}

	public async getHeroes(path: any) {
		return this.options(`${path}`);
	}
	public async getHero(path: any) {
		return this.options(`id/${path}`);
	}
}

export const PublicService = new PublicAPIService();
