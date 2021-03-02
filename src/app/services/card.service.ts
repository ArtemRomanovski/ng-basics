// import { Injectable } from '@angular/core';
// import { Observable, of, from } from 'rxjs'

// import { Card } from '../models/card';
// import { MessageServise } from ''

// @Injectable({
//   providedIn: 'root'
// })
// export class CardService {

// 	constructor(private messageService: MessageService) { }
 
// 	getInfo(): Observable<Card[]> {
// 	  // TODO: send the message _after_ fetching the cards
// 	  this.messageService.add('HttpService: fetched cards');
// 	  return of();
// 	}
   
// 	getHero(id: number): Observable<Card> {
// 	  // TODO: send the message _after_ fetching the card
// 	  this.messageService.add(`HttpService: fetched card id=${id}`);
// 	  return of(.find(card => card.id === id));
// 	}
//   }