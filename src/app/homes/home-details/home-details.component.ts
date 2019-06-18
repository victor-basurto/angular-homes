import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, } from '@angular/router';
import { Subscription } from 'rxjs';

import { HomeService } from '../../home.service';
import { Home } from '../../home';

@Component({
	selector: 'app-home-details',
	templateUrl: './home-details.component.html',
	styleUrls: ['./home-details.component.scss']
})
export class HomeDetailsComponent implements OnInit, OnDestroy {

	homeName: string;
	homeArr: Home[];
	routeSub: Subscription;

	constructor(private homeService: HomeService, private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.routeSub = this.activatedRoute.params.subscribe(
			(params: Params) => {
				this.homeName = params[ 'id' ];
				this.homeService.getHomeDetail( this.homeName ).subscribe(
					(data: Home[]): Home[] => {
						return this.homeArr = data;
					}
				);
			}
		);		
	}
	
	ngOnDestroy() {
		this.routeSub.unsubscribe();
	}

}
