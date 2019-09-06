import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeService } from '../../home.service';
import { Home } from '../../home';

@Component({
	selector: 'app-homes',
	templateUrl: './homes.component.html',
	styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

	homeList$: Observable<Home[]>;
	noOfItems: number = 20;


	constructor(private homeService: HomeService) { }

	/**
	 * TODO:
	 * 	Implement Infinite Scroll
	 * 	display 10 items per request
	 * 	remove logo
	 * 	change height to 100vh
	 * 	reference: https://www.c-sharpcorner.com/article/implement-infinite-scrolling-using-angular-6/
	 * 	animate css lib
	 */
	ngOnInit() {
		this.homeService.getHomes().pipe(
			(item): Observable<Home[]> => {
				item.forEach((el: Home[]) => {
					el.forEach((single: Home) => {
						console.log(single.id)
					});
				})
				return this.homeList$ = item;
			}
		);
	}

	onScroll() {
		console.log('scrolled')
	}

}
