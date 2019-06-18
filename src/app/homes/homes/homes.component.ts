import { Component, OnInit, OnDestroy } from '@angular/core';

import { HomeService } from '../../home.service';
import { Home } from '../../home';
import { Observable, Subscription, of } from 'rxjs';

@Component({
	selector: 'app-homes',
	templateUrl: './homes.component.html',
	styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit, OnDestroy {

	homeList$: Observable<Home[]>;
	// homeList: Home[] = [];

	constructor(private homeService: HomeService) { }

	ngOnInit() {
		this.homeService.getHomes().pipe(item => {
			return this.homeList$ = item;
		})
		
	}

	ngOnDestroy() {
		// this.homeSub.unsubscribe();
	}

}
