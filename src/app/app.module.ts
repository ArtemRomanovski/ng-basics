import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { from } from 'rxjs';
import { CardDetailComponent } from './components/card/card-detail/card-detail.component';

import { HomeComponent } from './components/home/home.component';

// Модуль роутера
import { RouterModule } from '@angular/router';
import { CardInfoComponent } from './components/card/card-info/card-info.component';

// Колекция страниц
const routes = [
	// параметры страниц {путь, компонент} 
	{ path: '', component: HomeComponent },
	{ path: `card/card-info/:id`, component: CardInfoComponent },
	{ path: 'card', component: CardComponent },
	{ path: '', redirectTo: '/card-info', pathMatch: 'full' },
	// добавляем подстановочный маршрут ** , чтобы поймать любой unexpected/unmatched/unlisted url и добавить перенаправление на /card-detail
	{ path: '**', redirectTo: '/card-info' }
	// путь ** в последнем маршруте является подстановочным знаком. Маршрутизатор выберет этот маршрут, если запрошенный URL не соответствует никаким путям для маршрутов, определенных ранее в конфигурации
]

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CardComponent,
		SearchComponent,
		CardDetailComponent,
		HomeComponent,
		CardInfoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot(routes)	// Подключение и инициализация методом .forRoot() модуля роутера 
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {

}
