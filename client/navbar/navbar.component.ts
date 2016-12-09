import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'navbar',
	templateUrl: 'navbar.component.html',
	styleUrls: ['navbar.component.css'],
})
export class NavbarComponent implements OnInit {

	private URLS: URLObject[] = [];

	ngOnInit(): void {
		for (var i = 0; i < 5; ++i) {
			this.URLS.push({
				id: i,
				name: 'Sample ' + i,
				url: '#'
			});
		}
	}
}

export class URLObject {
	id: number;
	name: string;
	url: string;
}

