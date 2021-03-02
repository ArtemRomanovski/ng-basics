import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Card } from '../models/card';
import { map } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({
		"Content-Type": "application/json"
	})
}


@Injectable({
	providedIn: 'root'
})
export class HttpService {

	@Input() card: Card;


	constructor(private _http: HttpClient,
	) {


	}


	getData() {

		return this._http.get('assets/real-estate.json');

	}

	getData_2(id: number): Observable<Card[]> {

		return this._http.get('assets/real-estate.json').pipe(map(data => {
			let cardList
			return cardList.map(function (card: any) {

				return { name: card.name, id: card.id }
			})
		}));


		console.log(this._http.get('assets/real-estate.json').subscribe(((data: Card) => this.card = data)))
		console.log(this.card)

	}


	ngOnInit() {

	}



}
