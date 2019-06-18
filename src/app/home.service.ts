import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import homeData from '../assets/homes.json';
import { Home } from './home';
import { Observable, of } from 'rxjs';
import { filter, map, find } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class HomeService {

	constructor() { 
	}

	public getHomes(): Observable<Home[]> {
		return of(homeData).pipe(
			(item: Observable<Home[]>): Observable<Home[]> => {
				return item;
			}
		)
	}

	
}
