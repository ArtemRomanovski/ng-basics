import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Card } from '../../../models/card';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
	selector: 'app-card-detail',
	templateUrl: './card-detail.component.html',
	styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

	@Input() card: Card;


	constructor(
		private httpService: HttpService,

		// содержит инорфмацию о маршруте к этому экземпляру CardDetailComponent.Этому компоненту интересен список параметров маршрута, выделенных из URL. Параметр "id" - id отображаемой карточки
		private route: ActivatedRoute,

		// это сервис фреймворка Angular для взаимодействия с браузером
		private location: Location
	) { }


	ngOnInit(): void {
		this.getInfo()
	}

	getInfo(): void {

		const id = +this.route.snapshot.paramMap.get('id');
		// Параметры маршрута - это всегда строки. Оператор JavaScript (+) преобразует строку в число, чем и является id
		// route.snapshot - это статическое отображение информации о маршруте после того, как компонент был создан.
		// paramMap - это словарь значений параметров маршрута, выделенных из URL. Ключ "id" возвращает id нужной карты

		this.httpService.getData()
			.subscribe((data: Card) => this.card = data);
	}

	// Метод перенаправит на один шаг назад в истории браузера с помощью сервиса Location
	goBack(): void {
		this.location.back();
	}


}
