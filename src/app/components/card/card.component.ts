import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { from, Observable, of } from 'rxjs';
import { Card } from '../../models/card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as EventEmitter from 'events';

@Component({
	selector: 'app-card',

	templateUrl: './card.component.html',
	providers: [HttpService],
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	card: Card;
	infoCard: Card;


	constructor(private httpService: HttpService) { 

	}

	ngOnInit() {
		this.getCard();

	}
	

	// Get Card
	getCard(): void {
		this.httpService.getData()
			.subscribe((data: Card) => this.card = data);
	}
	
	//Метод getInfo(), который назначает infoCard компоненту выделенного кликом мышки карточки из шаблона.
	getInfo(item: Card) {

		this.infoCard = Object.assign({}, item)
		console.log(this.infoCard);
		
		return this.infoCard;
	}







}
