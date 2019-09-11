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

	// // first of all, we want to create a stream that contains 
	// // all the scroll events that are happening in the window objec
	// private pageByScroll$ = fromEvent(window, 'scroll').pipe(
	// 	// we are only interested in the scrollY value of these events
	// 	// let's create a stream with only these values
	// 	map(() => window.scrollY),
	// 	// create a stream with the filtered values
	// 	// we only need the values from when we are scrolling outside
	// 	// our viewport
	// 	filter( current => current >= document.body.clientHeight - window.innerHeight ),
	// 	// Only when the user stops scrolling for 200 ms, we can continue
	// 	// so let's debounce this stream for 200 ms
	// 	debounceTime(200),
	// 	// filter out double values
	// 	distinct(),
	// 	// calculate the page number
	// 	map(y => Math.ceil(y + window.innerHeight) / (this.itemHeight * this.numberOfItems))
	// );
	
	// // Now, we want to create a new stream that contains 
	// // all the resize events that are happening in the window object
	// private pageByResize$ = fromEvent(window, 'resize').pipe(
	// 	// when the user stops resizing for 200 ms, then we can continue
	// 	debounceTime(200),
	// 	// calculate the page number based on the window
	// 	map(_ => Math.ceil(
	// 		(window.innerHeight + document.body.scrollTop) / (this.itemHeight * this.numberOfItems)
	// 	))
	// );
	
	// // stream we use to have an initial value (initial page to load), but it’s also something that we need to control manually
	// private pageByManual$ = new BehaviorSubject(1);

	// // merge all the page streams and create a new stream of those
	// private pageToLoad$ = merge(this.pageByManual$, this.pageByScroll$, this.pageByResize$).pipe(
	// 	// create a new stream where the double values are filtered out
	// 	distinct(),
	// 	// check if the page is already in the cache 
	// 	// (just an array property in our component)
	// 	filter(page => this.cache[page-1] === undefined)
	// );

	// private itemResults$ = this.pageToLoad$.pipe(
	// 	// based on that stream, load our asynchronosly data
	// 	// flatmap is an alias for mergemap
	// 	flatMap((size: number = 10, prev: number = 1) => {
			
	// 	})
	// )
	

}
