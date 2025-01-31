import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { list } from '../data';

@Component({
	selector: 'app-grid-item',
	standalone: false,

	templateUrl: './grid-item.component.html',
	styleUrl: './grid-item.component.scss'
})
export class GridItemComponent implements OnInit {

	@Input() item?: any;

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		let item;
		let params: any & { id: string } = this.route.snapshot.params;
		
		if (params?.id)
			item = list.find(x=> x.id == params.id);
		console.log('item ', item);

		this.item ??= item;
	}
}
