import { callbackify } from "util";

export class Card {
	// "real-estate-list":
		
			name: string;
			id: number;
			price: number;
			address: {
				state: string;
				sity: string;
				street: string;
				houseNumber: string;
			};
			img: string;
		}
