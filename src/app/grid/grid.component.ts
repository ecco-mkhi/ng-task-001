import { ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';
import { list } from '../data';
import { Router } from '@angular/router';

@Component({
	selector: 'app-grid',
	standalone: false,

	templateUrl: './grid.component.html',
	styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {

	public activeItem: any = null;
	public content?: string;

	constructor(private router: Router,
	) { }

	ngOnInit(): void {

		const dummyVideos = list;

		const renderVideos = (videos: any[]) => {
			this.content = videos.map(video => {
				const videoImageUrl = `https://i.ytimg.com/vi/${video.url.split('/').at(-1)}/hq720.jpg`;
				return `
					<div class="video-card">
						<img src="${videoImageUrl}">
						<h3>${video.title}</h3>
						<p>${video.channel}</p>
						<button>▶️</button>
					</div>
				`;
			}).join('');
		}

		renderVideos(dummyVideos);

		setTimeout(() => {
			document.querySelectorAll('.video-card').forEach((domElement, i) => {
				domElement.addEventListener('click', () => {
					let url = ['/list'];
					let item = dummyVideos[i];
					if (this.activeItem?.id == domElement.id)
						this.activeItem = null;
					else 
						this.activeItem = dummyVideos[i];

					if (this.activeItem?.id)
						url.push(item.id);

					this.router.navigate(url);
				});
			});
		});
	}

}
