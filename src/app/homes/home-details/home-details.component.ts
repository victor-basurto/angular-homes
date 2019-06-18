import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HomeService } from '../../home.service';
import { Home } from '../../home';

@Component({
	selector: 'app-home-details',
	templateUrl: './home-details.component.html',
	styleUrls: ['./home-details.component.scss']
})
export class HomeDetailsComponent implements OnInit {

	id: number;
	home: Home

	constructor(private homeService: HomeService, private activatedRoute: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		// console.log(this.homeService.getHomeDetail(6));
	}

}
