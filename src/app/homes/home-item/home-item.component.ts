import { Component, OnInit, Input } from '@angular/core';
import { Home } from '../../home';

@Component({
	selector: 'app-home-item',
	templateUrl: './home-item.component.html',
	styleUrls: ['./home-item.component.scss']
})
export class HomeItemComponent implements OnInit {

	@Input() home: Home;
	@Input() index: number;

	constructor() { }

	ngOnInit() {
	}

}
