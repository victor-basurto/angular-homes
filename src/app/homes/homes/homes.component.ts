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

	constructor(private homeService: HomeService) { }

	ngOnInit() {
		this.homeService.getHomes().pipe(
			(item): Observable<Home[]> => {
				return this.homeList$ = item;
			}
		);
	}

}
