import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, fromEvent, merge } from 'rxjs';
import { distinct, filter, map, debounceTime, tap, flatMap, take } from 'rxjs/operators';
import * as _ from 'lodash';

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
	private cache = [];
	private itemHeight: number = 40;
	private numberOfItems: number = 10;


	constructor(private homeService: HomeService) { }

	/**
	 * TODO:
	 * 	Implement Infinite Scroll
	 * 	display 10 items per request
	 * 	remove logo
	 * 	change height to 100vh
	 * 	reference: https://www.c-sharpcorner.com/article/implement-infinite-scrolling-using-angular-6/
	 * 	animate css lib
	 * 
	 * 
	 * specs:
	 * 	It should load the first page by default
	 * 	when the results of the first page dont fill the page completely, it should fill page 2, and so on, until the page is full
	 * 	when the user scrolls down, it should load page 3, and so on...
	 * 	when the user resizes its window, and more space being freed for results, it should load the next page
	 * 	it should make sure that it doesnt load the same pages more than once (caching)
	 */
	ngOnInit() {
		this.homeList$ = this.getListOfHomes();
	}

	onScroll() {
		console.log('scrolled')
	}
	getListOfHomes(cache: number = 0, updatevalue: number = 10): Observable<Home[]> {
		return this.homeService.getHomes().pipe(
			map((homes: Home[]) => {
				return homes.filter(h => h.id <= updatevalue && h.id > cache)
			})
		)
	}
}
