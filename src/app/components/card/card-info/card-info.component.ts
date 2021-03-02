import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
	selector: 'app-card-info',
	templateUrl: './card-info.component.html',
	styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {

	@Input() infoCard: Card;
	@Input() card: Card;

	constructor() { }

	ngOnInit(): void {
	}

}
